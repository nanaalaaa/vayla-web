import React from "react";
import { cn } from "@/lib/utils";

interface CardPanelProps {
  title?: React.ReactNode;
  titleRight?: React.ReactNode;
  desc?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  noPadding?: boolean;
}

export function CardPanel({
  title,
  titleRight,
  desc,
  children,
  className,
  bodyClassName,
  noPadding,
}: CardPanelProps) {
  const hasHeader = title || titleRight;
  return (
    <div className={cn("bg-white border border-gray-200 rounded-[14px] overflow-hidden", className)}>
      {hasHeader && (
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            {title && (
              <div className="text-base font-bold text-[#1A2332]">{title}</div>
            )}
            {desc && (
              <div className="text-[12px] text-gray-400 mt-0.5">{desc}</div>
            )}
          </div>
          {titleRight}
        </div>
      )}
      <div className={cn(!noPadding && "p-6", bodyClassName)}>{children}</div>
    </div>
  );
}
