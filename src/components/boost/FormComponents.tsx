import React from "react";

export function FormSection({
  title,
  desc,
  children,
  action,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] overflow-hidden mb-6">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <div>
          <div className="text-base font-bold text-[#1A2332]">{title}</div>
          {desc && <div className="text-[12px] text-gray-400 mt-0.5">{desc}</div>}
        </div>
        {action}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

export function FormGroup({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && <div className="text-[12px] text-gray-400 mt-1">{hint}</div>}
    </div>
  );
}

export function TextInput({
  placeholder,
  value,
  type = "text",
}: {
  placeholder?: string;
  value?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[14px] text-gray-700 outline-none focus:border-[#00C9A7] transition-all"
    />
  );
}

export function RadioOption({
  label,
  desc,
  checked,
}: {
  label: string;
  desc: string;
  checked?: boolean;
}) {
  return (
    <label
      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
        checked ? "border-[#00C9A7] bg-[#E6FAF5]" : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <input type="radio" defaultChecked={checked} className="mt-0.5 w-4 h-4" />
      <div>
        <div className={`text-[14px] font-semibold ${checked ? "text-[#00A88A]" : "text-[#1A2332]"}`}>
          {label}
        </div>
        <div className="text-[12px] text-gray-400 mt-0.5">{desc}</div>
      </div>
    </label>
  );
}

export function TagInput({
  tags,
  placeholder,
}: {
  tags: string[];
  placeholder?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 p-3 border border-gray-200 rounded-lg min-h-[44px] focus-within:border-[#00C9A7] transition-all">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E6FAF5] rounded-md text-[12px] font-semibold text-[#00A88A]"
        >
          {tag} <span className="opacity-60 cursor-pointer hover:opacity-100">✕</span>
        </span>
      ))}
      <input
        type="text"
        placeholder={placeholder}
        className="border-none outline-none text-[13px] flex-1 min-w-[80px] bg-transparent"
      />
    </div>
  );
}

export function UsdtInput({
  defaultValue,
  placeholder,
  suffix = "USDT",
}: {
  defaultValue?: number | string;
  placeholder?: string;
  suffix?: string;
}) {
  return (
    <div className="relative">
      <input
        type="number"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 pr-16 border border-gray-200 rounded-lg text-[14px] text-gray-700 outline-none focus:border-[#00C9A7] transition-all"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[13px] font-semibold text-gray-400">
        {suffix}
      </span>
    </div>
  );
}
