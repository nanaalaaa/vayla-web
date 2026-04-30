import { TOKEN_MOVEMENTS, ALERTS } from "@/data/dashboard";

const TOTAL_BALANCES = [
  {
    sym: "V",
    symBg: "bg-[#E6FAF5] text-[#00A88A]",
    name: "VAYLA",
    val: "15,120,000",
  },
  { sym: "U", symBg: "bg-blue-50 text-blue-500", name: "USDT", val: "58,400" },
  { sym: "B", symBg: "bg-amber-50 text-amber-500", name: "BNB", val: "7.42" },
];

const HOT_WALLET = [
  { name: "VAYLA", val: "320,000" },
  { name: "USDT", val: "8,750" },
  { name: "BNB", val: "1.26" },
];

const COLD_WALLET = [
  { name: "VAYLA", val: "14,500,000" },
  { name: "USDT", val: "47,000" },
  { name: "BNB", val: "4.80" },
];

const GAS_STATS = [
  { label: "Threshold", val: "1.00 BNB", valColor: "text-[#1A2332]" },
  { label: "Daily Avg Usage", val: "0.14 BNB", valColor: "text-[#1A2332]" },
  { label: "Est. Remaining", val: "~9 days", valColor: "text-amber-500" },
];

function WalletCard({
  title,
  badge,
  badgeClass,
  address,
  tokens,
}: {
  title: string;
  badge?: string;
  badgeClass?: string;
  address?: string;
  tokens: { name: string; val: string }[];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] p-6 cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all">
      <div className="flex items-center justify-between mb-5">
        <div className="text-sm font-bold text-[#1A2332]">{title}</div>
        {badge && (
          <span
            className={`px-2.5 py-1 rounded-[6px] text-[11px] font-semibold ${badgeClass}`}
          >
            {badge}
          </span>
        )}
      </div>
      {address && (
        <div className="text-xs text-gray-400 mb-4 font-mono bg-gray-50 px-2.5 py-[6px] rounded-[6px]">
          {address}
        </div>
      )}
      <div className="flex flex-col gap-3">
        {tokens.map((t) => (
          <div key={t.name} className="flex items-center justify-between">
            <span className="text-[13px] text-gray-500">{t.name}</span>
            <span className="text-[15px] font-bold text-[#1A2332]">
              {t.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TokenStatus() {
  return (
    <div className="mb-7">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[#1A2332] flex items-center gap-2">
          💰 Token Status
        </h3>
        <button className="text-[13px] text-[#00C9A7] font-semibold hover:underline">
          Wallet Details →
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-white border border-gray-200 rounded-[14px] p-6 cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all">
          <div className="flex items-center justify-between mb-5">
            <div className="text-sm font-bold text-[#1A2332]">
              Total Balances
            </div>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{
                background: "linear-gradient(135deg, #E6FAF5, #E0F7FA)",
              }}
            >
              💎
            </div>
          </div>
          <div className="flex flex-col gap-[14px]">
            {TOTAL_BALANCES.map((t) => (
              <div key={t.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold ${t.symBg}`}
                  >
                    {t.sym}
                  </div>
                  <span className="text-[13px] text-gray-500">{t.name}</span>
                </div>
                <span className="text-base font-bold text-[#1A2332]">
                  {t.val}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400">
            Last Updated: 2026-04-17 14:30
          </div>
        </div>

        <WalletCard
          title="Hot Wallet"
          badge="Normal"
          badgeClass="bg-[#E6FAF5] text-[#00A88A]"
          address="0x7aB2...91Fd"
          tokens={HOT_WALLET}
        />
        <WalletCard
          title="Cold Wallet"
          badge="Safe"
          badgeClass="bg-blue-50 text-blue-500"
          address="0x4fC8...2Ae1"
          tokens={COLD_WALLET}
        />

        <div className="bg-white border border-gray-200 rounded-[14px] p-6 cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all">
          <div className="flex items-center justify-between mb-5">
            <div className="text-sm font-bold text-[#1A2332]">
              BNB Gas Reserve
            </div>
            <span className="px-2.5 py-1 rounded-[6px] text-[11px] font-semibold bg-amber-50 text-amber-500">
              ⚠ Warning
            </span>
          </div>
          <div className="text-center mb-4">
            <div className="text-[36px] font-extrabold text-[#1A2332]">
              1.36
            </div>
            <div className="text-[13px] text-gray-400">BNB available</div>
          </div>
          <div className="flex flex-col gap-2.5">
            {GAS_STATS.map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between text-[13px]"
              >
                <span className="text-gray-500">{r.label}</span>
                <span className={`font-semibold ${r.valColor}`}>{r.val}</span>
              </div>
            ))}
          </div>
          <div className="mt-[14px] h-[6px] bg-gray-100 rounded-[4px] overflow-hidden">
            <div className="w-[36%] h-full bg-amber-500 rounded-[4px]" />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-[14px] p-6 cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-bold text-[#1A2332]">
              Recent Token Movements
            </div>
            <span className="text-[11px] text-gray-400">4 records</span>
          </div>
          <div>
            {TOKEN_MOVEMENTS.map((m, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-2.5 ${i < TOKEN_MOVEMENTS.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full ${m.dot}`} />
                  <div>
                    <div className="text-[13px] font-semibold text-[#1A2332]">
                      {m.name}
                    </div>
                    <div className="text-[11px] text-gray-400">{m.wallet}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[11px] font-semibold ${m.dirColor}`}>
                    {m.dir}
                  </span>
                  <span className="text-[10px] px-[6px] py-[2px] rounded-[4px] bg-[#E6FAF5] text-[#00A88A] font-semibold">
                    Success
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-[14px] p-6 cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-bold text-[#1A2332]">
              Alerts / Risk Monitoring
            </div>
            <div className="flex gap-1.5">
              <span className="text-[11px] px-2 py-[3px] rounded-[5px] bg-amber-50 text-amber-500 font-semibold">
                1 Warning
              </span>
              <span className="text-[11px] px-2 py-[3px] rounded-[5px] bg-gray-100 text-gray-400 font-semibold">
                0 Critical
              </span>
            </div>
          </div>
          <div>
            {ALERTS.map((a, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-2.5 ${i < ALERTS.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{a.icon}</span>
                  <span className="text-[13px] text-[#1A2332] font-medium">
                    {a.label}
                  </span>
                </div>
                <span
                  className={`text-[11px] px-2 py-[3px] rounded-[5px] font-semibold ${a.badgeClass}`}
                >
                  {a.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
