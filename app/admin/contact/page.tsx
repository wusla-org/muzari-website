"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { Field, SectionCard, inputCls } from "@/components/admin/AdminField";

const DEFAULTS = {
  email: "muzariexports@gmail.com",
  phone1: "+91 85908 38554",
  phone1wa: "918590838554",
  phone2: "+91 96568 08554",
  phone2wa: "919656808554",
  address: "Kerala, India",
  facebookUrl: "https://www.facebook.com/search/top/?q=Muzari%20exports",
  whatsappPhone: "+919747522318",
};

export default function ContactAdminPage() {
  const [fields, setFields] = useState(DEFAULTS);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((data) => {
        if (data?.contactInfo) setFields({ ...DEFAULTS, ...data.contactInfo });
      })
      .catch(() => {});
  }, []);

  function update(key: keyof typeof DEFAULTS, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
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
      body: JSON.stringify({ ...existing, contactInfo: fields }),
    });
    setSaving(false);
    setSaved(true);
  }

  return (
    <AdminShell title="Contact Info" onSave={save} saving={saving} saved={saved}>
      <div className="space-y-6">
        <SectionCard title="Email & Address">
          <Field label="Email Address">
            <input type="email" value={fields.email} onChange={(e) => update("email", e.target.value)} className={inputCls} />
          </Field>
          <Field label="Location / Address">
            <input type="text" value={fields.address} onChange={(e) => update("address", e.target.value)} className={inputCls} />
          </Field>
        </SectionCard>

        <SectionCard title="Phone Numbers">
          <Field label="Phone 1 (display format, e.g. +91 85908 38554)">
            <input type="text" value={fields.phone1} onChange={(e) => update("phone1", e.target.value)} className={inputCls} />
          </Field>
          <Field label="Phone 1 WhatsApp number (digits only, e.g. 918590838554)">
            <input type="text" value={fields.phone1wa} onChange={(e) => update("phone1wa", e.target.value)} className={inputCls} />
          </Field>
          <Field label="Phone 2 (display format)">
            <input type="text" value={fields.phone2} onChange={(e) => update("phone2", e.target.value)} className={inputCls} />
          </Field>
          <Field label="Phone 2 WhatsApp number (digits only)">
            <input type="text" value={fields.phone2wa} onChange={(e) => update("phone2wa", e.target.value)} className={inputCls} />
          </Field>
        </SectionCard>

        <SectionCard title="Social & WhatsApp">
          <Field label="Facebook Page URL">
            <input type="url" value={fields.facebookUrl} onChange={(e) => update("facebookUrl", e.target.value)} className={inputCls} />
          </Field>
          <Field label="Primary WhatsApp Number (used for Order Now button, digits only)">
            <input type="text" value={fields.whatsappPhone} onChange={(e) => update("whatsappPhone", e.target.value)} className={inputCls} />
          </Field>
        </SectionCard>
      </div>
    </AdminShell>
  );
}
