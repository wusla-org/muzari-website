"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { Field, SectionCard, inputCls, textareaCls } from "@/components/admin/AdminField";

const PAGE_KEYS = ["home", "about", "products", "farming"] as const;
const PAGE_LABELS: Record<string, string> = {
  home: "Home Page",
  about: "About Page",
  products: "Products Page",
  farming: "Farming Page",
};

const DEFAULTS: Record<string, Record<string, string>> = {
  home: {
    eyebrow: "Premium Export Quality",
    headline: "Where Indian Produce",
    headlineAccent: "Meets International Standards.",
    body: "Muzari combines 95 years of agricultural legacy with cutting-edge global logistics — delivering the finest bananas, tapioca, and fresh vegetables from India's fertile soil directly to international markets with absolute trust.",
    ctaPrimary: "Order Now",
    ctaSecondary: "Our Harvest",
    origin: "Kerala, India",
  },
  about: {
    eyebrow: "Our Heritage",
    headline: "95 Years of Indian",
    headlineAccent: "Agricultural Legacy.",
    body: "Our journey began over nine decades ago, deeply rooted in India's rich agricultural heritage.",
    origin: "Established 1931 · Kerala, India",
  },
  products: {
    eyebrow: "Our Catalog",
    headline: "From India's Farms",
    headlineAccent: "To Your Markets.",
    body: "Our catalog highlights premium products cultivated to meet the highest international standards for quality and consistency.",
    origin: "Kerala & South India",
  },
  farming: {
    eyebrow: "Our Legacy",
    headline: "Grown by Generations,",
    headlineAccent: "Harvested for the World.",
    body: "Our heritage is rooted in the soil. We cultivate our own fields to ensure every export meets our generational standard of quality.",
    origin: "Red Soil of Kerala, India",
  },
};

export default function HeroAdminPage() {
  const [content, setContent] = useState<Record<string, Record<string, string>>>(DEFAULTS);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((data) => {
        if (data?.heroes) {
          const merged: Record<string, Record<string, string>> = { ...DEFAULTS };
          for (const key of PAGE_KEYS) {
            if (data.heroes[key]) merged[key] = { ...DEFAULTS[key], ...data.heroes[key] };
          }
          setContent(merged);
        }
      })
      .catch(() => {});
  }, []);

  function update(page: string, field: string, value: string) {
    setContent((prev) => ({ ...prev, [page]: { ...prev[page], [field]: value } }));
    setSaved(false);
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
      body: JSON.stringify({ ...existing, heroes: { ...(existing.heroes as object ?? {}), ...content } }),
    });
    setSaving(false);
    setSaved(true);
  }

  const fields = [
    { key: "eyebrow", label: "Eyebrow Label (small text above headline)" },
    { key: "headline", label: "Main Headline (dark)" },
    { key: "headlineAccent", label: "Accent Headline (green italic)" },
    { key: "body", label: "Body Text" },
    { key: "ctaPrimary", label: "Primary Button Text" },
    { key: "ctaSecondary", label: "Secondary Button Text" },
    { key: "origin", label: "Origin Badge (bottom)" },
  ];

  return (
    <AdminShell title="Hero Sections" onSave={save} saving={saving} saved={saved}>
      {/* Page tabs */}
      <div className="mb-8 flex gap-2 border-b border-[#e4dfd5]">
        {PAGE_KEYS.map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`pb-3 font-sans text-[11px] uppercase tracking-[1.5px] transition-colors ${
              activeTab === key
                ? "border-b-2 border-[#5a8a3c] text-[#1a1a14]"
                : "text-[#7a6b4f] hover:text-[#1a1a14]"
            }`}
          >
            {PAGE_LABELS[key]}
          </button>
        ))}
      </div>

      <SectionCard title={`${PAGE_LABELS[activeTab]} — Hero Content`}>
        {fields.map(({ key, label }) => {
          if (!Object.keys(DEFAULTS[activeTab]).includes(key)) return null;
          const val = content[activeTab]?.[key] ?? "";
          return (
            <Field key={key} label={label}>
              {key === "body" ? (
                <textarea
                  rows={3}
                  value={val}
                  onChange={(e) => update(activeTab, key, e.target.value)}
                  className={textareaCls}
                />
              ) : (
                <input
                  type="text"
                  value={val}
                  onChange={(e) => update(activeTab, key, e.target.value)}
                  className={inputCls}
                />
              )}
            </Field>
          );
        })}
      </SectionCard>

      <p className="mt-6 font-sans text-xs text-[#b0a898]">
        Changes will be reflected on the website after clicking &ldquo;Save Changes&rdquo; above.
      </p>
    </AdminShell>
  );
}
