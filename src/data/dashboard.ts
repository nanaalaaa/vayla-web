export const TX_DATA = [
  { hash: "0x7a2f...4f92", type: "vote", from: "user_0x8B3c...d21a", amount: "10.8 VAYLA", status: "success", statusLabel: "✓ Confirmed", time: "2seconds 전" },
  { hash: "0x3e1b...a8c7", type: "boost", from: "user_0x4D7e...f93b", amount: "5,000 USDT", status: "success", statusLabel: "✓ Confirmed", time: "15seconds 전" },
  { hash: "0x9f4c...2d5e", type: "withdraw", from: "user_0xA1c9...b47d → 0xExt...8f2a", amount: "120 VAYLA", status: "processing", statusLabel: "⏳ Processing", time: "1minutes 전" },
  { hash: "0x5d8a...7b3f", type: "nft", from: "system → user_0x6F2d...c18e", amount: "Badge #524", status: "success", statusLabel: "✓ Confirmed", time: "3minutes 전" },
  { hash: "0x2c6e...9a1d", type: "vote", from: "user_0x7B4a...e52c", amount: "10.8 VAYLA", status: "success", statusLabel: "✓ Confirmed", time: "4minutes 전" },
  { hash: "0x8b1f...3e7c", type: "reward", from: "system → user_0x9C5b...a73f", amount: "150 VAYLA", status: "pending", statusLabel: "⏳ Pending", time: "7minutes 전" },
  { hash: "0x1a4d...6f8b", type: "withdraw", from: "user_0xB2e8...d94a → 0xSol...7c3e", amount: "85 VAYLA", status: "failed", statusLabel: "✕ Failed", time: "12minutes 전" },
];

export const TX_TYPE_STYLE: Record<string, string> = {
  vote: "bg-purple-50 text-purple-500",
  boost: "bg-blue-50 text-blue-500",
  withdraw: "bg-amber-50 text-amber-500",
  reward: "bg-[#E6FAF5] text-[#00A88A]",
  nft: "bg-pink-50 text-pink-500",
};

export const TX_STATUS_STYLE: Record<string, string> = {
  success: "bg-[#E6FAF5] text-[#00A88A]",
  pending: "bg-amber-50 text-amber-500",
  processing: "bg-blue-50 text-blue-500",
  failed: "bg-red-50 text-red-500",
};

export const QUEUE_ITEMS = [
  { dot: "bg-red-500", title: "Track Pending Review", meta: "Discovery · Avg Wait 2.4h", count: 8 },
  { dot: "bg-red-500", title: "Withdrawal Awaiting Approval", meta: "Wallet · Total 405 VAYLA", count: 3 },
  { dot: "bg-amber-500", title: "CS No Response", meta: "Support · Max Pending 18h", count: 3 },
  { dot: "bg-amber-500", title: "Reward minutesx Pending", meta: "Reward · Neon Night Beat", count: 1 },
  { dot: "bg-blue-500", title: "NFT Publish Pending", meta: "Event NFT Manual Publish", count: 2 },
  { dot: "bg-blue-500", title: "Fraudulent Vote Suspected", meta: "동days IP Bulk Vote Detected", count: 1 },
];

export const TOP_3 = [
  { rank: "#1", color: "text-[#00C9A7]", name: "Solar Echo", artist: "by Kai Yoon", votes: "8,234" },
  { rank: "#2", color: "text-gray-400", name: "Velvet Drive", artist: "by Luna Park", votes: "6,891" },
  { rank: "#3", color: "text-gray-400", name: "Pulse Theory", artist: "by Midnight", votes: "5,420" },
];

export const TOKEN_MOVEMENTS = [
  { dot: "bg-red-500", name: "USDT 1,000", wallet: "Hot Wallet · 14:22", dir: "Out", dirColor: "text-red-500" },
  { dot: "bg-red-500", name: "BNB 0.03", wallet: "Gas Wallet · 13:58", dir: "Out", dirColor: "text-red-500" },
  { dot: "bg-red-500", name: "VAYLA 50,000", wallet: "Cold Wallet · 11:10", dir: "Out", dirColor: "text-red-500" },
  { dot: "bg-[#00C9A7]", name: "VAYLA 5,000", wallet: "Hot Wallet · 10:42", dir: "In", dirColor: "text-[#00A88A]" },
];

export const ALERTS = [
  { icon: "⚠️", label: "Low BNB Gas Balance", badge: "Warning", badgeClass: "bg-amber-50 text-amber-500" },
  { icon: "🔍", label: "Unusual USDT Outflow Detected", badge: "Reviewed", badgeClass: "bg-blue-50 text-blue-500" },
  { icon: "📦", label: "Cold Wallet Movement Detected", badge: "Normal", badgeClass: "bg-[#E6FAF5] text-[#00A88A]" },
  { icon: "❌", label: "Failed Token Transfer", badge: "None", badgeClass: "bg-gray-100 text-gray-400" },
];

export const KPI_ITEMS = [
  { icon: "👥", iconBg: "bg-[#E6FAF5]", iconColor: "text-[#00C9A7]", change: "+12.5%", up: true, value: "12,847", label: "Total Member 수", sub: "Today +128users · DAU 3,420" },
  { icon: "🚀", iconBg: "bg-blue-50", iconColor: "text-blue-500", change: "+8.3%", up: true, value: "$284K", label: "Active Boost 모Amount", sub: "5items Projects Active · Average 68%" },
  { icon: "🗳️", iconBg: "bg-purple-50", iconColor: "text-purple-500", change: "+23.1%", up: true, value: "43,291", label: "Total Votes", sub: "Today +1,247표 · Average 10.8 VAYLA/vote" },
  { icon: "💎", iconBg: "bg-amber-50", iconColor: "text-amber-500", change: "-2.1%", up: false, value: "2.48M", label: "VAYLA Circulation", sub: "Today Conversion 32K · Withdrawal 8.5K" },
  { icon: "🎨", iconBg: "bg-pink-50", iconColor: "text-pink-500", change: "+15.4%", up: true, value: "1,842", label: "NFT Total Publish", sub: "User 1,540 · Creator 302" },
  { icon: "⚡", iconBg: "bg-red-50", iconColor: "text-red-500", change: null, up: false, value: "14", label: "Unprocessed Actions", sub: "Review 8 · Withdrawal 3 · CS 3" },
];
