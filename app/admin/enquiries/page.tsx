"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { Mail, ChevronDown, ChevronUp, Inbox } from "lucide-react";

interface Submission {
  id: string;
  submittedAt: string;
  fullName: string;
  email: string;
  inquiryType: string;
  message: string;
}

const TYPE_LABELS: Record<string, string> = {
  export: "Export Inquiry",
  sample: "Sample Request",
  pricing: "Pricing",
  general: "General",
  partnership: "Partnership",
};

const TYPE_COLORS: Record<string, string> = {
  export: "bg-blue-50 text-blue-700",
  sample: "bg-amber-50 text-amber-700",
  pricing: "bg-violet-50 text-violet-700",
  partnership: "bg-green-50 text-green-700",
  general: "bg-gray-100 text-gray-600",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function EnquiriesPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/enquiries")
      .then((r) => r.json())
      .then((data) => {
        const sorted = [...(Array.isArray(data) ? data : [])].sort(
          (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
        );
        setSubmissions(sorted);
      })
      .catch(() => setSubmissions([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AdminShell title="Enquiries">
      <div className="space-y-1">
        <p className="text-sm text-[#6a7c65]">
          All messages sent through your website contact form. Newest first.
        </p>
      </div>

      {loading ? (
        <div className="rounded-xl border border-black/[0.08] bg-white p-12 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <p className="text-sm text-[#6a7c65]">Loading enquiries...</p>
        </div>
      ) : submissions.length === 0 ? (
        <div className="rounded-xl border border-black/[0.08] bg-white p-12 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <Inbox className="mx-auto mb-3 h-8 w-8 text-[#b8ccb0]" />
          <p className="font-[family-name:var(--font-jakarta)] font-medium text-[#2a342a]">No enquiries yet</p>
          <p className="mt-1 text-sm text-[#6a7c65]">
            When visitors submit your contact form, their messages will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {submissions.map((s) => {
            const isOpen = expanded === s.id;
            const typeLabel = TYPE_LABELS[s.inquiryType] ?? s.inquiryType;
            const typeColor = TYPE_COLORS[s.inquiryType] ?? TYPE_COLORS.general;

            return (
              <div key={s.id} className="overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                {/* Header row */}
                <button
                  onClick={() => setExpanded(isOpen ? null : s.id)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-[#f8fbf6]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1c3d1c]/10">
                    <Mail className="h-4 w-4 text-[#1c3d1c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-[family-name:var(--font-jakarta)] font-medium text-[#2a342a]">{s.fullName}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${typeColor}`}>
                        {typeLabel}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-[#6a7c65]">{s.email}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs text-[#6a7c65]">{formatDate(s.submittedAt)}</p>
                  </div>
                  <div className="ml-2 shrink-0 text-[#9aab95]">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Expanded message */}
                {isOpen && (
                  <div className="border-t border-black/[0.06] bg-[#f8fbf6] px-5 py-4">
                    <p className="mb-1 font-[family-name:var(--font-jakarta)] text-xs font-medium uppercase tracking-wide text-[#6a7c65]">Message</p>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#2a342a]">{s.message}</p>
                    <a
                      href={`mailto:${s.email}?subject=Re: ${typeLabel} — Muzari Exports`}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#1c3d1c] px-4 py-2 text-xs font-medium text-[#e8f4e0] transition-colors hover:bg-[#2a5c2a]"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Reply via Email
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </AdminShell>
  );
}
