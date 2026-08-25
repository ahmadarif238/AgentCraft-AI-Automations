"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * The hero's 3D workflow graph.
 *
 * The shape is the product: a central agent surrounded by the systems it talks
 * to, with data visibly moving along the connections. It is deliberately slow
 * and weighted rather than spinning — the rig drifts and leans toward the
 * pointer, so it reads as a considered object rather than a demo.
 *
 * Loaded only from HeroVisual, which decides whether 3D should run at all.
 */

const ACCENT = "#ADFF2F";
const ACCENT_SOFT = "#C9FF6B";
// Light enough that the key light reads across the face; any darker and the
// tiles look like holes punched in the page rather than objects on it.
const PANEL = "#1F242D";

type NodeSpec = {
  label: string;
  position: [number, number, number];
  /** Fixed tilt, so the tiles read as objects in space rather than flat cards. */
  rotation: [number, number, number];
  scale: number;
};

/** Placed by hand so the silhouette stays balanced and nothing overlaps. */
const NODES: NodeSpec[] = [
  { label: "AGENTS", position: [2.55, 1.35, 0.15], rotation: [0.12, -0.5, -0.05], scale: 1.0 },
  { label: "WORKFLOWS", position: [-2.75, 1.0, -0.45], rotation: [0.1, 0.55, 0.06], scale: 1.0 },
  { label: "CRM", position: [-2.35, -1.45, 0.4], rotation: [-0.14, 0.48, -0.04], scale: 0.88 },
  { label: "REPORTS", position: [2.35, -1.6, -0.3], rotation: [-0.12, -0.45, 0.05], scale: 0.92 },
  { label: "DOCUMENTS", position: [0.3, 2.35, -0.85], rotation: [0.3, -0.12, 0.02], scale: 0.85 },
  { label: "APIS", position: [-0.35, -2.4, 0.55], rotation: [-0.28, 0.1, -0.03], scale: 0.85 },
];

/**
 * Draws a label into a canvas for use as a texture. Doing it at runtime keeps
 * six more image requests off the wire and lets the type match the site's
 * letter-spaced uppercase treatment.
 */
