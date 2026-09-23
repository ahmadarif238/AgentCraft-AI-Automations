import * as THREE from "three";

/**
 * The site's chrome objects, written against plain three.js.
 *
 * One module draws both the live hero and the static renders under
 * public/images/scene/, so the fallback a phone sees and the scene a desktop
 * runs are the same picture.
 *
 *  core   a faceted chrome core in a wireframe shell, circled by flat chrome
 *         ribbons that carry small nodes around it: an agent and the work
 *         moving through it.
 *  stack  four hexagonal chrome layers with glass between them, one per stage
 *         of how a system gets built.
 *  wire   the stack again as a line drawing, for dark panels.
 */

export type Variant = "core" | "stack" | "wire";

export type ChromeScene = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  /** Advance to time t (seconds). px and py are the pointer, each in -1..1. */
  update: (t: number, px?: number, py?: number) => void;
  dispose: () => void;
};

const ELECTRIC = new THREE.Color("#2B6BFF");

/**
 * A dark studio with bright softbox strips and two cobalt panels, baked into an
 * environment map. Chrome shows nothing but what it reflects, so this room is
 * the whole look: black and white bands for the metal, blue for the edge.
 */
function environment(renderer: THREE.WebGLRenderer) {
  const room = new THREE.Scene();
  room.add(new THREE.Mesh(
    new THREE.SphereGeometry(30, 32, 16),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(0.2, 0.25, 0.36), side: THREE.BackSide }),
  ));
  const light = (rgb: [number, number, number], pos: [number, number, number], size: [number, number]) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(...size),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(...rgb), side: THREE.DoubleSide }),
    );
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    room.add(m);
  };
  light([5, 5, 5.4], [0, 9, 3], [16, 4]);          // overhead softbox
  light([4, 4.2, 4.8], [8, 1, 6], [3, 14]);        // right softbox
  light([2.6, 2.7, 3], [-4, 0, 9], [4, 10]);       // front fill
  light([0.01, 0.012, 0.02], [0, 1, -10], [30, 3]); // dark band behind, for the metal's contrast line
  light([0.01, 0.012, 0.02], [-8, -3, 5], [2, 14]);
  light([0.3, 0.8, 5], [-10, 3, -2], [9, 12]);     // cobalt panel
  light([0.15, 0.4, 2.6], [9, -4, -5], [10, 6]);   // deep blue rim
  light([1.4, 1.5, 1.8], [0, -9, 0], [18, 18]);    // floor bounce
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(room, 0.02).texture;
  pmrem.dispose();
  return tex;
}

function chrome(color = "#E6ECF5", roughness = 0.1) {
  return new THREE.MeshStandardMaterial({ color, metalness: 1, roughness, flatShading: true });
}

/**
 * A flat band following a closed curve. Its width runs along the loop's own
 * axis, like the wall of a ring; Frenet frames would twist and flip it.
 */
function ribbon(curve: THREE.Curve<THREE.Vector3>, axis: THREE.Vector3, width: number, segments = 360) {
  const pos: number[] = [];
  const b = axis.clone().normalize();
  const idx: number[] = [];
  for (let i = 0; i <= segments; i++) {
    const p = curve.getPointAt((i % segments) / segments);
    pos.push(p.x + b.x * width, p.y + b.y * width, p.z + b.z * width);
    pos.push(p.x - b.x * width, p.y - b.y * width, p.z - b.z * width);
    if (i < segments) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** A tilted, slightly wavering loop, so no two ribbons read as the same ring. */
function loop(rx: number, ry: number, tilt: THREE.Euler, wobble: number, phase: number) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < 64; i++) {
    const a = (i / 64) * Math.PI * 2;
    const v = new THREE.Vector3(Math.cos(a) * rx, Math.sin(a) * ry, Math.sin(a * 3 + phase) * wobble);
    pts.push(v.applyEuler(tilt));
  }
  return new THREE.CatmullRomCurve3(pts, true, "centripetal");
}

function buildCore(root: THREE.Group) {
  const core = new THREE.Mesh(new THREE.OctahedronGeometry(1.35, 0), chrome("#EEF2F8", 0.06));
  core.scale.set(1, 1.35, 1);
  root.add(core);

  // A second, smaller facet set inside the first, offset so the silhouette breaks.
  const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(0.62, 0), chrome("#B9C6DC", 0.18));
  inner.position.set(0.55, -0.35, 0.7);
  root.add(inner);

  const shell = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.05, 1)),
    new THREE.LineBasicMaterial({ color: "#C9D8F2", transparent: true, opacity: 0.18 }),
  );
  root.add(shell);

  const ribbonMat = new THREE.MeshStandardMaterial({
    color: "#DCE4F0", metalness: 1, roughness: 0.16, side: THREE.DoubleSide,
  });
  const tilts = [new THREE.Euler(1.2, 0.2, 0.45), new THREE.Euler(0.35, 1.1, -0.6), new THREE.Euler(-0.9, -0.3, 0.15)];
  const curves = [
    loop(3.1, 1.25, tilts[0], 0.18, 0),
    loop(2.7, 1.6, tilts[1], 0.22, 1.7),
    loop(3.5, 0.95, tilts[2], 0.15, 3.1),
  ];
  curves.forEach((c, i) => {
    const axis = new THREE.Vector3(0, 0, 1).applyEuler(tilts[i]);
    root.add(new THREE.Mesh(ribbon(c, axis, [0.16, 0.12, 0.09][i]), ribbonMat));
  });

  // Nodes travelling the ribbons. One is electric blue: the site's single accent.
  const nodeGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const accent = new THREE.MeshStandardMaterial({ color: ELECTRIC, emissive: ELECTRIC, emissiveIntensity: 0.7, roughness: 0.4 });
  const nodes = [0, 0.33, 0.66, 0.15, 0.5, 0.85, 0.4].map((offset, i) => {
    const m = new THREE.Mesh(nodeGeo, i === 1 ? accent : chrome("#F2F5FA", 0.08));
    root.add(m);
    return { m, curve: curves[i % 3], offset, speed: [0.018, 0.013, 0.01][i % 3] };
  });

  return (t: number) => {
    core.rotation.y = t * 0.22;
    inner.rotation.set(t * 0.3, t * 0.4, 0);
    shell.rotation.y = -t * 0.05;
    for (const n of nodes) {
      n.curve.getPointAt((n.offset + t * n.speed) % 1, n.m.position);
      n.m.rotation.set(t * 0.8 + n.offset * 9, t * 0.6, 0);
    }
  };
}

