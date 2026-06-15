"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import AdminShell from "@/components/admin/AdminShell";
import { SectionCard } from "@/components/admin/AdminField";

type UploadedImage = { label: string; key: string; url: string };

const MEDIA_ITEMS = [
  { label: "Homepage Hero Image", key: "heroHome" },
  { label: "Farming Page Hero Image", key: "heroFarming" },
  { label: "Logo (Dark — on light backgrounds)", key: "logoDark" },
  { label: "Logo (Light — on dark backgrounds)", key: "logoLight" },
];

export default function MediaAdminPage() {
  const [uploads, setUploads] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  async function uploadFile(key: string, file: File) {
    setUploading(key);
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: form });
    const { url } = await res.json();
    setUploading(null);
    if (url) {
      setUploads((prev) => ({ ...prev, [key]: url }));
      setSaved(false);
    }
  }

  async function save() {
    setSaving(true);
    let existing: Record<string, unknown> = {};
    try {
      const r = await fetch("/api/admin/content");
      existing = (await r.json()) ?? {};
    } catch {}
    await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...existing, media: { ...(existing.media as object ?? {}), ...uploads } }),
    });
    setSaving(false);
    setSaved(true);
  }

  return (
    <AdminShell title="Images & Media" onSave={save} saving={saving} saved={saved}>
      <SectionCard title="Upload Images">
        <p className="mb-4 font-sans text-sm text-[#7a6b4f]">
          Upload new images to replace existing ones. Images are stored securely and served via CDN.
          Recommended size: at least 1200×800px for hero images.
        </p>
        <div className="space-y-6">
          {MEDIA_ITEMS.map(({ label, key }) => (
            <div key={key} className="flex items-center gap-6 border-b border-[#e4dfd5] pb-6 last:border-0 last:pb-0">
              <div className="shrink-0">
                {uploads[key] ? (
                  <div className="relative h-20 w-32 overflow-hidden border border-[#e4dfd5]">
                    <Image src={uploads[key]} alt={label} fill className="object-cover" unoptimized />
                  </div>
                ) : (
                  <div className="flex h-20 w-32 items-center justify-center border border-dashed border-[#e4dfd5] bg-[#faf8f3]">
                    <span className="font-sans text-[10px] text-[#b0a898]">No upload yet</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="mb-2 font-sans text-sm font-medium text-[#1a1a14]">{label}</p>
                <input
                  ref={(el) => { fileRefs.current[key] = el; }}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && uploadFile(key, e.target.files[0])}
                />
                <button
                  onClick={() => fileRefs.current[key]?.click()}
                  disabled={uploading === key}
                  className="border border-[#5a8a3c] px-4 py-2 font-sans text-[11px] uppercase tracking-[1.5px] text-[#5a8a3c] transition-all hover:bg-[#5a8a3c] hover:text-white disabled:opacity-50"
                >
                  {uploading === key ? "Uploading..." : "Choose File"}
                </button>
                {uploads[key] && (
                  <p className="mt-1 font-sans text-[10px] text-[#b0a898] break-all">{uploads[key]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </AdminShell>
  );
}
