import { useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

type TabId = "detail" | "tracks" | "votes" | "edit";

const TABS: { id: TabId; label: string }[] = [
  { id: "detail", label: "📋 Details Info" },
  { id: "tracks", label: "🎵 Track List" },
  { id: "votes", label: "🗳️ Voting Status" },
  { id: "edit", label: "✏️ Edit" },
];

const ACTIVITY_LOG = [
  {
    color: "bg-[#00C9A7]",
    content: "<strong>System</strong> — Challenge LIVE Start",
    time: "2026-04-10 00:00",
  },
  {
    color: "bg-blue-500",
    content: "<strong>Jay</strong> — Genre에 Hip-Hop Add",
    time: "2026-04-09 18:30",
  },
  {
    color: "bg-purple-500",
    content: "<strong>Jay</strong> — Reward Pool 5,000 VAYLA confirmed",
    time: "2026-04-08 14:00",
  },
  {
    color: "bg-amber-500",
    content: "<strong>Kai</strong> — Challenge Info Review Completed",
    time: "2026-04-08 11:20",
  },
  {
    color: "bg-gray-300",
    content: "<strong>Jay</strong> — Create Challenge",
    time: "2026-04-07 09:00",
  },
];

const TRACK_LIST = [
  {
    name: "Starlight Express",
    artist: "Yuna Park",
    genre: "K-POP",
    len: "3:42",
    date: "04-15",
    status: "approved" as const,
    votes: 482,
    reviewer: "Admin Jay",
  },
  {
    name: "Digital Paradise",
    artist: "DJ Min",
    genre: "EDM",
    len: "4:15",
    date: "04-15",
    status: "approved" as const,
    votes: 371,
    reviewer: "Admin Jay",
  },
  {
    name: "Midnight Groove",
    artist: "Zion K",
    genre: "EDM",
    len: "3:28",
    date: "04-16",
    status: "approved" as const,
    votes: 298,
    reviewer: "Admin Jay",
  },
  {
    name: "Neon Streets",
    artist: "MC Flow",
    genre: "Hip-Hop",
    len: "3:55",
    date: "04-16",
    status: "pending" as const,
    votes: null,
    reviewer: "-",
  },
  {
    name: "Cyber Punk Dreams",
    artist: "AXEL",
    genre: "EDM",
    len: "5:02",
    date: "04-16",
    status: "rejected" as const,
    votes: null,
    reviewer: "Admin Kim",
  },
];

const LEADERBOARD = [
  {
    rank: 1,
    cls: "gold",
    name: "Starlight Express",
    artist: "Yuna Park · K-POP",
    votes: "482표",
  },
  {
    rank: 2,
    cls: "silver",
    name: "Digital Paradise",
    artist: "DJ Min · EDM",
    votes: "371표",
  },
  {
    rank: 3,
    cls: "bronze",
    name: "Midnight Groove",
    artist: "Zion K · EDM",
    votes: "298표",
  },
  {
    rank: 4,
    cls: "normal",
    name: "Seoul Dreams",
    artist: "Luna · K-POP",
    votes: "245표",
  },
  {
    rank: 5,
    cls: "normal",
    name: "Bass Drop City",
    artist: "NOVA · EDM",
    votes: "218표",
  },
];

const rankClass: Record<string, string> = {
  gold: "[background:linear-gradient(135deg,#FFD700,#FFA500)] text-white",
  silver: "[background:linear-gradient(135deg,#C0C0C0,#A0A0A0)] text-white",
  bronze: "[background:linear-gradient(135deg,#CD7F32,#A0522D)] text-white",
  normal: "bg-gray-100 text-gray-500",
};

const statusLabel: Record<string, string> = {
  approved: "Approve", pending: "Pending", rejected: "Reject",
};
const statusVariant: Record<string, "approved" | "pending" | "rejected"> = {
  approved: "approved", pending: "pending", rejected: "rejected",
};

type RewardRow = { rank: string; vayla: string; nft: string; bold: boolean };
const REWARD_STRUCTURE: RewardRow[] = [
  { rank: "🥇 1st Place", vayla: "2,000 VAYLA", nft: "Gold Champion", bold: true },
  { rank: "🥈 2nd Place", vayla: "1,200 VAYLA", nft: "Silver Star", bold: true },
  { rank: "🥉 3rd Place", vayla: "800 VAYLA", nft: "Bronze Beat", bold: true },
  { rank: "4~5위", vayla: "각 300 VAYLA", nft: "Top 5 Badge", bold: false },
  { rank: "Spotlight", vayla: "100 VAYLA", nft: "Spotlight Pick", bold: false },
];
const rewardColumns: ColumnDef<RewardRow, unknown>[] = [
  { accessorKey: "rank", header: "Rank", cell: ({ row }) => <span className={row.original.bold ? "font-bold text-sm" : "text-sm"}>{row.original.rank}</span> },
  { accessorKey: "vayla", header: "VAYLA Reward", cell: ({ getValue }) => <span className="text-sm">{getValue() as string}</span> },
  { accessorKey: "nft", header: "NFT Badge", cell: ({ getValue }) => <span className="text-sm">{getValue() as string}</span> },
];

type TrackItem = (typeof TRACK_LIST)[number];
const trackColumns: ColumnDef<TrackItem, unknown>[] = [
  { accessorKey: "name", header: "Track", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332]">{getValue() as string}</span> },
  { accessorKey: "artist", header: "Artist" },
  { accessorKey: "genre", header: "Genre", cell: ({ getValue }) => <span className="inline-block px-2.5 py-[3px] bg-gray-100 rounded-[5px] text-[11px] font-semibold text-gray-600">{getValue() as string}</span> },
  { accessorKey: "len", header: "Length" },
  { accessorKey: "date", header: "Submission Date", cell: ({ getValue }) => <span className="text-xs text-gray-400">{getValue() as string}</span> },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <StatusBadge variant={statusVariant[row.original.status]} label={statusLabel[row.original.status]} /> },
  { accessorKey: "votes", header: "Vote Count", cell: ({ getValue }) => { const v = getValue(); return v != null ? <span className="font-bold text-[#00A88A]">{v as number}</span> : <span className="text-gray-300">-</span>; } },
  { accessorKey: "reviewer", header: "Reviewer", cell: ({ getValue }) => <span className="text-xs text-gray-500">{getValue() as string}</span> },
];

