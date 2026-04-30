import { useState } from "react";
import { DashboardLayout } from "./components/layout/DashboardLayout";

import DashboardPage from "./pages/DashboardPage";
import DiscoveryPage from "./pages/DiscoveryPage";

import TrackReviewPage from "./pages/discovery/TrackReviewPage";
import VoteMonitorPage from "./pages/discovery/VoteMonitorPage";
import RewardDistributionPage from "./pages/discovery/RewardDistributionPage";
import ChallengeDetailPage from "./pages/discovery/ChallengeDetailPage";
import DiscoveryChallengePage from "./pages/discovery/DiscoveryChallengePage";
import GenreManagementPage from "./pages/discovery/GenreManagementPage";
import CreateChallengePage from "./pages/discovery/CreateChallengePage";

import BoostPage from "./pages/boost/BoostPage";
import BoostProjectsPage from "./pages/boost/BoostProjectsPage";
import BoostCreatePage from "./pages/boost/BoostCreatePage";
import BoostDetailPage from "./pages/boost/BoostDetailPage";
import BoostEditPage from "./pages/boost/BoostEditPage";
import BoostParticipantsPage from "./pages/boost/BoostParticipantsPage";
import BoostSettlementPage from "./pages/boost/BoostSettlementPage";
import BoostRiskPage from "./pages/boost/BoostRiskPage";

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
