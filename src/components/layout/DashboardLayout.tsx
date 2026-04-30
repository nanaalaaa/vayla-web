import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import type { PageId } from "@/types/navigation"

interface DashboardLayoutProps {
  activePage: PageId
  onNavigate: (id: PageId) => void
  children: ReactNode
}

export function DashboardLayout({ activePage, onNavigate, children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar activePage={activePage} onNavigate={onNavigate} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header activePage={activePage} />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