export default function ChallengeDetailPage() {
  const [activeTab, setActiveTab] = useState<TabId>("detail");

  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-[14px] p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-[22px] font-extrabold text-[#1A2332]">
              Neon Night Beat
            </div>
            <div className="text-sm text-gray-400 mt-1">
              2026.04.10 ~ 2026.04.24 (D-7)
            </div>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <StatusBadge variant="live" label="LIVE" />
              <span className="inline-block px-2.5 py-[3px] bg-gray-100 rounded-[5px] text-[11px] font-semibold text-gray-600">
                K-POP
              </span>
              <span className="inline-block px-2.5 py-[3px] bg-gray-100 rounded-[5px] text-[11px] font-semibold text-gray-600">
                EDM
              </span>
              <span className="inline-block px-2.5 py-[3px] bg-gray-100 rounded-[5px] text-[11px] font-semibold text-gray-600">
                Hip-Hop
              </span>
            </div>
          </div>
          <div>
            <button className="px-3.5 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600">
              Challenge Close
            </button>
          </div>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
          <div
            className="h-full rounded-full"
            style={{
              width: "58%",
              background: "linear-gradient(90deg, #00C9A7, #00A88A)",
            }}
          />
        </div>
        <div className="text-xs text-gray-400 mb-4">
          Progress Rate 58% · Remaining Period 7days
        </div>
        <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-100">
          {[
            { label: "Submitted Tracks", value: "47", mint: false },
            { label: "Total Vote", value: "3,284", mint: true },
            { label: "Participant", value: "892", mint: false },
            { label: "VAYLA Consumed", value: "470", mint: false },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[11px] text-gray-400 font-medium mb-1">
                {s.label}
              </div>
              <div
                className={`text-[22px] font-extrabold ${s.mint ? "text-[#00A88A]" : "text-[#1A2332]"}`}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3.5 px-5 text-center text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${i < TABS.length - 1 ? "border-r border-gray-100" : ""} ${
              activeTab === tab.id
                ? "text-[#00A88A] bg-[#E6FAF5] font-bold"
                : "text-gray-400 bg-white hover:text-[#1A2332] hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "detail" && (
        <div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100">
                <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
                  📋 Basic Info
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Challenge ID", value: "DC-001" },
                    { label: "Challenge Name", value: "Neon Night Beat" },
                    { label: "Period", value: "2026.04.10 ~ 04.24" },
                    {
                      label: "Status",
                      value: <StatusBadge variant="live" label="LIVE" />,
                    },
                    { label: "Vote Method", value: "VAYLA Token Vote" },
                    { label: "Vote당 Consumed", value: "1 VAYLA" },
                    { label: "Allowed Genre", value: "K-POP, EDM, Hip-Hop" },
                    { label: "Max Track Length", value: "5min 00sec" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-gray-50 rounded-[10px] border border-gray-100"
                    >
                      <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide mb-1">
                        {item.label}
                      </div>
                      <div className="text-[15px] font-bold text-[#1A2332]">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100">
                <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
                  🏆 Reward Structure
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="p-3.5 bg-gray-50 rounded-[10px] border border-gray-100">
                    <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide mb-1">
                      Total Reward Pool
                    </div>
                    <div className="text-[22px] font-extrabold text-[#00A88A]">
                      5,000 VAYLA
                    </div>
                  </div>
                  <div className="p-3.5 bg-gray-50 rounded-[10px] border border-gray-100">
                    <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide mb-1">
                      Reward Type
                    </div>
                    <div className="text-[15px] font-bold text-[#1A2332]">
                      Rank based + Spotlight
                    </div>
                  </div>
                </div>
                <DataTable columns={rewardColumns} data={REWARD_STRUCTURE} />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="px-6 py-5 border-b border-gray-100">
              <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
                📝 Challenge Description & Rules
              </div>
            </div>
            <div className="p-6">
              <div className="mb-5">
                <div className="text-sm font-semibold text-[#1A2332] mb-2">
                  Description
                </div>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-[10px] text-sm text-gray-600 leading-relaxed">
                  Neon-toned resonating beats music challenge. K-POP, EDM,
                  Hip-Hop Genre original tracks Submit. Covers and remixes are
                  not allowed. All submitted tracks must comply with copyright
                  verification, and the final Rank is decided by VAYLA Token
                  Vote.
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#1A2332] mb-2">
                  Participation Rules
                </div>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-[10px] text-sm text-gray-600 leading-[1.8]">
                  1. Participant당 Max 2 tracks Submit Available
                  <br />
                  2. Track Length는 Min 1min, Max 5min
                  <br />
                  3. Original tracks only Allowed (Cover/Remix Not Allowed)
                  <br />
                  4. Vote는 1인 1일 10표 until (1표 = 1 VAYLA)
                  <br />
                  5. Fraudulent Vote Auto-excluded upon detection
                  <br />
                  6. Review Tracks that did not pass Vote Target on Exclude
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
                📜 Activity Log
              </div>
              <span className="text-xs text-gray-400">Recent 5 items</span>
            </div>
            <div className="p-6">
              {ACTIVITY_LOG.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-3 py-2.5 ${i < ACTIVITY_LOG.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 ${item.color}`}
                  />
                  <div>
                    <div
                      className="text-sm text-gray-700"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "tracks" && (
        <div>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <KpiCard
              color="mint"
              label="Approve Track"
              value="38"
              sub="Vote Available"
            />
            <KpiCard
              color="yellow"
              label="Pending Review"
              value="5"
              sub="Needs Review"
              valueColor="text-amber-500"
            />
            <KpiCard
              color="red"
              label="Reject"
              value="3"
              sub="copyright, etc."
              valueColor="text-red-500"
            />
            <KpiCard
              color="purple"
              label="Hold"
              value="1"
              sub="Confirm 중"
              valueColor="text-purple-500"
            />
          </div>
          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
                🎵 Submitted Tracks
              </div>
              <button className="px-3 py-[7px] rounded-lg bg-[#00C9A7] text-white text-sm font-semibold hover:bg-[#00A88A]">
                All Review Pages →
              </button>
            </div>
            <DataTable columns={trackColumns} data={TRACK_LIST} minWidth={900} />
          </div>
        </div>
      )}

      {activeTab === "votes" && (
        <div>
          <div className="grid grid-cols-6 gap-4 mb-6">
            <KpiCard color="mint" label="Total Votes" value="3,284" sub="표" />
            <KpiCard
              color="blue"
              label="Total Participants"
              value="892"
              sub="users"
            />
            <KpiCard
              color="purple"
              label="VAYLA Consumed"
              value="470"
              sub="VAYLA"
              valueColor="text-purple-500"
            />
            <KpiCard
              color="yellow"
              label="Today Vote"
              value="284"
              sub="표 (24h)"
              valueColor="text-amber-500"
            />
            <KpiCard
              color="orange"
              label="or more Vote Detected"
              value="3"
              sub="items"
              valueColor="text-orange-500"
            />
            <KpiCard
              color="green"
              label="Average Vote/인"
              value="3.7"
              sub="표"
              valueColor="text-emerald-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
                  🏆 Vote Rank
                </div>
                <span className="text-xs text-gray-400">실hours</span>
              </div>
              <div className="p-6">
                {LEADERBOARD.map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center gap-3 py-3 ${item.rank < LEADERBOARD.length ? "border-b border-gray-100" : ""}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center flex-shrink-0 ${rankClass[item.cls]}`}
                    >
                      {item.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-[#1A2332]">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-400">{item.artist}</div>
                    </div>
                    <div className="text-sm font-bold text-[#00A88A] ml-auto">
                      {item.votes}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
                  📊 Vote Activity
                </div>
                <button className="px-3 py-[7px] rounded-lg bg-[#00C9A7] text-white text-sm font-semibold hover:bg-[#00A88A]">
                  Monitoring Details →
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-end gap-1 h-[120px] mb-2">
                  {[
                    30, 45, 60, 35, 80, 55, 90, 70, 40, 55, 65, 85, 100, 75, 60,
                    45, 30, 50, 40, 35, 60, 45, 70, 55,
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#00C9A7] rounded-t-sm hover:opacity-80 transition-opacity"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-gray-400">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "edit" && (
        <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="text-base font-bold text-[#1A2332]">
              ✏️ Edit Challenge
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-5 mb-6">
              {[
                {
                  label: "Challenge Name",
                  placeholder: "Neon Night Beat",
                  required: true,
                },
                {
                  label: "Period Start",
                  placeholder: "2026.04.10",
                  required: true,
                },
                {
                  label: "Period End",
                  placeholder: "2026.04.24",
                  required: true,
                },
                {
                  label: "Vote Cost (VAYLA)",
                  placeholder: "1",
                  required: true,
                },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {f.label}{" "}
                    {f.required && (
                      <span className="text-red-500 ml-0.5">*</span>
                    )}
                  </label>
                  <input
                    type="text"
                    defaultValue={f.placeholder}
                    className="w-full px-3.5 py-[11px] border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-[#00C9A7] focus:shadow-[0_0_0_3px_rgba(0,201,167,0.1)]"
                  />
                </div>
              ))}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-3.5 py-[11px] border border-gray-200 rounded-lg text-sm text-gray-700 outline-none resize-vertical focus:border-[#00C9A7] leading-relaxed"
                defaultValue="Neon-toned resonating beats music challenge."
              />
            </div>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#00C9A7] text-white text-sm font-semibold hover:bg-[#00A88A]">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
