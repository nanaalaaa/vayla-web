import { StatusBadge } from "@/components/ui/StatusBadge";
import { HISTORY_ROWS } from "@/data/discovery";

export function ReviewHistory() {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div className="text-base font-bold text-[#1A2332]">📜 Review History</div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-3">
            <div className="relative max-w-[320px] flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Trackusers, Artist Search..."
                className="w-full pl-9 pr-3.5 py-[9px] border border-gray-200 rounded-lg text-[13px] text-gray-700 outline-none focus:border-[#00C9A7]"
              />
            </div>
            <select className="px-3.5 py-[9px] border border-gray-200 rounded-lg text-[13px] text-gray-600 outline-none cursor-pointer focus:border-[#00C9A7]">
              <option>All Status</option>
              <option>Approve</option>
              <option>Reject</option>
              <option>Hold</option>
            </select>
          </div>
          <button className="px-3 py-[5px] rounded-[6px] border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]">
            📥 Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {["Track", "Artist", "Challenge", "Genre", "Submission Date시", "Review Status", "Review자", "Reason"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-[0.5px] border-b border-gray-100 bg-gray-50 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {HISTORY_ROWS.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-[14px] text-[13px] border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[20px] flex-shrink-0" style={{ background: row.bg }}>
                      🎵
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A2332] text-[13px]">{row.name}</div>
                      <div className="text-xs text-gray-400 mt-[2px]">{row.dur}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-[14px] text-[13px] border-b border-gray-50 font-medium text-[#1A2332]">{row.artist}</td>
                <td className="px-4 py-[14px] text-[13px] border-b border-gray-50">{row.challenge}</td>
                <td className="px-4 py-[14px] text-[13px] border-b border-gray-50">
                  <span className="inline-block px-2.5 py-[3px] bg-gray-100 rounded-[5px] text-[11px] font-semibold text-gray-600">{row.genre}</span>
                </td>
                <td className="px-4 py-[14px] text-[13px] border-b border-gray-50 text-gray-400 text-xs">{row.date}</td>
                <td className="px-4 py-[14px] text-[13px] border-b border-gray-50">
                  <StatusBadge variant={row.status} label={row.statusLabel} />
                </td>
                <td className="px-4 py-[14px] text-[13px] border-b border-gray-50 text-gray-500 text-xs">{row.reviewer}</td>
                <td className={`px-4 py-[14px] text-[13px] border-b border-gray-50 text-xs ${row.reasonColor ?? "text-gray-400"}`}>{row.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
        <div className="text-[13px] text-gray-400">1 - 5 / 47items</div>
        <div className="flex gap-1">
          {["‹", "1", "2", "3", "...", "10", "›"].map((p, i) => (
            <button
              key={i}
              className={`w-[34px] h-[34px] rounded-lg border text-[13px] font-medium cursor-pointer flex items-center justify-center transition-all ${p === "1" ? "bg-[#00C9A7] border-[#00C9A7] text-white" : "bg-white border-gray-200 text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
