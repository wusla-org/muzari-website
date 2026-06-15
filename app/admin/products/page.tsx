"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AdminShell from "@/components/admin/AdminShell";
import { Field, SectionCard, inputCls, textareaCls } from "@/components/admin/AdminField";
import { products as defaultProducts } from "@/lib/site-data";

type Spec = { label: string; value: string };
type Product = {
  name: string; label: string; image: string; imageAlt: string;
  summary: string; details: string[]; specs: Spec[];
};

export default function ProductsAdminPage() {
  const [products, setProducts] = useState<Product[]>(
    defaultProducts.map((p) => ({
      ...p,
      specs: p.specs ?? [],
      details: p.details ?? [],
    }))
  );
  const [activeIdx, setActiveIdx] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((data) => {
        if (data?.products) setProducts(data.products);
      })
      .catch(() => {});
  }, []);

  function updateField(field: keyof Product, value: string) {
    setProducts((prev) => {
      const next = [...prev];
      next[activeIdx] = { ...next[activeIdx], [field]: value };
      return next;
    });
    setSaved(false);
  }

  function updateSpec(i: number, key: keyof Spec, value: string) {
    setProducts((prev) => {
      const next = [...prev];
      const specs = [...next[activeIdx].specs];
      specs[i] = { ...specs[i], [key]: value };
      next[activeIdx] = { ...next[activeIdx], specs };
      return next;
    });
    setSaved(false);
  }

  function updateDetail(i: number, value: string) {
    setProducts((prev) => {
      const next = [...prev];
      const details = [...next[activeIdx].details];
      details[i] = value;
      next[activeIdx] = { ...next[activeIdx], details };
      return next;
    });
    setSaved(false);
  }

  async function uploadImage(file: File) {
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: form });
    const { url } = await res.json();
    setUploading(false);
    if (url) updateField("image", url);
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
      body: JSON.stringify({ ...existing, products }),
    });
    setSaving(false);
    setSaved(true);
  }

  const p = products[activeIdx];

  return (
    <AdminShell title="Products" onSave={save} saving={saving} saved={saved}>
      {/* Product tabs */}
      <div className="mb-8 flex gap-2 border-b border-[#e4dfd5]">
        {products.map((prod, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`pb-3 font-sans text-[11px] uppercase tracking-[1.5px] transition-colors ${
              activeIdx === i
                ? "border-b-2 border-[#5a8a3c] text-[#1a1a14]"
                : "text-[#7a6b4f] hover:text-[#1a1a14]"
            }`}
          >
            {prod.name}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <SectionCard title="Basic Info">
          <Field label="Product Name"><input type="text" value={p.name} onChange={(e) => updateField("name", e.target.value)} className={inputCls} /></Field>
          <Field label="Label / Badge"><input type="text" value={p.label} onChange={(e) => updateField("label", e.target.value)} className={inputCls} /></Field>
          <Field label="Summary"><textarea rows={2} value={p.summary} onChange={(e) => updateField("summary", e.target.value)} className={textareaCls} /></Field>
        </SectionCard>

        <SectionCard title="Product Image">
          <div className="flex items-start gap-6">
            {p.image && (
              <div className="relative h-28 w-28 shrink-0 overflow-hidden border border-[#e4dfd5]">
                <Image
                  src={p.image.startsWith("http") ? p.image : p.image}
                  alt={p.imageAlt}
                  fill
                  className="object-cover"
                  unoptimized={p.image.startsWith("http")}
                />
              </div>
            )}
            <div className="flex-1 space-y-3">
              <Field label="Image Alt Text">
                <input type="text" value={p.imageAlt} onChange={(e) => updateField("imageAlt", e.target.value)} className={inputCls} />
              </Field>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0])} />
              <button
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="border border-[#5a8a3c] px-5 py-2.5 font-sans text-[11px] uppercase tracking-[1.5px] text-[#5a8a3c] transition-all hover:bg-[#5a8a3c] hover:text-white disabled:opacity-50"
              >
                {uploading ? "Uploading..." : "Upload New Image"}
              </button>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Key Details (bullet points)">
          {p.details.map((d, i) => (
            <Field key={i} label={`Detail ${i + 1}`}>
              <input type="text" value={d} onChange={(e) => updateDetail(i, e.target.value)} className={inputCls} />
            </Field>
          ))}
        </SectionCard>

        <SectionCard title="Specifications">
          {p.specs.map((spec, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <Field label={`Spec ${i + 1} Label`}>
                <input type="text" value={spec.label} onChange={(e) => updateSpec(i, "label", e.target.value)} className={inputCls} />
              </Field>
              <Field label={`Spec ${i + 1} Value`}>
                <input type="text" value={spec.value} onChange={(e) => updateSpec(i, "value", e.target.value)} className={inputCls} />
              </Field>
            </div>
          ))}
        </SectionCard>
      </div>
    </AdminShell>
  );
}
