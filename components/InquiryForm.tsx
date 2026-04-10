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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
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
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="inquiry" className="section-shell">
      <ScrollReveal className="content-shell">
      <div className="editorial-card overflow-hidden p-4 md:p-10">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <ScrollReveal
            className="rounded-[1.45rem] bg-primary-ink px-5 py-6 text-white md:rounded-[1.8rem] md:px-8 md:py-9"
            direction="right"
            delay={60}
          >
            <div className="mb-5 w-fit rounded-[1.1rem] bg-white px-4 py-3 md:mb-6 md:rounded-[1.35rem]">
              <BrandLogo variant="compact" className="max-w-[7.5rem] md:max-w-[8.5rem]" />
            </div>
            <span className="mb-5 inline-block text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-white/70">
              {inquiryContent.inquiryBadge}
            </span>
            <h2 className="text-[2rem] font-extrabold md:text-4xl">
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
            className="rounded-[1.45rem] bg-surface-bright p-5 md:rounded-[1.8rem] md:p-8"
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
                    <label htmlFor="name" className="mb-3 block text-sm font-medium text-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      id="name"
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
                    <label htmlFor="email" className="mb-3 block text-sm font-medium text-on-surface-variant">
                      Company Email
                    </label>
                    <input
                      id="email"
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
                    <label htmlFor="organization" className="mb-3 block text-sm font-medium text-on-surface-variant">
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="input-shell"
                    />
                  </div>
                  <div>
                    <label htmlFor="product" className="mb-3 block text-sm font-medium text-on-surface-variant">
                      Product Interest
                    </label>
                    <select
                      id="product"
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
                  <label htmlFor="details" className="mb-3 block text-sm font-medium text-on-surface-variant">
                    Requirement Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Volume requirements, destination port, and preferred timelines..."
                    className="input-shell resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="button-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Export Inquiry"}
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
