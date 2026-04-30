import { cn } from "@/lib/utils";

type KpiColor =
  | "mint"
  | "blue"
  | "green"
  | "yellow"
  | "red"
  | "purple"
  | "orange"
  | "gray";

const topBorder: Record<KpiColor, string> = {
  mint: "before:bg-[#00C9A7]",
  blue: "before:bg-blue-500",
  green: "before:bg-emerald-500",
  yellow: "before:bg-amber-500",
  red: "before:bg-red-500",
  purple: "before:bg-purple-500",
  orange: "before:bg-orange-500",
  gray: "before:bg-gray-400",
};

interface KpiCardProps {
  color: KpiColor;
  label: string;
  value: string | number;
  sub?: string;
  valueColor?: string;
  valueSize?: string;
  subColor?: string;
}

export function KpiCard({
  color,
  label,
  value,
  sub,
  valueSize = "text-[28px]",
  valueColor,
  subColor,
}: KpiCardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-[14px] p-5 relative overflow-hidden",
        'before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px]',
        topBorder[color],
      )}
    >
      <div className="text-xs font-semibold text-gray-500 mb-1.5">{label}</div>
      <div
        className={cn(
          valueSize,
          "font-extrabold tracking-tight leading-tight",
          valueColor ?? "text-[#1A2332]",
        )}
      >
        {value}
      </div>
      {sub && (
        <div className={cn("text-xs mt-1", subColor ?? "text-gray-400")}>
          {sub}
        </div>
      )}
    </div>
  );
}
