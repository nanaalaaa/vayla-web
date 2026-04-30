import {
  ClipboardList,
  BarChart3,
  Gift,
  Trophy,
  Disc3,
  Tags,
} from "lucide-react"
import type { NavItem, DiscoveryFeature } from "@/types/navigation"

export const NAV_ITEMS: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "📊",
    section: "Overview",
  },
  {
    id: "discovery",
    label: "Discovery",
    icon: "🎵",
    badge: 8,
    section: "Platform",
  },
  {
    id: "boost",
    label: "Boost",
    icon: "🚀",
    section: "Platform",
  },
]

export const DISCOVERY_FEATURES: DiscoveryFeature[] = [
  {
    id: "discovery-track-review",
    label: "Track Review",
    description: "Review and approve submitted tracks from artists",
    icon: ClipboardList,
    badge: 8,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: "discovery-vote-monitor",
    label: "Vote Monitor",
    description: "Real-time vote tracking and anomaly detection",
    icon: BarChart3,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "discovery-reward-distribution",
    label: "Reward Distribution",
    description: "Distribute NFT rewards and VAYLA tokens to winners",
    icon: Gift,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "discovery-challenge-detail",
    label: "Challenge Detail",
    description: "View and edit individual challenge details",
    icon: Trophy,
    color: "text-[#00A88A]",
    bgColor: "bg-[#E6FAF5]",
  },
  {
    id: "discovery-challenge-management",
    label: "Discovery Challenge",
    description: "Manage all active and upcoming Discovery challenges",
    icon: Disc3,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    id: "discovery-genre-management",
    label: "Genre Management",
    description: "Add, edit, and remove music genres for challenges",
    icon: Tags,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]
