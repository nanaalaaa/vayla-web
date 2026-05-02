import type { ComponentType } from "react";
import type { PageId } from "@/types/navigation";

import DashboardPage from "@/pages/DashboardPage";
import DiscoveryPage from "@/pages/DiscoveryPage";
import TrackReviewPage from "@/pages/discovery/TrackReviewPage";
import VoteMonitorPage from "@/pages/discovery/VoteMonitorPage";
import RewardDistributionPage from "@/pages/discovery/RewardDistributionPage";
import ChallengeDetailPage from "@/pages/discovery/ChallengeDetailPage";
import DiscoveryChallengePage from "@/pages/discovery/DiscoveryChallengePage";
import GenreManagementPage from "@/pages/discovery/GenreManagementPage";
import CreateChallengePage from "@/pages/discovery/CreateChallengePage";
import BoostPage from "@/pages/boost/BoostPage";
import BoostProjectsPage from "@/pages/boost/BoostProjectsPage";
import BoostCreatePage from "@/pages/boost/BoostCreatePage";
import BoostDetailPage from "@/pages/boost/BoostDetailPage";
import BoostEditPage from "@/pages/boost/BoostEditPage";
import BoostParticipantsPage from "@/pages/boost/BoostParticipantsPage";
import BoostSettlementPage from "@/pages/boost/BoostSettlementPage";
import BoostRiskPage from "@/pages/boost/BoostRiskPage";

export interface RouteConfig {
  path: string;
  pageId: PageId;
  label: string;
  icon?: string;
  badge?: number;
  /** Present only for routes that appear as sidebar nav items */
  section?: string;
  title: string;
  breadcrumb: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
}

/** Maps every PageId to its URL path — used by onNavigate shim in App.tsx */
export const PAGE_ID_TO_PATH: Record<PageId, string> = {
  dashboard: "/",
  discovery: "/discovery",
  "discovery-track-review": "/discovery/track-review",
  "discovery-vote-monitor": "/discovery/vote-monitor",
  "discovery-reward-distribution": "/discovery/reward-distribution",
  "discovery-challenge-detail": "/discovery/challenge-detail",
  "discovery-challenge-management": "/discovery/challenge-management",
  "discovery-genre-management": "/discovery/genre-management",
  "discovery-create": "/discovery/create",
  boost: "/boost",
  "boost-projects": "/boost/projects",
  "boost-create": "/boost/create",
  "boost-detail": "/boost/detail",
  "boost-edit": "/boost/edit",
  "boost-participants": "/boost/participants",
  "boost-settlement": "/boost/settlement",
  "boost-risk": "/boost/risk",
};

export const routes: RouteConfig[] = [
  {
    path: "/",
    pageId: "dashboard",
    label: "Dashboard",
    icon: "📊",
    section: "Overview",
    title: "Dashboard",
    breadcrumb: "Overview · Platform Status",
    component: DashboardPage,
  },

  {
    path: "/discovery",
    pageId: "discovery",
    label: "Discovery",
    icon: "🎵",
    badge: 8,
    section: "Platform",
    title: "Discovery Management",
    breadcrumb: "Platform → Discovery",
    component: DiscoveryPage,
  },
  {
    path: "/discovery/track-review",
    pageId: "discovery-track-review",
    label: "Track Review",
    title: "Track Review",
    breadcrumb: "Platform → Discovery → Track Review",
    component: TrackReviewPage,
  },
  {
    path: "/discovery/vote-monitor",
    pageId: "discovery-vote-monitor",
    label: "Vote Monitor",
    title: "Vote Monitor",
    breadcrumb: "Platform → Discovery → Vote Monitor",
    component: VoteMonitorPage,
  },
  {
    path: "/discovery/reward-distribution",
    pageId: "discovery-reward-distribution",
    label: "Reward Distribution",
    title: "Reward Distribution",
    breadcrumb: "Platform → Discovery → Rewards",
    component: RewardDistributionPage,
  },
  {
    path: "/discovery/challenge-detail",
    pageId: "discovery-challenge-detail",
    label: "Challenge Detail",
    title: "Challenge Detail",
    breadcrumb: "Platform → Discovery → Challenge Detail",
    component: ChallengeDetailPage,
  },
  {
    path: "/discovery/challenge-management",
    pageId: "discovery-challenge-management",
    label: "Discovery Challenge",
    title: "Discovery Challenge",
    breadcrumb: "Platform → Discovery → Challenges",
    component: DiscoveryChallengePage,
  },
  {
    path: "/discovery/genre-management",
    pageId: "discovery-genre-management",
    label: "Genre Management",
    title: "Genre Management",
    breadcrumb: "Platform → Discovery → Genres",
    component: GenreManagementPage,
  },
  {
    path: "/discovery/create",
    pageId: "discovery-create",
    label: "Create Challenge",
    title: "Create Challenge",
    breadcrumb: "Platform → Discovery → New Challenge",
    component: CreateChallengePage,
  },

  {
    path: "/boost",
    pageId: "boost",
    label: "Boost",
    icon: "🚀",
    section: "Platform",
    title: "Boost Management",
    breadcrumb: "Service Management → Boost (USDT Crowdfunding)",
    component: BoostPage,
  },
  {
    path: "/boost/projects",
    pageId: "boost-projects",
    label: "Boost Projects",
    title: "Boost Projects",
    breadcrumb: "Service Management → Boost → Project Management",
    component: BoostProjectsPage,
  },
  {
    path: "/boost/create",
    pageId: "boost-create",
    label: "Create New Boost Project",
    title: "Create New Boost Project",
    breadcrumb: "Service Management → Boost → Create New Project",
    component: BoostCreatePage,
  },
  {
    path: "/boost/detail",
    pageId: "boost-detail",
    label: "Boost Detail",
    title: "Waterbomb Festival 2026",
    breadcrumb: "Service Management → Boost → Project Detail",
    component: BoostDetailPage,
  },
  {
    path: "/boost/edit",
    pageId: "boost-edit",
    label: "Edit Boost Project",
    title: "Edit Boost Project",
    breadcrumb: "Service Management → Boost → Edit Project",
    component: BoostEditPage,
  },
  {
    path: "/boost/participants",
    pageId: "boost-participants",
    label: "Participation Management",
    title: "Participation Management",
    breadcrumb: "Service Management → Boost → Participation Status → Details",
    component: BoostParticipantsPage,
  },
  {
    path: "/boost/settlement",
    pageId: "boost-settlement",
    label: "Settlement Details",
    title: "Settlement Details",
    breadcrumb:
      "Service Management → Boost → Settlement Management → Settlement Details",
    component: BoostSettlementPage,
  },
  {
    path: "/boost/risk",
    pageId: "boost-risk",
    label: "Risk Monitoring",
    title: "Risk Monitoring",
    breadcrumb: "Service Management → Boost → Risk Monitoring",
    component: BoostRiskPage,
  },
];
