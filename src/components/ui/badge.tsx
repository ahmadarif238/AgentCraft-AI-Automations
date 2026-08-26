import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "gold"
  /** Renders a pulsing accent dot, the system's "live" tell. */
  live?: boolean
}

/**
 * Halogen Kit micro-labels: monospaced, uppercase, letter-spaced, sitting in a
 * raised pill. They read as telemetry rather than marketing, which is what
 * gives the system its instrument-panel feel.
 *
 * `gold` is kept as an alias for the accent variant so existing call sites
 * continue to work.
 */
function Badge({ className, variant = "default", live = false, children, ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 label-mono uppercase transition-colors"

  const accent = "border-border bg-canvas text-primary"

  const variants = {
    default: accent,
    gold: accent,
    secondary: "border-border bg-card text-muted-foreground",
    destructive: "border-destructive/40 bg-destructive/10 text-destructive",
    outline: "border-border bg-transparent text-muted-foreground",
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {live && (
        <span
          aria-hidden="true"
          className="w-1.5 h-1.5 rounded-full bg-primary glow-sm animate-pulse"
        />
      )}
      {children}
    </div>
  )
}

export { Badge }
