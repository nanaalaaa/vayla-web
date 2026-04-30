import { TOP_3 } from "@/data/dashboard";

export function InProgressPanels() {
  return (
    <div className="grid grid-cols-3 gap-5 mb-7">
      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="px-6 py-[18px] border-b border-gray-100">
          <h3 className="text-[15px] font-bold text-[#1A2332]">🎵 In Progress Discovery</h3>
        </div>
        <div className="p-4">
          <div className="rounded-xl p-5 text-white mb-3" style={{ background: "linear-gradient(135deg, #1A2332, #243044)" }}>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
              <span className="text-[11px] text-[#00C9A7] font-semibold">LIVE</span>
            </div>
            <div className="text-lg font-bold mb-1">Neon Night Beat</div>
            <div className="text-xs text-gray-400 mb-3">D-11 left · 38 Track · 4,230 Vote</div>
            <div className="bg-white/10 rounded-lg h-[6px] overflow-hidden">
              <div className="bg-[#00C9A7] h-full rounded-lg" style={{ width: "72%" }} />
            </div>
            <div className="flex justify-between mt-1.5 text-[11px] text-gray-400">
              <span>Reward Pool</span>
              <span className="text-[#00C9A7] font-semibold">1,200 VAYLA</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 font-semibold mb-2">Top 3 Track</div>
          {TOP_3.map((t, i) => (
            <div key={i} className={`flex items-center gap-2 py-2 ${i < TOP_3.length - 1 ? "border-b border-gray-100" : ""}`}>
              <span className={`text-sm font-extrabold w-6 ${t.color}`}>{t.rank}</span>
              <div className="flex-1">
                <div className="text-[13px] font-semibold text-[#1A2332]">{t.name}</div>
                <div className="text-[11px] text-gray-400">{t.artist}</div>
              </div>
              <span className="text-xs font-bold text-[#1A2332]">{t.votes}</span>
            </div>
          ))}
        </div>
        <button className="block w-full text-center py-3 text-[13px] font-semibold text-[#00C9A7] border-t border-gray-100 hover:bg-[#E6FAF5] transition-colors">
          Discovery Management →
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="px-6 py-[18px] border-b border-gray-100">
          <h3 className="text-[15px] font-bold text-[#1A2332]">🚀 In Progress Boost</h3>
        </div>
        <div className="p-4">
          <div className="p-[14px] border border-gray-200 rounded-xl mb-3">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-sm font-bold text-[#1A2332]">Waterbomb 2026 in SEOUL</div>
                <div className="text-[11px] text-gray-400">Festival · D-70</div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-[6px] text-[11px] font-semibold bg-[#E6FAF5] text-[#00A88A]">ACTIVE</span>
            </div>
            <div className="flex gap-4 mb-2.5">
              {[
                { label: "모Amount", value: "$8,400" },
                { label: "Target", value: "$10,000", valueColor: "text-gray-400" },
                { label: "EST. ROI", value: "+12.5%", valueColor: "text-[#00C9A7]" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[11px] text-gray-400">{s.label}</div>
                  <div className={`text-[15px] font-bold ${s.valueColor ?? "text-[#1A2332]"}`}>{s.value}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 rounded-lg h-[6px] overflow-hidden">
              <div className="bg-[#00C9A7] h-full rounded-lg" style={{ width: "84%" }} />
            </div>
            <div className="text-right text-[11px] text-[#00A88A] font-semibold mt-1">84% Achievement</div>
          </div>

          <div className="p-[14px] border border-gray-200 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-sm font-bold text-[#1A2332]">G-Dragon World Tour</div>
                <div className="text-[11px] text-gray-400">Music · Upcoming</div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-[6px] text-[11px] font-semibold bg-amber-50 text-amber-500">UPCOMING</span>
            </div>
            <div className="flex gap-4">
              {[
                { label: "Target", value: "$50,000" },
                { label: "EST. ROI", value: "+8.5%", valueColor: "text-[#00C9A7]" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[11px] text-gray-400">{s.label}</div>
                  <div className={`text-[15px] font-bold ${s.valueColor ?? "text-[#1A2332]"}`}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="block w-full text-center py-3 text-[13px] font-semibold text-[#00C9A7] border-t border-gray-100 hover:bg-[#E6FAF5] transition-colors">
          Boost Management →
        </button>
      </div>
    </div>
  );
}
