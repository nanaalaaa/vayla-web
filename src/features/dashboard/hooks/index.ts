import { createQuery } from "@/lib/queries/createQuery";
import { DASHBOARD_ENDPOINTS } from "../endpoints/dashboardEndpoints";
import type { DashboardSummary, ActivityChartPoint, TokenStatusData } from "../apis/dashboardApi";
import { fetchDashboardSummary, fetchActivityChart, fetchTokenStatus } from "../apis/dashboardApi";

export const useDashboardSummary = createQuery<DashboardSummary>({
  key: DASHBOARD_ENDPOINTS.summary,
  fn: fetchDashboardSummary,
  defaultOptions: { staleTime: 60_000 },
});

export const useActivityChart = createQuery<ActivityChartPoint[]>({
  key: DASHBOARD_ENDPOINTS.activity,
  fn: fetchActivityChart,
  defaultOptions: { staleTime: 60_000 },
});

export const useTokenStatus = createQuery<TokenStatusData>({
  key: DASHBOARD_ENDPOINTS.tokenStatus,
  fn: fetchTokenStatus,
  defaultOptions: { staleTime: 30_000 },
});
