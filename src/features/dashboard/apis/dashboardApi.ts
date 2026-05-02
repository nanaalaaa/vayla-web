import { apiCommonService } from "@/lib/api/apiCommonService";
import { DASHBOARD_ENDPOINTS } from "../endpoints/dashboardEndpoints";

export interface DashboardSummary {
  totalUsers: number;
  activeChallenges: number;
  totalTracksSubmitted: number;
  pendingReviews: number;
  todayVotes: number;
  totalBoostRaised: number;
}

export interface ActivityChartPoint {
  date: string;
  submissions: number;
  votes: number;
  rewards: number;
}

export interface TokenStatusData {
  symbol: string;
  price: number;
  priceChange24h: number;
  marketCap: number;
  circulatingSupply: number;
  holders: number;
}

export async function fetchDashboardSummary(): Promise<DashboardSummary> {
  const res = await apiCommonService.get<DashboardSummary>({ url: DASHBOARD_ENDPOINTS.summary });
  return res.data;
}

export async function fetchActivityChart(): Promise<ActivityChartPoint[]> {
  const res = await apiCommonService.get<ActivityChartPoint[]>({ url: DASHBOARD_ENDPOINTS.activity });
  return res.data;
}

export async function fetchTokenStatus(): Promise<TokenStatusData> {
  const res = await apiCommonService.get<TokenStatusData>({ url: DASHBOARD_ENDPOINTS.tokenStatus });
  return res.data;
}
