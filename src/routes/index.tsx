import loadable from "@loadable/component";
import type { ComponentType } from "react";
import type { PageId } from "@/types/navigation";

function LoadingFallback() {
  return (
    <div className="flex h-64 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#00C9A7] border-t-transparent" />
    </div>
  );
}

const fallback = <LoadingFallback />;

const DashboardPage = loadable(() => import("@/pages/DashboardPage"), { fallback });
const DiscoveryPage = loadable(() => import("@/pages/DiscoveryPage"), { fallback });
const TrackReviewPage = loadable(() => import("@/pages/discovery/TrackReviewPage"), { fallback });
const VoteMonitorPage = loadable(() => import("@/pages/discovery/VoteMonitorPage"), { fallback });
const RewardDistributionPage = loadable(() => import("@/pages/discovery/RewardDistributionPage"), { fallback });
const ChallengeDetailPage = loadable(() => import("@/pages/discovery/ChallengeDetailPage"), { fallback });
const DiscoveryChallengePage = loadable(() => import("@/pages/discovery/DiscoveryChallengePage"), { fallback });
const GenreManagementPage = loadable(() => import("@/pages/discovery/GenreManagementPage"), { fallback });
const CreateChallengePage = loadable(() => import("@/pages/discovery/CreateChallengePage"), { fallback });
const BoostPage = loadable(() => import("@/pages/boost/BoostPage"), { fallback });
const BoostProjectsPage = loadable(() => import("@/pages/boost/BoostProjectsPage"), { fallback });
const BoostCreatePage = loadable(() => import("@/pages/boost/BoostCreatePage"), { fallback });
const BoostDetailPage = loadable(() => import("@/pages/boost/BoostDetailPage"), { fallback });
const BoostEditPage = loadable(() => import("@/pages/boost/BoostEditPage"), { fallback });
const BoostParticipantsPage = loadable(() => import("@/pages/boost/BoostParticipantsPage"), { fallback });
const BoostSettlementPage = loadable(() => import("@/pages/boost/BoostSettlementPage"), { fallback });
const BoostRiskPage = loadable(() => import("@/pages/boost/BoostRiskPage"), { fallback });


export interface RouteConfig {
  path: string;
  pageId: PageId;
  label: string;
  icon?: string;
  badge?: number;
  section?: string;
  title: string;
  breadcrumb: string;
  show: boolean;
  children?: RouteConfig[];
  component: ComponentType<any>;
}

export function flattenRoutes(
  routeList: RouteConfig[],
  parentPath = "",
): RouteConfig[] {
  return routeList.flatMap((route) => {
    const fullPath = route.path.startsWith("/")
      ? route.path
      : `${parentPath}/${route.path}`.replace(/\/+/g, "/");

    const withFullPath: RouteConfig = { ...route, path: fullPath };

    return [
      withFullPath,
      ...(route.children ? flattenRoutes(route.children, fullPath) : []),
    ];
  });
}


export const routes: RouteConfig[] = [
  {
    path: "/",
    pageId: "dashboard",
    label: "Dashboard",
    icon: "📊",
    section: "Overview",
    title: "Dashboard",
    breadcrumb: "Overview",
    show: true,
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
    breadcrumb: "Discovery",
    show: true,
    component: DiscoveryPage,
    children: [
      {
        path: "track-review",
        pageId: "discovery-track-review",
        label: "Track Review",
        title: "Track Review",
        breadcrumb: "Discovery → Track Review",
        show: true,
        component: TrackReviewPage,
      },
      {
        path: "vote-monitor",
        pageId: "discovery-vote-monitor",
        label: "Vote Monitor",
        title: "Vote Monitor",
        breadcrumb: "Discovery → Vote Monitor",
        show: true,
        component: VoteMonitorPage,
      },
      {
        path: "reward-distribution",
        pageId: "discovery-reward-distribution",
        label: "Reward Distribution",
        title: "Reward Distribution",
        breadcrumb: "Discovery → Rewards",
        show: true,
        component: RewardDistributionPage,
      },
      {
        path: "challenge-detail",
        pageId: "discovery-challenge-detail",
        label: "Challenge Detail",
        title: "Challenge Detail",
        breadcrumb: "Discovery → Challenge Detail",
        show: false,
        component: ChallengeDetailPage,
      },
      {
        path: "challenge-management",
        pageId: "discovery-challenge-management",
        label: "Discovery Challenge",
        title: "Discovery Challenge",
        breadcrumb: "Discovery → Challenges",
        show: true,
        component: DiscoveryChallengePage,
      },
      {
        path: "genre-management",
        pageId: "discovery-genre-management",
        label: "Genre Management",
        title: "Genre Management",
        breadcrumb: "Discovery → Genres",
        show: true,
        component: GenreManagementPage,
      },
      {
        path: "create",
        pageId: "discovery-create",
        label: "Create Challenge",
        title: "Create Challenge",
        breadcrumb: "Discovery → New Challenge",
        show: false,
        component: CreateChallengePage,
      },
    ],
  },

  {
    path: "/boost",
    pageId: "boost",
    label: "Boost",
    icon: "🚀",
    section: "Platform",
    title: "Boost Management",
    breadcrumb: "Boost",
    show: true,
    component: BoostPage,
    children: [
      {
        path: "projects",
        pageId: "boost-projects",
        label: "Boost Projects",
        title: "Boost Projects",
        breadcrumb: "Boost → Project Management",
        show: true,
        component: BoostProjectsPage,
      },
      {
        path: "create",
        pageId: "boost-create",
        label: "Create New Boost Project",
        title: "Create New Boost Project",
        breadcrumb: "Boost → Create New Project",
        show: false,
        component: BoostCreatePage,
      },
      {
        path: "detail",
        pageId: "boost-detail",
        label: "Boost Detail",
        title: "Waterbomb Festival 2026",
        breadcrumb: "Boost → Project Detail",
        show: false,
        component: BoostDetailPage,
      },
      {
        path: "edit",
        pageId: "boost-edit",
        label: "Edit Boost Project",
        title: "Edit Boost Project",
        breadcrumb: "Boost → Edit Project",
        show: false,
        component: BoostEditPage,
      },
      {
        path: "participants",
        pageId: "boost-participants",
        label: "Participation Management",
        title: "Participation Management",
        breadcrumb: "Boost → Participation Status → Details",
        show: false,
        component: BoostParticipantsPage,
      },
      {
        path: "settlement",
        pageId: "boost-settlement",
        label: "Settlement Details",
        title: "Settlement Details",
        breadcrumb:
          "Boost → Settlement Management → Settlement Details",
        show: false,
        component: BoostSettlementPage,
      },
      {
        path: "risk",
        pageId: "boost-risk",
        label: "Risk Monitoring",
        title: "Risk Monitoring",
        breadcrumb: "Boost → Risk Monitoring",
        show: true,
        component: BoostRiskPage,
      },
    ],
  },
];

export const PAGE_ID_TO_PATH = Object.fromEntries(
  flattenRoutes(routes).map((r) => [r.pageId, r.path]),
) as Record<PageId, string>;
