"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { Field, SectionCard, inputCls, textareaCls } from "@/components/admin/AdminField";
import { aboutPageContent, missionVision } from "@/lib/site-data";

export default function AboutAdminPage() {
  const [mission, setMission] = useState(missionVision.mission.text);
  const [vision, setVision] = useState(missionVision.vision.text);
  const [intro, setIntro] = useState(aboutPageContent.intro);
  const [sections, setSections] = useState(aboutPageContent.sections);
  const [values, setValues] = useState(aboutPageContent.values);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((data) => {
        if (!data) return;
        if (data.company?.mission) setMission(data.company.mission);
        if (data.company?.vision) setVision(data.company.vision);
        if (data.about?.intro) setIntro(data.about.intro);
        if (data.about?.sections) setSections(data.about.sections);
        if (data.about?.values) setValues(data.about.values);
      })
      .catch(() => {});
  }, []);

  function updateSection(i: number, key: "heading" | "text", val: string) {
    setSections((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], [key]: val };
      return next;
    });
    setSaved(false);
  }

  function updateValue(i: number, val: string) {
    setValues((prev) => { const next = [...prev]; next[i] = val; return next; });
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
      body: JSON.stringify({
        ...existing,
        company: { ...(existing.company as object ?? {}), mission, vision },
        about: { ...(existing.about as object ?? {}), intro, sections, values },
      }),
    });
    setSaving(false);
    setSaved(true);
  }

  return (
    <AdminShell title="About & Mission" onSave={save} saving={saving} saved={saved}>
      <div className="space-y-6">
        <SectionCard title="Mission & Vision">
          <Field label="Mission Statement">
            <textarea rows={3} value={mission} onChange={(e) => { setMission(e.target.value); setSaved(false); }} className={textareaCls} />
          </Field>
          <Field label="Vision Statement">
            <textarea rows={3} value={vision} onChange={(e) => { setVision(e.target.value); setSaved(false); }} className={textareaCls} />
          </Field>
        </SectionCard>

        <SectionCard title="About Page Introduction">
          <Field label="Intro Paragraph">
            <textarea rows={4} value={intro} onChange={(e) => { setIntro(e.target.value); setSaved(false); }} className={textareaCls} />
          </Field>
        </SectionCard>

        <SectionCard title="Story Sections">
          {sections.map((s, i) => (
            <div key={i} className="space-y-3 border-b border-[#e4dfd5] pb-4 last:border-0 last:pb-0">
              <Field label={`Section ${i + 1} — Heading`}>
                <input type="text" value={s.heading} onChange={(e) => updateSection(i, "heading", e.target.value)} className={inputCls} />
              </Field>
              <Field label={`Section ${i + 1} — Body`}>
                <textarea rows={3} value={s.text} onChange={(e) => updateSection(i, "text", e.target.value)} className={textareaCls} />
              </Field>
            </div>
          ))}
        </SectionCard>

        <SectionCard title="Company Values">
          {values.map((v, i) => (
            <Field key={i} label={`Value ${i + 1}`}>
              <input type="text" value={v} onChange={(e) => updateValue(i, e.target.value)} className={inputCls} />
            </Field>
          ))}
        </SectionCard>
      </div>
    </AdminShell>
  );
}
