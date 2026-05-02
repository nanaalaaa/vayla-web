import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
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
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-[5px] text-[11px] font-semibold ${map[cat] ?? "bg-gray-100 text-gray-500"}`}>
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
    <span className={`px-2 py-0.5 rounded-[5px] text-[11px] font-semibold ${map[type] ?? "bg-gray-100 text-gray-400"}`}>
      {type}
    </span>
  );
}

type Project = {
  name: string; cat: string; status: "active" | "review" | "upcoming" | "ended" | "paused";
  statusLabel: string; visibility: string; participants: string; raised: string; target: string;
  pct: number; pctColor: string; barColor: string; min: string; period: string; fee: string;
  settle: string; editor: string; edited: string; rowClass: string;
};

const PROJECTS: Project[] = [
  { name: "VAYLA Artist Support Vol.1", cat: "Music", status: "active", statusLabel: "In Progress", visibility: "Public", participants: "1,284users", raised: "42,500", target: "60,000", pct: 71, pctColor: "text-[#00A88A]", barColor: "bg-[#00C9A7]", min: "50 USDT", period: "04.10 ~ 04.30", fee: "5%", settle: "Settlement Pending", editor: "Kai", edited: "04.17 14:10", rowClass: "" },
  { name: "Indie Stage Boost #2", cat: "Performance", status: "review", statusLabel: "Internal Review", visibility: "Private", participants: "0users", raised: "0", target: "25,000", pct: 0, pctColor: "text-gray-400", barColor: "bg-gray-300", min: "30 USDT", period: "04.20 ~ 05.10", fee: "5%", settle: "N/A", editor: "Jay", edited: "04.17 11:20", rowClass: "border-l-2 border-amber-400" },
  { name: "Creator Launch Campaign", cat: "Creator", status: "upcoming", statusLabel: "Upcoming", visibility: "Private", participants: "0users", raised: "0", target: "15,000", pct: 0, pctColor: "text-gray-400", barColor: "bg-gray-300", min: "20 USDT", period: "04.18 ~ 05.02", fee: "4%", settle: "N/A", editor: "Tony", edited: "04.16 19:05", rowClass: "" },
  { name: "Global Fan Boost Alpha", cat: "Global", status: "ended", statusLabel: "Deadline", visibility: "Public", participants: "2,942users", raised: "88,200", target: "80,000", pct: 110, pctColor: "text-blue-500", barColor: "bg-gradient-to-r from-[#00C9A7] to-[#3B82F6]", min: "100 USDT", period: "03.20 ~ 04.15", fee: "6%", settle: "Under Review", editor: "Kai", edited: "04.16 16:40", rowClass: "" },
  { name: "Music IP Boost Test", cat: "Music", status: "paused", statusLabel: "Paused", visibility: "Private", participants: "312users", raised: "9,400", target: "30,000", pct: 31, pctColor: "text-red-500", barColor: "bg-red-500", min: "50 USDT", period: "04.01 ~ 04.25", fee: "5%", settle: "Paused", editor: "Jay", edited: "04.15 21:10", rowClass: "border-l-2 border-red-400" },
];

const columns: ColumnDef<Project, unknown>[] = [
  {
    accessorKey: "name",
    header: "Project Name",
    cell: ({ getValue }) => (
      <span className="font-semibold text-[#1A2332] text-[13px]">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "cat",
    header: "Category",
    cell: ({ getValue }) => <CatBadge cat={getValue() as string} />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge variant={row.original.status} label={row.original.statusLabel} />,
  },
  {
    accessorKey: "visibility",
    header: "Visibility",
    cell: ({ getValue }) => {
      const v = getValue() as string;
      return (
        <span className={`px-2 py-0.5 rounded-[5px] text-[11px] font-semibold ${v === "Public" ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`}>
          {v}
        </span>
      );
    },
  },
  {
    accessorKey: "participants",
    header: "Participants",
    cell: ({ getValue }) => (
      <span className="font-semibold text-[13px] text-[#1A2332]">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "raised",
    header: "Amount / Target",
    enableSorting: false,
    cell: ({ row }) => {
      const p = row.original;
      return (
        <div>
          <div className="font-semibold text-[#1A2332] text-[12px]">{p.raised} / {p.target}</div>
          <div className="text-[10px] text-gray-400">USDT</div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1.5" style={{ minWidth: "60px" }}>
            <div className={`h-full rounded-full ${p.barColor}`} style={{ width: `${Math.min(p.pct, 100)}%` }} />
          </div>
          <div className={`text-[10px] font-semibold mt-0.5 ${p.pctColor}`}>
            {p.pct}%{p.pct > 100 ? " Achievement" : ""}
            {p.pct === 0 && p.status === "paused" ? " · Paused" : ""}
          </div>
        </div>
      );
    },
  },
  { accessorKey: "min", header: "Min", cell: ({ getValue }) => <span className="text-[12px] text-gray-600">{getValue() as string}</span> },
  { accessorKey: "period", header: "Period", cell: ({ getValue }) => <span className="text-[11px] text-gray-500 whitespace-nowrap">{getValue() as string}</span> },
  { accessorKey: "fee", header: "Fee", cell: ({ getValue }) => <span className="font-semibold text-[12px] text-[#1A2332]">{getValue() as string}</span> },
  {
    accessorKey: "settle",
    header: "Settlement",
    cell: ({ getValue }) => <SettleBadge type={getValue() as string} />,
  },
  { accessorKey: "editor", header: "Editor", cell: ({ getValue }) => <span className="text-[12px] text-gray-600">{getValue() as string}</span> },
  { accessorKey: "edited", header: "Last Edit", cell: ({ getValue }) => <span className="text-[11px] text-gray-400 whitespace-nowrap">{getValue() as string}</span> },
  {
    id: "actions",
    header: "Actions",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-1">
        <button
          onClick={() => row.original.status === "active" && undefined}
          className="px-2.5 py-1 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all whitespace-nowrap"
        >
          Details
        </button>
        {(row.original.status === "active" || row.original.status === "review" || row.original.status === "upcoming") && (
          <button className="px-2.5 py-1 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all whitespace-nowrap">
            Edit
          </button>
        )}
      </div>
    ),
  },
];

export default function BoostProjectsPage({ onNavigate }: Props) {
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
        <KpiCard color="mint" label="All Projects" value="5" sub="In Progress 1 · Review 1 · Upcoming 1 · Deadline 1 · Paused 1" />
        <KpiCard color="green" label="In Progress" value="1" sub="VAYLA Artist Support Vol.1" />
        <KpiCard color="blue" label="Total Raised" value="140,100" sub="USDT · 3 items Project Combined" />
        <KpiCard color="purple" label="Total Participants" value="4,538" sub="users" />
        <KpiCard color="yellow" label="Settlement Pending" value="2" sub="Settlement Pending 1 · Under Review 1" />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-bold text-[#1A2332]">📋 Boost Project List</span>
          <button className="px-2.5 py-1.5 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
            📥 Export
          </button>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex gap-3 flex-wrap items-center">
          <div className="relative max-w-[260px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
            <input type="text" placeholder="Project Name, Editor Search..." className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-700 outline-none focus:border-[#00C9A7]" />
          </div>
          {["Category (All)", "Progress Status (All)", "Visibility (All)", "Settlement Status (All)"].map((f) => (
            <select key={f} className="px-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 bg-white outline-none focus:border-[#00C9A7]">
              <option>{f}</option>
            </select>
          ))}
        </div>

        <DataTable
          columns={columns}
          data={PROJECTS}
          minWidth={1400}
          rowClassName={(row) => row.original.rowClass}
          totalLabel={`Total ${PROJECTS.length} items`}
        />
      </div>
    </div>
  );
}
