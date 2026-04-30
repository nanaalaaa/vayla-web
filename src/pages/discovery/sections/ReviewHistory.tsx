import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { HISTORY_ROWS } from "@/data/discovery";

type HistoryRow = (typeof HISTORY_ROWS)[number];

const columns: ColumnDef<HistoryRow, unknown>[] = [
  {
    accessorKey: "name",
    header: "Track",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[20px] shrink-0" style={{ background: row.original.bg }}>
          🎵
        </div>
        <div>
          <div className="font-semibold text-[#1A2332] text-[13px]">{row.original.name}</div>
          <div className="text-xs text-gray-400 mt-[2px]">{row.original.dur}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "artist",
    header: "Artist",
    cell: ({ getValue }) => (
      <span className="font-medium text-[#1A2332]">{getValue() as string}</span>
    ),
  },
  { accessorKey: "challenge", header: "Challenge" },
  {
    accessorKey: "genre",
    header: "Genre",
    cell: ({ getValue }) => (
      <span className="inline-block px-2.5 py-[3px] bg-gray-100 rounded-[5px] text-[11px] font-semibold text-gray-600">
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: "Submission Date",
    cell: ({ getValue }) => (
      <span className="text-xs text-gray-400">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Review Status",
    cell: ({ row }) => (
      <StatusBadge variant={row.original.status} label={row.original.statusLabel} />
    ),
  },
  {
    accessorKey: "reviewer",
    header: "Reviewer",
    cell: ({ getValue }) => (
      <span className="text-xs text-gray-500">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "reason",
    header: "Reason",
    cell: ({ row }) => (
      <span className={`text-xs ${row.original.reasonColor ?? "text-gray-400"}`}>
        {row.original.reason}
      </span>
    ),
  },
];

export function ReviewHistory() {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div className="text-base font-bold text-[#1A2332]">📜 Review History</div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-3">
            <div className="relative max-w-[320px] flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Track, Artist Search..."
                className="w-full pl-9 pr-3.5 py-[9px] border border-gray-200 rounded-lg text-[13px] text-gray-700 outline-none focus:border-[#00C9A7]"
              />
            </div>
            <select className="px-3.5 py-[9px] border border-gray-200 rounded-lg text-[13px] text-gray-600 outline-none cursor-pointer focus:border-[#00C9A7]">
              <option>All Status</option>
              <option>Approve</option>
              <option>Reject</option>
              <option>Hold</option>
            </select>
          </div>
          <button className="px-3 py-[5px] rounded-[6px] border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]">
            📥 Export
          </button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={HISTORY_ROWS}
        pageSize={5}
        totalLabel={`1 - 5 / 47 items`}
      />
    </div>
  );
}
