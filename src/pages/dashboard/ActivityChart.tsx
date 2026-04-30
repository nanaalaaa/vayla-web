const TODAY_STATS = [
  { value: "128", color: "text-[#00C9A7]", label: "New Registration" },
  { value: "1,247", color: "text-blue-500", label: "Today Vote" },
  { value: "$18.4K", color: "text-purple-500", label: "Today Boost" },
  { value: "32K", color: "text-amber-500", label: "Token Conversion" },
];

const NFT_TYPES = [
  { dot: "bg-[#00C9A7]", label: "Badge NFT", value: 524 },
  { dot: "bg-blue-500", label: "Reward NFT", value: 687 },
  { dot: "bg-purple-500", label: "Event NFT", value: 329 },
  { dot: "bg-pink-400", label: "Creator Achievement", value: 302 },
];

const BAR_RECTS = [
  [30, 160, 80], [80, 140, 100], [130, 120, 120], [180, 100, 140],
  [230, 110, 130], [280, 80, 160], [330, 90, 150], [380, 70, 170],
  [430, 100, 140], [480, 60, 180], [530, 80, 160], [580, 50, 190], [630, 70, 170],
];

export function ActivityChart() {
  return (
    <div className="grid gap-5 mb-7" style={{ gridTemplateColumns: "2fr 1fr" }}>
      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="px-6 py-[18px] border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-[#1A2332]">📈 Platform Activity Trend</h3>
          <div className="flex gap-1.5">
            {["days간", "Weekly", "Monthly"].map((t, i) => (
              <button
                key={t}
                className={`px-3.5 py-[5px] rounded-[7px] border text-xs font-medium cursor-pointer transition-all ${i === 0 ? "bg-[#1A2332] text-white border-[#1A2332]" : "bg-white text-gray-500 border-gray-200 hover:border-[#00C9A7] hover:text-[#00C9A7]"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6">
          <div className="rounded-[10px] overflow-hidden relative" style={{ height: "280px", background: "linear-gradient(180deg, #F9FAFB 0%, #fff 100%)" }}>
            <svg viewBox="0 0 700 260" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="voteGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00C9A7" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[65, 130, 195].map((y) => (
                <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="#F3F4F6" strokeWidth="1" />
              ))}
              {BAR_RECTS.map(([x, y, h], i) => (
                <rect key={i} x={x} y={y} width="28" height={h} rx="4" fill="#3B82F6" opacity={i % 2 === 0 ? "0.15" : "0.2"} />
              ))}
              <path
                d="M44,150 L94,130 L144,120 L194,90 L244,100 L294,75 L344,85 L394,60 L444,80 L494,50 L544,65 L594,40 L644,55"
                fill="none" stroke="#00C9A7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              />
              <path
                d="M44,150 L94,130 L144,120 L194,90 L244,100 L294,75 L344,85 L394,60 L444,80 L494,50 L544,65 L594,40 L644,55 L644,240 L44,240 Z"
                fill="url(#voteGrad)"
              />
              <circle cx="494" cy="50" r="5" fill="#00C9A7" />
              <circle cx="494" cy="50" r="8" fill="#00C9A7" opacity="0.2" />
              <circle cx="594" cy="40" r="5" fill="#00C9A7" />
              <circle cx="594" cy="40" r="8" fill="#00C9A7" opacity="0.2" />
              {[["Apr 5", 30], ["Apr 8", 180], ["Apr 11", 330], ["Apr 14", 480], ["Apr 17", 620]].map(([label, x]) => (
                <text key={label} x={x} y="250" fontSize="10" fill="#9CA3AF" fontFamily="Inter">{label}</text>
              ))}
              <circle cx="20" cy="18" r="4" fill="#00C9A7" />
              <text x="30" y="22" fontSize="11" fill="#6B7280" fontFamily="Inter" fontWeight="500">Vote Count</text>
              <rect x="90" y="14" width="10" height="10" rx="2" fill="#3B82F6" opacity="0.3" />
              <text x="106" y="22" fontSize="11" fill="#6B7280" fontFamily="Inter" fontWeight="500">Boost Fundraising</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="px-6 py-[18px] border-b border-gray-100">
          <h3 className="text-[15px] font-bold text-[#1A2332]">🎯 Today's Summary</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-3 mb-5">
            {TODAY_STATS.map((s) => (
              <div key={s.label} className="p-4 bg-gray-50 rounded-[10px] text-center">
                <div className={`text-[20px] font-extrabold ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-[13px] font-semibold text-[#1A2332] mb-3">NFT Publish Status</div>
          {NFT_TYPES.map((n, i) => (
            <div key={n.label} className={`flex items-center justify-between py-3 ${i < NFT_TYPES.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <div className={`w-2 h-2 rounded-full ${n.dot}`} />
                {n.label}
              </div>
              <div className="text-sm font-bold text-[#1A2332]">{n.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
