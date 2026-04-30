export const REVIEW_ITEMS = [
  { thumb: "linear-gradient(135deg, #FF6B8A, #FF8E53)", icon: "🎤", title: "Starlight Express", artist: "Yuna Park", challenge: "Neon Night Beat", genre: "K-POP", duration: "3:42", time: "⏳ 2h 전 Submit", timeColor: "text-amber-500" },
  { thumb: "linear-gradient(135deg, #667EEA, #764BA2)", icon: "🎹", title: "Digital Paradise", artist: "DJ Min", challenge: "Neon Night Beat", genre: "EDM", duration: "4:15", time: "⏳ 3h 전 Submit", timeColor: "text-amber-500" },
  { thumb: "linear-gradient(135deg, #11998E, #38EF7D)", icon: "🎧", title: "Moonlit Serenade", artist: "Chris Lee", challenge: "Urban Flow Session", genre: "R&B", duration: "3:58", time: "⏳ 5h 전 Submit", timeColor: "text-orange-500" },
  { thumb: "linear-gradient(135deg, #F093FB, #F5576C)", icon: "🎸", title: "Cyber Punk Dreams", artist: "AXEL", challenge: "Neon Night Beat", genre: "EDM", duration: "5:02", time: "⏳ 8h 전 Submit", timeColor: "text-red-500" },
  { thumb: "linear-gradient(135deg, #4FACFE, #00F2FE)", icon: "🎻", title: "Ocean Breeze", artist: "Marina K", challenge: "Urban Flow Session", genre: "Soul", duration: "4:32", time: "⏳ 12h 전 Submit", timeColor: "text-red-500" },
];

export const HISTORY_ROWS = [
  { bg: "linear-gradient(135deg, #a8e6cf, #88d8a8)", name: "Future Bass 2026", dur: "3:28", artist: "Zion K", challenge: "Neon Night Beat", genre: "EDM", date: "04.17 09:15", status: "approved" as const, statusLabel: "Approve", reviewer: "Admin Jay", reason: "-" },
  { bg: "linear-gradient(135deg, #ffd3a5, #fd6585)", name: "Sunset Boulevard", dur: "4:01", artist: "Mia Choi", challenge: "Urban Flow Session", genre: "R&B", date: "04.17 08:42", status: "approved" as const, statusLabel: "Approve", reviewer: "Admin Jay", reason: "-" },
  { bg: "linear-gradient(135deg, #c2c2c2, #999)", name: "Copycat Remix", dur: "2:55", artist: "user_8472", challenge: "Neon Night Beat", genre: "Hip-Hop", date: "04.16 22:10", status: "rejected" as const, statusLabel: "Reject", reviewer: "Admin Kim", reason: "Copyright Suspected", reasonColor: "text-red-500" },
  { bg: "linear-gradient(135deg, #e0c3fc, #8ec5fc)", name: "Lost In Tokyo", dur: "3:44", artist: "Haru", challenge: "Neon Night Beat", genre: "K-POP", date: "04.16 19:35", status: "hold" as const, statusLabel: "Hold", reviewer: "Admin Lee", reason: "Audio Quality Confirm Required", reasonColor: "text-purple-500" },
  { bg: "linear-gradient(135deg, #13547a, #80d0c7)", name: "Gravity Falls", dur: "3:12", artist: "Ryan Seo", challenge: "Urban Flow Session", genre: "Soul", date: "04.16 16:28", status: "approved" as const, statusLabel: "Approve", reviewer: "Admin Jay", reason: "-" },
];

