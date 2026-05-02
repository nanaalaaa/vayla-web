import { useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { PageId } from "@/types/navigation";

interface Props {
  onNavigate?: (page: PageId) => void;
}

const STATUS_FILTERS = ["All", "In Progress", "Yes정", "Close", "days시Stop"];

type ChallengeRow = {
  id: string; name: string; period: string; status: "live" | "upcoming" | "ended";
  tracks: number; votes: string; participants: number; vayla: number;
  genres: string[]; editor: string; lastEdit: string; actions: string[];
};

const CHALLENGES: ChallengeRow[] = [
  { id: "CH-1001", name: "Neon Night Beat", period: "04.10 ~ 04.24", status: "live", tracks: 47, votes: "3,284", participants: 892, vayla: 470, genres: ["K-POP", "EDM", "Hip-Hop"], editor: "Kai", lastEdit: "04-19 10:20", actions: ["Details", "Edit", "Close", "Duplicate"] },
  { id: "CH-1002", name: "Urban Flow Session", period: "04.14 ~ 04.28", status: "live", tracks: 31, votes: "2,105", participants: 641, vayla: 310, genres: ["Hip-Hop", "Trap"], editor: "Jay", lastEdit: "04-19 09:40", actions: ["Details", "Edit", "Close", "Duplicate"] },
  { id: "CH-1003", name: "Spring Vocal Pick", period: "04.17 ~ 05.01", status: "live", tracks: 19, votes: "1,247", participants: 384, vayla: 180, genres: ["Ballad", "Pop"], editor: "Tony", lastEdit: "04-18 18:15", actions: ["Details", "Edit", "Close", "Duplicate"] },
  { id: "CH-1004", name: "Indie Wave Launch", period: "04.22 ~ 05.06", status: "upcoming", tracks: 0, votes: "0", participants: 0, vayla: 0, genres: ["Indie Pop", "Alternative"], editor: "Kai", lastEdit: "04-19 08:55", actions: ["Details", "Edit", "Start", "Duplicate"] },
  { id: "CH-1005", name: "Global Dance Spark", period: "04.25 ~ 05.09", status: "upcoming", tracks: 0, votes: "0", participants: 0, vayla: 0, genres: ["EDM", "Dance"], editor: "Jay", lastEdit: "04-18 22:10", actions: ["Details", "Edit", "Start", "Duplicate"] },
  { id: "CH-1006", name: "Midnight R&B Session", period: "03.20 ~ 04.03", status: "ended", tracks: 54, votes: "4,872", participants: 1120, vayla: 620, genres: ["R&B", "Soul"], editor: "Kai", lastEdit: "04-04 11:00", actions: ["Details", "ResultView", "Duplicate"] },
  { id: "CH-1007", name: "K-Indie First Stage", period: "03.15 ~ 03.29", status: "ended", tracks: 38, votes: "2,642", participants: 706, vayla: 350, genres: ["Indie", "Folk"], editor: "Tony", lastEdit: "03-30 15:30", actions: ["Details", "ResultView", "Duplicate"] },
];

const STATUS_LABEL: Record<string, string> = { live: "In Progress", upcoming: "Yes정", ended: "Close" };

const columns: ColumnDef<ChallengeRow, unknown>[] = [
  { accessorKey: "id", header: "ID", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332] font-mono text-sm">{getValue() as string}</span> },
  {
    accessorKey: "name",
    header: "Challenge Name",
    cell: ({ row }) => (
      <span className={`font-bold ${row.original.status === "ended" ? "text-gray-500" : "text-[#1A2332]"}`}>
        {row.original.name}
      </span>
    ),
  },
  { accessorKey: "period", header: "Period", cell: ({ getValue }) => <span className="text-xs text-gray-500 whitespace-nowrap">{getValue() as string}</span> },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge variant={row.original.status} label={STATUS_LABEL[row.original.status]} />,
  },
  {
    accessorKey: "tracks",
    header: "Submitted Tracks",
    cell: ({ row }) => <span className={`font-bold ${row.original.status === "upcoming" ? "text-gray-400" : "text-[#1A2332]"}`}>{row.original.tracks}</span>,
  },
  {
    accessorKey: "votes",
    header: "Total Vote",
    cell: ({ row }) => <span className={`font-bold ${row.original.status === "upcoming" ? "text-gray-400" : "text-[#00A88A]"}`}>{row.original.votes}</span>,
  },
  {
    accessorKey: "participants",
    header: "Participant",
    cell: ({ row }) => <span className={`font-semibold ${row.original.status === "upcoming" ? "text-gray-400" : ""}`}>{row.original.participants}</span>,
  },
  {
    accessorKey: "vayla",
    header: "Use VAYLA",
    cell: ({ row }) => <span className={`font-semibold ${row.original.status === "upcoming" ? "text-gray-400" : "text-purple-500"}`}>{row.original.vayla}</span>,
  },
  {
    accessorKey: "genres",
    header: "Genre",
    enableSorting: false,
    cell: ({ getValue }) => (
      <div className="flex flex-wrap gap-1">
        {(getValue() as string[]).map((g) => (
          <span key={g} className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 text-gray-600">{g}</span>
        ))}
      </div>
    ),
  },
  { accessorKey: "editor", header: "Editor", cell: ({ getValue }) => <span className="text-xs text-gray-500">{getValue() as string}</span> },
  { accessorKey: "lastEdit", header: "Final Edit", cell: ({ getValue }) => <span className="text-xs text-gray-400 whitespace-nowrap">{getValue() as string}</span> },
  {
    id: "action",
    header: "Action",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-1 flex-nowrap" onClick={(e) => e.stopPropagation()}>
        {row.original.actions.includes("Details") && <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">Details</button>}
        {row.original.actions.includes("Edit") && <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">Edit</button>}
        {row.original.actions.includes("Close") && <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-red-500 text-white hover:bg-red-600">Close</button>}
        {row.original.actions.includes("Start") && <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-500 text-white hover:bg-purple-600">Start Pending</button>}
        {row.original.actions.includes("ResultView") && <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600">ResultView</button>}
        <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">Duplicate</button>
      </div>
    ),
  },
];

export default function DiscoveryChallengePage({ onNavigate }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mb-6">
        <KpiCard color="mint" label="All Challenges" value="12" sub="Total Registrations" />
        <KpiCard color="green" label="In Progress" value="3" sub="Current LIVE" valueColor="text-emerald-500" />
        <KpiCard color="purple" label="Yes정" value="2" sub="Start Pending" valueColor="text-purple-500" />
        <KpiCard color="gray" label="Close" value="7" sub="Completed Challenge" valueColor="text-gray-400" />
        <KpiCard color="blue" label="Total Submitted Tracks" value="284" sub="All Cumulative" />
        <KpiCard color="orange" label="Total Participants" value="4,982" sub="Unique Users" valueColor="text-orange-500" />
      </div>

      <div className="rounded-[14px] p-6 mb-6 grid gap-6 items-center text-white border border-[#2D3B50]" style={{ background: "linear-gradient(135deg, #1A2332 0%, #243044 60%, rgba(0,201,167,0.15) 100%)", gridTemplateColumns: "1fr auto" }}>
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <StatusBadge variant="live" label="LIVE" />
            <span className="font-mono text-xs text-gray-400">CH-1001</span>
          </div>
          <div className="text-[22px] font-extrabold mb-1" style={{ letterSpacing: "-0.5px" }}>Neon Night Beat</div>
          <div className="text-sm text-gray-400 mb-4">
            2026.04.10 ~ 2026.04.24
            <span className="inline-block px-2.5 py-0.5 rounded-[5px] bg-[#00C9A7] text-white font-bold text-xs ml-2">D-5</span>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {[{ label: "Submitted Tracks", value: "47", mint: false }, { label: "Total Vote", value: "3,284", mint: true }, { label: "Participant", value: "892", mint: false }, { label: "Use VAYLA", value: "470", mint: false }].map((s) => (
              <div key={s.label}>
                <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide mb-1">{s.label}</div>
                <div className={`text-[22px] font-extrabold ${s.mint ? "text-[#00C9A7]" : "text-white"}`}>{s.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 h-[6px] rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div className="h-full rounded-full" style={{ width: "64%", background: "linear-gradient(90deg, #00C9A7, #3B82F6)" }} />
          </div>
        </div>
        <div className="flex flex-col gap-2.5 items-end">
          <div className="flex gap-1.5 flex-wrap justify-end mb-2">
            {["K-POP", "EDM", "Hip-Hop"].map((g) => (
              <span key={g} className="px-2 py-0.5 rounded text-[11px] font-semibold" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}>{g}</span>
            ))}
          </div>
          <button onClick={() => onNavigate?.("discovery-challenge-detail")} className="px-4 py-2 rounded-lg bg-[#00C9A7] text-white text-sm font-semibold hover:bg-[#00A88A]">Details View →</button>
          <button className="px-4 py-2 rounded-lg border text-sm font-semibold" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>Edit</button>
          <button className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600">Close</button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="text-base font-bold text-[#1A2332]">🎵 All Challenges List</div>
          <div className="flex gap-2">
            <button className="px-3.5 py-[7px] rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50">📥 Export</button>
            <button onClick={() => onNavigate?.("discovery-create")} className="px-3.5 py-[7px] rounded-lg bg-[#00C9A7] text-white text-sm font-semibold hover:bg-[#00A88A]">+ 새 Create Challenge</button>
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-6 py-4 border-b border-gray-100 flex-wrap">
          <div className="flex gap-1">
            {STATUS_FILTERS.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`px-3.5 py-[6px] rounded-full border text-xs font-semibold cursor-pointer transition-all ${activeFilter === f ? "bg-[#1A2332] text-white border-[#1A2332]" : "bg-white text-gray-500 border-gray-200 hover:border-[#00C9A7] hover:text-[#00C9A7]"}`}>{f}</button>
            ))}
          </div>
          <div className="flex-1" />
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>All Time</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <input type="text" placeholder="🔍 Challenge Name, Genre, ID Search..." className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none w-64 focus:border-[#00C9A7]" />
        </div>

        <DataTable
          columns={columns}
          data={CHALLENGES}
          pageSize={7}
          totalLabel="Total 12 items 중 1-7 Display"
        />
      </div>
    </div>
  );
}
