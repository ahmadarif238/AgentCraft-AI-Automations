import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "link" | "secondary" | "gold"
  size?: "default" | "sm" | "lg" | "icon"
}

/**
 * Halogen Kit buttons: full pills, one accent, and depth expressed as a lit
 * outline rather than a drop shadow. The primary action inverts on hover —
 * accent outline over dark, filling with accent and flipping the label dark —
 * which is the system's signature "morph to confirm" gesture.
 *
 * `gold` is kept as an alias for `default` so the many existing call sites do
 * not all need editing; both render the primary accent treatment.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold tracking-wide ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const primary =
      "border border-primary bg-canvas text-primary shadow-[0_0_20px_rgba(173,255,47,0.2)] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_rgba(173,255,47,0.45)]"

    const variants = {
      default: primary,
      gold: primary,
      outline:
        "border border-border bg-card/80 text-foreground hover:bg-card hover:border-muted-foreground",
      secondary:
        "border border-border bg-canvas text-foreground hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(173,255,47,0.25)]",
      ghost: "text-muted-foreground hover:text-primary",
      link: "text-primary underline-offset-4 hover:underline",
    }

    const sizes = {
      default: "h-10 px-5 text-sm",
      sm: "h-9 px-4 text-xs",
      lg: "h-12 px-6 text-sm",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
