import { TX_DATA, TX_TYPE_STYLE, TX_STATUS_STYLE, QUEUE_ITEMS } from "@/data/dashboard";

export function TxAndQueue() {
  return (
    <div className="grid grid-cols-3 gap-5 mb-7">
      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden col-span-2">
        <div className="px-6 py-[18px] border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-[#1A2332]">⛓️ 실hours Transaction</h3>
          <div className="flex gap-3 items-center">
            <button className="px-3.5 py-[5px] rounded-[7px] border border-gray-200 bg-white text-xs font-medium text-gray-500 cursor-pointer hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
              📥 Export
            </button>
            <div className="flex gap-1.5">
              {["All", "Vote", "Boost", "Withdraw", "NFT"].map((t, i) => (
                <button
                  key={t}
                  className={`px-3.5 py-[5px] rounded-[7px] border text-xs font-medium cursor-pointer transition-all ${i === 0 ? "bg-[#1A2332] text-white border-[#1A2332]" : "bg-white text-gray-500 border-gray-200 hover:border-[#00C9A7] hover:text-[#00C9A7]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["TX Hash", "Type", "From / To", "Amount", "Status", "Time", "Action"].map((h) => (
                  <th key={h} className="px-4 py-[10px] text-left text-[11px] font-semibold text-gray-400 uppercase tracking-[0.5px] border-b border-gray-200">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TX_DATA.map((tx, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-[13px] border-b border-gray-100">
                    <span className="font-mono text-xs text-blue-500 cursor-pointer hover:underline">{tx.hash}</span>
                  </td>
                  <td className="px-4 py-3 text-[13px] border-b border-gray-100">
                    <span className={`px-2.5 py-[3px] rounded-[6px] text-[11px] font-semibold ${TX_TYPE_STYLE[tx.type]}`}>
                      {tx.type === "nft" ? "NFT Mint" : tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600 border-b border-gray-100">{tx.from}</td>
                  <td className="px-4 py-3 text-[13px] text-gray-600 border-b border-gray-100">{tx.amount}</td>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-[3px] rounded-[6px] text-[11px] font-semibold ${TX_STATUS_STYLE[tx.status]}`}>
                      {tx.statusLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500 border-b border-gray-100">{tx.time}</td>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <button className="px-2.5 py-1 rounded-[6px] text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="block w-full text-center py-3 text-[13px] font-semibold text-[#00C9A7] border-t border-gray-100 hover:bg-[#E6FAF5] transition-colors">
          All Transaction View →
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
        <div className="px-6 py-[18px] border-b border-gray-100">
          <h3 className="text-[15px] font-bold text-[#1A2332]">🔔 Unprocessed Actions Queue</h3>
        </div>
        <div>
          {QUEUE_ITEMS.map((q, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-[14px] border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${q.dot}`} />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[#1A2332] truncate">{q.title}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{q.meta}</div>
              </div>
              <span className="text-[13px] font-bold text-[#1A2332] bg-gray-100 px-2.5 py-1 rounded-lg">{q.count}</span>
            </div>
          ))}
        </div>
        <button className="block w-full text-center py-3 text-[13px] font-semibold text-[#00C9A7] border-t border-gray-100 hover:bg-[#E6FAF5] transition-colors">
          View Full Queue →
        </button>
      </div>
    </div>
  );
}
