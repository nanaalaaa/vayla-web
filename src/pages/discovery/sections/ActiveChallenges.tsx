import { StatusBadge } from "@/components/ui/StatusBadge";
import type { PageId } from "@/types/navigation";

interface Challenge {
  name: string;
  period: string;
  progress: number;
  status: "live" | "upcoming";
  statusLabel: string;
  stats: { label: string; value: string; color?: string }[];
  genres: string[];
  showDelete?: boolean;
}

const CHALLENGES: Challenge[] = [
  {
    name: "Neon Night Beat",
    period: "2026.04.10 ~ 2026.04.24 (D-7)",
    progress: 58,
    status: "live",
    statusLabel: "LIVE",
    stats: [
      { label: "Submitted Tracks", value: "47" },
      { label: "Total Vote", value: "3,284", color: "text-[#00C9A7]" },
      { label: "Participant", value: "892" },
      { label: "VAYLA Consumed", value: "470" },
    ],
    genres: ["K-POP", "EDM", "Hip-Hop"],
  },
  {
    name: "Urban Flow Session",
    period: "2026.04.14 ~ 2026.04.28 (D-11)",
    progress: 22,
    status: "live",
    statusLabel: "LIVE",
    stats: [
      { label: "Submitted Tracks", value: "18" },
      { label: "Total Vote", value: "641", color: "text-[#00C9A7]" },
      { label: "Participant", value: "234" },
      { label: "VAYLA Consumed", value: "180" },
    ],
    genres: ["R&B", "Soul"],
  },
  {
    name: "Summer Vibes 2026",
    period: "2026.04.25 ~ 2026.05.09 (D+8 Start)",
    progress: 0,
    status: "upcoming",
    statusLabel: "Yes정",
    stats: [
      { label: "Submitted Tracks", value: "0" },
      { label: "Total Vote", value: "0" },
      { label: "Target Participant", value: "1,000", color: "text-blue-500" },
      { label: "Yes상 Consumed", value: "~500", color: "text-gray-400" },
    ],
    genres: ["Pop", "Dance", "Tropical"],
    showDelete: true,
  },
];

interface Props {
  onNavigate: (page: PageId) => void;
}

export function ActiveChallenges({ onNavigate }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
          🎵 Active Challenge
        </div>
        <button
          onClick={() => onNavigate("discovery-create")}
          className="px-4 py-2 bg-[#00C9A7] text-white text-[13px] font-semibold rounded-lg hover:bg-[#00A88A] transition-colors"
        >
          + New Challenge
        </button>
      </div>
      <div className="p-4">
        {CHALLENGES.map((c) => (
          <div
            key={c.name}
            className="bg-white border border-gray-200 rounded-[14px] p-5 mb-4 last:mb-0 hover:border-[#00C9A7] hover:shadow-[0_4px_16px_rgba(0,201,167,0.1)] transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-base font-bold text-[#1A2332]">{c.name}</div>
                <div className="text-xs text-gray-400 mt-[2px]">{c.period}</div>
              </div>
              <StatusBadge variant={c.status} label={c.statusLabel} />
            </div>
            <div className="h-[6px] bg-gray-100 rounded-[3px] overflow-hidden">
              <div
                className="h-full rounded-[3px]"
                style={{ width: `${c.progress}%`, background: "linear-gradient(90deg, #00C9A7, #00A88A)", transition: "width 0.3s" }}
              />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-gray-100">
              {c.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[11px] text-gray-400 mb-1">{s.label}</div>
                  <div className={`text-lg font-bold ${s.color ?? "text-[#1A2332]"}`}>{s.value}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-1.5">
                {c.genres.map((g) => (
                  <span key={g} className="inline-block px-2.5 py-[3px] bg-gray-100 rounded-[5px] text-[11px] font-semibold text-gray-600">
                    {g}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate("discovery-challenge-detail")}
                  className="px-2.5 py-[5px] rounded-[6px] border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]"
                >
                  Details
                </button>
                <button className="px-2.5 py-[5px] rounded-[6px] border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7]">
                  Edit
                </button>
                {c.showDelete && (
                  <button className="px-2.5 py-[5px] rounded-[6px] bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-500 hover:text-white">
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
