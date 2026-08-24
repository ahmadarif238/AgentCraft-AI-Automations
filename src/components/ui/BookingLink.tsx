import Link from "next/link";
import { bookingUrl, hasLiveScheduler } from "@/config/site";

/**
 * Anchor for every "book a call" CTA.
 *
 * The destination is config-driven and can be either an in-app route (the
 * contact form) or an external scheduler, so this picks the right element:
 * next/link for internal navigation, a plain anchor opening in a new tab when
 * the booking URL points off-site. Without this, switching the scheduler on
 * would silently navigate people away from the site.
 */
export function BookingLink({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (hasLiveScheduler) {
    return (
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={bookingUrl} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
