import { StatusBadge } from "@/components/ui/StatusBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import type { PageId } from "@/types/navigation";

interface Props {
  onNavigate: (id: PageId) => void;
}

function RiskTypeBadge({ type }: { type: string }) {
  const map: Record<string, string> = {
    "Duplicate Participation": "bg-red-50 text-red-500",
    "Retry Repeat": "bg-orange-50 text-orange-500",
    "High-value Participation": "bg-purple-50 text-purple-500",
    "Wallet Repeat": "bg-amber-50 text-amber-500",
    "Refund Request": "bg-blue-50 text-blue-500",
  };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-[5px] text-[11px] font-semibold ${map[type] ?? "bg-gray-100 text-gray-500"}`}
    >
      {type}
    </span>
  );
}

function SettleBadge({ type }: { type: string }) {
  const map: Record<string, string> = {
    Hold: "bg-amber-50 text-amber-500",
    "Not Applied": "bg-gray-100 text-gray-400",
    "Apply Completed": "bg-[#E6FAF5] text-[#00A88A]",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded-[5px] text-[11px] font-semibold ${map[type] ?? "bg-gray-100 text-gray-400"}`}
    >
      {type}
    </span>
  );
}

export default function BoostRiskPage({ onNavigate }: Props) {
  const risks = [
    {
      id: "RK-001",
      ptId: "PT-1003",
      user: "user_8754",
      wallet: "0x992D...7Ac1",
      amount: "300 USDT",
      type: "Duplicate Participation",
      time: "04-17 09:10",
      status: "review" as const,
      statusLabel: "Needs Review",
      settle: "Hold",
      memo: "Confirm in progress",
      row: "border-l-2 border-amber-400",
    },
    {
      id: "RK-002",
      ptId: "PT-1041",
      user: "user_5521",
      wallet: "0x82Af...1Cc9",
      amount: "250 USDT",
      type: "Retry Repeat",
      time: "04-17 10:05",
      status: "reviewing" as const,
      statusLabel: "Under Review",
      settle: "Hold",
      memo: "Pattern Confirm Required",
      row: "border-l-2 border-amber-400",
    },
    {
      id: "RK-003",
      ptId: "PT-1092",
      user: "user_4410",
      wallet: "0x13Bc...78Fd",
      amount: "500 USDT",
      type: "High-value Participation",
      time: "04-17 10:44",
      status: "review" as const,
      statusLabel: "Needs Review",
      settle: "Hold",
      memo: "Manual Confirm Required",
      row: "border-l-2 border-amber-400",
    },
    {
      id: "RK-004",
      ptId: "PT-1118",
      user: "user_7772",
      wallet: "0x91Cd...24Ae",
      amount: "50 USDT",
      type: "Wallet Repeat",
      time: "04-17 11:20",
      status: "rejected" as const,
      statusLabel: "Exclude",
      settle: "Not Applied",
      memo: "Exclude Process",
      row: "border-l-2 border-red-400 bg-red-50/20",
    },
    {
      id: "RK-005",
      ptId: "PT-1130",
      user: "user_9088",
      wallet: "0x77De...63Ac",
      amount: "100 USDT",
      type: "Refund Request",
      time: "04-17 12:02",
      status: "complete" as const,
      statusLabel: "Refund Processed",
      settle: "Not Applied",
      memo: "Refund Completed",
      row: "border-l-2 border-blue-400",
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
        <div className="w-px h-10 bg-gray-200 mx-2" />
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">Risk Detected</div>
          <div className="text-[15px] font-bold text-red-500">18 items</div>
        </div>
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">Needs Review</div>
          <div className="text-[15px] font-bold text-amber-500">12 items</div>
        </div>
        <div>
          <div className="text-[11px] text-gray-400 mb-0.5">
            Settlement Hold
          </div>
          <div className="text-[15px] font-bold text-purple-500">4 items</div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-6">
        <KpiCard color="red" label="All Risk Detected" value="18" sub="items" />
        <KpiCard color="yellow" label="Needs Review" value="12" sub="items" />
        <KpiCard color="orange" label="Exclude Process" value="3" sub="items" />
        <KpiCard color="mint" label="Normal Process" value="2" sub="items" />
        <KpiCard color="purple" label="Settlement Hold" value="4" sub="items" />
        <KpiCard color="blue" label="Refund Related" value="1" sub="items" />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-base font-bold text-[#1A2332]">
            🛡️ Risk List
          </span>
          <button className="px-2.5 py-1.5 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
            📥 Export
          </button>
        </div>
        <div className="px-6 py-4 flex gap-3 flex-wrap items-center border-b border-gray-100">
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
            "Status: All",
            "Detected Type: All",
            "Settlement Apply: All",
            "Amount: All",
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
            style={{ minWidth: "1300px" }}
          >
            <thead>
              <tr>
                {[
                  "Risk ID",
                  "Participation ID",
                  "Users ID",
                  "Wallet Address",
                  "Amount",
                  "Detected Type",
                  "Detection Time",
                  "Status",
                  "Settlement Apply",
                  "Memo",
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
              {risks.map((risk, i) => (
                <tr
                  key={i}
                  className={`hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer ${risk.row}`}
                >
                  <td className="px-3.5 py-3 font-semibold text-[#1A2332] text-[13px]">
                    {risk.id}
                  </td>
                  <td className="px-3.5 py-3 text-[13px]">{risk.ptId}</td>
                  <td className="px-3.5 py-3 text-[13px]">{risk.user}</td>
                  <td className="px-3.5 py-3 font-mono text-[12px] text-gray-500">
                    {risk.wallet}
                  </td>
                  <td className="px-3.5 py-3 font-semibold text-[13px]">
                    {risk.amount}
                  </td>
                  <td className="px-3.5 py-3">
                    <RiskTypeBadge type={risk.type} />
                  </td>
                  <td className="px-3.5 py-3 text-[12px] text-gray-500">
                    {risk.time}
                  </td>
                  <td className="px-3.5 py-3">
                    <StatusBadge
                      variant={risk.status}
                      label={risk.statusLabel}
                    />
                  </td>
                  <td className="px-3.5 py-3">
                    <SettleBadge type={risk.settle} />
                  </td>
                  <td className="px-3.5 py-3 text-[12px] text-gray-500 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {risk.memo}
                  </td>
                  <td className="px-3.5 py-3">
                    <div
                      className="flex gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 text-[11px] font-semibold hover:bg-emerald-500 hover:text-white transition-all whitespace-nowrap">
                        Approve
                      </button>
                      <button className="px-2 py-1 rounded-md bg-orange-100 text-orange-600 text-[11px] font-semibold hover:bg-orange-400 hover:text-white transition-all whitespace-nowrap">
                        Hold
                      </button>
                      <button className="px-2 py-1 rounded-md bg-red-50 text-red-500 text-[11px] font-semibold hover:bg-red-500 hover:text-white transition-all whitespace-nowrap">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <span className="text-[13px] text-gray-400">
            Total 18 items · 1-5 Display
          </span>
          <div className="flex gap-1">
            <button className="px-2.5 py-1.5 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-400 opacity-40 cursor-not-allowed">
              Previous
            </button>
            {["1", "2", "3", "4"].map((p, i) => (
              <button
                key={i}
                className={`w-[34px] h-[34px] rounded-lg border text-[13px] font-medium flex items-center justify-center transition-all ${p === "1" ? "bg-[#00C9A7] border-[#00C9A7] text-white" : "border-gray-200 text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]"}`}
              >
                {p}
              </button>
            ))}
            <button className="px-2.5 py-1.5 rounded-md border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