function buildStack(root: THREE.Group, wire: boolean) {
  const lineMat = new THREE.LineBasicMaterial({ color: "#DDE6F5", transparent: true, opacity: 0.55 });
  const add = (geo: THREE.BufferGeometry, mat: THREE.Material, y: number, rotY: number) => {
    const obj = wire ? new THREE.LineSegments(new THREE.EdgesGeometry(geo, 20), lineMat) : new THREE.Mesh(geo, mat);
    obj.position.y = y;
    obj.rotation.y = rotY;
    root.add(obj);
    return obj;
  };
  const glass = new THREE.MeshPhysicalMaterial({
    color: "#BFD3FF", metalness: 0, roughness: 0.08, transmission: 1, thickness: 0.6,
    ior: 1.35, transparent: true, opacity: 0.55,
  });
  const layers: THREE.Object3D[] = [];
  const count = 4;
  for (let i = 0; i < count; i++) {
    const y = 1.95 - i * 1.3;
    const r = 1.55 - i * 0.04;
    layers.push(add(new THREE.CylinderGeometry(r, r, 0.34, 6), chrome(i % 2 ? "#D5DDEA" : "#EEF2F8", 0.08), y, i * 0.18));
    // Machined grooves under each slab.
    for (let g = 0; g < 3; g++) {
      add(new THREE.CylinderGeometry(r * 0.86, r * 0.86, 0.05, 6), chrome("#9FB0C9", 0.25), y - 0.27 - g * 0.1, i * 0.18);
    }
    if (i < count - 1) add(new THREE.CylinderGeometry(r * 0.72, r * 0.72, 0.6, 6), glass, y - 0.72, i * 0.18);
  }
  // The core's facet form floats above the stack, tying the two objects together;
  // a plinth closes the base.
  const crown = add(new THREE.OctahedronGeometry(0.5, 0), chrome("#F4F6FA", 0.05), 2.95, 0);
  crown.scale.set(1, 1.4, 1);
  add(new THREE.CylinderGeometry(1.7, 1.85, 0.5, 6), chrome("#C4CFE0", 0.14), -2.35, 0.1);

  const accent = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.16, 0.16),
    new THREE.MeshStandardMaterial({ color: ELECTRIC, emissive: ELECTRIC, emissiveIntensity: 0.7 }),
  );
  root.add(accent);

  return (t: number) => {
    layers.forEach((l, i) => (l.rotation.y = i * 0.18 + Math.sin(t * 0.4 + i) * 0.08));
    crown.rotation.y = t * 0.5;
    crown.position.y = 2.95 + Math.sin(t * 0.8) * 0.06;
    accent.position.set(Math.cos(t * 0.6) * 0.4, 0.62 + Math.sin(t * 0.9) * 0.1, Math.sin(t * 0.6) * 0.4);
  };
}

export function buildChromeScene(renderer: THREE.WebGLRenderer, variant: Variant, aspect: number): ChromeScene {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const env = environment(renderer);
  scene.environment = env;

  const key = new THREE.DirectionalLight("#FFFFFF", 1.2);
  key.position.set(3, 5, 4);
  scene.add(key);

  const camera = new THREE.PerspectiveCamera(30, aspect, 0.1, 100);
  const root = new THREE.Group();
  scene.add(root);

  let step: (t: number) => void;
  if (variant === "core") {
    camera.position.set(0, 0.4, 13.5);
    step = buildCore(root);
    root.rotation.set(0.12, -0.35, 0);
  } else {
    camera.position.set(0, 2.4, 14.5);
    camera.lookAt(0, 0.35, 0);
    step = buildStack(root, variant === "wire");
    root.rotation.set(0.05, 0.4, 0);
  }

  const base = root.rotation.clone();
  return {
    scene,
    camera,
    update(t, px = 0, py = 0) {
      step(t);
      // Lean toward the pointer, eased so it follows rather than snaps.
      root.rotation.x += (base.x + py * 0.12 - root.rotation.x) * 0.05;
      root.rotation.y += (base.y + px * 0.2 + (variant === "core" ? 0 : t * 0.1) - root.rotation.y) * 0.05;
    },
    dispose() {
      env.dispose();
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat?.dispose();
      });
    },
  };
}
