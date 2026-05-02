import { GENRES } from "@/data/discovery";

export function GenreWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div className="text-base font-bold text-[#1A2332]">🏷️ Genre Management</div>
        <button className="px-4 py-2 bg-[#00C9A7] text-white text-[13px] font-semibold rounded-lg hover:bg-[#00A88A] transition-colors">
          + Add Genre
        </button>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {GENRES.map((g) => (
            <div key={g.name} className="flex items-center gap-2 px-[14px] py-2 bg-gray-50 border border-gray-200 rounded-[10px] text-[13px] font-medium">
              {g.icon} {g.name}
              <span className="bg-[#E6FAF5] text-[#00A88A] px-2 py-[2px] rounded-[5px] text-[11px] font-semibold">
                {g.count} Track
              </span>
              <button className="w-[18px] h-[18px] rounded-full border-none bg-blue-50 text-blue-500 text-[11px] flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white transition-all">✎</button>
              <button className="w-[18px] h-[18px] rounded-full border-none bg-gray-200 text-gray-500 text-[11px] flex items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white transition-all">✕</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
