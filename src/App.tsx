import { useState } from "react";
import { DashboardLayout } from "./components/layout/DashboardLayout";

import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import DiscoveryPage from "@/features/discovery/pages/DiscoveryPage";

import TrackReviewPage from "@/features/discovery/pages/TrackReviewPage";
import VoteMonitorPage from "@/features/discovery/pages/VoteMonitorPage";
import RewardDistributionPage from "@/features/discovery/pages/RewardDistributionPage";
import ChallengeDetailPage from "@/features/discovery/pages/ChallengeDetailPage";
import DiscoveryChallengePage from "@/features/discovery/pages/DiscoveryChallengePage";
import GenreManagementPage from "@/features/discovery/pages/GenreManagementPage";
import CreateChallengePage from "@/features/discovery/pages/CreateChallengePage";

import BoostPage from "@/features/boost/pages/BoostPage";
import BoostProjectsPage from "@/features/boost/pages/BoostProjectsPage";
import BoostCreatePage from "@/features/boost/pages/BoostCreatePage";
import BoostDetailPage from "@/features/boost/pages/BoostDetailPage";
import BoostEditPage from "@/features/boost/pages/BoostEditPage";
import BoostParticipantsPage from "@/features/boost/pages/BoostParticipantsPage";
import BoostSettlementPage from "@/features/boost/pages/BoostSettlementPage";
import BoostRiskPage from "@/features/boost/pages/BoostRiskPage";

import type { PageId } from "./types/navigation";

type PageProps = {
  onNavigate: (id: PageId) => void;
};

type PageComponent = React.ComponentType<PageProps>;

const ROUTES: Partial<Record<PageId, PageComponent>> = {
  dashboard: DashboardPage,
  discovery: DiscoveryPage,

  "discovery-track-review": TrackReviewPage,
  "discovery-vote-monitor": VoteMonitorPage,
  "discovery-reward-distribution": RewardDistributionPage,
  "discovery-challenge-detail": ChallengeDetailPage,
  "discovery-challenge-management": DiscoveryChallengePage,
  "discovery-genre-management": GenreManagementPage,
  "discovery-create": CreateChallengePage,

  boost: BoostPage,
  "boost-projects": BoostProjectsPage,
  "boost-create": BoostCreatePage,
  "boost-detail": BoostDetailPage,
  "boost-edit": BoostEditPage,
  "boost-participants": BoostParticipantsPage,
  "boost-settlement": BoostSettlementPage,
  "boost-risk": BoostRiskPage,
};

export default function App() {
  const [activePage, setActivePage] = useState<PageId>("dashboard");

  const ActivePage = ROUTES[activePage] ?? DashboardPage;

  return (
    <DashboardLayout activePage={activePage} onNavigate={setActivePage}>
      <div
        key={activePage}
        className="animate-in fade-in-0 slide-in-from-bottom-2 duration-200"
      >
        <ActivePage onNavigate={setActivePage} />
      </div>
    </DashboardLayout>
  );
}
