import type { PageId } from "@/types/navigation";
import {
  FormSection,
  FormGroup,
  TextInput,
  RadioOption,
  TagInput,
  UsdtInput,
} from "@/components/boost/FormComponents";

interface Props {
  onNavigate: (id: PageId) => void;
}

const STEPS = [
  "Basic Info",
  "Revenue Structure",
  "Milestones",
  "Contract Deploy",
  "Preview & Publish",
];

const SELECT_CLS =
  "w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[14px] text-gray-700 outline-none focus:border-[#00C9A7] bg-white";

const ROI_STATS = [
  { label: "Total Raised", value: "$500,000", color: "text-[#1A2332]" },
  { label: "Total Revenue", value: "$75,000", color: "text-[#00C9A7]" },
  { label: "Participant Payout", value: "$575,000", color: "text-blue-500" },
  { label: "Platform Fee", value: "$2,000", color: "text-purple-500" },
];

const CONTRACT_DETAILS = [
  { label: "Type", value: "Escrow" },
  { label: "Network", value: "BSC Mainnet" },
  { label: "Token", value: "USDT (BEP-20)" },
  { label: "Deploy Cost", value: "~0.002 BNB" },
];

const MILESTONES = [
  { num: 1, name: "Ticket Sales Open", date: "2026-06-01", pct: "30" },
  { num: 2, name: "Concert Performance", date: "2026-07-01", pct: "50" },
  {
    num: 3,
    name: "Final Settlement & ROI Payout",
    date: "2026-07-15",
    pct: "20",
  },
];

