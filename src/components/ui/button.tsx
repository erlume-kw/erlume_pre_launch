import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-normal ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-primary/50",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-destructive/50",
        outline:
          "border border-border bg-background text-foreground shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] hover:bg-accent hover:text-accent-foreground focus-visible:ring-primary/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-secondary/50",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-primary/50",
        link: "text-primary underline-offset-4 hover:underline hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-6 py-3 rounded-lg text-base",
        sm: "h-9 px-4 py-2 rounded-md text-sm",
        lg: "h-12 px-8 py-4 rounded-xl text-lg",
        xl: "h-14 px-10 py-5 rounded-2xl text-xl",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
