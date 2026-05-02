import { LEADERBOARD, CURRENT_SETTINGS, GENRE_DIST } from "@/data/discovery";

export function RealtimeLeaderboard() {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
          🏆 실hours Leaderboard
        </div>
        <select className="px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 outline-none cursor-pointer">
          <option>Neon Night Beat</option>
          <option>Urban Flow Session</option>
        </select>
      </div>
      <div className="p-6">
        {LEADERBOARD.map((item) => (
          <div key={item.rank} className="flex items-center gap-[14px] py-3 border-b border-gray-50 last:border-b-0">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[13px] font-bold ${item.rankClass}`}>
              {item.rank}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[#1A2332] text-[13px]">{item.name}</div>
              <div className="text-xs text-gray-400">{item.artist}</div>
            </div>
            <div>
              <div className="text-sm font-bold text-[#00A88A]">{item.votes}</div>
              {item.waveform && (
                <div className="flex items-center gap-0.5 h-6 mt-1">
                  {[0, 0.1, 0.2, 0.3, 0.15].map((delay, i) => (
                    <div
                      key={i}
                      className="w-[3px] rounded-[2px] bg-[#00C9A7]"
                      style={{ animation: `wave 1.2s ease-in-out ${delay}s infinite`, height: "4px" }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CurrentSettings() {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="text-base font-bold text-[#1A2332]">💡 Current Settings</div>
      </div>
      <div className="p-6">
        {CURRENT_SETTINGS.map((r) => (
          <div key={r.label} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-b-0">
            <div className="text-[13px] text-gray-500">{r.label}</div>
            <div className="text-sm font-bold text-[#1A2332]">{r.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GenreDistribution() {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="text-base font-bold text-[#1A2332]">📊 Genre minutes포</div>
      </div>
      <div className="p-6">
        {GENRE_DIST.map((g) => (
          <div key={g.label} className="mb-3 last:mb-0">
            <div className="flex justify-between mb-1">
              <span className="text-[13px] font-medium">{g.label}</span>
              <span className="text-xs text-gray-400">{g.pct}%</span>
            </div>
            <div className="h-[6px] bg-gray-100 rounded-[3px] overflow-hidden">
              <div className="h-full rounded-[3px]" style={{ width: `${g.pct}%`, background: g.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
