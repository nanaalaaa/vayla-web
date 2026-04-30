import { useState } from "react";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const STATUS_FILTERS = [
  "All",
  "ReviewPending",
  "Approve",
  "Hold",
  "Reject",
  "재Submit",
];

const TRACKS = [
  {
    id: "TR-1001",
    name: "Midnight Groove",
    creator: "DJ Hana",
    challenge: "Neon Night Beat",
    date: "04-19 09:14",
    genre: "K-POP",
    play: "2:48",
    tool: "suno",
    status: "pending" as const,
    memo: "Chorus Audio Quality Confirm Required",
  },
  {
    id: "TR-1002",
    name: "Electric Dreams",
    creator: "NOVA",
    challenge: "Neon Night Beat",
    date: "04-19 08:50",
    genre: "EDM",
    play: "3:12",
    tool: "udio",
    status: "hold" as const,
    memo: "Category Eligibility Confirm 중",
  },
  {
    id: "TR-1003",
    name: "Seoul Streets",
    creator: "MC Park",
    challenge: "Urban Flow Session",
    date: "04-18 19:22",
    genre: "Hip-Hop",
    play: "3:05",
    tool: "mureka",
    status: "approved" as const,
    memo: "Eligible",
  },
  {
    id: "TR-1004",
    name: "Spring Whisper",
    creator: "Lina Moon",
    challenge: "Spring Vocal Pick",
    date: "04-18 17:40",
    genre: "Ballad",
    play: "3:28",
    tool: "suno",
    status: "pending" as const,
    memo: "-",
  },
  {
    id: "TR-1005",
    name: "Bassline Fire",
    creator: "KJ Beat",
    challenge: "Neon Night Beat",
    date: "04-18 16:15",
    genre: "EDM",
    play: "2:56",
    tool: "udio",
    status: "rejected" as const,
    memo: "Copyright Concern Confirm Required",
  },
  {
    id: "TR-1006",
    name: "Falling Light",
    creator: "Aira",
    challenge: "Spring Vocal Pick",
    date: "04-18 15:50",
    genre: "Pop",
    play: "3:01",
    tool: "suno",
    status: "resubmit" as const,
    memo: "곡 Description Needs Improvement",
  },
];

const HISTORY = [
  {
    date: "04-19 10:12",
    track: "Electric Dreams",
    status: "hold" as const,
    reviewer: "Kai",
    reason: "Category Eligibility Confirm 중",
  },
  {
    date: "04-19 09:44",
    track: "Seoul Streets",
    status: "approved" as const,
    reviewer: "Jay",
    reason: "Eligible",
  },
  {
    date: "04-18 18:20",
    track: "Bassline Fire",
    status: "rejected" as const,
    reviewer: "Tony",
    reason: "Copyright Concern Confirm Required",
  },
];

const toolTag = (tool: string) => {
  if (tool === "suno")
    return (
      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E6FAF5] text-[#00A88A]">
        Suno
      </span>
    );
  if (tool === "udio")
    return (
      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-500">
        Udio
      </span>
    );
  return (
    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-50 text-purple-500">
      Mureka
    </span>
  );
};

const statusLabel: Record<string, string> = {
  pending: "ReviewPending",
  approved: "Approve",
  hold: "Hold",
  rejected: "Reject",
  resubmit: "재Submit",
};
const statusVariant: Record<
  string,
  "pending" | "approved" | "hold" | "rejected" | "resubmit"
> = {
  pending: "pending",
  approved: "approved",
  hold: "hold",
  rejected: "rejected",
  resubmit: "resubmit",
};

