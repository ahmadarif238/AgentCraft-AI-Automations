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
 * Rayo buttons: full pills. The primary action is a solid accent fill with
 * dark text and a soft accent-tinted shadow; everything else is a bordered
 * card surface that lights its edge on hover.
 *
 * Dark text on the fill is deliberate in both themes. White on the light
 * theme's lavender measures 2.87:1 and fails; dark reaches 6.31:1.
 *
 * `gold` remains an alias for `default` so existing call sites keep working.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95"

    const primary =
      "bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:bg-primary-hover"

    const variants = {
      default: primary,
      gold: primary,
      outline:
        "border border-border bg-card text-foreground font-medium hover:border-primary",
      secondary:
        "border border-border bg-canvas text-foreground font-medium hover:border-primary",
      ghost: "text-muted-foreground font-medium hover:text-primary-strong",
      link: "text-primary-strong font-medium underline-offset-4 hover:underline",
    }

    const sizes = {
      default: "h-11 px-6 text-sm",
      sm: "h-9 px-5 text-xs",
      lg: "h-14 px-8 text-sm",
      icon: "h-11 w-11",
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
