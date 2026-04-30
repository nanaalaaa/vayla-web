import { REVIEW_ITEMS } from "@/data/discovery";
import type { PageId } from "@/types/navigation";

interface Props {
  onNavigate: (page: PageId) => void;
}

export function TrackReviewQueue({ onNavigate }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
          📋 Track Review Queue
          <span className="text-[13px] font-medium text-red-500 ml-2">
            8items Pending
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => onNavigate("discovery-track-review")}
            className="px-3 py-[5px] rounded-[6px] bg-[#00C9A7] text-white text-xs font-semibold hover:bg-[#00A88A]"
          >
            All Review Pages →
          </button>
          <select className="px-2.5 py-[6px] border border-gray-200 rounded-lg text-xs text-gray-600 outline-none cursor-pointer">
            <option>All Challenges</option>
            <option>Neon Night Beat</option>
            <option>Urban Flow Session</option>
          </select>
          <select className="px-2.5 py-[6px] border border-gray-200 rounded-lg text-xs text-gray-600 outline-none cursor-pointer">
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 border-b border-gray-100">
        <label className="flex items-center gap-[6px] text-[13px] text-gray-500 cursor-pointer">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] accent-[#00C9A7]"
          />{" "}
          All Select
        </label>
        <button className="px-3 py-[5px] rounded-[6px] bg-[#00C9A7] text-white text-xs font-semibold hover:bg-[#00A88A]">
          ✓ Select Approve
        </button>
        <button className="px-3 py-[5px] rounded-[6px] bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-500 hover:text-white">
          ✕ Select Reject
        </button>
      </div>

      <div className="p-6">
        {REVIEW_ITEMS.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 py-4 border-b border-gray-50 last:border-b-0"
          >
            <input
              type="checkbox"
              className="w-[18px] h-[18px] accent-[#00C9A7] flex-shrink-0"
            />
            <div
              className="w-[52px] h-[52px] rounded-[12px] flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: item.thumb }}
            >
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[#1A2332] text-sm">
                {item.title}
              </div>
              <div className="text-xs text-gray-400 mt-[3px] flex gap-3">
                <span>
                  by <strong>{item.artist}</strong>
                </span>
                <span>{item.challenge}</span>
                <span>{item.genre}</span>
                <span>{item.duration}</span>
                <span className={item.timeColor}>{item.time}</span>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-[#E6FAF5] border-none text-[#00C9A7] flex items-center justify-center cursor-pointer text-sm hover:bg-[#00C9A7] hover:text-white transition-all flex-shrink-0">
              ▶
            </button>
            <div className="flex gap-2 shrink-0">
              <button className="px-2.5 py-[5px] rounded-[6px] bg-[#00C9A7] text-white text-xs font-semibold hover:bg-[#00A88A]">
                ✓ Approve
              </button>
              <button className="px-2.5 py-[5px] rounded-[6px] bg-amber-50 text-amber-500 text-xs font-semibold hover:bg-amber-500 hover:text-white">
                ⏸ Hold
              </button>
              <button className="px-2.5 py-[5px] rounded-[6px] bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-500 hover:text-white">
                ✕ Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
        <div className="text-[13px] text-gray-400">1 - 5 / 8items</div>
        <div className="flex gap-1">
          {["‹", "1", "2", "›"].map((p, i) => (
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
