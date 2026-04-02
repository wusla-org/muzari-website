"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { SiteSettingsContent } from "@/lib/content";

export default function InquiryForm({
  inquiryContent,
  productOptions,
}: {
  inquiryContent: SiteSettingsContent;
  productOptions: string[];
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    product: productOptions[0] ?? "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      setError("We could not send your inquiry. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <section id="inquiry" className="section-shell">
      <ScrollReveal className="content-shell">
      <div className="editorial-card overflow-hidden p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal
            className="rounded-[1.8rem] bg-primary-ink px-6 py-7 text-white md:px-8 md:py-9"
            direction="right"
            delay={60}
          >
            <div className="mb-6 w-fit rounded-[1.35rem] bg-white px-4 py-3">
              <BrandLogo variant="compact" className="max-w-[8.5rem]" />
            </div>
            <span className="mb-5 inline-block text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-white/70">
              {inquiryContent.inquiryBadge}
            </span>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              {inquiryContent.inquiryTitle}
            </h2>
            <p className="mt-5 text-[0.97rem] leading-7 text-white/76">
              {inquiryContent.inquiryDescription}
            </p>

            <div className="mt-8 space-y-4 text-sm leading-7 text-white/76">
              <p>{inquiryContent.inquiryResponseNote}</p>
              <p>{inquiryContent.inquiryFocusNote}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="rounded-[1.8rem] bg-surface-bright p-6 md:p-8"
            direction="left"
            delay={140}
          >
            {submitted ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
                  <span className="text-4xl font-bold leading-none">✓</span>
                </div>
                <h3 className="mt-6 text-3xl font-bold text-on-surface">
                  Inquiry Received
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-on-surface-variant">
                  Our export desk will review the request and get back to you
                  with the next steps shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="button-secondary mt-8"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {error ? (
                  <p className="rounded-2xl bg-primary-soft px-4 py-3 text-sm text-primary-ink">
                    {error}
                  </p>
                ) : null}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="input-shell"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-on-surface-variant">
                      Company Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="email@company.com"
                      className="input-shell"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-on-surface-variant">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="input-shell"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-on-surface-variant">
                      Product Interest
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="input-shell appearance-none"
                    >
                      {productOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-on-surface-variant">
                    Requirement Details
                  </label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Volume requirements, destination port, and preferred timelines..."
                    className="input-shell resize-none"
                  />
                </div>

                <button type="submit" className="button-primary w-full">
                  Send Export Inquiry
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
