import { StatusBadge } from "@/components/ui/StatusBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import type { PageId } from "@/types/navigation";

interface Props {
  onNavigate: (id: PageId) => void;
}

function CatBadge({ cat }: { cat: string }) {
  const map: Record<string, string> = {
    Music: "bg-purple-50 text-purple-600",
    Performance: "bg-orange-50 text-orange-500",
    Creator: "bg-[#E6FAF5] text-[#00A88A]",
    Global: "bg-blue-50 text-blue-500",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-[5px] text-[11px] font-semibold ${map[cat] ?? "bg-gray-100 text-gray-500"}`}
    >
      {cat}
    </span>
  );
}

function SettleBadge({ type }: { type: string }) {
  const map: Record<string, string> = {
    "N/A": "bg-gray-100 text-gray-400",
    "Settlement Pending": "bg-amber-50 text-amber-500",
    "Under Review": "bg-blue-50 text-blue-500",
    Completed: "bg-[#E6FAF5] text-[#00A88A]",
    Paused: "bg-red-50 text-red-500",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded-[5px] text-[11px] font-semibold ${map[type] ?? "bg-gray-100 text-gray-400"}`}
    >
      {type}
    </span>
  );
}

export default function BoostProjectsPage({ onNavigate }: Props) {
  const projects = [
    {
      name: "VAYLA Artist Support Vol.1",
      cat: "Music",
      status: "active" as const,
      statusLabel: "In Progress",
      visibility: "Public",
      participants: "1,284users",
      raised: "42,500",
      target: "60,000",
      pct: 71,
      pctColor: "text-[#00A88A]",
      barColor: "bg-[#00C9A7]",
      min: "50 USDT",
      period: "04.10 ~ 04.30",
      fee: "5%",
      settle: "Settlement Pending",
      editor: "Kai",
      edited: "04.17 14:10",
      rowClass: "",
    },
    {
      name: "Indie Stage Boost #2",
      cat: "Performance",
      status: "review" as const,
      statusLabel: "Internal Review",
      visibility: "Private",
      participants: "0users",
      raised: "0",
      target: "25,000",
      pct: 0,
      pctColor: "text-gray-400",
      barColor: "bg-gray-300",
      min: "30 USDT",
      period: "04.20 ~ 05.10",
      fee: "5%",
      settle: "N/A",
      editor: "Jay",
      edited: "04.17 11:20",
      rowClass: "border-l-2 border-amber-400",
    },
    {
      name: "Creator Launch Campaign",
      cat: "Creator",
      status: "upcoming" as const,
      statusLabel: "Upcoming",
      visibility: "Private",
      participants: "0users",
      raised: "0",
      target: "15,000",
      pct: 0,
      pctColor: "text-gray-400",
      barColor: "bg-gray-300",
      min: "20 USDT",
      period: "04.18 ~ 05.02",
      fee: "4%",
      settle: "N/A",
      editor: "Tony",
      edited: "04.16 19:05",
      rowClass: "",
    },
    {
      name: "Global Fan Boost Alpha",
      cat: "Global",
      status: "ended" as const,
      statusLabel: "Deadline",
      visibility: "Public",
      participants: "2,942users",
      raised: "88,200",
      target: "80,000",
      pct: 110,
      pctColor: "text-blue-500",
      barColor: "bg-gradient-to-r from-[#00C9A7] to-[#3B82F6]",
      min: "100 USDT",
      period: "03.20 ~ 04.15",
      fee: "6%",
      settle: "Under Review",
      editor: "Kai",
      edited: "04.16 16:40",
      rowClass: "",
    },
    {
      name: "Music IP Boost Test",
      cat: "Music",
      status: "paused" as const,
      statusLabel: "Paused",
      visibility: "Private",
      participants: "312users",
      raised: "9,400",
      target: "30,000",
      pct: 31,
      pctColor: "text-red-500",
      barColor: "bg-red-500",
      min: "50 USDT",
      period: "04.01 ~ 04.25",
      fee: "5%",
      settle: "Paused",
      editor: "Jay",
      edited: "04.15 21:10",
      rowClass: "border-l-2 border-red-400",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => onNavigate("boost")}
          className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-lg hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
        >
          ←
        </button>
        <button
          onClick={() => onNavigate("boost-create")}
          className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00C9A7] text-white text-[13px] font-semibold hover:bg-[#00A88A] transition-all"
        >
          + New Project Create
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        <KpiCard
          color="mint"
          label="All Projects"
          value="5"
          sub="In Progress 1 · Review 1 · Upcoming 1 · Deadline 1 · Paused 1"
        />
        <KpiCard
          color="green"
          label="In Progress"
          value="1"
          sub="VAYLA Artist Support Vol.1"
        />
        <KpiCard
          color="blue"
          label="Total Raised"
          value="140,100"
          sub="USDT · 3 items Project Combined"
        />
        <KpiCard
          color="purple"
          label="Total Participants"
          value="4,538"
          sub="users"
        />
        <KpiCard
          color="yellow"
          label="Settlement Pending"
          value="2"
          sub="Settlement Pending 1 · Under Review 1"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-bold text-[#1A2332]">
            📋 Boost Project List
          </span>
          <button className="px-2.5 py-1.5 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
            📥 Export
          </button>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex gap-3 flex-wrap items-center">
          <div className="relative max-w-[260px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              🔍
            </span>
            <input
              type="text"
              placeholder="Project Name, Editor Search..."
              className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-700 outline-none focus:border-[#00C9A7]"
            />
          </div>
          {[
            "Category (All)",
            "Progress Status (All)",
            "Visibility (All)",
            "Settlement Status (All)",
          ].map((f) => (
            <select
              key={f}
              className="px-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 bg-white outline-none focus:border-[#00C9A7]"
            >
              <option>{f}</option>
            </select>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table
            className="w-full border-collapse"
            style={{ minWidth: "1400px" }}
          >
            <thead>
              <tr>
                {[
                  "Project Name",
                  "Category",
                  "Status",
                  "Visibility",
                  "Participants",
                  "Amount / Target",
                  "Min",
                  "Period",
                  "Fee",
                  "Settlement",
                  "Editor",
                  "Last Edit",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-3.5 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-100 bg-gray-50 whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr
                  key={i}
                  className={`hover:bg-gray-50 border-b border-gray-50 last:border-0 ${p.rowClass}`}
                >
                  <td className="px-3.5 py-3.5">
                    <div className="font-semibold text-[#1A2332] text-[13px]">
                      {p.name}
                    </div>
                  </td>
                  <td className="px-3.5 py-3.5">
                    <CatBadge cat={p.cat} />
                  </td>
                  <td className="px-3.5 py-3.5">
                    <StatusBadge variant={p.status} label={p.statusLabel} />
                  </td>
                  <td className="px-3.5 py-3.5">
                    <span
                      className={`px-2 py-0.5 rounded-[5px] text-[11px] font-semibold ${p.visibility === "Public" ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`}
                    >
                      {p.visibility}
                    </span>
                  </td>
                  <td className="px-3.5 py-3.5 text-[13px] font-semibold text-[#1A2332]">
                    {p.participants}
                  </td>
                  <td className="px-3.5 py-3.5">
                    <div className="font-semibold text-[#1A2332] text-[12px]">
                      {p.raised} / {p.target}
                    </div>
                    <div className="text-[10px] text-gray-400">USDT</div>
                    <div
                      className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1.5"
                      style={{ minWidth: "60px" }}
                    >
                      <div
                        className={`h-full rounded-full ${p.barColor}`}
                        style={{ width: `${Math.min(p.pct, 100)}%` }}
                      />
                    </div>
                    <div
                      className={`text-[10px] font-semibold mt-0.5 ${p.pctColor}`}
                    >
                      {p.pct}%{p.pct > 100 ? " Achievement" : ""}
                      {p.pct === 0 && p.status === "paused" ? " · Paused" : ""}
                    </div>
                  </td>
                  <td className="px-3.5 py-3.5 text-[12px] text-gray-600">
                    {p.min}
                  </td>
                  <td className="px-3.5 py-3.5 text-[11px] text-gray-500 whitespace-nowrap">
                    {p.period}
                  </td>
                  <td className="px-3.5 py-3.5 text-[12px] font-semibold text-[#1A2332]">
                    {p.fee}
                  </td>
                  <td className="px-3.5 py-3.5">
                    <SettleBadge type={p.settle} />
                  </td>
                  <td className="px-3.5 py-3.5 text-[12px] text-gray-600">
                    {p.editor}
                  </td>
                  <td className="px-3.5 py-3.5 text-[11px] text-gray-400 whitespace-nowrap">
                    {p.edited}
                  </td>
                  <td className="px-3.5 py-3.5">
                    <div className="flex gap-1">
                      <button
                        onClick={() => onNavigate("boost-detail")}
                        className="px-2.5 py-1 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all whitespace-nowrap"
                      >
                        Details
                      </button>
                      {(p.status === "active" ||
                        p.status === "review" ||
                        p.status === "upcoming") && (
                        <button
                          onClick={() => onNavigate("boost-edit")}
                          className="px-2.5 py-1 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all whitespace-nowrap"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[13px] text-gray-500">Total 5 items</span>
          <div className="flex gap-1">
            <button className="w-[34px] h-[34px] rounded-lg border border-[#00C9A7] bg-[#00C9A7] text-white text-[13px] font-semibold flex items-center justify-center">
              1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
