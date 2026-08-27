import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * Assets live under /images/brand/ rather than /images/. The image optimizer
 * caches by source URL, so recolouring a file in place would keep serving the
 * previous version until its TTL expired; moving the path guarantees fresh
 * delivery.
 *
 * The source artwork is 1137x346 with a transparent background, so it needs no
 * blend modes, cropping or scaling hacks to sit correctly on any surface.
 * `dark` swaps in the variant whose wordmark is cream instead of near-black,
 * for use on the dark footer.
 */
const INTRINSIC = { width: 700, height: 213 } as const;

export function BrandLogo({
  variant = "default",
  className = "h-9 w-auto md:h-10",
  priority = false,
}: {
  variant?: "default" | "dark";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "dark" ? "/images/brand/logo-light.png" : "/images/brand/logo.png"}
      alt={siteConfig.name}
      width={INTRINSIC.width}
      height={INTRINSIC.height}
      priority={priority}
      sizes="(max-width: 768px) 160px, 200px"
      className={className}
    />
  );
}
