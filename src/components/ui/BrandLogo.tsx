import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * Assets live under /images/brand/ rather than /images/. The image optimizer
 * caches by source URL, so recolouring a file in place would keep serving the
 * previous version until its TTL expired; moving the path guarantees fresh
 * delivery.
 *
 * The source artwork is transparent, so it needs no blend modes, cropping or
 * scaling hacks to sit on any surface. Two variants exist because the wordmark
 * is near-black in one and cream in the other; the cream one disappears on the
 * light theme and vice versa.
 *
 * Both are rendered and swapped with CSS rather than picked in JavaScript, so
 * the correct one is right on first paint and there is nothing to hydrate.
 */
const INTRINSIC = { width: 700, height: 213 } as const;

export function BrandLogo({
  className = "h-9 w-auto md:h-10",
  priority = false,
}: {
  /** Retained for call-site compatibility; the theme now decides the variant. */
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
      {/* Cream wordmark, for the dark theme. Carries the accessible name. */}
      <Image
        {...shared}
        alt={siteConfig.name}
        src="/images/brand/logo-light.png"
        className={`${className} [.light_&]:hidden`}
      />
      {/* Dark wordmark, for the light theme. Decorative, to avoid a duplicate name. */}
      <Image
        {...shared}
        alt=""
        aria-hidden="true"
        src="/images/brand/logo.png"
        className={`${className} hidden [.light_&]:block`}
      />
    </>
  );
}
