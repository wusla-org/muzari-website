"use client";

import Link from "next/link";
import { ExternalLink, Save, Check, AlertCircle } from "lucide-react";
import AdminSidebar from "./AdminSidebar";

interface AdminShellProps {
  title: string;
  children: React.ReactNode;
  onSave?: () => void;
  saving?: boolean;
  saved?: boolean;
  saveError?: boolean;
  isDirty?: boolean;
  previewPath?: string;
}

export default function AdminShell({
  title,
  children,
  onSave,
  saving,
  saved,
  saveError,
  isDirty,
  previewPath,
}: AdminShellProps) {
  function getSaveState() {
    if (saving) {
      return {
        cls: "cursor-not-allowed bg-[#a8721a]/70 text-white opacity-80",
        content: (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Saving...
          </>
        ),
        disabled: true,
      };
    }
    if (saveError) {
      return {
        cls: "bg-red-600 text-white hover:bg-red-700",
        content: (
          <>
            <AlertCircle className="h-3.5 w-3.5" />
            Failed — Retry
          </>
        ),
        disabled: false,
      };
    }
    if (saved) {
      return {
        cls: "cursor-default bg-green-700 text-white",
        content: (
          <>
            <Check className="h-3.5 w-3.5" />
            Saved
          </>
        ),
        disabled: true,
      };
    }
    if (isDirty === false) {
      return {
        cls: "cursor-default bg-gray-100 text-gray-400",
        content: (
          <>
            <Save className="h-3.5 w-3.5" />
            Save Changes
          </>
        ),
        disabled: true,
      };
    }
    return {
      cls: "bg-[#a8721a] text-white hover:bg-[#8f6015]",
      content: (
        <>
          <Save className="h-3.5 w-3.5" />
          Save Changes
        </>
      ),
      disabled: false,
    };
  }

  const btn = onSave ? getSaveState() : null;

  return (
    <div className="flex h-screen overflow-hidden bg-[#f3f7f1]">
      <AdminSidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex shrink-0 items-center justify-between border-b border-black/[0.06] bg-white px-8 py-4 shadow-sm">
          <div className="flex items-center gap-2.5">
            <h1 className="font-[family-name:var(--font-jakarta)] text-lg font-semibold text-[#2a342a]">
              {title}
            </h1>
            {isDirty && !saved && !saving && (
              <span className="h-2 w-2 rounded-full bg-amber-500" title="Unsaved changes" />
            )}
          </div>

          <div className="flex items-center gap-3">
            {previewPath && (
              <Link
                href={previewPath}
                target="_blank"
                className="flex items-center gap-1.5 rounded-lg border border-black/[0.12] px-4 py-2 text-sm text-[#6a7c65] transition-colors hover:border-black/20 hover:text-[#2a342a]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Preview Page
              </Link>
            )}
            {onSave && btn && (
              <button
                onClick={btn.disabled ? undefined : onSave}
                disabled={btn.disabled}
                className={`flex items-center gap-1.5 rounded-lg px-5 py-2 text-sm font-medium transition-all ${btn.cls}`}
              >
                {btn.content}
              </button>
            )}
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto px-8 py-8">
          <div className="mx-auto max-w-3xl space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
