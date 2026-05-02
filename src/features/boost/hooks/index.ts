import { createQuery } from "@/lib/queries/createQuery";
import { createMutation } from "@/lib/queries/createMutation";
import { BOOST_QUERY_KEYS } from "../endpoints/boostEndpoints";
import type { BoostProject, BoostParticipant, BoostSettlement, BoostRiskData } from "../apis/boostApi";
import {
  fetchBoostProjects,
  fetchBoostDetail,
  fetchBoostParticipants,
  fetchBoostSettlement,
  fetchBoostRisk,
  createBoostProject,
  updateBoostProject,
} from "../apis/boostApi";

export const useBoostProjects = createQuery<BoostProject[]>({
  key: BOOST_QUERY_KEYS.projects,
  fn: fetchBoostProjects,
  defaultOptions: { staleTime: 30_000 },
});

export const useBoostDetail = createQuery<BoostProject, string>({
  key: BOOST_QUERY_KEYS.detail,
  fn: fetchBoostDetail,
  defaultOptions: { staleTime: 30_000 },
});

export const useBoostParticipants = createQuery<BoostParticipant[], string>({
  key: BOOST_QUERY_KEYS.participants,
  fn: fetchBoostParticipants,
  defaultOptions: { staleTime: 30_000 },
});

export const useBoostSettlement = createQuery<BoostSettlement, string>({
  key: BOOST_QUERY_KEYS.settlement,
  fn: fetchBoostSettlement,
  defaultOptions: { staleTime: 60_000 },
});

export const useBoostRisk = createQuery<BoostRiskData>({
  key: BOOST_QUERY_KEYS.risk,
  fn: fetchBoostRisk,
  defaultOptions: { staleTime: 60_000 },
});

export const useCreateBoostProject = createMutation({
  key: BOOST_QUERY_KEYS.projects,
  fn: createBoostProject,
  onError: (error) => {
    console.error("[boost] Failed to create project:", error);
  },
});

export const useUpdateBoostProject = createMutation({
  key: BOOST_QUERY_KEYS.detail,
  fn: updateBoostProject,
  onSuccess: () => {
    console.info("[boost] Project updated");
  },
  onError: (error) => {
    console.error("[boost] Failed to update project:", error);
  },
});
