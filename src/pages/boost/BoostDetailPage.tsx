import { StatusBadge } from "@/components/ui/StatusBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import type { PageId } from "@/types/navigation";

interface Props {
  onNavigate: (id: PageId) => void;
}

export default function BoostDetailPage({ onNavigate }: Props) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => onNavigate("boost")}
          className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-lg hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
        >
          ←
        </button>
        <div className="flex gap-2 ml-auto">
          <button
            onClick={() => onNavigate("boost-edit")}
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
          >
            Edit
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-50 text-red-500 text-[13px] font-semibold hover:bg-red-500 hover:text-white transition-all">
            Project Paused
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#00C9A7] text-white text-[13px] font-semibold hover:bg-[#00A88A] transition-all">
            Execute Settlement
          </button>
        </div>
      </div>

      <div
        className="rounded-[14px] p-8 mb-6 grid grid-cols-2 gap-8 text-white"
        style={{ background: "linear-gradient(135deg, #1A2332, #243044)" }}
      >
        <div className="flex flex-col justify-center">
          <div className="text-2xl font-extrabold mb-2">
            🎪 Waterbomb Festival 2026
          </div>
          <div className="text-sm text-gray-300 mb-2">CJ ENM</div>
          <div className="text-[13px] text-gray-400 mb-4">Various Artists</div>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg w-fit text-[12px] font-semibold text-[#00C9A7] border border-[#00C9A7]"
            style={{ background: "rgba(0,201,167,0.2)" }}
          >
            FESTIVAL
          </span>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {[
            { label: "Target Amount", value: "500,000 USDT" },
            {
              label: "Current Fundraising",
              value: "347,250 USDT",
              sub: "69.5% Achievement",
            },
            { label: "Participants", value: "1,847 users" },
            { label: "Remaining Period", value: "23 days" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="py-3 border-b border-white/10 last:border-0"
            >
              <div className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-[18px] font-bold">{stat.value}</div>
              {stat.sub && (
                <div className="text-[11px] text-gray-300 mt-1">{stat.sub}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KpiCard
          color="mint"
          label="Today Participation"
          value="127users"
          sub="+12% vs Yesterday"
          subColor="text-[#00C9A7]"
        />
        <KpiCard
          color="blue"
          label="Today Fundraising"
          value="18,500"
          sub="+8% USDT"
          subColor="text-[#00C9A7]"
        />
        <KpiCard
          color="purple"
          label="Est. ROI"
          value="15.2%"
          sub="Adjusted Estimate"
        />
        <KpiCard
          color="yellow"
          label="Escrow Balance"
          value="347,250"
          sub="USDT"
        />
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <div>
          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                📊 Fundraising Status Chart
              </span>
            </div>
            <div className="p-6">
              <div className="h-[200px] flex items-end gap-1.5 mb-2">
                {[45, 52, 58, 62, 65, 68, 71].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[4px] hover:opacity-80 transition-all"
                    style={{
                      height: `${h}%`,
                      background: "linear-gradient(180deg, #00C9A7, #00A88A)",
                    }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {[
                  "04/11",
                  "04/12",
                  "04/13",
                  "04/14",
                  "04/15",
                  "04/16",
                  "04/17",
                ].map((d) => (
                  <div
                    key={d}
                    className="text-center text-[10px] text-gray-400"
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                {["Daily", "Weekly", "Monthly"].map((btn) => (
                  <button
                    key={btn}
                    className={`px-3 py-1.5 rounded-md border text-[12px] font-semibold transition-all ${btn === "Weekly" ? "bg-[#00C9A7] border-[#00C9A7] text-white" : "border-gray-200 text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]"}`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                👥 Participant List
              </span>
              <div className="flex gap-2 items-center">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    🔍
                  </span>
                  <input
                    type="text"
                    placeholder="Participant Search..."
                    className="pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[13px] outline-none focus:border-[#00C9A7]"
                  />
                </div>
                <select className="px-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 bg-white outline-none">
                  <option>All Amount</option>
                </select>
                <button className="px-2.5 py-2 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
                  📥 CSV
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {[
                      "Participant",
                      "Wallet Address",
                      "Amount",
                      "Date",
                      "TX Hash",
                      "Status",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-100 bg-gray-50 whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Alex Kim",
                      wallet: "0x7a3B...9f2E",
                      amount: "5,000 USDT",
                      date: "2026-04-15 14:23",
                      tx: "0xabc...def",
                      status: "active" as const,
                    },
                    {
                      name: "Sarah J",
                      wallet: "0x4c2D...8b1A",
                      amount: "2,500 USDT",
                      date: "2026-04-15 11:45",
                      tx: "0x123...789",
                      status: "active" as const,
                    },
                    {
                      name: "Michel Lee",
                      wallet: "0x9d5e...c4f3",
                      amount: "7,500 USDT",
                      date: "2026-04-15 09:30",
                      tx: "0x456...012",
                      status: "active" as const,
                    },
                    {
                      name: "Jun Park",
                      wallet: "0x2b8c...e6d1",
                      amount: "3,250 USDT",
                      date: "2026-04-14 16:20",
                      tx: "0x789...345",
                      status: "active" as const,
                    },
                    {
                      name: "Emily Chen",
                      wallet: "0x5f1a...b7c2",
                      amount: "1,500 USDT",
                      date: "2026-04-14 13:15",
                      tx: "0xdef...ghi",
                      status: "pending" as const,
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-50 border-b border-gray-50 last:border-0"
                    >
                      <td className="px-4 py-3.5 font-semibold text-[#1A2332] text-[13px]">
                        {row.name}
                      </td>
                      <td className="px-4 py-3.5 font-mono text-[11px] text-gray-500">
                        {row.wallet}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-[#1A2332] text-[13px]">
                        {row.amount}
                      </td>
                      <td className="px-4 py-3.5 text-[12px] text-gray-400">
                        {row.date}
                      </td>
                      <td className="px-4 py-3.5 font-mono text-[11px] text-[#00C9A7]">
                        {row.tx}
                      </td>
                      <td className="px-4 py-3.5">
                        <StatusBadge
                          variant={row.status}
                          label={
                            row.status === "active" ? "Confirmed" : "Pending"
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
              <span className="text-[13px] text-gray-400">
                1 - 5 / 1,847 users
              </span>
              <div className="flex gap-1">
                {["‹", "1", "2", "3", "...", "369", "›"].map((p, i) => (
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

          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                💰 Settlement History
              </span>
            </div>
            <div className="p-6">
              {[
                {
                  title: "Milestones 1 Settlement",
                  status: "active" as const,
                  statusLabel: "Completed",
                  amount: "100,000 USDT · 2026-03-15",
                  pct: 100,
                  barColor: "bg-gradient-to-r from-[#00C9A7] to-[#00A88A]",
                },
                {
                  title: "Milestones 2 Settlement",
                  status: "pending" as const,
                  statusLabel: "Pending",
                  amount: "200,000 USDT · Est: 2026-05-01",
                  pct: 0,
                  barColor: "bg-blue-500",
                },
              ].map((item, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[13px] font-semibold text-[#1A2332]">
                      {item.title}
                    </span>
                    <StatusBadge
                      variant={item.status}
                      label={item.statusLabel}
                    />
                  </div>
                  <div className="text-[12px] text-gray-500 mb-1">
                    {item.amount}
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.barColor}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="p-4 bg-gray-50 rounded-xl mt-2">
                <div className="text-[12px] font-semibold text-[#1A2332] mb-2">
                  Platform Fee Settlement
                </div>
                <div className="flex justify-between">
                  <span className="text-[13px] text-gray-500">
                    of contribution 0.4%
                  </span>
                  <span className="text-[14px] font-bold text-[#00C9A7]">
                    1,389 USDT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                🎯 Milestones Progress
              </span>
            </div>
            <div className="p-6">
              {[
                {
                  dot: "bg-[#E6FAF5]",
                  dotColor: "text-[#00C9A7]",
                  icon: "✅",
                  title: "MS1: Artist Lineup Confirmed",
                  desc: "100,000 USDT / Completed",
                  time: "2026-03-15",
                },
                {
                  dot: "bg-blue-50",
                  dotColor: "text-blue-500",
                  icon: "🔄",
                  title: "MS2: Venue Confirmed & Stage Setup",
                  desc: "200,000 USDT / In Progress",
                  time: "Est: 2026-05-01",
                },
                {
                  dot: "bg-gray-100",
                  dotColor: "text-gray-400",
                  icon: "⏳",
                  title: "MS3: Final Rehearsal & Opening",
                  desc: "200,000 USDT / Pending",
                  time: "Est: 2026-06-15",
                },
              ].map((ms, i) => (
                <div key={i} className="flex gap-4 py-4 relative">
                  {i < 2 && (
                    <div className="absolute left-[17px] top-[50px] bottom-[-8px] w-0.5 bg-gray-100" />
                  )}
                  <div
                    className={`w-9 h-9 rounded-full ${ms.dot} flex items-center justify-center text-sm flex-shrink-0 z-[1] border-2 border-white ${ms.dotColor}`}
                  >
                    {ms.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-semibold text-[#1A2332]">
                      {ms.title}
                    </div>
                    <div className="text-[12px] text-gray-400 mt-0.5">
                      {ms.desc}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-1">
                      {ms.time}
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="h-10 rounded-md mt-4 mb-2"
                style={{
                  background:
                    "linear-gradient(90deg, #00C9A7 33%, #3B82F6 33%, #3B82F6 67%, #D1D5DB 67%)",
                }}
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>0 USDT</span>
                <span>166,500 USDT</span>
                <span>333,000 USDT</span>
                <span>500,000 USDT</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                📜 Smart Contract Information
              </span>
            </div>
            <div className="p-6">
              {[
                {
                  label: "Contract Type",
                  value: "Escrow",
                  valueClass: "text-[#00C9A7]",
                },
                {
                  label: "Contract Address",
                  value: "0x9B2c...4E7a",
                  copy: true,
                },
                {
                  label: "Network",
                  value: "BSC Mainnet",
                  valueClass: "text-white",
                },
                { label: "Deploy TX", value: "0xdef...abc", copy: true },
                {
                  label: "Status",
                  value: "Active ✅",
                  valueClass: "text-[#00C9A7]",
                },
                { label: "Last Interaction", value: "2026-04-15 14:23" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 mb-3 last:mb-0"
                  style={{ background: "#243044" }}
                >
                  <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-1">
                    {row.label}
                  </div>
                  <div
                    className={`flex items-center gap-2 text-[13px] font-semibold font-mono ${row.valueClass ?? "text-white"}`}
                  >
                    <span className="flex-1">{row.value}</span>
                    {row.copy && (
                      <span className="text-sm cursor-pointer hover:text-[#00C9A7] transition-all">
                        📋
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
                  BscScan View
                </button>
                <button className="flex-1 px-3 py-2 rounded-lg bg-red-50 text-red-500 text-[12px] font-semibold hover:bg-red-500 hover:text-white transition-all">
                  Contract Pause
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                ⚠️ Risk Monitoring
              </span>
            </div>
            <div className="p-6">
              <div className="p-3 bg-[#E6FAF5] rounded-xl mb-4 text-center">
                <div className="text-[11px] text-gray-500 mb-1">Risk Level</div>
                <div className="text-[18px] font-extrabold text-[#00C9A7] mb-1">
                  Low
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00C9A7] rounded-full"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
              <div className="text-[13px] font-semibold text-[#1A2332] mb-3">
                Checklist
              </div>
              {[
                {
                  label: "✅ KYC Verification Completed",
                  value: "Verified",
                  cls: "text-[#00C9A7]",
                },
                {
                  label: "✅ Escrow Balance Normal",
                  value: "Normal",
                  cls: "text-[#00C9A7]",
                },
                {
                  label: "✅ Milestones compliance",
                  value: "In Progress",
                  cls: "text-[#00C9A7]",
                },
                {
                  label: "⚠️ Participation Rate vs Target",
                  value: "69.5%",
                  cls: "text-amber-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0"
                >
                  <span className="text-[12px] text-gray-600">
                    {item.label}
                  </span>
                  <span className={`text-[13px] font-bold ${item.cls}`}>
                    {item.value}
                  </span>
                </div>
              ))}
              <button className="w-full mt-4 px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
                Generate Risk Report
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-bold text-[#1A2332]">
                📝 Activity Log
              </span>
            </div>
            <div className="p-6">
              {[
                {
                  dot: "bg-[#E6FAF5]",
                  icon: "💰",
                  title: "Alex Kim 5,000 USDT Participation",
                  time: "04-15 14:23",
                },
                {
                  dot: "bg-[#E6FAF5]",
                  icon: "💰",
                  title: "Sarah J 2,500 USDT Participation",
                  time: "04-15 11:45",
                },
                {
                  dot: "bg-blue-50",
                  icon: "📋",
                  title: "Milestones 2 Review Request",
                  time: "04-14",
                },
                {
                  dot: "bg-purple-50",
                  icon: "✏️",
                  title: "Project Information Edit",
                  time: "04-10",
                },
                {
                  dot: "bg-[#E6FAF5]",
                  icon: "✅",
                  title: "Milestones 1 Settlement Completed",
                  time: "04-01",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 py-3 relative">
                  {i < 4 && (
                    <div className="absolute left-[17px] top-[42px] bottom-[-2px] w-0.5 bg-gray-100" />
                  )}
                  <div
                    className={`w-9 h-9 rounded-full ${item.dot} flex items-center justify-center text-sm flex-shrink-0 z-[1]`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-semibold text-[#1A2332]">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-1">
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