export const NFT_ROWS = [
  { track: "Midnight Groove", artist: "DJ Hana", votes: 482, nftType: "Badge NFT", nftClass: "bg-purple-50 text-purple-500", status: "pending" as const, statusLabel: "Pending", action: "Publish", actionClass: "bg-[#00C9A7] text-white hover:bg-[#00A88A]" },
  { track: "Electric Dreams", artist: "NOVA", votes: 347, nftType: "Badge NFT", nftClass: "bg-purple-50 text-purple-500", status: "pending" as const, statusLabel: "Pending", action: "Publish", actionClass: "bg-[#00C9A7] text-white hover:bg-[#00A88A]" },
  { track: "Seoul Streets", artist: "MC Park", votes: 291, nftType: "Badge NFT", nftClass: "bg-purple-50 text-purple-500", status: "pending" as const, statusLabel: "Pending", action: "Publish", actionClass: "bg-[#00C9A7] text-white hover:bg-[#00A88A]" },
  { track: "Neon Pulse", artist: "Luna", votes: 268, nftType: "Reward NFT", nftClass: "bg-[#E6FAF5] text-[#00A88A]", status: "approved" as const, statusLabel: "Publish Completed", action: "TX Confirm", actionClass: "border border-gray-200 bg-white text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]" },
  { track: "Cherry Blossom", artist: "Sakura", votes: 224, nftType: "Reward NFT", nftClass: "bg-[#E6FAF5] text-[#00A88A]", status: "approved" as const, statusLabel: "Publish Completed", action: "TX Confirm", actionClass: "border border-gray-200 bg-white text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]" },
];

export const GENRES = [
  { icon: "🎤", name: "K-POP", count: 97 },
  { icon: "🎛️", name: "EDM", count: 62 },
  { icon: "🎤", name: "Hip-Hop", count: 51 },
  { icon: "🎷", name: "R&B", count: 32 },
  { icon: "🎵", name: "Soul", count: 18 },
  { icon: "💃", name: "Pop", count: 15 },
  { icon: "🌴", name: "Dance", count: 12 },
  { icon: "🌊", name: "Tropical", count: 8 },
  { icon: "🎸", name: "Rock", count: 5 },
  { icon: "🎻", name: "Classical", count: 2 },
];

export const GENRE_DIST = [
  { label: "K-POP", pct: 34, color: "#00C9A7" },
  { label: "EDM", pct: 22, color: "#3B82F6" },
  { label: "Hip-Hop", pct: 18, color: "#8B5CF6" },
  { label: "R&B / Soul", pct: 14, color: "#F97316" },
  { label: "Pop / Dance", pct: 12, color: "#F59E0B" },
];

export const LEADERBOARD = [
  { rank: 1, rankClass: "bg-amber-100 text-amber-600", name: "Midnight Groove", artist: "DJ Hana · K-POP", votes: "482 votes", waveform: true },
  { rank: 2, rankClass: "bg-gray-100 text-gray-500", name: "Electric Dreams", artist: "NOVA · EDM", votes: "347 votes" },
  { rank: 3, rankClass: "bg-orange-100 text-orange-600", name: "Seoul Streets", artist: "MC Park · Hip-Hop", votes: "291 votes" },
  { rank: 4, rankClass: "bg-gray-50 text-gray-400", name: "Neon Pulse", artist: "Luna · EDM", votes: "268 votes" },
  { rank: 5, rankClass: "bg-gray-50 text-gray-400", name: "Cherry Blossom", artist: "Sakura · K-POP", votes: "224 votes" },
];

export const CURRENT_SETTINGS = [
  { label: "🎵 Track Submission Cost", value: "10 VAYLA" },
  { label: "🗳️ Vote Cost", value: "1 VAYLA" },
  { label: "⛽ Network Fee", value: "~0.001 BNB" },
  { label: "🏆 NFT Publish Basis", value: "5 Votes" },
  { label: "📅 Challenge Period", value: "14days" },
];

export const REWARD_SUMMARY = [
  { label: "🎨 Publish Completed NFT", value: "9", valueColor: "text-[#00C9A7]" },
  { label: "⏳ Publish Pending NFT", value: "3", valueColor: "text-amber-500" },
  { label: "💰 Consumed된 VAYLA (Submit)", value: "650 VAYLA", valueColor: "text-[#1A2332]" },
  { label: "🗳️ Consumed된 VAYLA (Vote)", value: "3,925 VAYLA", valueColor: "text-[#1A2332]" },
];
