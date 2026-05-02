import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { TX_DATA, TX_TYPE_STYLE, TX_STATUS_STYLE, QUEUE_ITEMS } from "@/data/dashboard";

type TxRow = (typeof TX_DATA)[number];

const columns: ColumnDef<TxRow, unknown>[] = [
  {
    accessorKey: "hash",
    header: "TX Hash",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs text-blue-500 cursor-pointer hover:underline">
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => {
      const t = getValue() as string;
      return (
        <span className={`px-2.5 py-[3px] rounded-[6px] text-[11px] font-semibold ${TX_TYPE_STYLE[t]}`}>
          {t === "nft" ? "NFT Mint" : t.charAt(0).toUpperCase() + t.slice(1)}
        </span>
      );
    },
  },
  {
    accessorKey: "from",
    header: "From / To",
    cell: ({ getValue }) => (
      <span className="text-xs text-gray-600">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => (
      <span className="text-gray-600">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "statusLabel",
    header: "Status",
    cell: ({ row }) => (
      <span className={`inline-flex items-center gap-1 px-2.5 py-[3px] rounded-[6px] text-[11px] font-semibold ${TX_STATUS_STYLE[row.original.status]}`}>
        {row.original.statusLabel}
      </span>
    ),
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ getValue }) => (
      <span className="text-xs text-gray-500">{getValue() as string}</span>
    ),
  },
  {
    id: "action",
    header: "Action",
    enableSorting: false,
    cell: () => (
      <button className="px-2.5 py-1 rounded-[6px] text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
        Details
      </button>
    ),
  },
];

export function TxAndQueue() {
  return (
    <div className="grid grid-cols-3 gap-5 mb-7">
      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden col-span-2">
        <div className="px-6 py-[18px] border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-[#1A2332]">⛓️ 실hours Transaction</h3>
          <div className="flex gap-3 items-center">
            <button className="px-3.5 py-[5px] rounded-[7px] border border-gray-200 bg-white text-xs font-medium text-gray-500 cursor-pointer hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
              📥 Export
            </button>
            <div className="flex gap-1.5">
              {["All", "Vote", "Boost", "Withdraw", "NFT"].map((t, i) => (
                <button
                  key={t}
                  className={`px-3.5 py-[5px] rounded-[7px] border text-xs font-medium cursor-pointer transition-all ${i === 0 ? "bg-[#1A2332] text-white border-[#1A2332]" : "bg-white text-gray-500 border-gray-200 hover:border-[#00C9A7] hover:text-[#00C9A7]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <DataTable columns={columns} data={TX_DATA} />

        <button className="block w-full text-center py-3 text-[13px] font-semibold text-[#00C9A7] border-t border-gray-100 hover:bg-[#E6FAF5] transition-colors">
          All Transaction View →
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="px-6 py-[18px] border-b border-gray-100">
          <h3 className="text-[15px] font-bold text-[#1A2332]">🔔 Unprocessed Actions Queue</h3>
        </div>
        <div>
          {QUEUE_ITEMS.map((q, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-[14px] border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${q.dot}`} />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[#1A2332] truncate">{q.title}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{q.meta}</div>
              </div>
              <span className="text-[13px] font-bold text-[#1A2332] bg-gray-100 px-2.5 py-1 rounded-lg">{q.count}</span>
            </div>
          ))}
        </div>
        <button className="block w-full text-center py-3 text-[13px] font-semibold text-[#00C9A7] border-t border-gray-100 hover:bg-[#E6FAF5] transition-colors">
          View Full Queue →
        </button>
      </div>
    </div>
  );
}
