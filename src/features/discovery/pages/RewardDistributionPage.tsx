import { useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const STATUS_FILTERS = ["All", "Pending", "Completed", "Failed", "Under Review"];

type RewardRow = {
  id: string; challenge: string; target: string; rank: string; rankColor: string;
  type: string; amount: string; amountExtra: string;
  payStatus: "complete" | "pending" | "failed" | "under-review";
  nftStatus: "nft-complete" | "nft-pending" | "nft-na" | "nft-failed";
  date: string; txHash: string; memo: string; memoColor?: string;
  actions: string[]; failed?: boolean;
};

type HistoryRow = {
  date: string; target: string; challenge: string;
  status: "complete" | "failed"; manager: string; notes: string;
};

const REWARDS: RewardRow[] = [
  { id: "RW-1001", challenge: "Neon Night Beat", target: "DJ Hana", rank: "🥇 1st Place", rankColor: "text-amber-500 font-bold", type: "mixed", amount: "1,250 VAYLA", amountExtra: "+ NFT 1items", payStatus: "complete", nftStatus: "nft-complete", date: "2026.04.19\n09:40", txHash: "0x7a3b…f21d", memo: "Winner Distribution Completed", actions: ["Details"] },
  { id: "RW-1002", challenge: "Neon Night Beat", target: "NOVA", rank: "🥈 2nd Place", rankColor: "text-gray-500 font-bold", type: "vayla", amount: "800 VAYLA", amountExtra: "", payStatus: "complete", nftStatus: "nft-na", date: "2026.04.19\n09:45", txHash: "0x2c8d…e47a", memo: "—", actions: ["Details"] },
  { id: "RW-1003", challenge: "Neon Night Beat", target: "MC Park", rank: "Top 10", rankColor: "", type: "vayla", amount: "450 VAYLA", amountExtra: "", payStatus: "pending", nftStatus: "nft-na", date: "2026.04.19\n11:00", txHash: "—", memo: "Final Confirm Pending", actions: ["Completed", "Hold", "Details"] },
  { id: "RW-1004", challenge: "Urban Flow Session", target: "Aira", rank: "Participation", rankColor: "", type: "nft", amount: "NFT 1items", amountExtra: "", payStatus: "complete", nftStatus: "nft-complete", date: "2026.04.18\n18:20", txHash: "0xa2b9…4e1f", memo: "Participation NFT Payment Completed", actions: ["Details"] },
  { id: "RW-1005", challenge: "Spring Vocal Pick", target: "Lina Moon", rank: "Vote Milestone", rankColor: "", type: "vayla", amount: "300 VAYLA", amountExtra: "", payStatus: "failed", nftStatus: "nft-na", date: "2026.04.19\n10:10", txHash: "—", memo: "Wallet Connect Error", memoColor: "text-red-500 font-semibold", actions: ["재Process", "Details"], failed: true },
  { id: "RW-1006", challenge: "Neon Night Beat", target: "KJ Beat", rank: "🥉 3rd Place", rankColor: "text-gray-500 font-bold", type: "mixed", amount: "600 VAYLA", amountExtra: "+ NFT 1items", payStatus: "under-review", nftStatus: "nft-pending", date: "2026.04.19\n10:55", txHash: "—", memo: "NFT Publish Confirm Required", actions: ["Completed", "Hold", "Details"] },
];

const HISTORY: HistoryRow[] = [
  { date: "2026.04.19 09:45", target: "NOVA", challenge: "Neon Night Beat", status: "complete", manager: "Kai", notes: "2nd Place Pay Reward Completed" },
  { date: "2026.04.19 09:40", target: "DJ Hana", challenge: "Neon Night Beat", status: "complete", manager: "Jay", notes: "Winner Reward + NFT Completed" },
  { date: "2026.04.19 10:10", target: "Lina Moon", challenge: "Spring Vocal Pick", status: "failed", manager: "Tony", notes: "Wallet Connect Error" },
];

function RwTypeTag({ type }: { type: string }) {
  const map: Record<string, string> = {
    vayla: "bg-[#E6FAF5] text-[#00A88A]",
    nft: "bg-purple-50 text-purple-500",
    mixed: "bg-blue-50 text-blue-500",
  };
  const label = type === "vayla" ? "VAYLA" : type === "nft" ? "NFT" : "VAYLA + NFT";
  return <span className={`inline-block px-2.5 py-[3px] rounded-[5px] text-[11px] font-bold ${map[type]}`}>{label}</span>;
}

const PAY_STATUS_LABEL: Record<string, string> = {
  complete: "Completed", pending: "Pending", failed: "Failed", "under-review": "Under Review",
};
const NFT_STATUS_LABEL: Record<string, string> = {
  "nft-na": "N/A", "nft-pending": "Pending", "nft-complete": "Completed", "nft-failed": "Failed",
};

const rewardColumns: ColumnDef<RewardRow, unknown>[] = [
  { accessorKey: "id", header: "Reward ID", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332]">{getValue() as string}</span> },
  { accessorKey: "challenge", header: "Challenge Name" },
  { accessorKey: "target", header: "Payment Target", cell: ({ getValue }) => <span className="font-semibold">{getValue() as string}</span> },
  { accessorKey: "rank", header: "Rank/Basis", cell: ({ row }) => <span className={row.original.rankColor}>{row.original.rank}</span> },
  { accessorKey: "type", header: "Reward Type", cell: ({ getValue }) => <RwTypeTag type={getValue() as string} /> },
  {
    accessorKey: "amount",
    header: "Amount/Quantity",
    cell: ({ row }) => (
      <div className="font-bold">
        {row.original.amount}
        {row.original.amountExtra && <><br /><span className="text-[11px] text-purple-500">{row.original.amountExtra}</span></>}
      </div>
    ),
  },
  {
    accessorKey: "payStatus",
    header: "Payment Status",
    cell: ({ row }) => <StatusBadge variant={row.original.payStatus} label={PAY_STATUS_LABEL[row.original.payStatus]} />,
  },
  {
    accessorKey: "nftStatus",
    header: "NFT Status",
    cell: ({ row }) => <StatusBadge variant={row.original.nftStatus} label={NFT_STATUS_LABEL[row.original.nftStatus]} />,
  },
  { accessorKey: "date", header: "Payment Date", cell: ({ getValue }) => <span className="text-xs whitespace-pre-line">{getValue() as string}</span> },
  {
    accessorKey: "txHash",
    header: "TX Hash",
    cell: ({ getValue }) => {
      const h = getValue() as string;
      return h !== "—"
        ? <span className="font-mono text-[11px] text-[#00A88A] bg-[#E6FAF5] px-2 py-0.5 rounded">{h}</span>
        : <span className="text-xs text-gray-400">—</span>;
    },
  },
  {
    accessorKey: "memo",
    header: "Ops Memo",
    cell: ({ row }) => <span className={`text-xs ${row.original.memoColor ?? "text-gray-500"}`}>{row.original.memo}</span>,
  },
  {
    id: "action",
    header: "Action",
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex gap-1 flex-nowrap">
        {row.original.actions.includes("Completed") && <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600">Completed</button>}
        {row.original.actions.includes("Hold") && <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-500 text-white hover:bg-orange-600">Hold</button>}
        {row.original.actions.includes("재Process") && <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-red-500 text-white hover:bg-red-600">재Process</button>}
        <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">Details</button>
      </div>
    ),
  },
];

const historyColumns: ColumnDef<HistoryRow, unknown>[] = [
  { accessorKey: "date", header: "Date", cell: ({ getValue }) => <span className="text-xs">{getValue() as string}</span> },
  { accessorKey: "target", header: "Payment Target", cell: ({ getValue }) => <span className="font-semibold text-sm">{getValue() as string}</span> },
  { accessorKey: "challenge", header: "Challenge Name", cell: ({ getValue }) => <span className="text-xs">{getValue() as string}</span> },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge variant={row.original.status} label={row.original.status === "complete" ? "Completed" : "Failed"} />,
  },
  { accessorKey: "manager", header: "Manager", cell: ({ getValue }) => <span className="text-xs">{getValue() as string}</span> },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ row }) => (
      <span className={`text-[11px] ${row.original.status === "failed" ? "text-red-500 font-semibold" : "text-gray-500"}`}>
        {row.original.notes}
      </span>
    ),
  },
];

