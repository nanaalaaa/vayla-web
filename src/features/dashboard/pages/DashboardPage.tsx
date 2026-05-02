import { KPI_ITEMS } from "@/data/dashboard";
import { ActivityChart } from "../components/ActivityChart";
import { TxAndQueue } from "../components/TxAndQueue";
import { InProgressPanels } from "../components/InProgressPanels";
import { TokenStatus } from "../components/TokenStatus";

export default function DashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mb-7">
        {KPI_ITEMS.map((k, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-[14px] p-5 hover:border-[#00C9A7] hover:shadow-[0_4px_12px_rgba(0,201,167,0.08)] transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center text-xl ${k.iconBg} ${k.iconColor}`}>
                {k.icon}
              </div>
              {k.change && (
                <span className={`text-xs font-semibold px-2 py-[3px] rounded-md ${k.up ? "bg-[#E6FAF5] text-[#00A88A]" : "bg-red-50 text-red-500"}`}>
                  {k.change}
                </span>
              )}
            </div>
            <div className="text-[26px] font-extrabold text-[#1A2332] mb-1" style={{ letterSpacing: "-0.5px" }}>
              {k.value}
            </div>
            <div className="text-xs text-gray-500 font-medium mb-1">{k.label}</div>
            <div className="text-[11px] text-gray-400">{k.sub}</div>
          </div>
        ))}
      </div>

      <ActivityChart />
      <TxAndQueue />
      <InProgressPanels />
      <TokenStatus />
    </div>
  );
}
