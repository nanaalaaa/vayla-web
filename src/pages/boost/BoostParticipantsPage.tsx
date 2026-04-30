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
    <span
      className={`px-2 py-0.5 rounded-[5px] text-[11px] font-semibold ${map[type] ?? "bg-gray-100 text-gray-400"}`}
    >
      {type}
    </span>
  );
}

export default function BoostParticipantsPage({ onNavigate }: Props) {
  const rows = [
    {
      id: "PT-1001",
      user: "user_1024",
      wallet: "0x71A2...9Fd2",
      amount: "100 USDT",
      time: "04.10 14:12",
      count: "1",
      status: "normal" as const,
      statusLabel: "Normal",
      settle: "Apply Completed",
      memo: "-",
      memoColor: "text-gray-400",
      rowClass: "",
    },
    {
      id: "PT-1002",
      user: "user_2291",
      wallet: "0x43Bc...28Ae",
      amount: "50 USDT",
      time: "04.10 14:18",
      count: "1",
      status: "normal" as const,
      statusLabel: "Normal",
      settle: "Apply Completed",
      memo: "-",
      memoColor: "text-gray-400",
      rowClass: "",
    },
    {
      id: "PT-1003",
      user: "user_8754",
      wallet: "0x992D...7Ac1",
      amount: "300 USDT",
      time: "04.10 15:02",
      count: "2",
      status: "review" as const,
      statusLabel: "Needs Review",
      settle: "Hold",
      memo: "Duplicate Participation Confirm Required",
      memoColor: "text-amber-500",
      rowClass: "border-l-2 border-amber-400 bg-amber-50/30",
    },
    {
      id: "PT-1004",
      user: "user_4108",
      wallet: "0x18Df...73Bd",
      amount: "50 USDT",
      time: "04.10 15:10",
      count: "1",
      status: "rejected" as const,
      statusLabel: "Exclude",
      settle: "Not Applied",
      memo: "Cancel Request Apply",
      memoColor: "text-red-500",
      rowClass: "bg-red-50/30",
    },
    {
      id: "PT-1005",
      user: "user_6620",
      wallet: "0x81Bc...19Ac",
      amount: "200 USDT",
      time: "04.10 15:42",
      count: "1",
      status: "normal" as const,
      statusLabel: "Normal",
      settle: "Apply Completed",
      memo: "-",
      memoColor: "text-gray-400",
      rowClass: "",
    },
  ];

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
            <StatusBadge variant="active" label="In Progress" />
            <span className="px-2 py-0.5 rounded-[5px] text-[11px] font-semibold bg-emerald-50 text-emerald-600">
              Public
            </span>
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
          <div className="text-[11px] text-gray-400 mb-0.5">
            Min Participation
          </div>
          <div className="text-[15px] font-bold text-[#1A2332]">50 USDT</div>
        </div>
        <div className="w-px h-10 bg-gray-200 mx-2" />
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">Period</div>
          <div className="text-[15px] font-bold text-[#1A2332]">
            04.10 ~ 04.30
          </div>
        </div>
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">Fee</div>
          <div className="text-[15px] font-bold text-[#1A2332]">5%</div>
        </div>
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">Settlement</div>
          <div className="text-[15px] font-bold">
            <span className="px-2 py-0.5 rounded-[5px] text-[11px] font-semibold bg-amber-50 text-amber-500">
              Settlement Pending
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-6">
        <KpiCard
          color="mint"
          label="Total Participants"
          value="1,284"
          sub="users"
        />
        <KpiCard
          color="blue"
          label="Total Contribution"
          value="42,500"
          sub="USDT"
        />
        <KpiCard
          color="purple"
          label="Avg Contribution"
          value="33.1"
          sub="USDT"
        />
        <KpiCard color="yellow" label="Needs Review" value="12" sub="items" />
        <KpiCard color="red" label="Exclude Target" value="4" sub="items" />
        <KpiCard
          color="green"
          label="Settlement Applied"
          value="1,268"
          sub="items"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-bold text-[#1A2332]">
            👥 Participant List
          </span>
          <button className="px-2.5 py-1.5 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
            📥 Export
          </button>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex gap-3 flex-wrap">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              🔍
            </span>
            <input
              type="text"
              placeholder="Users ID, Wallet Address Search..."
              className="pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[13px] outline-none focus:border-[#00C9A7]"
              style={{ minWidth: "240px" }}
            />
          </div>
          {[
            "Status (All)",
            "Settlement Apply (All)",
            "Period (All)",
            "Amount (All)",
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
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {[
                  "Participation ID",
                  "Users ID",
                  "Wallet Address",
                  "Contribution Amount",
                  "Time",
                  "Count",
                  "Status",
                  "Settlement Apply",
                  "Memo",
                  "Action",
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
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer ${row.rowClass}`}
                >
                  <td className="px-3.5 py-3.5 font-mono text-[12px] text-gray-500">
                    {row.id}
                  </td>
                  <td className="px-3.5 py-3.5 font-semibold text-[#1A2332] text-[13px]">
                    {row.user}
                  </td>
                  <td className="px-3.5 py-3.5 font-mono text-[12px] text-gray-500">
                    {row.wallet}
                  </td>
                  <td className="px-3.5 py-3.5 font-semibold text-[13px]">
                    {row.amount}
                  </td>
                  <td className="px-3.5 py-3.5 text-[12px] text-gray-500">
                    {row.time}
                  </td>
                  <td className="px-3.5 py-3.5 text-center text-[13px]">
                    <span
                      className={
                        row.count === "2" ? "text-amber-500 font-semibold" : ""
                      }
                    >
                      {row.count}
                    </span>
                  </td>
                  <td className="px-3.5 py-3.5">
                    <StatusBadge variant={row.status} label={row.statusLabel} />
                  </td>
                  <td className="px-3.5 py-3.5">
                    <SettleBadge type={row.settle} />
                  </td>
                  <td className={`px-3.5 py-3.5 text-[12px] ${row.memoColor}`}>
                    {row.memo}
                  </td>
                  <td className="px-3.5 py-3.5">
                    <button className="px-2.5 py-1 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <span className="text-[13px] text-gray-400">1 - 5 / 1,284 users</span>
          <div className="flex gap-1">
            {["‹", "1", "2", "3", "...", "257", "›"].map((p, i) => (
              <button
                key={i}
                className={`w-[34px] h-[34px] rounded-lg border text-[13px] font-medium flex items-center justify-center transition-all ${p === "1" ? "bg-[#00C9A7] border-[#00C9A7] text-white" : "border-gray-200 text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
