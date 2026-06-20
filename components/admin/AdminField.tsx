export function Field({
  label,
  helper,
  children,
}: {
  label: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block font-[family-name:var(--font-jakarta)] text-sm font-medium text-[#2a342a]">
        {label}
      </label>
      {children}
      {helper && <p className="text-xs text-[#6a7c65]">{helper}</p>}
    </div>
  );
}

export const inputCls =
  "w-full rounded-lg border border-black/[0.12] bg-[#f8fbf6] px-4 py-2.5 text-sm text-[#2a342a] placeholder:text-[#9aab95] transition-colors focus:border-[#1c3d1c] focus:outline-none focus:ring-2 focus:ring-[#1c3d1c]/10";

export const textareaCls =
  "w-full resize-y rounded-lg border border-black/[0.12] bg-[#f8fbf6] px-4 py-2.5 text-sm text-[#2a342a] placeholder:text-[#9aab95] transition-colors focus:border-[#1c3d1c] focus:outline-none focus:ring-2 focus:ring-[#1c3d1c]/10";

export function SectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-black/[0.08] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="mb-5">
        <h2 className="font-[family-name:var(--font-jakarta)] text-base font-semibold text-[#2a342a]">
          {title}
        </h2>
        {description && <p className="mt-1 text-sm text-[#6a7c65]">{description}</p>}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