function useLabelTexture(label: string) {
  return useMemo(() => {
    const w = 512;
    const h = 256;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.clearRect(0, 0, w, h);
    const size = label.length > 7 ? 52 : 64;
    ctx.font = `700 ${size}px "Segoe UI", Inter, system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = ACCENT_SOFT;

    // Manual letter-spacing: ctx.letterSpacing is not universally supported.
    const spacing = size * 0.16;
    const chars = [...label];
    const total =
      chars.reduce((sum, c) => sum + ctx.measureText(c).width, 0) + spacing * (chars.length - 1);
    let x = w / 2 - total / 2;
    for (const c of chars) {
      const cw = ctx.measureText(c).width;
      ctx.fillText(c, x + cw / 2, h / 2);
      x += cw + spacing;
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 4;
    texture.needsUpdate = true;
    return texture;
  }, [label]);
}

function Panel({ label, position, rotation, scale, index }: NodeSpec & { index: number }) {
  const ref = useRef<THREE.Group>(null);
  const texture = useLabelTexture(label);

  const W = 1.35;
  const H = 0.8;
  const D = 0.14;

  useFrame((state) => {
    if (!ref.current) return;
    // Each tile breathes on its own offset so the rig never looks synchronised.
    const t = state.clock.elapsedTime + index * 1.7;
    ref.current.position.y = position[1] + Math.sin(t * 0.45) * 0.11;
    ref.current.rotation.y = rotation[1] + Math.sin(t * 0.28) * 0.12;
  });

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      {/* Body: brushed dark metal that actually catches the key light. */}
      <mesh castShadow>
        <boxGeometry args={[W, H, D]} />
        <meshStandardMaterial color={PANEL} metalness={0.85} roughness={0.32} />
      </mesh>

      {/* Gold bevel, proud of the body on all four sides. */}
      <mesh position={[0, 0, -0.012]}>
        <boxGeometry args={[W + 0.075, H + 0.075, D - 0.02]} />
        <meshStandardMaterial
          color={ACCENT}
          metalness={1}
          roughness={0.22}
          emissive={ACCENT}
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* Label, floated just proud of the face. */}
      {texture && (
        <mesh position={[0, 0, D / 2 + 0.004]}>
          <planeGeometry args={[W * 0.84, H * 0.84]} />
          <meshBasicMaterial map={texture} transparent toneMapped={false} />
        </mesh>
      )}
    </group>
  );
}

/** A connection from the core to a system, with data travelling along it. */
function Link({ to, index }: { to: [number, number, number]; index: number }) {
  const pulse = useRef<THREE.Mesh>(null);
  const target = useMemo(() => new THREE.Vector3(...to), [to]);

  const { position, quaternion, length } = useMemo(() => {
    const dir = target.clone();
    const len = dir.length();
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize(),
    );
    return { position: dir.clone().multiplyScalar(0.5), quaternion: q, length: len };
  }, [target]);

  useFrame((state) => {
    if (!pulse.current) return;
    // Travel out from the core, pause, repeat. Staggered per link.
    const cycle = 3.4;
    const t = ((state.clock.elapsedTime + index * 0.55) % cycle) / cycle;
    const eased = Math.min(t / 0.7, 1);
    pulse.current.position.copy(target.clone().multiplyScalar(eased));
    const mat = pulse.current.material as THREE.MeshBasicMaterial;
    // Fade in and out so nothing pops at either end.
    mat.opacity = t < 0.7 ? Math.sin(eased * Math.PI) * 0.95 : 0;
  });

  return (
    <group>
      <mesh position={position} quaternion={quaternion}>
        <cylinderGeometry args={[0.014, 0.014, length, 6]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.34} />
      </mesh>
      <mesh ref={pulse}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshBasicMaterial color={ACCENT_SOFT} transparent opacity={0} />
      </mesh>
    </group>
  );
}

/** The core: a dark monolith carrying the brand mark. */
function Core() {
  const texture = useLoader(THREE.TextureLoader, "/images/mark-light.png");
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.09;
  });

  return (
    <group ref={ref}>
      <mesh castShadow>
        <boxGeometry args={[1.7, 1.7, 0.5]} />
        <meshStandardMaterial color={PANEL} metalness={0.9} roughness={0.26} />
      </mesh>
      <mesh position={[0, 0, -0.015]}>
        <boxGeometry args={[1.79, 1.79, 0.46]} />
        <meshStandardMaterial
          color={ACCENT}
          metalness={1}
          roughness={0.18}
          emissive={ACCENT}
          emissiveIntensity={0.26}
        />
      </mesh>
      <mesh position={[0, 0, 0.253]}>
        <planeGeometry args={[1.02, 1.02]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
    </group>
  );
}

/** Everything above, leaning toward the pointer. */
function Rig() {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    const px = (state.pointer.x * viewport.width) / 14;
    const py = (state.pointer.y * viewport.height) / 14;
    // Damped, so the object has weight and never snaps to the cursor.
    const damp = 1 - Math.pow(0.008, delta);
    group.current.rotation.y += (px * 0.15 - group.current.rotation.y) * damp;
    group.current.rotation.x += (-py * 0.15 - group.current.rotation.x) * damp;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.15) * 0.025;
  });

  return (
    <group ref={group}>
      <Core />
      {NODES.map((n, i) => (
        <Link key={`l-${i}`} to={n.position} index={i} />
      ))}
      {NODES.map((n, i) => (
        <Panel key={`p-${i}`} {...n} index={i} />
      ))}
    </group>
  );
}

export default function HeroScene() {
  const [ready, setReady] = useState(false);

  return (
    <Canvas
      // Clamped DPR: 3x retina costs a lot here for no visible gain.
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 9], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={() => setReady(true)}
      style={{ opacity: ready ? 1 : 0, transition: "opacity 900ms ease-out" }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 7]} intensity={2.4} color="#EAF7DA" />
      <directionalLight position={[-6, 2, 3]} intensity={1.1} color={ACCENT_SOFT} />
      <pointLight position={[-4, -3, 5]} intensity={45} distance={16} color={ACCENT} />
      <Rig />
    </Canvas>
  );
}
