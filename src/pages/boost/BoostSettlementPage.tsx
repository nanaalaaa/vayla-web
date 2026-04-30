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
    Hold: "bg-amber-50 text-amber-500",
    "Not Applied": "bg-gray-100 text-gray-400",
    "Refund Completed": "bg-blue-50 text-blue-500",
  };
  return (
    <span className={`px-2 py-0.5 rounded-[5px] text-[11px] font-semibold ${map[type] ?? "bg-gray-100 text-gray-400"}`}>
      {type}
    </span>
  );
}

type ParticipantRow = { id: string; user: string; wallet: string; amount: string; status: "normal" | "review" | "rejected"; label: string; settle: string; notes: string; notesColor: string; row: string };
type ExcludeRow = { typeLabel: string; typeClass: string; ptId: string; user: string; amount: string; reason: string; settle: string; time: string; rowClass: string };

const PARTICIPANTS: ParticipantRow[] = [
  { id: "PT-1001", user: "user_1024", wallet: "0x71A2...9Fd2", amount: "100 USDT", status: "normal", label: "Normal", settle: "Apply Completed", notes: "-", notesColor: "text-gray-400", row: "" },
  { id: "PT-1002", user: "user_2291", wallet: "0x43Bc...28Ae", amount: "50 USDT", status: "normal", label: "Normal", settle: "Apply Completed", notes: "-", notesColor: "text-gray-400", row: "" },
  { id: "PT-1003", user: "user_8754", wallet: "0x992D...7Ac1", amount: "300 USDT", status: "review", label: "Needs Review", settle: "Hold", notes: "Confirm in progress", notesColor: "text-amber-500", row: "border-l-2 border-amber-400 bg-amber-50/30" },
  { id: "PT-1004", user: "user_4108", wallet: "0x18Df...73Bd", amount: "50 USDT", status: "rejected", label: "Exclude", settle: "Not Applied", notes: "Cancel Request", notesColor: "text-red-500", row: "bg-red-50/30" },
  { id: "PT-1005", user: "user_6620", wallet: "0x81Bc...19Ac", amount: "200 USDT", status: "normal", label: "Normal", settle: "Apply Completed", notes: "-", notesColor: "text-gray-400", row: "" },
];

const EXCLUDE_ROWS: ExcludeRow[] = [
  { typeLabel: "Exclude", typeClass: "bg-red-50 text-red-500", ptId: "PT-1004", user: "user_4108", amount: "50 USDT", reason: "Cancel Request", settle: "Apply Completed", time: "2026-04-16 10:20", rowClass: "bg-red-50/20 border-l-2 border-red-400" },
  { typeLabel: "Refund", typeClass: "bg-blue-50 text-blue-500", ptId: "PT-1038", user: "user_5521", amount: "250 USDT", reason: "Payment Error", settle: "Refund Completed", time: "2026-04-16 13:05", rowClass: "border-l-2 border-blue-400" },
  { typeLabel: "Hold", typeClass: "bg-purple-50 text-purple-500", ptId: "PT-1003", user: "user_8754", amount: "300 USDT", reason: "Duplicate Participation Under Review", settle: "Hold", time: "2026-04-17 09:10", rowClass: "border-l-2 border-purple-400 bg-purple-50/20" },
];

const participantColumns: ColumnDef<ParticipantRow, unknown>[] = [
  { accessorKey: "id", header: "Participation ID", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332] text-[13px]">{getValue() as string}</span> },
  { accessorKey: "user", header: "Users ID" },
  { accessorKey: "wallet", header: "Wallet Address", cell: ({ getValue }) => <span className="font-mono text-[12px] text-gray-500">{getValue() as string}</span> },
  { accessorKey: "amount", header: "Contribution Amount", cell: ({ getValue }) => <span className="font-semibold text-[13px]">{getValue() as string}</span> },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <StatusBadge variant={row.original.status} label={row.original.label} /> },
  { accessorKey: "settle", header: "Settlement Apply", cell: ({ getValue }) => <SettleBadge type={getValue() as string} /> },
  { accessorKey: "notes", header: "Notes", cell: ({ row }) => <span className={`text-[12px] ${row.original.notesColor}`}>{row.original.notes}</span> },
];

