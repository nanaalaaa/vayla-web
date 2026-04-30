import { useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import type { PageId } from "@/types/navigation";

type ParticipationRow = { user: string; wallet: string; project: string; amount: string; tx: string; date: string; status: "active" | "pending"; revenue: string; revenueColor: string };
type SettlementRow = { project: string; amount: string; roi: string; roiClass: string; date: string; status: "complete" | "failed"; statusLabel: string };

const PARTICIPATION_DATA: ParticipationRow[] = [
  { user: "user_jk2845", wallet: "0x7a3b...f21d", project: "Waterbomb 2026", amount: "$500", tx: "0xf8e2...4a1b", date: "04.17 14:32", status: "active", revenue: "+$60", revenueColor: "text-[#00C9A7]" },
  { user: "user_ryan_seo", wallet: "0x2c8d...e47a", project: "Waterbomb 2026", amount: "$200", tx: "0xa3d1...9c2e", date: "04.17 12:15", status: "active", revenue: "+$24", revenueColor: "text-[#00C9A7]" },
  { user: "user_hana_k", wallet: "0x91ab...3c7f", project: "MAMA Awards", amount: "$1,000", tx: "0xb7c4...8d3a", date: "04.17 10:48", status: "active", revenue: "+$90", revenueColor: "text-[#00C9A7]" },
  { user: "user_nova_dj", wallet: "0x4e2f...a91c", project: "Waterbomb 2026", amount: "$300", tx: "0xd5e8...1b4f", date: "04.17 09:22", status: "active", revenue: "+$36", revenueColor: "text-[#00C9A7]" },
  { user: "user_sakura", wallet: "0x6d1a...b5e2", project: "MAMA Awards", amount: "$150", tx: "0xe9f3...7c2d", date: "04.16 23:10", status: "pending", revenue: "+$13.5", revenueColor: "text-gray-400" },
];

const SETTLEMENT_DATA: SettlementRow[] = [
  { project: "K-POP Night Seoul", amount: "$320,000", roi: "+8.2%", roiClass: "bg-[#E6FAF5] text-[#00A88A]", date: "04.10", status: "complete", statusLabel: "Completed" },
  { project: "BTS Fanmeet Tokyo", amount: "$450,000", roi: "+11.5%", roiClass: "bg-[#E6FAF5] text-[#00A88A]", date: "03.28", status: "complete", statusLabel: "Completed" },
  { project: "Indie Music Fest", amount: "$85,000", roi: "+5.1%", roiClass: "bg-[#E6FAF5] text-[#00A88A]", date: "03.15", status: "complete", statusLabel: "Completed" },
  { project: "Summer Sonic KR", amount: "$180,000", roi: "-2.3%", roiClass: "bg-red-50 text-red-500", date: "02.28", status: "failed", statusLabel: "Refund" },
];

const participationColumns: ColumnDef<ParticipationRow, unknown>[] = [
  { accessorKey: "user", header: "Participant", cell: ({ row }) => <div><div className="font-semibold text-[#1A2332] text-[13px]">{row.original.user}</div><div className="text-[11px] text-gray-400">{row.original.wallet}</div></div> },
  { accessorKey: "project", header: "Project", cell: ({ getValue }) => <span className="text-[13px] text-gray-600">{getValue() as string}</span> },
  { accessorKey: "amount", header: "Amount", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332] text-[13px]">{getValue() as string}</span> },
  { accessorKey: "tx", header: "TX Hash", cell: ({ getValue }) => <span className="font-mono text-[11px] text-[#00C9A7]">{getValue() as string}</span> },
  { accessorKey: "date", header: "Participation Date", cell: ({ getValue }) => <span className="text-[12px] text-gray-400">{getValue() as string}</span> },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <StatusBadge variant={row.original.status as "active" | "pending"} label={row.original.status === "active" ? "Confirm" : "Pending"} /> },
  { accessorKey: "revenue", header: "Est. Revenue", cell: ({ row }) => <span className={`text-[13px] font-semibold ${row.original.revenueColor}`}>{row.original.revenue}</span> },
];

