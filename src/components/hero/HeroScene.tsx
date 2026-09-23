"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { buildChromeScene, type Variant } from "@/components/hero/chromeScene";

/**
 * Live WebGL rendering of one of the chrome objects.
 *
 * The object itself is defined in chromeScene.ts, which also produced the
 * static renders, so swapping between this and the fallback image is seamless.
 * The loop pauses whenever the canvas is off screen or the tab is hidden, and
 * the pixel ratio is capped, so an idle hero costs nothing.
 *
 * Loaded only from HeroVisual, which decides whether 3D should run at all.
 */
export default function HeroScene({ variant = "core" }: { variant?: Variant }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    const { width, height } = el.getBoundingClientRect();
    renderer.setSize(width, height);
    renderer.domElement.style.display = "block";
    el.appendChild(renderer.domElement);

    const chrome = buildChromeScene(renderer, variant, width / height);
    const pointer = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const resize = new ResizeObserver(([entry]) => {
      const { width: w, height: h } = entry.contentRect;
      if (!w || !h) return;
      renderer.setSize(w, h);
      chrome.camera.aspect = w / h;
      chrome.camera.updateProjectionMatrix();
    });
    resize.observe(el);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(el);

    // Starts a few seconds in, matching the pose of the static render.
    const clock = new THREE.Clock();
    let offset = 4;
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const dt = clock.getDelta();
      if (!visible || document.hidden) return;
      offset += Math.min(dt, 0.05);
      chrome.update(offset, pointer.x, pointer.y);
      renderer.render(chrome.scene, chrome.camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      resize.disconnect();
      io.disconnect();
      chrome.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [variant]);

  return <div ref={host} aria-hidden="true" className="absolute inset-0 animate-in fade-in duration-1000" />;
}
