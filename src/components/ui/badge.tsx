import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#E6FAF5] text-[#00A88A]",
        destructive: "bg-red-50 text-red-500",
        outline: "border border-gray-200 text-gray-600",
        secondary: "bg-gray-100 text-gray-600",
        yellow: "bg-amber-50 text-amber-500",
        blue: "bg-blue-50 text-blue-500",
        purple: "bg-purple-50 text-purple-500",
        orange: "bg-orange-50 text-orange-500",
        live: "bg-[#E6FAF5] text-[#00A88A]",
        upcoming: "bg-blue-50 text-blue-500",
        ended: "bg-gray-100 text-gray-500",
        reviewing: "bg-amber-50 text-amber-500",
        approved: "bg-[#E6FAF5] text-[#00A88A]",
        rejected: "bg-red-50 text-red-500",
        hold: "bg-purple-50 text-purple-500",
        pending: "bg-orange-50 text-orange-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
