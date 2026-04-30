import { useState } from "react";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const STATUS_FILTERS = [
  "All",
  "Pending",
  "Completed",
  "Failed",
  "Under Review",
];

const REWARDS = [
  {
    id: "RW-1001",
    challenge: "Neon Night Beat",
    target: "DJ Hana",
    rank: "🥇 1st Place",
    rankColor: "text-amber-500 font-bold",
    type: "mixed",
    amount: "1,250 VAYLA",
    amountExtra: "+ NFT 1items",
    payStatus: "complete" as const,
    nftStatus: "nft-complete" as const,
    date: "2026.04.19\n09:40",
    txHash: "0x7a3b…f21d",
    memo: "Winner Distribution Completed",
    actions: ["Details"],
  },
  {
    id: "RW-1002",
    challenge: "Neon Night Beat",
    target: "NOVA",
    rank: "🥈 2nd Place",
    rankColor: "text-gray-500 font-bold",
    type: "vayla",
    amount: "800 VAYLA",
    amountExtra: "",
    payStatus: "complete" as const,
    nftStatus: "nft-na" as const,
    date: "2026.04.19\n09:45",
    txHash: "0x2c8d…e47a",
    memo: "—",
    actions: ["Details"],
  },
  {
    id: "RW-1003",
    challenge: "Neon Night Beat",
    target: "MC Park",
    rank: "Top 10",
    rankColor: "",
    type: "vayla",
    amount: "450 VAYLA",
    amountExtra: "",
    payStatus: "pending" as const,
    nftStatus: "nft-na" as const,
    date: "2026.04.19\n11:00",
    txHash: "—",
    memo: "Final Confirm Pending",
    actions: ["Completed", "Hold", "Details"],
    failed: false,
  },
  {
    id: "RW-1004",
    challenge: "Urban Flow Session",
    target: "Aira",
    rank: "Participation",
    rankColor: "",
    type: "nft",
    amount: "NFT 1items",
    amountExtra: "",
    payStatus: "complete" as const,
    nftStatus: "nft-complete" as const,
    date: "2026.04.18\n18:20",
    txHash: "0xa2b9…4e1f",
    memo: "Participation NFT Payment Completed",
    actions: ["Details"],
  },
  {
    id: "RW-1005",
    challenge: "Spring Vocal Pick",
    target: "Lina Moon",
    rank: "Vote Milestone",
    rankColor: "",
    type: "vayla",
    amount: "300 VAYLA",
    amountExtra: "",
    payStatus: "failed" as const,
    nftStatus: "nft-na" as const,
    date: "2026.04.19\n10:10",
    txHash: "—",
    memo: "Wallet Connect Error",
    memoColor: "text-red-500 font-semibold",
    actions: ["재Process", "Details"],
    failed: true,
  },
  {
    id: "RW-1006",
    challenge: "Neon Night Beat",
    target: "KJ Beat",
    rank: "🥉 3rd Place",
    rankColor: "text-gray-500 font-bold",
    type: "mixed",
    amount: "600 VAYLA",
    amountExtra: "+ NFT 1items",
    payStatus: "under-review" as const,
    nftStatus: "nft-pending" as const,
    date: "2026.04.19\n10:55",
    txHash: "—",
    memo: "NFT Publish Confirm Required",
    actions: ["Completed", "Hold", "Details"],
  },
];

const HISTORY = [
  {
    date: "2026.04.19 09:45",
    target: "NOVA",
    challenge: "Neon Night Beat",
    status: "complete" as const,
    manager: "Kai",
    notes: "2nd Place Pay Reward Completed",
  },
  {
    date: "2026.04.19 09:40",
    target: "DJ Hana",
    challenge: "Neon Night Beat",
    status: "complete" as const,
    manager: "Jay",
    notes: "Winner Reward + NFT Completed",
  },
  {
    date: "2026.04.19 10:10",
    target: "Lina Moon",
    challenge: "Spring Vocal Pick",
    status: "failed" as const,
    manager: "Tony",
    notes: "Wallet Connect Error",
  },
];

const RwTypeTag = ({ type }: { type: string }) => {
  if (type === "vayla")
    return (
      <span className="inline-block px-2.5 py-[3px] rounded-[5px] text-[11px] font-bold bg-[#E6FAF5] text-[#00A88A]">
        VAYLA
      </span>
    );
  if (type === "nft")
    return (
      <span className="inline-block px-2.5 py-[3px] rounded-[5px] text-[11px] font-bold bg-purple-50 text-purple-500">
        NFT
      </span>
    );
  return (
    <span className="inline-block px-2.5 py-[3px] rounded-[5px] text-[11px] font-bold bg-blue-50 text-blue-500">
      VAYLA + NFT
    </span>
  );
};

