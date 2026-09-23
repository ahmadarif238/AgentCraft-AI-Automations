import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The system's signature action: a solid label block with an electric blue
 * arrow cap bolted to its right edge. Only the label block changes with the
 * section tone; the cap is always the accent.
 *
 * Presentational only, so it can sit inside a Link, an anchor or BookingLink:
 *
 *   <BookingLink className={ctaClass()}><CtaContent>Book a call</CtaContent></BookingLink>
 */
export function ctaClass(className?: string) {
  return cn(
    "group inline-flex items-stretch h-11 font-mono text-[11.5px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
    className,
  );
}

export function CtaContent({
  children,
  tone = "solid",
  icon,
}: {
  children: React.ReactNode;
  /** `solid` carries the arrow cap; `ghost` is the quieter companion action. */
  tone?: "solid" | "ghost";
  icon?: React.ReactNode;
}) {
  if (tone === "ghost") {
    return (
      <span className="flex items-center gap-2 px-5 rounded-sm bg-foreground/[.08] text-foreground transition-colors group-hover:bg-foreground/[.15]">
        {icon}
        {children}
      </span>
    );
  }
  return (
    <>
      <span className="flex items-center gap-2 px-5 rounded-l-sm bg-btn text-btn-foreground">
        {icon}
        {children}
      </span>
      <span
        aria-hidden="true"
        className="flex w-11 items-center justify-center rounded-r-sm bg-primary text-white transition-colors group-hover:bg-primary-hover"
      >
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </>
  );
}
