import { createQuery } from "@/lib/queries/createQuery";
import { createMutation } from "@/lib/queries/createMutation";
import { DISCOVERY_ENDPOINTS } from "../endpoints/discoveryEndpoints";
import type { Challenge, TrackReviewItem, VoteMonitorData, RewardDistributionData, Genre } from "../apis/discoveryApi";
import {
  fetchChallenges,
  fetchTrackReviewQueue,
  fetchVoteMonitor,
  fetchRewardDistribution,
  fetchGenres,
  createChallenge,
  approveTrack,
  rejectTrack,
} from "../apis/discoveryApi";

export const useChallenges = createQuery<Challenge[]>({
  key: DISCOVERY_ENDPOINTS.challenges,
  fn: fetchChallenges,
  defaultOptions: { staleTime: 30_000 },
});

export const useTrackReviewQueue = createQuery<TrackReviewItem[]>({
  key: DISCOVERY_ENDPOINTS.trackReviewQueue,
  fn: fetchTrackReviewQueue,
  defaultOptions: { staleTime: 15_000 },
});

export const useVoteMonitor = createQuery<VoteMonitorData>({
  key: DISCOVERY_ENDPOINTS.voteMonitor,
  fn: fetchVoteMonitor,
  defaultOptions: { staleTime: 15_000 },
});

export const useRewardDistribution = createQuery<RewardDistributionData>({
  key: DISCOVERY_ENDPOINTS.rewardDistribution,
  fn: fetchRewardDistribution,
  defaultOptions: { staleTime: 60_000 },
});

export const useGenres = createQuery<Genre[]>({
  key: DISCOVERY_ENDPOINTS.genres,
  fn: fetchGenres,
  defaultOptions: { staleTime: 5 * 60_000 },
});

export const useCreateChallenge = createMutation(createChallenge);

export const useApproveTrack = createMutation(approveTrack);

export const useRejectTrack = createMutation(rejectTrack);
