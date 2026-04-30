import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#00C9A7] text-white hover:bg-[#00A88A]",
        destructive: "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white",
        outline: "border border-gray-200 bg-white text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]",
        secondary: "bg-gray-100 text-gray-600 hover:bg-gray-200",
        ghost: "hover:bg-gray-100 hover:text-gray-700",
        link: "text-[#00C9A7] underline-offset-4 hover:underline",
        yellow: "bg-amber-50 text-amber-500 hover:bg-amber-500 hover:text-white",
        blue: "bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white",
        purple: "bg-purple-50 text-purple-500 hover:bg-purple-500 hover:text-white",
        green: "bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white",
        orange: "bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-7 rounded-md px-2.5 text-xs",
        lg: "h-11 rounded-lg px-6 text-base",
        icon: "h-9 w-9",
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
