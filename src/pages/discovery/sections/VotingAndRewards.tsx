import { StatusBadge } from "@/components/ui/StatusBadge";
import { NFT_ROWS, REWARD_SUMMARY } from "@/data/discovery";
import type { PageId } from "@/types/navigation";

interface Props {
  onNavigate: (page: PageId) => void;
}

function VotingStatus({ onNavigate }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div className="text-base font-bold text-[#1A2332]">🗳️ Voting Status (24h)</div>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => onNavigate("discovery-vote-monitor")}
            className="px-3 py-[5px] rounded-[6px] bg-[#00C9A7] text-white text-xs font-semibold hover:bg-[#00A88A]"
          >
            Monitoring Details →
          </button>
          <select className="px-2.5 py-[6px] border border-gray-200 rounded-lg text-xs text-gray-600 outline-none cursor-pointer">
            <option>Neon Night Beat</option>
            <option>Urban Flow Session</option>
            <option>All</option>
          </select>
        </div>
      </div>
      <div className="p-6">
        <div className="relative mb-5" style={{ height: "180px" }}>
          <svg width="100%" height="180" viewBox="0 0 500 180" preserveAspectRatio="none">
            {[45, 90, 135].map((y) => (
              <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#F3F4F6" strokeWidth="1" />
            ))}
            <path
              d="M0,160 L21,150 L42,145 L63,155 L83,160 L104,158 L125,150 L146,130 L167,110 L188,95 L208,80 L229,60 L250,45 L271,35 L292,30 L313,25 L333,28 L354,40 L375,50 L396,55 L417,48 L438,42 L458,38 L479,35 L500,30 L500,180 L0,180 Z"
              fill="url(#voteGradient)"
              opacity="0.3"
            />
            <path
              d="M0,160 L21,150 L42,145 L63,155 L83,160 L104,158 L125,150 L146,130 L167,110 L188,95 L208,80 L229,60 L250,45 L271,35 L292,30 L313,25 L333,28 L354,40 L375,50 L396,55 L417,48 L438,42 L458,38 L479,35 L500,30"
              fill="none"
              stroke="#00C9A7"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="voteGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00C9A7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute bottom-[-4px] left-0 right-0 flex justify-between text-[10px] text-gray-400">
            {["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "Now"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          <div className="bg-[#E6FAF5] rounded-[10px] p-[14px] text-center">
            <div className="text-[11px] text-gray-500 mb-1">Total Vote</div>
            <div className="text-[20px] font-extrabold text-[#00A88A]">1,247</div>
          </div>
          <div className="bg-blue-50 rounded-[10px] p-[14px] text-center">
            <div className="text-[11px] text-gray-500 mb-1">Unique Vote자</div>
            <div className="text-[20px] font-extrabold text-blue-500">483</div>
          </div>
          <div className="bg-purple-50 rounded-[10px] p-[14px] text-center">
            <div className="text-[11px] text-gray-500 mb-1">Average Vote/인</div>
            <div className="text-[20px] font-extrabold text-purple-500">2.58</div>
          </div>
        </div>

        <div className="mt-4 p-[14px] bg-gray-50 rounded-[10px]">
          <div className="text-xs font-semibold text-[#1A2332] mb-2">🔗 On-Chain Vote Verify</div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-500">Verify Completed</span>
            <span className="font-semibold text-[#00C9A7]">1,241 / 1,247 (99.5%)</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Verify Pending</span>
            <span className="font-semibold text-amber-500">6items (pending)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RewardStatus({ onNavigate }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div className="text-base font-bold text-[#1A2332]">🎁 Reward Distribution Status</div>
        <div className="flex gap-2">
          <button
            onClick={() => onNavigate("discovery-reward-distribution")}
            className="px-3 py-[5px] rounded-[6px] border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]"
          >
            Distribution Details →
          </button>
          <button className="px-3 py-[5px] rounded-[6px] bg-[#00C9A7] text-white text-xs font-semibold hover:bg-[#00A88A]">
            days괄 Distribution
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="text-[13px] font-semibold text-[#1A2332] mb-3">NFT Publish Pending (5표 or more)</div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Track", "Artist", "Vote Count", "NFT Type", "Status", "Action"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-[0.5px] border-b border-gray-100 bg-gray-50 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NFT_ROWS.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-[14px] text-[13px] border-b border-gray-50"><strong className="text-[#1A2332]">{row.track}</strong></td>
                  <td className="px-4 py-[14px] text-[13px] border-b border-gray-50 text-gray-500">{row.artist}</td>
                  <td className="px-4 py-[14px] text-[13px] border-b border-gray-50"><strong className="text-[#00C9A7]">{row.votes}</strong></td>
                  <td className="px-4 py-[14px] text-[13px] border-b border-gray-50">
                    <span className={`inline-block px-2.5 py-[3px] rounded-[5px] text-[11px] font-semibold ${row.nftClass}`}>{row.nftType}</span>
                  </td>
                  <td className="px-4 py-[14px] text-[13px] border-b border-gray-50">
                    <StatusBadge variant={row.status} label={row.statusLabel} />
                  </td>
                  <td className="px-4 py-[14px] text-[13px] border-b border-gray-50">
                    <button className={`px-2.5 py-[5px] rounded-[6px] text-xs font-semibold transition-all ${row.actionClass}`}>{row.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 p-4 bg-gray-50 rounded-[10px]">
          <div className="text-xs font-semibold text-[#1A2332] mb-[10px]">📊 Reward Summary</div>
          {REWARD_SUMMARY.map((r) => (
            <div key={r.label} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-b-0">
              <div className="text-[13px] text-gray-500">{r.label}</div>
              <div className={`text-sm font-bold ${r.valueColor}`}>{r.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VotingAndRewards({ onNavigate }: Props) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <VotingStatus onNavigate={onNavigate} />
      <RewardStatus onNavigate={onNavigate} />
    </div>
  );
}
