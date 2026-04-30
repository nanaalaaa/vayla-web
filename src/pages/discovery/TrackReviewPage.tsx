import { useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const STATUS_FILTERS = ["All", "ReviewPending", "Approve", "Hold", "Reject", "재Submit"];

type TrackStatus = "pending" | "approved" | "hold" | "rejected" | "resubmit";

const STATUS_LABEL: Record<TrackStatus, string> = {
  pending: "ReviewPending",
  approved: "Approve",
  hold: "Hold",
  rejected: "Reject",
  resubmit: "재Submit",
};

type Track = {
  id: string; name: string; creator: string; challenge: string;
  date: string; genre: string; play: string; tool: string;
  status: TrackStatus; memo: string;
};

type HistoryRow = {
  date: string; track: string; status: TrackStatus; reviewer: string; reason: string;
};

const TRACKS: Track[] = [
  { id: "TR-1001", name: "Midnight Groove", creator: "DJ Hana", challenge: "Neon Night Beat", date: "04-19 09:14", genre: "K-POP", play: "2:48", tool: "suno", status: "pending", memo: "Chorus Audio Quality Confirm Required" },
  { id: "TR-1002", name: "Electric Dreams", creator: "NOVA", challenge: "Neon Night Beat", date: "04-19 08:50", genre: "EDM", play: "3:12", tool: "udio", status: "hold", memo: "Category Eligibility Confirm 중" },
  { id: "TR-1003", name: "Seoul Streets", creator: "MC Park", challenge: "Urban Flow Session", date: "04-18 19:22", genre: "Hip-Hop", play: "3:05", tool: "mureka", status: "approved", memo: "Eligible" },
  { id: "TR-1004", name: "Spring Whisper", creator: "Lina Moon", challenge: "Spring Vocal Pick", date: "04-18 17:40", genre: "Ballad", play: "3:28", tool: "suno", status: "pending", memo: "-" },
  { id: "TR-1005", name: "Bassline Fire", creator: "KJ Beat", challenge: "Neon Night Beat", date: "04-18 16:15", genre: "EDM", play: "2:56", tool: "udio", status: "rejected", memo: "Copyright Concern Confirm Required" },
  { id: "TR-1006", name: "Falling Light", creator: "Aira", challenge: "Spring Vocal Pick", date: "04-18 15:50", genre: "Pop", play: "3:01", tool: "suno", status: "resubmit", memo: "곡 Description Needs Improvement" },
];

const HISTORY: HistoryRow[] = [
  { date: "04-19 10:12", track: "Electric Dreams", status: "hold", reviewer: "Kai", reason: "Category Eligibility Confirm 중" },
  { date: "04-19 09:44", track: "Seoul Streets", status: "approved", reviewer: "Jay", reason: "Eligible" },
  { date: "04-18 18:20", track: "Bassline Fire", status: "rejected", reviewer: "Tony", reason: "Copyright Concern Confirm Required" },
];

function ToolTag({ tool }: { tool: string }) {
  const map: Record<string, string> = {
    suno: "bg-[#E6FAF5] text-[#00A88A]",
    udio: "bg-blue-50 text-blue-500",
    mureka: "bg-purple-50 text-purple-500",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${map[tool] ?? "bg-gray-100 text-gray-500"}`}>
      {tool.charAt(0).toUpperCase() + tool.slice(1)}
    </span>
  );
}

const trackColumns: ColumnDef<Track, unknown>[] = [
  { accessorKey: "id", header: "ID", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332] font-mono text-sm">{getValue() as string}</span> },
  { accessorKey: "name", header: "Track", cell: ({ getValue }) => <span className="font-bold text-[#1A2332]">{getValue() as string}</span> },
  { accessorKey: "creator", header: "Creator", cell: ({ getValue }) => <span className="font-semibold">{getValue() as string}</span> },
  { accessorKey: "challenge", header: "Challenge", cell: ({ getValue }) => <span className="text-xs text-gray-500">{getValue() as string}</span> },
  { accessorKey: "date", header: "Submission Date", cell: ({ getValue }) => <span className="text-xs text-gray-400 whitespace-nowrap">{getValue() as string}</span> },
  {
    accessorKey: "genre",
    header: "Genre",
    cell: ({ getValue }) => (
      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 text-gray-600">{getValue() as string}</span>
    ),
  },
  { accessorKey: "play", header: "Play", cell: ({ getValue }) => <span className="text-xs font-mono text-gray-500">{getValue() as string}</span> },
  { accessorKey: "tool", header: "Tools", cell: ({ getValue }) => <ToolTag tool={getValue() as string} /> },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge variant={row.original.status} label={STATUS_LABEL[row.original.status]} />,
  },
  { accessorKey: "memo", header: "Review Memo", cell: ({ getValue }) => <span className="text-xs text-gray-500 max-w-[140px] truncate block">{getValue() as string}</span> },
  {
    id: "action",
    header: "Action",
    enableSorting: false,
    cell: () => (
      <div className="flex gap-1 flex-nowrap">
        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600">Approve</button>
        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-500 text-white hover:bg-orange-600">Hold</button>
        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-red-500 text-white hover:bg-red-600">Reject</button>
        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-500 text-white hover:bg-purple-600">재Submit</button>
        <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">Details</button>
      </div>
    ),
  },
];

const historyColumns: ColumnDef<HistoryRow, unknown>[] = [
  { accessorKey: "date", header: "Date", cell: ({ getValue }) => <span className="text-xs text-gray-400 whitespace-nowrap">{getValue() as string}</span> },
  { accessorKey: "track", header: "Track", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332] text-sm">{getValue() as string}</span> },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge variant={row.original.status} label={STATUS_LABEL[row.original.status]} />,
  },
  { accessorKey: "reviewer", header: "Reviewer", cell: ({ getValue }) => <span className="text-xs text-gray-500">{getValue() as string}</span> },
  { accessorKey: "reason", header: "Reason", cell: ({ getValue }) => <span className="text-xs text-gray-500">{getValue() as string}</span> },
];

export default function TrackReviewPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mb-6">
        <KpiCard color="yellow" label="Pending Review" value="24" sub="Immediately Process Required" valueColor="text-amber-500" />
        <KpiCard color="green" label="Approve Completed" value="128" sub="Cumulative Approve" valueColor="text-emerald-500" />
        <KpiCard color="orange" label="Hold" value="9" sub="Add Needs Review" valueColor="text-orange-500" />
        <KpiCard color="red" label="Reject" value="14" sub="Basis Unmet" valueColor="text-red-500" />
        <KpiCard color="purple" label="재Submit Request" value="6" sub="Edit Pending" valueColor="text-purple-500" />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="text-base font-bold text-[#1A2332]">📋 Track Review List</div>
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
                className={`px-3.5 py-[6px] rounded-full border text-xs font-semibold cursor-pointer transition-all ${activeFilter === f ? "bg-[#1A2332] text-white border-[#1A2332]" : "bg-white text-gray-500 border-gray-200 hover:border-[#00C9A7] hover:text-[#00C9A7]"}`}
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
          </select>
          <input type="text" placeholder="🔍 Track, Creator, ID Search..." className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none w-64 focus:border-[#00C9A7]" />
        </div>

        <DataTable
          columns={trackColumns}
          data={TRACKS}
          pageSize={6}
          totalLabel="Total 181 items 중 1-6 Display"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="text-base font-bold text-[#1A2332]">🕐 Recent Review History</div>
          <div className="text-xs text-gray-400">Recent Process된 Review History</div>
        </div>
        <DataTable columns={historyColumns} data={HISTORY} />
      </div>
    </div>
  );
}
