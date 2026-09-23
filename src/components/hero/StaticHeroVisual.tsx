import Image from "next/image";

/**
 * The no-WebGL hero visual: a still of the same chrome core the live scene
 * draws, rendered from chromeScene.ts. Shown on phones, for reduced-motion
 * visitors, on underpowered devices, and while the 3D bundle loads.
 */
export function StaticHeroVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Image
        src="/images/scene/core.webp"
        alt=""
        aria-hidden="true"
        width={1287}
        height={867}
        priority
        sizes="(max-width: 1024px) 92vw, 50vw"
        className="w-full h-auto object-contain animate-float"
      />
    </div>
  );
}
