import { useState } from "react";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const VOTE_BARS = [
  12, 8, 15, 10, 5, 7, 3, 4, 6, 8, 12, 18, 85, 92, 78, 65, 15, 10, 8, 5, 3, 6,
  4, 2,
];
const CASE_STATUS_FILTERS = [
  "All",
  "Normal",
  "Review Required",
  "Under Review",
  "CountHold",
];

const CASES = [
  {
    id: "VC-1001",
    wallet: "0x8a4F…3eD1",
    track: "Neon Pulse",
    challenge: "Neon Night Beat",
    time: "2026.04.19 14:32",
    votes: 48,
    voteColor: "",
    risk: "low",
    detected: "—",
    detectedColor: "text-gray-500",
    status: "normal" as const,
    actions: ["Details"],
  },
  {
    id: "VC-1002",
    wallet: "0x3bC7…9fA2",
    track: "Night Glow",
    challenge: "Neon Night Beat",
    time: "2026.04.19 13:18",
    votes: 312,
    voteColor: "text-red-500",
    risk: "high",
    detected: "다Stop Suspicious Spike",
    detectedColor: "text-red-500 font-semibold",
    status: "review" as const,
    actions: ["Normal", "Hold", "Details"],
  },
  {
    id: "VC-1003",
    wallet: "0xF12D…7cB5",
    track: "Midnight Drive",
    challenge: "Neon Night Beat",
    time: "2026.04.19 12:45",
    votes: 187,
    voteColor: "text-orange-500",
    risk: "mid",
    detected: "단hours Focus Vote",
    detectedColor: "text-orange-500 font-semibold",
    status: "reviewing" as const,
    actions: ["Normal", "Hold", "Details"],
  },
  {
    id: "VC-1004",
    wallet: "0x92eA…1dF8",
    track: "City Lights",
    challenge: "Neon Night Beat",
    time: "2026.04.19 11:09",
    votes: 23,
    voteColor: "",
    risk: "low",
    detected: "—",
    detectedColor: "text-gray-500",
    status: "normal" as const,
    actions: ["Details"],
  },
  {
    id: "VC-1005",
    wallet: "0x5Ae3…8bC0",
    track: "Rain on Window",
    challenge: "Lo-Fi Summer",
    time: "2026.04.19 09:52",
    votes: 265,
    voteColor: "text-red-500",
    risk: "high",
    detected: "봇 Pattern Detected",
    detectedColor: "text-red-500 font-semibold",
    status: "count-hold" as const,
    actions: ["Normal", "Review", "Details"],
  },
];

const HISTORY = [
  {
    id: "VC-0998",
    wallet: "0x71bA…2eC4",
    from: "review",
    fromLabel: "Review Required",
    to: "normal",
    toLabel: "Normal",
    handler: "Jay Kim",
    time: "2026.04.18 16:42",
    memo: "IP Confirm Result Normal User",
  },
  {
    id: "VC-0995",
    wallet: "0xAc3F…5dB7",
    from: "review",
    fromLabel: "Review Required",
    to: "count-hold",
    toLabel: "CountHold",
    handler: "Kai Lee",
    time: "2026.04.18 14:20",
    memo: "Multiple Wallet Integration Confirm, Hold Process",
  },
  {
    id: "VC-0991",
    wallet: "0xD82E…9aF1",
    from: "reviewing",
    fromLabel: "Under Review",
    to: "normal",
    toLabel: "Normal",
    handler: "Jay Kim",
    time: "2026.04.18 11:05",
    memo: "단hours Focus Vote or Normal Pattern Confirm",
  },
];

const riskBadge = (risk: string) => {
  if (risk === "low")
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold bg-emerald-50 text-emerald-600">
        ● Low
      </span>
    );
  if (risk === "mid")
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold bg-amber-50 text-amber-600">
        ● Mid
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold bg-red-50 text-red-600">
      ● High
    </span>
  );
};

const statusVariantMap: Record<
  string,
  "normal" | "review" | "reviewing" | "count-hold"
> = {
  normal: "normal",
  review: "review",
  reviewing: "reviewing",
  "count-hold": "count-hold",
};
const statusLabelMap: Record<string, string> = {
  normal: "Normal",
  review: "Review Required",
  reviewing: "Under Review",
  "count-hold": "CountHold",
};

