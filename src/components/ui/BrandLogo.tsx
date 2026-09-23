import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * Assets live under /images/logo/. The image optimizer caches by source URL,
 * so a recoloured file needs a new path to be served fresh; each recolour so
 * far has moved it.
 *
 * Two variants: a light wordmark for the dark tones and an ink one for the
 * light tones. Both are rendered and swapped with CSS on the nearest
 * `.tone-ice` ancestor, so the right one is there on first paint with nothing
 * to hydrate.
 */
const INTRINSIC = { width: 700, height: 213 } as const;

export function BrandLogo({
  className = "h-9 w-auto md:h-10",
  priority = false,
}: {
  /** Retained for call-site compatibility; the surrounding tone decides the variant. */
  variant?: "default" | "dark";
  className?: string;
  priority?: boolean;
}) {
  const shared = {
    width: INTRINSIC.width,
    height: INTRINSIC.height,
    priority,
    sizes: "(max-width: 768px) 160px, 200px",
  };

  return (
    <>
      {/* Light wordmark, for the dark tones. Carries the accessible name. */}
      <Image
        {...shared}
        alt={siteConfig.name}
        src="/images/logo/logo-light.png"
        className={`${className} [.tone-ice_&]:hidden`}
      />
      {/* Ink wordmark, for the light tones. Decorative, to avoid a duplicate name. */}
      <Image
        {...shared}
        alt=""
        aria-hidden="true"
        src="/images/logo/logo.png"
        className={`${className} hidden [.tone-ice_&]:block`}
      />
    </>
  );
}
