"use client";

import Link from "next/link";

export default function AdminShell({
  title,
  children,
  onSave,
  saving,
  saved,
}: {
  title: string;
  children: React.ReactNode;
  onSave: () => void;
  saving: boolean;
  saved: boolean;
}) {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Top bar */}
      <div className="sticky top-0 z-10 border-b border-[#e4dfd5] bg-white px-8 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="font-sans text-[11px] uppercase tracking-[1.5px] text-[#7a6b4f] transition-colors hover:text-[#1a1a14]"
            >
              ← Dashboard
            </Link>
            <span className="text-[#e4dfd5]">|</span>
            <h1 className="font-playfair text-lg font-bold text-[#1a1a14]">{title}</h1>
          </div>
          <button
            onClick={onSave}
            disabled={saving}
            className="bg-[#5a8a3c] px-6 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-white transition-all hover:bg-[#4a7a2c] disabled:opacity-50"
          >
            {saving ? "Saving..." : saved ? "Saved ✓" : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-8 py-10">{children}</div>
    </div>
  );
}