export default function TrackReviewPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mb-6">
        <KpiCard
          color="yellow"
          label="Pending Review"
          value="24"
          sub="Immediately Process Required"
          valueColor="text-amber-500"
        />
        <KpiCard
          color="green"
          label="Approve Completed"
          value="128"
          sub="Cumulative Approve"
          valueColor="text-emerald-500"
        />
        <KpiCard
          color="orange"
          label="Hold"
          value="9"
          sub="Add Needs Review"
          valueColor="text-orange-500"
        />
        <KpiCard
          color="red"
          label="Reject"
          value="14"
          sub="Basis Unmet"
          valueColor="text-red-500"
        />
        <KpiCard
          color="purple"
          label="재Submit Request"
          value="6"
          sub="Edit Pending"
          valueColor="text-purple-500"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
            📋 Track Review List
          </div>
          <button className="px-3.5 py-[7px] rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50">
            📥 Export
          </button>
        </div>

        <div className="flex items-center gap-2.5 px-6 py-4 border-b border-gray-100 flex-wrap">
          <div className="flex gap-1">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-[6px] rounded-full border text-xs font-semibold cursor-pointer transition-all ${
                  activeFilter === f
                    ? "bg-[#1A2332] text-white border-[#1A2332]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#00C9A7] hover:text-[#00C9A7]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex-1" />
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>All Challenges</option>
            <option>Neon Night Beat</option>
            <option>Urban Flow Session</option>
            <option>Spring Vocal Pick</option>
          </select>
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>All Genre</option>
            <option>K-POP</option>
            <option>EDM</option>
            <option>Hip-Hop</option>
            <option>Ballad</option>
            <option>Pop</option>
            <option>R&B</option>
          </select>
          <input
            type="text"
            placeholder="🔍 Track, Creator, ID Search..."
            className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none w-64 focus:border-[#00C9A7]"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50">
                {[
                  "ID",
                  "Track",
                  "Creator",
                  "Challenge",
                  "Submission Date",
                  "Genre",
                  "Play",
                  "Tools",
                  "Status",
                  "Review Memo",
                  "Action",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-3.5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TRACKS.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-3.5 py-3.5 border-t border-gray-100 font-semibold text-[#1A2332] font-mono text-sm">
                    {row.id}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100 font-bold text-[#1A2332]">
                    {row.name}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100 font-semibold">
                    {row.creator}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100 text-xs text-gray-500">
                    {row.challenge}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100 text-xs text-gray-400 whitespace-nowrap">
                    {row.date}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 text-gray-600">
                      {row.genre}
                    </span>
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100 text-xs font-mono text-gray-500">
                    {row.play}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    {toolTag(row.tool)}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <StatusBadge
                      variant={statusVariant[row.status]}
                      label={statusLabel[row.status]}
                    />
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100 text-xs text-gray-500 max-w-[140px] truncate">
                    {row.memo}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <div className="flex gap-1 flex-nowrap">
                      <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600">
                        Approve
                      </button>
                      <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-500 text-white hover:bg-orange-600">
                        Hold
                      </button>
                      <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-red-500 text-white hover:bg-red-600">
                        Reject
                      </button>
                      <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-500 text-white hover:bg-purple-600">
                        재Submit
                      </button>
                      <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                        Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Total 181 items 중 1-6 Display
          </div>
          <div className="flex gap-1">
            {["Previous", "1", "2", "3", "Next"].map((p) => (
              <button
                key={p}
                className={`min-w-[32px] h-8 px-2 rounded-lg border text-sm font-semibold cursor-pointer flex items-center justify-center ${
                  p === "1"
                    ? "bg-[#00C9A7] text-white border-[#00C9A7]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#00C9A7] hover:text-[#00C9A7]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
            🕐 Recent Review History
          </div>
          <div className="text-xs text-gray-400">
            Recent Process된 Review History
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                {["Date", "Track", "Status", "Reviewer", "Reason"].map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HISTORY.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-3 py-2.5 border-t border-gray-100 text-xs text-gray-400 whitespace-nowrap">
                    {row.date}
                  </td>
                  <td className="px-3 py-2.5 border-t border-gray-100 font-semibold text-[#1A2332] text-sm">
                    {row.track}
                  </td>
                  <td className="px-3 py-2.5 border-t border-gray-100">
                    <StatusBadge
                      variant={statusVariant[row.status]}
                      label={statusLabel[row.status]}
                    />
                  </td>
                  <td className="px-3 py-2.5 border-t border-gray-100 text-xs text-gray-500">
                    {row.reviewer}
                  </td>
                  <td className="px-3 py-2.5 border-t border-gray-100 text-xs text-gray-500">
                    {row.reason}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