export default function RewardDistributionPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mb-6">
        <KpiCard
          color="yellow"
          label="Distribution Pending"
          value="14"
          sub="Payment Pending items"
          valueColor="text-amber-500"
        />
        <KpiCard
          color="green"
          label="Distribution Completed"
          value="126"
          sub="Payment Completed items"
          valueColor="text-emerald-500"
        />
        <KpiCard
          color="purple"
          label="NFT Publish Pending"
          value="8"
          sub="Minting Pending"
          valueColor="text-purple-500"
        />
        <KpiCard
          color="blue"
          label="NFT Publish Completed"
          value="118"
          sub="Minting Completed"
        />
        <KpiCard
          color="red"
          label="Failed items"
          value="3"
          sub="재Process Required"
          valueColor="text-red-500"
        />
        <KpiCard
          color="mint"
          label="Total Distribution VAYLA"
          value="18,450"
          sub="VAYLA Token"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
            🎁 Reward Distribution List
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-[7px] rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50">
              📥 Export
            </button>
            <button className="px-3 py-[7px] rounded-lg bg-[#00C9A7] text-white text-sm font-semibold hover:bg-[#00A88A]">
              + Manual Distribution Create
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2.5 px-6 py-4 border-b border-gray-100 flex-wrap">
          <div className="flex gap-1">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-[6px] rounded-full border text-xs font-semibold cursor-pointer transition-all ${
                  activeFilter === f
                    ? "bg-[#1A2332] text-white border-[#1A2332]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#00C9A7] hover:text-[#00C9A7]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>Challenge: All</option>
            <option>Neon Night Beat</option>
            <option>Urban Flow Session</option>
            <option>Spring Vocal Pick</option>
          </select>
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white cursor-pointer">
            <option>Type: All</option>
            <option>Vote Reward</option>
            <option>Challenge Winner</option>
            <option>Participation Reward</option>
            <option>NFT Reward</option>
            <option>Bonus Reward</option>
          </select>
          <input
            type="text"
            placeholder="Challenge / Target / Reward ID Search..."
            className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm outline-none w-60 focus:border-[#00C9A7]"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50">
                {[
                  "Reward ID",
                  "Challenge Name",
                  "Payment Target",
                  "Rank/Basis",
                  "Reward Type",
                  "Amount/Quantity",
                  "Payment Status",
                  "NFT Status",
                  "Payment Date",
                  "TX Hash",
                  "Ops Memo",
                  "Action",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-3.5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REWARDS.map((row) => (
                <tr
                  key={row.id}
                  className={`hover:bg-gray-50 ${row.failed ? "bg-red-50 hover:bg-red-100" : ""}`}
                >
                  <td className="px-3.5 py-3.5 border-t border-gray-100 font-semibold text-[#1A2332]">
                    {row.id}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    {row.challenge}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100 font-semibold">
                    {row.target}
                  </td>
                  <td
                    className={`px-3.5 py-3.5 border-t border-gray-100 ${row.rankColor}`}
                  >
                    {row.rank}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <RwTypeTag type={row.type} />
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100 font-bold">
                    {row.amount}
                    {row.amountExtra && (
                      <>
                        <br />
                        <span className="text-[11px] text-purple-500">
                          {row.amountExtra}
                        </span>
                      </>
                    )}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <StatusBadge
                      variant={row.payStatus}
                      label={
                        row.payStatus === "complete"
                          ? "Completed"
                          : row.payStatus === "pending"
                            ? "Pending"
                            : row.payStatus === "failed"
                              ? "Failed"
                              : "Under Review"
                      }
                    />
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <StatusBadge
                      variant={row.nftStatus}
                      label={
                        row.nftStatus === "nft-na"
                          ? "N/A"
                          : row.nftStatus === "nft-pending"
                            ? "Pending"
                            : row.nftStatus === "nft-complete"
                              ? "Completed"
                              : "Failed"
                      }
                    />
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100 text-xs whitespace-pre-line">
                    {row.date}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    {row.txHash !== "—" ? (
                      <span className="font-mono text-[11px] text-[#00A88A] bg-[#E6FAF5] px-2 py-0.5 rounded">
                        {row.txHash}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </td>
                  <td
                    className={`px-3.5 py-3.5 border-t border-gray-100 text-xs ${(row as any).memoColor ?? "text-gray-500"}`}
                  >
                    {row.memo}
                  </td>
                  <td className="px-3.5 py-3.5 border-t border-gray-100">
                    <div className="flex gap-1 flex-nowrap">
                      {row.actions.includes("Completed") && (
                        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600">
                          Completed
                        </button>
                      )}
                      {row.actions.includes("Hold") && (
                        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-500 text-white hover:bg-orange-600">
                          Hold
                        </button>
                      )}
                      {row.actions.includes("재Process") && (
                        <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-red-500 text-white hover:bg-red-600">
                          재Process
                        </button>
                      )}
                      <button className="px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                        Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="text-base font-bold text-[#1A2332] flex items-center gap-2">
            📋 Recent Distribution Process History
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                {[
                  "Date",
                  "Payment Target",
                  "Challenge Name",
                  "Status",
                  "Manager",
                  "Notes",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-2.5 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HISTORY.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-2.5 py-2 border-t border-gray-100 text-xs">
                    {row.date}
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100 font-semibold text-sm">
                    {row.target}
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100 text-xs">
                    {row.challenge}
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100">
                    <StatusBadge
                      variant={row.status}
                      label={row.status === "complete" ? "Completed" : "Failed"}
                      className="text-[11px]"
                    />
                  </td>
                  <td className="px-2.5 py-2 border-t border-gray-100 text-xs">
                    {row.manager}
                  </td>
                  <td
                    className={`px-2.5 py-2 border-t border-gray-100 text-[11px] ${row.status === "failed" ? "text-red-500 font-semibold" : "text-gray-500"}`}
                  >
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
