import { useState } from "react";
import { KpiCard } from "@/components/ui/KpiCard";
import type { PageId } from "@/types/navigation";
import { ActiveChallenges } from "../components/ActiveChallenges";
import { RealtimeLeaderboard, CurrentSettings, GenreDistribution } from "../components/SidebarPanels";
import { TrackReviewQueue } from "../components/TrackReviewQueue";
import { VotingAndRewards } from "../components/VotingAndRewards";
import { ReviewHistory } from "../components/ReviewHistory";
import { GenreWidget } from "../components/GenreWidget";

interface Props {
  onNavigate: (page: PageId) => void;
}

type TabKey = "challenge" | "track-review" | "vote-monitor" | "reward-distribution" | "genre-management";

const TABS: { key: TabKey; label: string; count?: number; page: PageId }[] = [
  { key: "challenge", label: "🎵 Challenge Management", count: 4, page: "discovery-challenge-management" },
  { key: "track-review", label: "📋 Track Review", count: 8, page: "discovery-track-review" },
  { key: "vote-monitor", label: "🗳️ Vote Monitoring", page: "discovery-vote-monitor" },
  { key: "reward-distribution", label: "🎁 Reward Distribution", page: "discovery-reward-distribution" },
  { key: "genre-management", label: "🏷️ Genre Management", page: "discovery-genre-management" },
];

const KPI_CARDS = [
  { color: "mint" as const, label: "In Progress Challenge", value: "3", sub: "+1 This Week New" },
  { color: "blue" as const, label: "Total Submitted Tracks", value: "284", sub: "↑ 23% vs Last Week" },
  { color: "purple" as const, label: "Today Vote Count", value: "1,247", sub: "↑ 12% vs Yesterday", valueColor: "text-purple-500" },
  { color: "yellow" as const, label: "Pending Review", value: "8", sub: "Avg Wait 4.2h", valueColor: "text-amber-500" },
  { color: "red" as const, label: "NFT Publish Pending", value: "12", sub: "5표 or more Achievers", valueColor: "text-red-500" },
];

export default function DiscoveryPage({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("challenge");

  return (
    <div>
      <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 mb-6 w-fit">
        {TABS.map((tab) => (
          <div key={tab.key} className="flex items-center gap-0">
            <button
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-lg border-none text-[13px] font-semibold flex items-center gap-2 cursor-pointer transition-all ${
                activeTab === tab.key
                  ? "bg-[#00C9A7] text-white shadow-[0_2px_8px_rgba(0,201,167,0.3)]"
                  : "bg-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
              {tab.count != null && (
                <span className={`px-[7px] py-px rounded-[6px] text-[11px] ${activeTab === tab.key ? "bg-white/25" : "bg-gray-100 text-gray-500"}`}>
                  {tab.count}
                </span>
              )}
            </button>
            <button
              onClick={() => onNavigate(tab.page)}
              title={`${tab.label} All Pages`}
              className="w-7 h-7 rounded-[6px] bg-gray-100 flex items-center justify-center text-xs text-gray-500 -ml-1 hover:bg-[#E6FAF5] hover:text-[#00C9A7] transition-all"
            >
              ↗
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        {KPI_CARDS.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </div>

      <div className="grid gap-6 mb-6" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <ActiveChallenges onNavigate={onNavigate} />
        <div>
          <RealtimeLeaderboard />
          <CurrentSettings />
          <GenreDistribution />
        </div>
      </div>

      <TrackReviewQueue onNavigate={onNavigate} />
      <VotingAndRewards onNavigate={onNavigate} />
      <ReviewHistory />
      <GenreWidget />
    </div>
  );
}
