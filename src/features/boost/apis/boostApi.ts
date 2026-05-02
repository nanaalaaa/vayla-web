import { apiCommonService } from "@/lib/api/apiCommonService";
import { BOOST_ENDPOINTS } from "../endpoints/boostEndpoints";

export type BoostProjectStatus = "active" | "review" | "upcoming" | "ended" | "paused";

export interface BoostProject {
  id: string;
  name: string;
  category: string;
  status: BoostProjectStatus;
  visibility: "public" | "private";
  raised: number;
  target: number;
  participants: number;
  minContribution: number;
  platformFee: number;
  fundingStart: string;
  fundingEnd: string;
  settlementStatus: string;
  editor: string;
  updatedAt: string;
}

export interface BoostParticipant {
  id: string;
  userId: string;
  displayName: string;
  amount: number;
  joinedAt: string;
  status: "confirmed" | "pending" | "refunded";
}

export interface BoostSettlement {
  projectId: string;
  totalRaised: number;
  platformFee: number;
  participantPayout: number;
  roiAmount: number;
  settledAt: string | null;
  status: "pending" | "under_review" | "completed";
}

export interface BoostRiskData {
  highRiskProjects: number;
  flaggedParticipants: number;
  suspiciousTransactions: number;
  riskScore: number;
}

export interface CreateBoostProjectPayload {
  name: string;
  category: string;
  description: string;
  targetAmount: number;
  minContribution: number;
  maxContribution?: number;
  maxParticipants?: number;
  fundingStart: string;
  fundingEnd: string;
  estimatedRoi: number;
  settlementDate: string;
  visibility: "public" | "private";
}

export type UpdateBoostProjectPayload = Partial<CreateBoostProjectPayload>;

export async function fetchBoostProjects(): Promise<BoostProject[]> {
  const res = await apiCommonService.get<BoostProject[]>({ url: BOOST_ENDPOINTS.projects });
  return res.data;
}

export async function fetchBoostDetail(projectId: string): Promise<BoostProject> {
  const res = await apiCommonService.get<BoostProject>({ url: BOOST_ENDPOINTS.detail(projectId) });
  return res.data;
}

export async function fetchBoostParticipants(projectId: string): Promise<BoostParticipant[]> {
  const res = await apiCommonService.get<BoostParticipant[]>({ url: BOOST_ENDPOINTS.participants(projectId) });
  return res.data;
}

export async function fetchBoostSettlement(projectId: string): Promise<BoostSettlement> {
  const res = await apiCommonService.get<BoostSettlement>({ url: BOOST_ENDPOINTS.settlement(projectId) });
  return res.data;
}

export async function fetchBoostRisk(): Promise<BoostRiskData> {
  const res = await apiCommonService.get<BoostRiskData>({ url: BOOST_ENDPOINTS.risk });
  return res.data;
}

export async function createBoostProject(payload: CreateBoostProjectPayload): Promise<BoostProject> {
  const res = await apiCommonService.post<BoostProject, CreateBoostProjectPayload>({
    url: BOOST_ENDPOINTS.projects,
    config: { data: payload },
  });
  return res.data;
}

export async function updateBoostProject({
  id,
  payload,
}: {
  id: string;
  payload: UpdateBoostProjectPayload;
}): Promise<BoostProject> {
  const res = await apiCommonService.patch<BoostProject, UpdateBoostProjectPayload>({
    url: BOOST_ENDPOINTS.detail(id),
    config: { data: payload },
  });
  return res.data;
}
