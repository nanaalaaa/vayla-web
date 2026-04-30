import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PageId } from "@/types/navigation";

const PAGE_META: Record<PageId, { title: string; breadcrumb: string }> = {
  dashboard: { title: "Dashboard", breadcrumb: "Overview · Platform Status" },
  discovery: {
    title: "Discovery Management",
    breadcrumb: "Platform → Discovery",
  },
  "discovery-track-review": {
    title: "Track Review",
    breadcrumb: "Platform → Discovery → Track Review",
  },
  "discovery-vote-monitor": {
    title: "Vote Monitor",
    breadcrumb: "Platform → Discovery → Vote Monitor",
  },
  "discovery-reward-distribution": {
    title: "Reward Distribution",
    breadcrumb: "Platform → Discovery → Rewards",
  },
  "discovery-challenge-detail": {
    title: "Challenge Detail",
    breadcrumb: "Platform → Discovery → Challenge Detail",
  },
  "discovery-challenge-management": {
    title: "Discovery Challenge",
    breadcrumb: "Platform → Discovery → Challenges",
  },
  "discovery-genre-management": {
    title: "Genre Management",
    breadcrumb: "Platform → Discovery → Genres",
  },
  "discovery-create": {
    title: "Create Challenge",
    breadcrumb: "Platform → Discovery → New Challenge",
  },
  boost: {
    title: "Boost Management",
    breadcrumb: "Service Management → Boost (USDT Crowdfunding)",
  },
  "boost-projects": {
    title: "Boost Projects",
    breadcrumb: "Service Management → Boost → Project Management",
  },
  "boost-create": {
    title: "Create New Boost Project",
    breadcrumb: "Service Management → Boost → Create New Project",
  },
  "boost-detail": {
    title: "Waterbomb Festival 2026",
    breadcrumb: "Service Management → Boost → Project Detail",
  },
  "boost-edit": {
    title: "Edit Boost Project",
    breadcrumb: "Service Management → Boost → Edit Project",
  },
  "boost-participants": {
    title: "Participation Management",
    breadcrumb: "Service Management → Boost → Participation Status → Details",
  },
  "boost-settlement": {
    title: "Settlement Details",
    breadcrumb:
      "Service Management → Boost → Settlement Management → Settlement Details",
  },
  "boost-risk": {
    title: "Risk Monitoring",
    breadcrumb: "Service Management → Boost → Risk Monitoring",
  },
};

interface HeaderProps {
  activePage: PageId;
}

export function Header({ activePage }: HeaderProps) {
  const meta = PAGE_META[activePage] ?? PAGE_META.dashboard;

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div>
        <h1 className="text-xl font-bold text-[#1A2332]">{meta.title}</h1>
        <p className="text-[13px] text-gray-400">{meta.breadcrumb}</p>
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
