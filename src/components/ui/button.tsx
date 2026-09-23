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
 * Engineered buttons: nearly square corners, uppercase mono labels, flat
 * fills. The solid variant reads the --btn tokens, so it is white on the dark
 * tones and ink on the light ones without any call site knowing which.
 *
 * For the page's main action, prefer <CtaLink>, which adds the blue arrow cap.
 * `gold` remains an alias for `default` so existing call sites keep working.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-mono text-[11.5px] font-semibold uppercase tracking-[0.12em] ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const solid = "bg-btn text-btn-foreground hover:opacity-90"

    const variants = {
      default: solid,
      gold: solid,
      outline:
        "border border-foreground/25 bg-transparent text-foreground hover:border-foreground/60 hover:bg-foreground/5",
      secondary:
        "bg-foreground/[.08] text-foreground hover:bg-foreground/[.14]",
      ghost: "text-muted-foreground hover:text-foreground",
      link: "text-primary-strong underline-offset-4 hover:underline",
    }

    const sizes = {
      default: "h-10 px-5",
      sm: "h-8 px-3.5",
      lg: "h-12 px-6",
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