export default function RewardDistributionPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mb-6">
        <KpiCard color="yellow" label="Distribution Pending" value="14" sub="Payment Pending items" valueColor="text-amber-500" />
        <KpiCard color="green" label="Distribution Completed" value="126" sub="Payment Completed items" valueColor="text-emerald-500" />
        <KpiCard color="purple" label="NFT Publish Pending" value="8" sub="Minting Pending" valueColor="text-purple-500" />
        <KpiCard color="blue" label="NFT Publish Completed" value="118" sub="Minting Completed" />
        <KpiCard color="red" label="Failed items" value="3" sub="재Process Required" valueColor="text-red-500" />
        <KpiCard color="mint" label="Total Distribution VAYLA" value="18,450" sub="VAYLA Token" />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="text-base font-bold text-[#1A2332]">🎁 Reward Distribution List</div>
          <div className="flex gap-2">
            <button className="px-3 py-[7px] rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50">📥 Export</button>
            <button className="px-3 py-[7px] rounded-lg bg-[#00C9A7] text-white text-sm font-semibold hover:bg-[#00A88A]">+ Manual Distribution Create</button>
          </div>
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
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>Challenge: All</option>
            <option>Neon Night Beat</option>
            <option>Urban Flow Session</option>
            <option>Spring Vocal Pick</option>
          </select>
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>Type: All</option>
            <option>Vote Reward</option>
            <option>Challenge Winner</option>
            <option>Participation Reward</option>
          </select>
          <input type="text" placeholder="Challenge / Target / Reward ID Search..." className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none w-60 focus:border-[#00C9A7]" />
        </div>

        <DataTable
          columns={rewardColumns}
          data={REWARDS}
          rowClassName={(row) => row.original.failed ? "bg-red-50 hover:bg-red-100" : ""}
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="text-base font-bold text-[#1A2332]">📋 Recent Distribution Process History</div>
        </div>
        <DataTable columns={historyColumns} data={HISTORY} />
      </div>
    </div>
  );
}