const settlementColumns: ColumnDef<SettlementRow, unknown>[] = [
  { accessorKey: "project", header: "Project", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332] text-[13px]">{getValue() as string}</span> },
  { accessorKey: "amount", header: "Amount", cell: ({ getValue }) => <span className="text-[13px]">{getValue() as string}</span> },
  { accessorKey: "roi", header: "ROI", cell: ({ row }) => <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[12px] font-bold ${row.original.roiClass}`}>{row.original.roi}</span> },
  { accessorKey: "date", header: "Settlement Date", cell: ({ getValue }) => <span className="text-[12px] text-gray-400">{getValue() as string}</span> },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <StatusBadge variant={row.original.status} label={row.original.statusLabel} /> },
];

interface Props {
  onNavigate: (id: PageId) => void;
}

export default function BoostPage({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<
    "projects" | "participants" | "settlement" | "risk"
  >("projects");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 w-fit">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${
              activeTab === "projects"
                ? "bg-[#00C9A7] text-white shadow-[0_2px_8px_rgba(0,201,167,0.3)]"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            🚀 Project Management{" "}
            <span
              className={`px-1.5 py-0.5 rounded-md text-[11px] ${activeTab === "projects" ? "bg-white/25" : "bg-gray-100 text-gray-500"}`}
            >
              6
            </span>
          </button>
          <div className="flex items-center gap-0">
            <button
              onClick={() => setActiveTab("participants")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${
                activeTab === "participants"
                  ? "bg-[#00C9A7] text-white shadow-[0_2px_8px_rgba(0,201,167,0.3)]"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              📊 Participation Status
            </button>
            <button
              onClick={() => onNavigate("boost-participants")}
              className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center text-[12px] text-gray-500 -ml-1 hover:bg-[#E6FAF5] hover:text-[#00C9A7] transition-all"
              title="Participation Status Details Page"
            >
              ↗
            </button>
          </div>
          <div className="flex items-center gap-0">
            <button
              onClick={() => setActiveTab("settlement")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${
                activeTab === "settlement"
                  ? "bg-[#00C9A7] text-white shadow-[0_2px_8px_rgba(0,201,167,0.3)]"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              💰 Settlement Management
            </button>
            <button
              onClick={() => onNavigate("boost-settlement")}
              className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center text-[12px] text-gray-500 -ml-1 hover:bg-[#E6FAF5] hover:text-[#00C9A7] transition-all"
              title="Settlement Details Page"
            >
              ↗
            </button>
          </div>
          <div className="flex items-center gap-0">
            <button
              onClick={() => setActiveTab("risk")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${
                activeTab === "risk"
                  ? "bg-[#00C9A7] text-white shadow-[0_2px_8px_rgba(0,201,167,0.3)]"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              ⚠️ Risk Monitoring
            </button>
            <button
              onClick={() => onNavigate("boost-risk")}
              className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center text-[12px] text-gray-500 -ml-1 hover:bg-[#E6FAF5] hover:text-[#00C9A7] transition-all"
              title="Risk Monitoring Details Page"
            >
              ↗
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onNavigate("boost-projects")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 bg-white text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
          >
            📋 Project Management
          </button>
          <button
            onClick={() => onNavigate("boost-create")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00C9A7] text-white text-[13px] font-semibold hover:bg-[#00A88A] transition-all"
          >
            + New Project Create
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        <KpiCard
          color="mint"
          label="In Progress Project"
          value="4"
          sub="+2 This Month"
          subColor="text-[#00C9A7]"
        />
        <KpiCard
          color="blue"
          label="Total Raised (USDT)"
          value="$284K"
          sub="↑ 34% vs Last Month"
          subColor="text-[#00C9A7]"
        />
        <KpiCard
          color="purple"
          label="Total Participants"
          value="1,847"
          sub="↑ 18% vs Last Month"
          subColor="text-[#00C9A7]"
        />
        <KpiCard
          color="yellow"
          label="Average ROI"
          value="8.4%"
          sub="Completed Project Basis"
        />
        <KpiCard
          color="red"
          label="Platform Fee (0.4%)"
          value="$1,136"
          sub="This Month Revenue"
        />
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6 mb-6">
        <div>
          <div className="bg-white border border-gray-200 rounded-[14px] p-6 mb-6 hover:border-[#00C9A7] hover:shadow-[0_4px_16px_rgba(0,201,167,0.08)] transition-all">
            <div className="flex gap-5 mb-5">
              <div
                className="w-[100px] h-[100px] rounded-[14px] flex items-center justify-center text-5xl flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #667EEA, #764BA2)",
                }}
              >
                🎪
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-[18px] font-bold text-[#1A2332]">
                    Waterbomb 2026 Seoul
                  </span>
                  <StatusBadge variant="live" label="LIVE" />
                </div>
                <div className="text-[13px] text-gray-400 mb-2">
                  by CJ ENM · Music Festival
                </div>
                <div className="flex gap-4 flex-wrap">
                  <span className="text-[12px] text-gray-500">
                    📅 2026.04.01 ~ 04.30
                  </span>
                  <span className="text-[12px] text-gray-500">
                    🏷️ Min 100 USDT
                  </span>
                  <span className="text-[12px] text-gray-500">
                    👥 382users Participation
                  </span>
                  <span className="text-[12px] text-gray-500">
                    📈 Est. ROI: 12%
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <span className="text-2xl font-extrabold text-[#1A2332]">
                    $168,400
                  </span>
                  <span className="text-sm text-gray-400"> / $200,000</span>
                </div>
                <span className="text-base font-bold text-[#00C9A7]">
                  84.2%
                </span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "84.2%",
                    background: "linear-gradient(90deg, #00C9A7, #00A88A)",
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">
                  Participant
                </div>
                <div className="text-base font-bold text-[#1A2332]">382</div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">
                  Avg Investment
                </div>
                <div className="text-base font-bold text-[#1A2332]">$441</div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">Remaining</div>
                <div className="text-base font-bold text-orange-500">
                  13days
                </div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">Est. Fee</div>
                <div className="text-base font-bold text-[#00C9A7]">$674</div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[12px] font-bold bg-amber-50 text-amber-500">
                📊 Est. ROI: +12.0%
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate("boost-detail")}
                  className="px-2.5 py-1.5 rounded-md border border-gray-200 bg-white text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
                >
                  Details
                </button>
                <button
                  onClick={() => onNavigate("boost-edit")}
                  className="px-2.5 py-1.5 rounded-md border border-gray-200 bg-white text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
                >
                  Edit
                </button>
                <button className="px-2.5 py-1.5 rounded-md bg-red-50 text-red-500 text-[12px] font-semibold hover:bg-red-500 hover:text-white transition-all">
                  Stop
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] p-6 mb-6 hover:border-[#00C9A7] hover:shadow-[0_4px_16px_rgba(0,201,167,0.08)] transition-all">
            <div className="flex gap-5 mb-5">
              <div
                className="w-[100px] h-[100px] rounded-[14px] flex items-center justify-center text-5xl flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #FF6B8A, #FF8E53)",
                }}
              >
                🎤
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-[18px] font-bold text-[#1A2332]">
                    G-Dragon World Tour 2026
                  </span>
                  <StatusBadge variant="upcoming" label="Upcoming" />
                </div>
                <div className="text-[13px] text-gray-400 mb-2">
                  by YG Entertainment · Concert Tour
                </div>
                <div className="flex gap-4 flex-wrap">
                  <span className="text-[12px] text-gray-500">
                    📅 2026.05.01 ~ 05.31
                  </span>
                  <span className="text-[12px] text-gray-500">
                    🏷️ Min 100 USDT
                  </span>
                  <span className="text-[12px] text-gray-500">
                    🎯 Target $500,000
                  </span>
                  <span className="text-[12px] text-gray-500">
                    📈 Est. ROI: 15%
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <span className="text-2xl font-extrabold text-[#1A2332]">
                    $0
                  </span>
                  <span className="text-sm text-gray-400"> / $500,000</span>
                </div>
                <span className="text-base font-bold text-gray-400">0%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "0%",
                    background: "linear-gradient(90deg, #3B82F6, #2563EB)",
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">
                  Pre-Registration
                </div>
                <div className="text-base font-bold text-blue-500">247</div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">Interested</div>
                <div className="text-base font-bold text-[#1A2332]">1,089</div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">Starts In</div>
                <div className="text-base font-bold text-blue-500">14days</div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">Est. Fee</div>
                <div className="text-base font-bold text-[#00C9A7]">$2,000</div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[12px] font-bold bg-amber-50 text-amber-500">
                📊 Est. ROI: +15.0%
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate("boost-detail")}
                  className="px-2.5 py-1.5 rounded-md border border-gray-200 bg-white text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
                >
                  Details
                </button>
                <button
                  onClick={() => onNavigate("boost-edit")}
                  className="px-2.5 py-1.5 rounded-md border border-gray-200 bg-white text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
                >
                  Edit
                </button>
                <button className="px-2.5 py-1.5 rounded-md bg-red-50 text-red-500 text-[12px] font-semibold hover:bg-red-500 hover:text-white transition-all">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] p-6 hover:border-[#00C9A7] hover:shadow-[0_4px_16px_rgba(0,201,167,0.08)] transition-all">
            <div className="flex gap-5 mb-5">
              <div
                className="w-[100px] h-[100px] rounded-[14px] flex items-center justify-center text-5xl flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #11998E, #38EF7D)",
                }}
              >
                🏆
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-[18px] font-bold text-[#1A2332]">
                    MAMA Awards 2026 After Party
                  </span>
                  <StatusBadge variant="live" label="LIVE" />
                </div>
                <div className="text-[13px] text-gray-400 mb-2">
                  by Mnet · Awards Event
                </div>
                <div className="flex gap-4 flex-wrap">
                  <span className="text-[12px] text-gray-500">
                    📅 2026.04.05 ~ 04.25
                  </span>
                  <span className="text-[12px] text-gray-500">
                    🏷️ Min 100 USDT
                  </span>
                  <span className="text-[12px] text-gray-500">
                    👥 156users Participation
                  </span>
                  <span className="text-[12px] text-gray-500">
                    📈 Est. ROI: 9%
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <span className="text-2xl font-extrabold text-[#1A2332]">
                    $62,300
                  </span>
                  <span className="text-sm text-gray-400"> / $100,000</span>
                </div>
                <span className="text-base font-bold text-[#00C9A7]">
                  62.3%
                </span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "62.3%",
                    background: "linear-gradient(90deg, #00C9A7, #00A88A)",
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">
                  Participant
                </div>
                <div className="text-base font-bold text-[#1A2332]">156</div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">
                  Avg Investment
                </div>
                <div className="text-base font-bold text-[#1A2332]">$399</div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">Remaining</div>
                <div className="text-base font-bold text-red-500">8days</div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-gray-400 mb-1">Est. Fee</div>
                <div className="text-base font-bold text-[#00C9A7]">$249</div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[12px] font-bold bg-amber-50 text-amber-500">
                📊 Est. ROI: +9.0%
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate("boost-detail")}
                  className="px-2.5 py-1.5 rounded-md border border-gray-200 bg-white text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
                >
                  Details
                </button>
                <button
                  onClick={() => onNavigate("boost-edit")}
                  className="px-2.5 py-1.5 rounded-md border border-gray-200 bg-white text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
                >
                  Edit
                </button>
                <button className="px-2.5 py-1.5 rounded-md bg-red-50 text-red-500 text-[12px] font-semibold hover:bg-red-500 hover:text-white transition-all">
                  Stop
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                💡 Boost Settings
              </span>
            </div>
            <div className="px-6 py-4">
              {[
                { label: "💰 Platform Fee", value: "0.4%" },
                { label: "🏷️ Minimum Contribution", value: "100 USDT" },
                { label: "💵 Payment Currency", value: "USDT (BEP-20)" },
                { label: "📅 Max Period", value: "60days" },
                {
                  label: "🔒 Smart Contract",
                  value: "Escrow",
                  valueClass: "text-[#00C9A7]",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
                >
                  <span className="text-[13px] text-gray-500">{row.label}</span>
                  <span
                    className={`text-[14px] font-bold ${row.valueClass ?? "text-[#1A2332]"}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                📜 Recent Activity
              </span>
            </div>
            <div className="px-6 py-4">
              {[
                {
                  dot: "bg-[#E6FAF5]",
                  icon: "💰",
                  title: "Waterbomb에 $500 Participation",
                  desc: "user_jk2845",
                  time: "2minutes ago",
                },
                {
                  dot: "bg-blue-50",
                  icon: "📋",
                  title: "G-Dragon Pre-Registration",
                  desc: "user_mia_kr + 3 users",
                  time: "15minutes ago",
                },
                {
                  dot: "bg-amber-50",
                  icon: "⚠️",
                  title: "MAMA Target Below Target Warning",
                  desc: "Current 62.3% / 8days left",
                  time: "1hour ago",
                },
                {
                  dot: "bg-[#E6FAF5]",
                  icon: "💰",
                  title: "Waterbomb에 $200 Participation",
                  desc: "user_ryan_seo",
                  time: "2hours ago",
                },
                {
                  dot: "bg-purple-50",
                  icon: "🎉",
                  title: "K-POP Night Settlement Completed",
                  desc: "ROI 8.2% · $320,000 Return",
                  time: "Yesterday",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 py-3 relative">
                  {i < 4 && (
                    <div className="absolute left-[17px] top-[42px] bottom-[-2px] w-0.5 bg-gray-100" />
                  )}
                  <div
                    className={`w-9 h-9 rounded-full ${item.dot} flex items-center justify-center text-sm flex-shrink-0 z-[1]`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-semibold text-[#1A2332]">
                      {item.title}
                    </div>
                    <div className="text-[12px] text-gray-400 mt-0.5">
                      {item.desc}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-1">
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                ✅ Completed Project Performance
              </span>
            </div>
            <div className="px-6 py-4">
              {[
                { label: "📊 Completed Count", value: "12" },
                {
                  label: "✅ Success Rate",
                  value: "91.7%",
                  valueClass: "text-[#00C9A7]",
                },
                { label: "💰 Total Raised", value: "$1.84M" },
                {
                  label: "📈 Average ROI",
                  value: "+8.4%",
                  valueClass: "text-[#00C9A7]",
                },
                { label: "🏦 Cumulative Fee", value: "$7,360" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
                >
                  <span className="text-[13px] text-gray-500">{row.label}</span>
                  <span
                    className={`text-[14px] font-bold ${row.valueClass ?? "text-[#1A2332]"}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-bold text-[#1A2332]">
            👥 Recent Participation History
          </span>
          <div className="flex gap-2">
            <div className="relative max-w-[280px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                🔍
              </span>
              <input
                type="text"
                placeholder="Users, Projects Search..."
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-700 outline-none focus:border-[#00C9A7]"
              />
            </div>
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 bg-white outline-none">
              <option>All Projects</option>
              <option>Waterbomb 2026</option>
              <option>MAMA Awards</option>
            </select>
            <button className="px-3 py-2 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
              📥 Export CSV
            </button>
          </div>
        </div>
        <DataTable
          columns={participationColumns}
          data={PARTICIPATION_DATA}
          pageSize={5}
          totalLabel="1 - 5 / 538 items"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <span className="text-base font-bold text-[#1A2332]">
              💰 Settlement History
            </span>
          </div>
          <DataTable columns={settlementColumns} data={SETTLEMENT_DATA} />
        </div>

        <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <span className="text-base font-bold text-[#1A2332]">
              ⚠️ Risk Monitoring
            </span>
          </div>
          <div className="p-6">
            <div className="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-400 mb-4">
              <div className="text-[13px] font-bold text-[#1A2332] mb-1">
                ⚠️ MAMA Awards Target Below Target Risk
              </div>
              <div className="text-[12px] text-gray-600">
                Current 62.3% Achievement · 8days left · Required Fundraising:
                $4,712
              </div>
              <div className="flex gap-2 mt-2">
                <button className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-600 text-[12px] font-semibold hover:bg-amber-400 hover:text-white transition-all">
                  Notifications
                </button>
                <button className="px-2.5 py-1 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
                  Period Extension
                </button>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl mb-4">
              <div className="text-[13px] font-bold text-[#1A2332] mb-1">
                🔒 Smart Contract Status
              </div>
              <div className="text-[12px] text-gray-500 mb-2">
                All Escrow Contract Normal Running
              </div>
              <div className="flex gap-4">
                <span className="text-[12px] text-[#00C9A7] font-semibold">
                  ✓ Waterbomb
                </span>
                <span className="text-[12px] text-[#00C9A7] font-semibold">
                  ✓ MAMA
                </span>
                <span className="text-[12px] text-blue-500 font-semibold">
                  ◎ G-Dragon (Not Deployed)
                </span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-[13px] font-bold text-[#1A2332] mb-2">
                📊 Anomaly Transaction Detection
              </div>
              {[
                { label: "Today Bulk Participation (≥$5K)", value: "2 items" },
                {
                  label: "Same-day IP Multiple Participation",
                  value: "1 items",
                  valueColor: "text-amber-500",
                },
                {
                  label: "New Wallet Bulk Participation",
                  value: "0 items",
                  valueColor: "text-[#00C9A7]",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0"
                >
                  <span className="text-[13px] text-gray-500">{row.label}</span>
                  <span
                    className={`text-[14px] font-bold ${row.valueColor ?? "text-[#1A2332]"}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
