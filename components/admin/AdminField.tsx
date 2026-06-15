export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block font-sans text-[10px] font-medium uppercase tracking-[2px] text-[#b0a898]">
        {label}
      </label>
      {children}
    </div>
  );
}

export const inputCls =
  "w-full border border-[#e4dfd5] bg-[#faf8f3] px-4 py-3 font-sans text-sm text-[#1a1a14] placeholder:text-[#b0a898] focus:border-[#5a8a3c] focus:bg-white focus:outline-none";

export const textareaCls =
  "w-full resize-none border border-[#e4dfd5] bg-[#faf8f3] p-4 font-sans text-sm text-[#1a1a14] placeholder:text-[#b0a898] focus:border-[#5a8a3c] focus:bg-white focus:outline-none";

export function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-[#e4dfd5] bg-white p-6">
      <h2 className="mb-5 font-playfair text-base font-bold text-[#1a1a14]">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
