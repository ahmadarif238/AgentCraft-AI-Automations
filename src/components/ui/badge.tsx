import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "gold"
  /** Renders a pulsing accent square, the system's "live" tell. */
  live?: boolean
}

/**
 * Micro-labels: monospaced, uppercase, letter-spaced, in a thin rectangular
 * frame. They read as instrument annotations rather than marketing chips.
 *
 * `gold` is kept as an alias for the accent variant so existing call sites
 * continue to work.
 */
function Badge({ className, variant = "default", live = false, children, ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 label-mono font-semibold uppercase transition-colors"

  const accent = "border-border bg-foreground/[.04] text-primary-strong"

  const variants = {
    default: accent,
    gold: accent,
    secondary: "border-border bg-foreground/[.04] text-muted-foreground",
    destructive: "border-destructive/40 bg-destructive/10 text-destructive",
    outline: "border-border bg-transparent text-muted-foreground",
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {live && (
        <span aria-hidden="true" className="w-1.5 h-1.5 bg-primary animate-pulse" />
      )}
      {children}
    </div>
  )
}

export { Badge }
