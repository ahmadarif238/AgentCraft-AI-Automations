"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { StaticHeroVisual } from "@/components/hero/StaticHeroVisual";

/**
 * Decides whether the WebGL hero should run, and never blocks the page on it.
 *
 * The 3D bundle is heavy, so it is code-split and requested only after the
 * page has painted and only when the device and the visitor's preferences say
 * it is welcome. Everything that matters for SEO and for first paint — the
 * headline, the copy, the CTAs — is server-rendered elsewhere and never waits
 * on this component.
 */

const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
  loading: () => <StaticHeroVisual />,
});

function prefersLessMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function canRunWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ??
        canvas.getContext("webgl") ??
        canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

/** Rough proxy for "this device will struggle": few cores or a small screen. */
function looksUnderpowered() {
  const cores = navigator.hardwareConcurrency;
  return (typeof cores === "number" && cores > 0 && cores <= 4) || window.innerWidth < 1024;
}

export function HeroVisual() {
  const [use3d, setUse3d] = useState(false);

  useEffect(() => {
    if (prefersLessMotion() || !canRunWebGL() || looksUnderpowered()) return;

    // Wait for the browser to go idle so the scene never competes with LCP.
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => setUse3d(true), { timeout: 2500 })
      : window.setTimeout(() => setUse3d(true), 1200);

    return () => {
      if (window.cancelIdleCallback && typeof idle === "number") {
        window.cancelIdleCallback(idle);
      } else {
        clearTimeout(idle as number);
      }
    };
  }, []);

  return (
    <div className="relative h-[400px] lg:h-[600px] hidden lg:block">
      {use3d ? <HeroScene /> : <StaticHeroVisual />}
    </div>
  );
}
