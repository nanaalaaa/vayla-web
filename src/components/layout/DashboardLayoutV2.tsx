import type { ReactNode } from "react";
import { SidebarV2 } from "./SidebarV2";
import { HeaderV2 } from "./HeaderV2";

interface DashboardLayoutV2Props {
  children: ReactNode;
}

export function DashboardLayoutV2({ children }: DashboardLayoutV2Props) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <SidebarV2 />
      <div className="flex flex-1 flex-col overflow-hidden">
        <HeaderV2 />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
