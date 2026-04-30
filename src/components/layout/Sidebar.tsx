import { useState } from "react";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/config/navigation";
import type { PageId } from "@/types/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  activePage: PageId;
  onNavigate: (id: PageId) => void;
}

const NAV_SECTIONS = [...new Set(NAV_ITEMS.map((item) => item.section))];

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const isDiscoveryActive =
    activePage === "discovery" || activePage.startsWith("discovery-");
  const isBoostActive =
    activePage === "boost" || activePage.startsWith("boost-");

  return (
    <aside
      className={cn(
        "relative flex flex-col bg-[#1A2332] text-white transition-all duration-300 ease-in-out",
        collapsed ? "w-[72px]" : "w-[260px]",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 border-b border-[#2D3B50] px-6 py-5",
          collapsed && "justify-center px-0",
        )}
      >
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#00A88A] text-base font-extrabold">
          V
        </div>
        {!collapsed && (
          <div>
            <p className="text-[17px] font-bold tracking-tight">VAYLA Arena</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400">
              Admin Console
            </p>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        {NAV_SECTIONS.map((section) => (
          <div key={section}>
            {!collapsed && (
              <p className="mb-1 mt-2 px-6 text-[10px] font-semibold uppercase tracking-[1.2px] text-gray-400">
                {section}
              </p>
            )}
            {collapsed && <Separator className="my-2 bg-[#2D3B50]" />}

            {NAV_ITEMS.filter((item) => item.section === section).map(
              (item) => {
                const isActive =
                  item.id === "discovery"
                    ? isDiscoveryActive
                    : item.id === "boost"
                      ? isBoostActive
                      : activePage === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={cn(
                      "relative flex w-full items-center gap-3 px-6 py-2.5 text-sm font-medium transition-all duration-150",
                      collapsed && "justify-center px-0",
                      isActive
                        ? "bg-[rgba(0,201,167,0.08)] text-[#00C9A7]"
                        : "text-gray-300 hover:bg-[#243044] hover:text-white",
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r bg-[#00C9A7]" />
                    )}
                    <span className="text-[18px]">{item.icon}</span>
                    {!collapsed && (
                      <span className="flex-1 text-left">{item.label}</span>
                    )}
                    {!collapsed && item.badge != null && (
                      <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-[11px] font-semibold text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              },
            )}
          </div>
        ))}
      </nav>

      {!collapsed && (
        <div className="flex items-center gap-3 border-t border-[#2D3B50] px-6 py-4">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00C9A7] to-[#3B82F6] text-sm font-bold">
            JK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold">Jay Kim</p>
            <p className="text-[11px] text-gray-400">Super Admin</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-400 hover:text-white"
          >
            <LogOut size={14} />
          </Button>
        </div>
      )}

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[72px] z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md hover:bg-gray-50"
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </aside>
  );
}
