import { apiCommonService } from "@/lib/api/apiCommonService";
import { DISCOVERY_ENDPOINTS } from "../endpoints/discoveryEndpoints";

export interface Challenge {
  id: string;
  title: string;
  genre: string;
  status: "active" | "ended" | "upcoming";
  submittedCount: number;
  votingDeadline: string;
  rewardPool: number;
}

export interface TrackReviewItem {
  id: string;
  trackName: string;
  artist: string;
  genre: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  votes: number;
}

export interface VoteMonitorData {
  totalVotes: number;
  activeVoters: number;
  averageVotesPerTrack: number;
  topVotedTrackId: string;
}

export interface RewardDistributionData {
  totalEligible: number;
  distributed: number;
  pending: number;
  totalAmountUsdt: number;
}

export interface Genre {
  id: string;
  name: string;
  trackCount: number;
  activeChallenge: boolean;
}

export interface CreateChallengePayload {
  title: string;
  genre: string;
  rewardPool: number;
  startDate: string;
  endDate: string;
  maxSubmissions: number;
}

export async function fetchChallenges(): Promise<Challenge[]> {
  const res = await apiCommonService.get<Challenge[]>({ url: DISCOVERY_ENDPOINTS.challenges });
  return res.data;
}

export async function fetchTrackReviewQueue(): Promise<TrackReviewItem[]> {
  const res = await apiCommonService.get<TrackReviewItem[]>({ url: DISCOVERY_ENDPOINTS.trackReviewQueue });
  return res.data;
}

export async function fetchVoteMonitor(): Promise<VoteMonitorData> {
  const res = await apiCommonService.get<VoteMonitorData>({ url: DISCOVERY_ENDPOINTS.voteMonitor });
  return res.data;
}

export async function fetchRewardDistribution(): Promise<RewardDistributionData> {
  const res = await apiCommonService.get<RewardDistributionData>({ url: DISCOVERY_ENDPOINTS.rewardDistribution });
  return res.data;
}

export async function fetchGenres(): Promise<Genre[]> {
  const res = await apiCommonService.get<Genre[]>({ url: DISCOVERY_ENDPOINTS.genres });
  return res.data;
}

export async function createChallenge(payload: CreateChallengePayload): Promise<Challenge> {
  const res = await apiCommonService.post<Challenge, CreateChallengePayload>({
    url: DISCOVERY_ENDPOINTS.challenges,
    config: { data: payload },
  });
  return res.data;
}

export async function approveTrack(trackId: string): Promise<TrackReviewItem> {
  const res = await apiCommonService.patch<TrackReviewItem>({
    url: `${DISCOVERY_ENDPOINTS.trackReviewQueue}/${trackId}/approve`,
  });
  return res.data;
}

export async function rejectTrack(trackId: string): Promise<TrackReviewItem> {
  const res = await apiCommonService.patch<TrackReviewItem>({
    url: `${DISCOVERY_ENDPOINTS.trackReviewQueue}/${trackId}/reject`,
  });
  return res.data;
}
