export function FlashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1A2332]">
      <div className="flex flex-col items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00C9A7] to-[#00A88A] text-3xl font-extrabold text-white shadow-lg">
          V
        </div>
        <p className="text-[13px] font-semibold uppercase tracking-widest text-gray-400">
          VAYLA Arena
        </p>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-[#2D3B50]">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-[#00C9A7]" />
        </div>
      </div>
    </div>
  );
}