const excludeColumns: ColumnDef<ExcludeRow, unknown>[] = [
  { accessorKey: "typeLabel", header: "Type", cell: ({ row }) => <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-semibold ${row.original.typeClass}`}>{row.original.typeLabel}</span> },
  { accessorKey: "ptId", header: "Participation ID", cell: ({ getValue }) => <span className="font-semibold text-[#1A2332] text-[13px]">{getValue() as string}</span> },
  { accessorKey: "user", header: "Users ID" },
  { accessorKey: "amount", header: "Amount", cell: ({ getValue }) => <span className="font-semibold">{getValue() as string}</span> },
  { accessorKey: "reason", header: "Reason" },
  { accessorKey: "settle", header: "Process Status", cell: ({ getValue }) => <SettleBadge type={getValue() as string} /> },
  { accessorKey: "time", header: "Process Time", cell: ({ getValue }) => <span className="text-[12px] text-gray-500">{getValue() as string}</span> },
];

export default function BoostSettlementPage({ onNavigate }: Props) {
  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => onNavigate("boost")}
          className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-lg hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
        >
          ←
        </button>
      </div>

      <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-[14px] px-6 py-4 mb-6 flex-wrap">
        <div>
          <div className="text-[16px] font-bold text-[#1A2332]">
            VAYLA Artist Support Vol.1
          </div>
          <div className="flex gap-2 mt-1.5">
            <span className="px-2.5 py-0.5 rounded-[5px] text-[11px] font-semibold bg-purple-50 text-purple-600">
              Music
            </span>
            <StatusBadge variant="ended" label="Deadline" />
            <span className="px-2 py-0.5 rounded-[5px] text-[11px] font-semibold bg-emerald-50 text-emerald-600">
              Public
            </span>
          </div>
        </div>
        <div className="w-px h-10 bg-gray-200 mx-2" />
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">Period</div>
          <div className="text-[15px] font-bold text-[#1A2332]">
            2026-04-10 ~ 04-30
          </div>
        </div>
        <div className="w-px h-10 bg-gray-200 mx-2" />
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">
            Total Participants
          </div>
          <div className="text-[15px] font-bold text-[#1A2332]">
            1,284 users
          </div>
        </div>
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">Total Raised</div>
          <div className="text-[15px] font-bold text-[#00A88A]">
            42,500 USDT
          </div>
        </div>
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">Platform Fee</div>
          <div className="text-[15px] font-bold text-[#1A2332]">5%</div>
        </div>
        <div className="w-px h-10 bg-gray-200 mx-2" />
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">
            Settlement Status
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-semibold bg-amber-50 text-amber-500">
            <span className="w-1.5 h-1.5 rounded-full bg-current" /> Settlement
            Under Review
          </span>
        </div>
      </div>

      <div className="flex gap-2.5 mb-6 flex-wrap">
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500 text-white text-[13px] font-semibold hover:bg-blue-600 transition-all">
          📋 Settlement Preview
        </button>
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00C9A7] text-white text-[13px] font-semibold hover:bg-[#00A88A] transition-all">
          ✅ Settlement Confirmed
        </button>
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-100 text-amber-600 text-[13px] font-semibold hover:bg-amber-400 hover:text-white transition-all">
          ⏸️ Settlement Hold
        </button>
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
          📄 Exclude/Refund History
        </button>
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
          💾 Memo Save
        </button>
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
          📥 Export
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-6">
        <KpiCard color="mint" label="Total Raised" value="42,500" sub="USDT" />
        <KpiCard
          color="blue"
          label="Valid Contribution"
          value="41,800"
          sub="USDT"
        />
        <KpiCard
          color="red"
          label="Exclude Amount"
          value="400"
          sub="USDT · 1 items"
        />
        <KpiCard
          color="orange"
          label="Refund Amount"
          value="300"
          sub="USDT · 1 items"
        />
        <KpiCard
          color="purple"
          label="Platform Fee"
          value="2,090"
          sub="USDT (5%)"
        />
        <KpiCard
          color="green"
          label="Final Settlement"
          value="39,710"
          valueSize="text-[22px]"
          sub="USDT"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6 p-7">
        <div className="text-[16px] font-bold text-[#1A2332] mb-4">
          🧮 Settlement Calculate Summary
        </div>
        {[
          { label: "Total Raised", amount: "42,500 USDT", type: "normal" },
          {
            label: "Exclude Amount",
            amount: "- 400 USDT",
            type: "negative",
            op: "−",
          },
          {
            label: "Refund Amount",
            amount: "- 300 USDT",
            type: "negative",
            op: "−",
          },
          {
            label: "Settlement Target Amount",
            amount: "41,800 USDT",
            type: "subtotal",
          },
          {
            label: "Platform Fee (5%)",
            amount: "- 2,090 USDT",
            type: "negative",
            op: "−",
          },
          {
            label: "Final Settlement Amount",
            amount: "39,710 USDT",
            type: "total",
            op: "=",
          },
        ].map((row, i) => (
          <div
            key={i}
            className={`flex items-center justify-between py-3.5 ${row.type === "subtotal" ? "bg-gray-50 -mx-7 px-7 my-1" : "border-b border-gray-50 last:border-0"} ${row.type === "total" ? "mt-1" : ""}`}
          >
            <div className="flex items-center gap-2 text-[14px] text-gray-700">
              {row.op && (
                <span
                  className={`w-6 h-6 rounded flex items-center justify-center text-[12px] font-bold ${row.op === "−" ? "bg-red-100 text-red-500" : "bg-[#E6FAF5] text-[#00A88A]"}`}
                >
                  {row.op}
                </span>
              )}
              <span
                className={
                  row.type === "subtotal" || row.type === "total"
                    ? "font-bold text-[#1A2332]"
                    : ""
                }
              >
                {row.label}
              </span>
            </div>
            <div
              className={`text-[14px] font-bold ${row.type === "negative" ? "text-red-500" : row.type === "total" ? "text-[24px] font-extrabold text-[#00C9A7]" : row.type === "subtotal" ? "font-extrabold text-[#1A2332]" : "text-[#1A2332]"}`}
            >
              {row.amount}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-bold text-[#1A2332]">📋 Settlement Target Participation History</span>
          <span className="text-[12px] text-gray-400">Total 5 items</span>
        </div>
        <DataTable columns={participantColumns} data={PARTICIPANTS} rowClassName={(row) => row.original.row} />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-bold text-[#1A2332]">⚠️ Exclude / Refund / Hold History</span>
          <span className="text-[12px] text-gray-400">Total 3 items</span>
        </div>
        <DataTable columns={excludeColumns} data={EXCLUDE_ROWS} rowClassName={(row) => row.original.rowClass} />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-bold text-[#1A2332]">
            🏷️ Settlement Status Guide
          </span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-5 gap-3">
            {[
              {
                label: "Settlement Pending",
                desc: "Not yet reviewed",
                color: "text-gray-500",
                dotColor: "bg-gray-400",
                active: false,
              },
              {
                label: "Settlement Under Review",
                desc: "Current Status",
                color: "text-amber-500",
                dotColor: "bg-amber-400",
                active: true,
              },
              {
                label: "Settlement Confirmed",
                desc: "Final Amount Confirmed",
                color: "text-blue-500",
                dotColor: "bg-blue-400",
                active: false,
              },
              {
                label: "Settlement Completed",
                desc: "Process Ended",
                color: "text-[#00A88A]",
                dotColor: "bg-[#00C9A7]",
                active: false,
              },
              {
                label: "Settlement Hold",
                desc: "Issue items Hold",
                color: "text-purple-500",
                dotColor: "bg-purple-400",
                active: false,
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`text-center p-4 rounded-xl border ${s.active ? "bg-amber-50 border-2 border-amber-400" : "bg-gray-50 border-gray-100"}`}
              >
                <span
                  className={`inline-flex items-center gap-1.5 text-[12px] font-semibold ${s.color}`}
                >
                  <span className={`w-2 h-2 rounded-full ${s.dotColor}`} />
                  {s.label}
                </span>
                <div
                  className={`text-[11px] mt-2 ${s.active ? "text-amber-500 font-semibold" : "text-gray-400"}`}
                >
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <span className="text-base font-bold text-[#1A2332]">
              📝 Operations Memo
            </span>
            <button className="px-2.5 py-1.5 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
              💾 Save
            </button>
          </div>
          <div className="p-6">
            <ul className="list-disc pl-5 text-[13px] text-gray-700 space-y-2 mb-4">
              <li>Duplicate Participation 1 items Settlement Hold Process</li>
              <li>Cancel Request 1 items Apply Completed</li>
              <li>Final Settlement Amount after exclude/refund Calculate</li>
              <li>
                Representative Confirm after Settlement Confirmed scheduled
              </li>
            </ul>
            <textarea
              rows={3}
              placeholder="Add memo..."
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[14px] text-gray-700 outline-none focus:border-[#00C9A7] resize-vertical font-[inherit]"
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <span className="text-base font-bold text-[#1A2332]">
              📜 Review History
            </span>
            <span className="text-[12px] text-gray-400">Recent 3 items</span>
          </div>
          <div className="p-6">
            {[
              {
                dot: "bg-amber-400",
                author: "Kai",
                action: "Hold items Confirm Request",
                time: "2026-04-17 09:20",
              },
              {
                dot: "bg-[#00C9A7]",
                author: "Jay",
                action: "Cancel Request Apply Completed",
                time: "2026-04-17 11:05",
              },
              {
                dot: "bg-blue-400",
                author: "Kai",
                action: "Settlement Value Review Completed",
                time: "2026-04-17 14:00",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 py-3 border-b border-gray-100 last:border-0"
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${item.dot} mt-1.5 flex-shrink-0`}
                />
                <div>
                  <div className="text-[13px] text-gray-700">
                    <span className="font-semibold text-[#1A2332]">
                      {item.author}
                    </span>{" "}
                    — {item.action}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
