import { Bell, Settings } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { routes, flattenRoutes } from "@/routes";

const flatRoutes = flattenRoutes(routes);

export function HeaderV2() {
  const { pathname } = useLocation();
  const route = flatRoutes.find((r) => r.path === pathname) ?? flatRoutes[0];

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div>
        <h1 className="text-xl font-bold text-[#1A2332]">{route.title}</h1>
        <p className="text-[13px] text-gray-400">{route.breadcrumb}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 rounded-lg bg-[#E6FAF5] px-3 py-1.5 text-xs font-semibold text-[#00A88A]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#00C9A7]" />
          BSC Mainnet
        </div>
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-xl h-10 w-10"
        >
          <Bell size={16} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-xl h-10 w-10">
          <Settings size={16} />
        </Button>
      </div>
    </header>
  );
}
