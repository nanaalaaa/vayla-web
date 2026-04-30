import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import type { PageId } from "@/types/navigation";

interface Props {
  onNavigate: (id: PageId) => void;
}

function SettleBadge({ type }: { type: string }) {
  const map: Record<string, string> = {
    "Apply Completed": "bg-[#E6FAF5] text-[#00A88A]",
    Hold: "bg-purple-50 text-purple-500",
    "Not Applied": "bg-gray-100 text-gray-400",
  };
  return (
    <span className={`px-2 py-0.5 rounded-[5px] text-[11px] font-semibold ${map[type] ?? "bg-gray-100 text-gray-400"}`}>
      {type}
    </span>
  );
}

type ParticipantRow = {
  id: string; user: string; wallet: string; amount: string; time: string; count: string;
  status: "normal" | "review" | "rejected"; statusLabel: string; settle: string;
  memo: string; memoColor: string; rowClass: string;
};

const ROWS: ParticipantRow[] = [
  { id: "PT-1001", user: "user_1024", wallet: "0x71A2...9Fd2", amount: "100 USDT", time: "04.10 14:12", count: "1", status: "normal", statusLabel: "Normal", settle: "Apply Completed", memo: "-", memoColor: "text-gray-400", rowClass: "" },
  { id: "PT-1002", user: "user_2291", wallet: "0x43Bc...28Ae", amount: "50 USDT", time: "04.10 14:18", count: "1", status: "normal", statusLabel: "Normal", settle: "Apply Completed", memo: "-", memoColor: "text-gray-400", rowClass: "" },
  { id: "PT-1003", user: "user_8754", wallet: "0x992D...7Ac1", amount: "300 USDT", time: "04.10 15:02", count: "2", status: "review", statusLabel: "Needs Review", settle: "Hold", memo: "Duplicate Participation Confirm Required", memoColor: "text-amber-500", rowClass: "border-l-2 border-amber-400 bg-amber-50/30" },
  { id: "PT-1004", user: "user_4108", wallet: "0x18Df...73Bd", amount: "50 USDT", time: "04.10 15:10", count: "1", status: "rejected", statusLabel: "Exclude", settle: "Not Applied", memo: "Cancel Request Apply", memoColor: "text-red-500", rowClass: "bg-red-50/30" },
  { id: "PT-1005", user: "user_6620", wallet: "0x81Bc...19Ac", amount: "200 USDT", time: "04.10 15:42", count: "1", status: "normal", statusLabel: "Normal", settle: "Apply Completed", memo: "-", memoColor: "text-gray-400", rowClass: "" },
];

const columns: ColumnDef<ParticipantRow, unknown>[] = [
  { accessorKey: "id", header: "Participation ID", cell: ({ getValue }) => <span className="font-mono text-[12px] text-gray-500">{getValue() as string}</span> },
  { accessorKey: "user", header: "Users ID", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332] text-[13px]">{getValue() as string}</span> },
  { accessorKey: "wallet", header: "Wallet Address", cell: ({ getValue }) => <span className="font-mono text-[12px] text-gray-500">{getValue() as string}</span> },
  { accessorKey: "amount", header: "Contribution Amount", cell: ({ getValue }) => <span className="font-semibold text-[13px]">{getValue() as string}</span> },
  { accessorKey: "time", header: "Time", cell: ({ getValue }) => <span className="text-[12px] text-gray-500">{getValue() as string}</span> },
  {
    accessorKey: "count",
    header: "Count",
    cell: ({ getValue }) => {
      const v = getValue() as string;
      return <span className={v === "2" ? "text-amber-500 font-semibold" : ""}>{v}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge variant={row.original.status} label={row.original.statusLabel} />,
  },
  {
    accessorKey: "settle",
    header: "Settlement Apply",
    cell: ({ getValue }) => <SettleBadge type={getValue() as string} />,
  },
  {
    accessorKey: "memo",
    header: "Memo",
    cell: ({ row }) => <span className={`text-[12px] ${row.original.memoColor}`}>{row.original.memo}</span>,
  },
  {
    id: "action",
    header: "Action",
    enableSorting: false,
    cell: () => (
      <button className="px-2.5 py-1 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
        Details
      </button>
    ),
  },
];

export default function BoostParticipantsPage({ onNavigate }: Props) {
  return (
    <div>
      <div className="mb-6">
        <button onClick={() => onNavigate("boost")} className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-lg hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">←</button>
      </div>

      <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-[14px] px-6 py-4 mb-6 flex-wrap">
        <div>
          <div className="text-[16px] font-bold text-[#1A2332]">VAYLA Artist Support Vol.1</div>
          <div className="flex gap-2 mt-1.5">
            <span className="px-2.5 py-0.5 rounded-[5px] text-[11px] font-semibold bg-purple-50 text-purple-600">Music</span>
            <StatusBadge variant="active" label="In Progress" />
            <span className="px-2 py-0.5 rounded-[5px] text-[11px] font-semibold bg-emerald-50 text-emerald-600">Public</span>
          </div>
        </div>
        <div className="w-px h-10 bg-gray-200 mx-2" />
        {[
          { label: "Total Participants", value: "1,284 users", color: "text-[#1A2332]" },
          { label: "Total Raised", value: "42,500 USDT", color: "text-[#00A88A]" },
          { label: "Min Participation", value: "50 USDT", color: "text-[#1A2332]" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-[11px] text-gray-400 mb-0.5">{s.label}</div>
            <div className={`text-[15px] font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
        <div className="w-px h-10 bg-gray-200 mx-2" />
        {[
          { label: "Period", value: "04.10 ~ 04.30" },
          { label: "Fee", value: "5%" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-[11px] text-gray-400 mb-0.5">{s.label}</div>
            <div className="text-[15px] font-bold text-[#1A2332]">{s.value}</div>
          </div>
        ))}
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">Settlement</div>
          <span className="px-2 py-0.5 rounded-[5px] text-[11px] font-semibold bg-amber-50 text-amber-500">Settlement Pending</span>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-6">
        <KpiCard color="mint" label="Total Participants" value="1,284" sub="users" />
        <KpiCard color="blue" label="Total Contribution" value="42,500" sub="USDT" />
        <KpiCard color="purple" label="Avg Contribution" value="33.1" sub="USDT" />
        <KpiCard color="yellow" label="Needs Review" value="12" sub="items" />
        <KpiCard color="red" label="Exclude Target" value="4" sub="items" />
        <KpiCard color="green" label="Settlement Applied" value="1,268" sub="items" />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-bold text-[#1A2332]">👥 Participant List</span>
          <button className="px-2.5 py-1.5 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">📥 Export</button>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex gap-3 flex-wrap">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
            <input type="text" placeholder="Users ID, Wallet Address Search..." className="pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[13px] outline-none focus:border-[#00C9A7]" style={{ minWidth: "240px" }} />
          </div>
          {["Status (All)", "Settlement Apply (All)", "Period (All)", "Amount (All)"].map((f) => (
            <select key={f} className="px-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 bg-white outline-none focus:border-[#00C9A7]">
              <option>{f}</option>
            </select>
          ))}
        </div>

        <DataTable
          columns={columns}
          data={ROWS}
          pageSize={5}
          rowClassName={(row) => row.original.rowClass}
          totalLabel="1 - 5 / 1,284 users"
        />
      </div>
    </div>
  );
}