export default function BoostCreatePage({ onNavigate }: Props) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => onNavigate("boost")}
          className="text-gray-400 text-xl hover:text-[#1A2332] transition-all"
        >
          ←
        </button>
      </div>

      <div className="flex items-center gap-0 mb-8">
        {STEPS.map((step, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold transition-all ${
                  i === 0
                    ? "bg-[#00C9A7] text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {i + 1}
              </div>
              <div
                className={`text-[12px] font-semibold mt-1.5 whitespace-nowrap ${
                  i === 0 ? "text-[#00C9A7]" : "text-gray-400"
                }`}
              >
                {step}
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div className="h-0.5 w-16 bg-gray-200 mx-2 mb-5" />
            )}
          </div>
        ))}
      </div>

      <FormSection
        title="📋 Basic Project Info"
        desc="Enter the core details of your Boost project"
      >
        <div className="grid grid-cols-2 gap-4 mb-5">
          <FormGroup label="Project Name" required>
            <TextInput placeholder="e.g. G-Dragon World Tour 2026" />
          </FormGroup>
          <FormGroup label="Category" required>
            <select className={SELECT_CLS}>
              <option>Music Concert</option>
              <option>Music Festival</option>
              <option>Performance</option>
              <option>Creator</option>
              <option>Global</option>
            </select>
          </FormGroup>
        </div>
        <FormGroup label="Project Description" required>
          <textarea
            rows={3}
            placeholder="Describe the project to potential investors..."
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[14px] text-gray-700 outline-none focus:border-[#00C9A7] resize-vertical font-[inherit]"
          />
        </FormGroup>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <FormGroup label="Visibility">
            <select className={SELECT_CLS}>
              <option>Public</option>
              <option>Private</option>
            </select>
          </FormGroup>
          <FormGroup label="Project Tags">
            <TagInput
              tags={["K-POP"]}
              placeholder="Type a tag and press Enter..."
            />
          </FormGroup>
        </div>
      </FormSection>

      <FormSection
        title="🎤 Organizer & Artist Info"
        desc="Details about the project host and Related Artists Info"
      >
        <div className="grid grid-cols-2 gap-4 mb-5">
          <FormGroup label="Organizer / Partner" required>
            <TextInput placeholder="e.g. YG Entertainment" />
          </FormGroup>
          <FormGroup label="Organizer Contact">
            <TextInput placeholder="Contact email or phone number" />
          </FormGroup>
        </div>
        <FormGroup
          label="Related Artists"
          hint="Related Artists registration enables Fan targeting"
        >
          <TagInput
            tags={["G-Dragon"]}
            placeholder="Enter artist name and press Enter..."
          />
        </FormGroup>
        <div className="grid grid-cols-2 gap-4">
          <FormGroup
            label="Organizer Wallet Address (USDT)"
            hint="BEP-20 wallet address where USDT will be sent during settlement"
          >
            <input
              type="text"
              placeholder="0x..."
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[13px] font-mono text-gray-700 outline-none focus:border-[#00C9A7] transition-all"
            />
          </FormGroup>
          <FormGroup label="Partnership Type">
            <select className={SELECT_CLS}>
              <option>Direct Partnership</option>
              <option>Agency Contract</option>
              <option>Direct Creator</option>
              <option>Platform Curated</option>
            </select>
          </FormGroup>
        </div>
      </FormSection>

      <FormSection
        title="💰 Funding Settings"
        desc="Target Amount, Period, Participation Conditions Settings"
      >
        <div className="grid grid-cols-2 gap-4 mb-5">
          <FormGroup
            label="Target Amount"
            required
            hint="Min $10,000 ~ Max $5,000,000"
          >
            <UsdtInput placeholder="500,000" />
          </FormGroup>
          <FormGroup
            label="Minimum Contribution"
            required
            hint="VAYLA default policy: 100 USDT"
          >
            <UsdtInput defaultValue={100} />
          </FormGroup>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <FormGroup
            label="Max Contribution (per person)"
            hint="Leave empty for no limit"
          >
            <UsdtInput placeholder="No limit" />
          </FormGroup>
          <FormGroup label="Maximum Participants">
            <UsdtInput placeholder="No limit" suffix="users" />
          </FormGroup>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <FormGroup label="Funding Start Date" required>
            <TextInput type="datetime-local" value="2026-05-01T09:00" />
          </FormGroup>
          <FormGroup label="Funding End Date" required>
            <TextInput type="datetime-local" value="2026-05-31T23:59" />
          </FormGroup>
        </div>
        <FormGroup label="Funding Failed Policy" required>
          <div className="flex flex-col gap-3">
            <RadioOption
              label="Full Refund (All-or-Nothing)"
              desc="100% refund to participants if goal not met"
              checked
            />
            <RadioOption
              label="Keep What You Raise"
              desc="Project proceeds with whatever amount is raised"
            />
          </div>
        </FormGroup>
        <FormGroup label="Allow Pre-Registration">
          <div className="flex flex-col gap-3">
            <RadioOption
              label="Allowed"
              desc="Allow interest registration before start"
              checked
            />
            <RadioOption
              label="Inactive"
              desc="Participation starts from the funding start date"
            />
          </div>
        </FormGroup>
      </FormSection>

      <FormSection
        title="📈 Revenue Structure (ROI)"
        desc="Set the expected returns and distribution structure for participants"
      >
        <div className="grid grid-cols-3 gap-4 mb-5">
          <FormGroup label="Est. ROI" required>
            <UsdtInput defaultValue={15} suffix="%" />
          </FormGroup>
          <FormGroup label="Platform Fee" hint="Fixed fee">
            <div className="relative">
              <input
                type="number"
                defaultValue="0.4"
                disabled
                className="w-full px-3.5 py-2.5 pr-10 border border-gray-100 rounded-lg text-[14px] text-gray-400 bg-gray-50 cursor-not-allowed"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[13px] font-semibold text-gray-400">
                %
              </span>
            </div>
          </FormGroup>
          <FormGroup label="Settlement Date">
            <TextInput type="date" value="2026-07-15" />
          </FormGroup>
        </div>

        <FormGroup label="Revenue Distribution (Simulation)">
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="text-[12px] text-gray-500 mb-2">
              Target $500,000 · ROI 15% Basis
            </div>
            <div className="flex h-8 rounded-lg overflow-hidden mb-4">
              <div
                className="flex items-center justify-center text-white text-[12px] font-semibold"
                style={{ flex: 84.6, background: "#00C9A7" }}
              >
                Participant 84.6%
              </div>
              <div
                className="flex items-center justify-center text-white text-[12px] font-semibold"
                style={{ flex: 15, background: "#3B82F6" }}
              >
                ROI 15%
              </div>
              <div
                className="flex items-center justify-center text-white text-[11px] font-semibold"
                style={{ flex: 0.4, background: "#8B5CF6" }}
              >
                0.4%
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {ROI_STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[11px] text-gray-400">{s.label}</div>
                  <div className={`text-[18px] font-extrabold ${s.color}`}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FormGroup>

        <FormGroup label="ROI Payment Method">
          <div className="flex flex-col gap-3">
            <RadioOption
              label="Principal + ROI Lump Sum"
              desc="Event Completed after the event, in one payment"
              checked
            />
            <RadioOption
              label="Split ROI Payments"
              desc="Distributed per milestone"
            />
          </div>
        </FormGroup>
      </FormSection>

      <FormSection
        title="🏁 Milestones"
        desc="Set the project stages Settings (Optional)"
        action={
          <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
            + Add Milestone
          </button>
        }
      >
        {MILESTONES.map((ms) => (
          <div key={ms.num} className="flex items-center gap-3 mb-3">
            <div className="w-7 h-7 rounded-full bg-[#00C9A7] text-white flex items-center justify-center text-[13px] font-bold shrink-0">
              {ms.num}
            </div>
            <div className="flex-1 grid grid-cols-3 gap-3">
              <input
                type="text"
                defaultValue={ms.name}
                className="px-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-700 outline-none focus:border-[#00C9A7] transition-all"
              />
              <input
                type="date"
                defaultValue={ms.date}
                className="px-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-700 outline-none focus:border-[#00C9A7] transition-all"
              />
              <div className="relative">
                <input
                  type="number"
                  defaultValue={ms.pct}
                  className="w-full px-3 py-2 pr-8 border border-gray-200 rounded-lg text-[13px] text-gray-700 outline-none focus:border-[#00C9A7] transition-all"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[12px] text-gray-400">
                  %
                </span>
              </div>
            </div>
            <button className="px-2.5 py-1.5 rounded-md bg-red-50 text-red-500 text-[12px] font-semibold hover:bg-red-500 hover:text-white transition-all">
              ✕
            </button>
          </div>
        ))}
        <div className="mt-3 p-3 bg-blue-50 rounded-lg text-[12px] text-blue-500">
          💡 Total milestone fund allocation: <strong>100%</strong> · Funds
          released to the organizer as each milestone is achieved
        </div>
      </FormSection>

      <FormSection
        title="🖼️ Media & Cover"
        desc="Upload images and media to display on the project page"
      >
        <FormGroup label="Cover Image" required>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#00C9A7] transition-all cursor-pointer">
            <div className="text-4xl mb-2">🖼️</div>
            <div className="text-[14px] font-semibold text-gray-600 mb-1">
              Click to upload image
            </div>
            <div className="text-[12px] text-gray-400">
              1200 x 400px Recommended · JPG, PNG, WebP · Max 5MB
            </div>
          </div>
        </FormGroup>
        <FormGroup
          label="Gallery Images (up to 8)"
          hint="Each image Max 5MB · Square format Recommended"
        >
          <div className="flex gap-3 flex-wrap">
            {[
              { bg: "linear-gradient(135deg, #667EEA, #764BA2)", icon: "🎤" },
              { bg: "linear-gradient(135deg, #FF6B8A, #FF8E53)", icon: "🎪" },
            ].map((img, i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-xl flex items-center justify-center text-3xl relative"
                style={{ background: img.bg }}
              >
                {img.icon}
                <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center cursor-pointer">
                  ✕
                </div>
              </div>
            ))}
            <div className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-2xl text-gray-300 cursor-pointer hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
              +
            </div>
          </div>
        </FormGroup>
        <FormGroup
          label="Promo Video URL"
          hint="YouTube or Vimeo links supported"
        >
          <TextInput type="url" placeholder="https://youtube.com/watch?v=..." />
        </FormGroup>
      </FormSection>

      <FormSection
        title="🔗 Smart Contract Settings"
        desc="Configure the Escrow contract deployment options"
      >
        <FormGroup label="Contract Type">
          <div className="flex flex-col gap-3">
            <RadioOption
              label="🔒 Escrow (Recommended)"
              desc="Funds released only upon milestone achievement. Secure."
              checked
            />
            <RadioOption
              label="📋 Simple Pool"
              desc="Simple pooling with lump-sum settlement. For small projects."
            />
          </div>
        </FormGroup>
        <div className="p-4 bg-[#E6FAF5] rounded-xl mt-4">
          <div className="text-[13px] font-semibold text-[#1A2332] mb-3">
            Contract Preview (Simulation)
          </div>
          <div className="grid grid-cols-2 gap-3">
            {CONTRACT_DETAILS.map((r) => (
              <div key={r.label} className="flex justify-between">
                <span className="text-[12px] text-gray-500">{r.label}</span>
                <span className="text-[12px] font-semibold text-[#1A2332]">
                  {r.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FormSection>

      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4 flex items-center justify-between -mx-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[12px] text-gray-400">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            Draft Saved
          </div>
          <button className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
            Save Draft
          </button>
          <button className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
            Preview
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("boost")}
            className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
          >
            Cancel
          </button>
          <button className="px-6 py-2 rounded-lg bg-[#00C9A7] text-white text-[13px] font-semibold hover:bg-[#00A88A] transition-all">
            Next: Revenue Structure →
          </button>
        </div>
      </div>
    </div>
  );
}
