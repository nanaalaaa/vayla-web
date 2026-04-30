import { cn } from "@/lib/utils";

type StatusVariant =
  | "pending"
  | "reviewing"
  | "approved"
  | "rejected"
  | "hold"
  | "resubmit"
  | "live"
  | "upcoming"
  | "ended"
  | "paused"
  | "normal"
  | "review"
  | "blocked"
  | "count-hold"
  | "complete"
  | "failed"
  | "under-review"
  | "active"
  | "inactive"
  | "nft-na"
  | "nft-pending"
  | "nft-complete"
  | "nft-failed";

const variantClasses: Record<StatusVariant, string> = {
  pending: "bg-orange-50 text-orange-500",
  reviewing: "bg-amber-50 text-amber-500",
  approved: "bg-[#E6FAF5] text-[#00A88A]",
  rejected: "bg-red-50 text-red-500",
  hold: "bg-purple-50 text-purple-500",
  resubmit: "bg-purple-50 text-purple-500",
  live: "bg-[#E6FAF5] text-[#00A88A]",
  upcoming: "bg-blue-50 text-blue-500",
  ended: "bg-gray-100 text-gray-500",
  paused: "bg-amber-50 text-amber-500",
  normal: "bg-[#E6FAF5] text-[#00A88A]",
  review: "bg-amber-50 text-amber-500",
  blocked: "bg-red-50 text-red-500",
  "count-hold": "bg-purple-50 text-purple-500",
  complete: "bg-[#E6FAF5] text-[#00A88A]",
  failed: "bg-red-50 text-red-500",
  "under-review": "bg-orange-50 text-orange-500",
  active: "bg-[#E6FAF5] text-[#00A88A]",
  inactive: "bg-gray-100 text-gray-400",
  "nft-na": "bg-gray-100 text-gray-400",
  "nft-pending": "bg-orange-50 text-orange-500",
  "nft-complete": "bg-[#E6FAF5] text-[#00A88A]",
  "nft-failed": "bg-red-50 text-red-500",
};

interface StatusBadgeProps {
  variant: StatusVariant;
  label: string;
  className?: string;
}

export function StatusBadge({ variant, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[5px] px-[10px] py-1 rounded-[6px] text-xs font-semibold whitespace-nowrap",
        variantClasses[variant],
        className,
      )}
    >
      <span className="w-[6px] h-[6px] rounded-full bg-current flex-shrink-0" />
      {label}
    </span>
  );
}
