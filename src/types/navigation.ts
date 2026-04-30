import type { LucideIcon } from "lucide-react"

export type PageId =
  | "dashboard"
  | "discovery"
  | "discovery-track-review"
  | "discovery-vote-monitor"
  | "discovery-reward-distribution"
  | "discovery-challenge-detail"
  | "discovery-challenge-management"
  | "discovery-genre-management"
  | "discovery-create"
  | "boost"
  | "boost-projects"
  | "boost-create"
  | "boost-detail"
  | "boost-edit"
  | "boost-participants"
  | "boost-settlement"
  | "boost-risk"

export interface NavItem {
  id: PageId
  label: string
  icon: string
  badge?: number
  section: string
}

export interface DiscoveryFeature {
  id: PageId
  label: string
  description: string
  icon: LucideIcon
  badge?: number
  color: string
  bgColor: string
}
