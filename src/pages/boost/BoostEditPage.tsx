import { StatusBadge } from "@/components/ui/StatusBadge";
import type { PageId } from "@/types/navigation";
import { FormSection, FormGroup, TagInput, UsdtInput } from "@/components/boost/FormComponents";

interface Props {
  onNavigate: (id: PageId) => void;
}

const INPUT_CLS =
  "w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[14px] text-gray-700 outline-none focus:border-[#00C9A7] transition-all";

const SELECT_CLS = `${INPUT_CLS} bg-white`;

export default function BoostEditPage({ onNavigate }: Props) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => onNavigate("boost-detail")}
          className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-lg hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#1A2332]">Waterbomb Festival 2026</span>
          <StatusBadge variant="live" label="LIVE" />
        </div>
        <div className="flex gap-2 ml-auto">
          <button
            onClick={() => onNavigate("boost-detail")}
            className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all"
          >
            Cancel
          </button>
          <button className="px-6 py-2 rounded-lg bg-[#00C9A7] text-white text-[13px] font-semibold hover:bg-[#00A88A] transition-all">
            💾 Save Changes
          </button>
        </div>
      </div>

      <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-xl mb-6 text-[13px] text-[#1A2332]">
        <strong className="block mb-1">⚠️ Editing in Progress</strong>
        <span className="text-gray-600">
          This project is currently LIVE. Changes to funding target, dates, or ROI will require admin approval before going live.
        </span>
      </div>

      <FormSection title="📋 Basic Project Info" desc="Core project details">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <FormGroup label="Project Name" required>
            <input type="text" defaultValue="Waterbomb Festival 2026" className={INPUT_CLS} />
          </FormGroup>
          <FormGroup label="Category" required>
            <select className={SELECT_CLS}>
              <option>Music Festival</option>
              <option>Music Concert</option>
              <option>Performance</option>
            </select>
          </FormGroup>
        </div>
        <FormGroup label="Project Description" required>
          <textarea
            rows={3}
            defaultValue="Experience the ultimate water festival in Seoul! Waterbomb 2026 features top K-pop artists and DJs for an unforgettable summer festival."
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[14px] text-gray-700 outline-none focus:border-[#00C9A7] resize-vertical font-[inherit]"
          />
        </FormGroup>
        <div className="grid grid-cols-2 gap-4">
          <FormGroup label="Visibility">
            <select className={SELECT_CLS}>
              <option>Public</option>
              <option>Private</option>
            </select>
          </FormGroup>
          <FormGroup label="Project Tags">
            <TagInput tags={["K-POP", "Festival", "Summer"]} placeholder="Add tag..." />
          </FormGroup>
        </div>
      </FormSection>

      <FormSection title="🎤 Organizer & Artist Info">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <FormGroup label="Organizer / Partner" required>
            <input type="text" defaultValue="CJ ENM" className={INPUT_CLS} />
          </FormGroup>
          <FormGroup label="Organizer Contact">
            <input type="text" defaultValue="contact@cjenm.com" className={INPUT_CLS} />
          </FormGroup>
        </div>
        <FormGroup label="Related Artists">
          <TagInput tags={["Various Artists", "DJ Soda"]} placeholder="Add artist..." />
        </FormGroup>
        <FormGroup label="Organizer Wallet Address">
          <input type="text" defaultValue="0x7a3B...9f2E" className={`${INPUT_CLS} font-mono text-[13px]`} />
        </FormGroup>
      </FormSection>

      <FormSection title="💰 Funding Settings">
        <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded-lg mb-5 text-[12px] text-red-600">
          ⚠️ Changing funding settings while LIVE requires admin review. Current participants will be notified.
        </div>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <FormGroup label="Target Amount" required>
            <UsdtInput defaultValue={200000} />
          </FormGroup>
          <FormGroup label="Minimum Contribution" required>
            <UsdtInput defaultValue={100} />
          </FormGroup>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormGroup label="Funding End Date" required>
            <input type="datetime-local" defaultValue="2026-04-30T23:59" className={INPUT_CLS} />
          </FormGroup>
          <FormGroup label="Est. ROI" required>
            <UsdtInput defaultValue={12} suffix="%" />
          </FormGroup>
        </div>
      </FormSection>

      <FormSection title="📝 Edit Reason">
        <FormGroup label="Reason for Changes" required hint="This will be recorded in the project audit log">
          <textarea
            rows={3}
            placeholder="Explain why these changes are needed..."
            className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[14px] text-gray-700 outline-none focus:border-[#00C9A7] resize-vertical font-[inherit]"
          />
        </FormGroup>
        <FormGroup label="Notify Participants?">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <input type="checkbox" id="notify-edit" defaultChecked className="w-4 h-4 cursor-pointer" />
            <label htmlFor="notify-edit" className="text-[14px] text-gray-700 cursor-pointer">
              Send notification to all participants about this update
            </label>
          </div>
        </FormGroup>
      </FormSection>

      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4 flex items-center justify-between -mx-8">
        <button
          onClick={() => onNavigate("boost-detail")}
          className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-gray-400 transition-all"
        >
          Cancel
        </button>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#00C9A7] hover:text-[#00C9A7] transition-all">
            Preview Changes
          </button>
          <button className="px-6 py-2 rounded-lg bg-[#00C9A7] text-white text-[13px] font-semibold hover:bg-[#00A88A] transition-all">
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