export default function VoteMonitorPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mb-6">
        <KpiCard
          color="mint"
          label="Total Votes"
          value="18,240"
          sub="All Cumulative Vote"
        />
        <KpiCard
          color="blue"
          label="Unique Voters"
          value="9,830"
          sub="Wallet Basis Voters"
        />
        <KpiCard
          color="green"
          label="Average Vote/인"
          value="1.86"
          sub="Average per Person"
        />
        <KpiCard
          color="red"
          label="Pattern Detected"
          value="18"
          sub="Auto Detected items"
          valueColor="text-red-500"
        />
        <KpiCard
          color="yellow"
          label="Needs Review"
          value="12"
          sub="Ops Confirm Pending"
          valueColor="text-amber-500"
        />
        <KpiCard
          color="purple"
          label="On-chain Verify률"
          value="98.7%"
          sub="BSC Verify Ratio"
        />
      </div>

      <div
        className="rounded-[14px] p-6 mb-6"
        style={{ background: "linear-gradient(135deg, #1A2332, #243044)" }}
      >
        <div className="text-base font-bold text-white mb-4 flex items-center gap-2">
          🏆 실hours Vote Leaderboard — Neon Night Beat Challenge
        </div>
        <div className="flex flex-col gap-2">
          {[
            {
              rank: 1,
              name: "DJ Hana",
              track: "Neon Pulse — K-Pop / Electronic",
              votes: "2,847",
              change: "▲ 142",
              changeColor: "text-emerald-400",
              rankClass: "[background:linear-gradient(135deg,#FFD700,#FFA500)]",
            },
            {
              rank: 2,
              name: "BeatMaker_K",
              track: "Night Glow — Hip-Hop / Trap",
              votes: "2,503",
              change: "▲ 89",
              changeColor: "text-emerald-400",
              rankClass: "[background:linear-gradient(135deg,#C0C0C0,#A0A0A0)]",
            },
            {
              rank: 3,
              name: "SynthWave_J",
              track: "Midnight Drive — Synthwave / Retro",
              votes: "2,198",
              change: "▼ 23",
              changeColor: "text-red-400",
              rankClass: "[background:linear-gradient(135deg,#CD7F32,#A0522D)]",
            },
            {
              rank: 4,
              name: "Melody_Ace",
              track: "City Lights — Pop / Acoustic",
              votes: "1,847",
              change: "— 0",
              changeColor: "text-gray-400",
              rankClass: "bg-[#2D3B50]",
            },
            {
              rank: 5,
              name: "LoFi_Dreamer",
              track: "Rain on Window — Lo-Fi / Chill",
              votes: "1,624",
              change: "▲ 56",
              changeColor: "text-emerald-400",
              rankClass: "bg-[#2D3B50]",
            },
          ].map((item) => (
            <div
              key={item.rank}
              className="flex items-center gap-3.5 p-3 rounded-[10px] transition-colors hover:bg-white/[0.08]"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0 ${item.rankClass}`}
              >
                {item.rank}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{item.track}</div>
              </div>
              <div className="text-lg font-extrabold text-[#00C9A7]">
                {item.votes}
                <span
                  className={`text-xs font-semibold ml-1.5 ${item.changeColor}`}
                >
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
            🔍 Vote Case Management
          </div>
          <button className="px-3 py-[7px] rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50">
            📥 CSV Export
          </button>
        </div>

        <div className="flex items-center gap-2.5 px-6 py-4 border-b border-gray-100 flex-wrap">
          <div className="flex gap-1">
            {CASE_STATUS_FILTERS.map((f) => (
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
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>Challenge: All</option>
            <option>Neon Night Beat</option>
            <option>Lo-Fi Summer</option>
            <option>K-Pop Rising</option>
          </select>
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>Period: All</option>
            <option>Recent 24hours</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
          <input
            type="text"
            placeholder="Wallet / Track ID Search..."
            className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none w-52 focus:border-[#00C9A7]"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50">
                {[
                  "Case ID",
                  "Voter (Wallet)",
                  "Target Track",
                  "Challenge",
                  "Vote Time",
                  "Vote Count",
                  "Risk",
                  "Detected Type",
                  "Status",
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
              {CASES.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-3.5 py-3.5 border-t border-gray-100 font-semibold text-[#1A2332]">
                    {row.id}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <span className="font-mono text-xs text-[#00A88A]">
                      {row.wallet}
                    </span>
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    {row.track}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    {row.challenge}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    {row.time}
                  </td>
                  <td
                    className={`px-3.5 py-3.5 border-t border-gray-100 font-bold ${row.voteColor}`}
                  >
                    {row.votes}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    {riskBadge(row.risk)}
                  </td>
                  <td
                    className={`px-3.5 py-3.5 border-t border-gray-100 text-xs ${row.detectedColor}`}
                  >
                    {row.detected}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <StatusBadge
                      variant={statusVariantMap[row.status]}
                      label={statusLabelMap[row.status]}
                    />
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <div className="flex gap-1 flex-nowrap">
                      {row.actions.includes("Normal") && (
                        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600">
                          Normal
                        </button>
                      )}
                      {row.actions.includes("Hold") && (
                        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-500 text-white hover:bg-orange-600">
                          Hold
                        </button>
                      )}
                      {row.actions.includes("Review") && (
                        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500 text-white hover:bg-amber-600">
                          Review
                        </button>
                      )}
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
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
            📊 Hourly Vote Activity
          </div>
        </div>
        <div className="p-6 bg-gray-50">
          <div className="flex items-end gap-[3px] h-[100px]">
            {VOTE_BARS.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-[3px] min-w-[6px] hover:opacity-80 transition-opacity ${h > 50 ? "bg-red-500" : "bg-[#00C9A7]"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 pt-1">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>13:00 ⚠️</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
            📋 Recent Review History
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                {[
                  "Case ID",
                  "Voter",
                  "Before Change",
                  "After Change",
                  "Handler",
                  "Process Time",
                  "Memo",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-2.5 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HISTORY.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-2.5 py-2 border-t border-gray-100 font-semibold text-xs">
                    {row.id}
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100 font-mono text-[11px]">
                    {row.wallet}
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100">
                    <StatusBadge
                      variant={statusVariantMap[row.from]}
                      label={row.fromLabel}
                      className="text-[11px]"
                    />
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100">
                    <StatusBadge
                      variant={statusVariantMap[row.to]}
                      label={row.toLabel}
                      className="text-[11px]"
                    />
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100 text-xs">
                    {row.handler}
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100 text-xs">
                    {row.time}
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100 text-[11px] text-gray-500">
                    {row.memo}
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
