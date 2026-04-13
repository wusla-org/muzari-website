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
    product: productOptions.length > 0 ? productOptions[0] : "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    } catch {
      setError("We could not send your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="inquiry" className="section-shell">
      <ScrollReveal className="content-shell">
        <div className="ag-card overflow-hidden p-6 md:p-10 lg:p-14">
          <div className="mx-auto max-w-4xl text-center mb-12">
             <span className="pill-tag mb-4">Trade Inquiry</span>
             <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface">
                Partner For Global Supply
             </h2>
             <p className="mt-4 text-base text-on-surface-variant">
                Our export desk is ready to facilitate bulk sourcing tailored to your regional compliance and volume demands.
             </p>
          </div>

          <div className="mx-auto max-w-3xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface text-primary">
                  <span className="text-4xl font-bold leading-none">✓</span>
                </div>
                <h3 className="mt-6 text-3xl font-bold text-on-surface tracking-tight">
                  Inquiry Received
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-on-surface-variant">
                  Our export desk will review the request and get back to you with the next steps shortly.
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <p className="rounded-2xl bg-surface px-4 py-3 text-sm font-semibold text-red-600 outline outline-1 outline-red-200">
                    {error}
                  </p>
                )}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-[0.8rem] font-bold text-on-surface">
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
                    <label htmlFor="email" className="mb-2 block text-[0.8rem] font-bold text-on-surface">
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
                    <label htmlFor="organization" className="mb-2 block text-[0.8rem] font-bold text-on-surface">
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
                    <label htmlFor="product" className="mb-2 block text-[0.8rem] font-bold text-on-surface">
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      disabled={productOptions.length === 0}
                      className="input-shell"
                    >
                      {productOptions.length === 0 ? (
                        <option value="">No products available</option>
                      ) : (
                        productOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="mb-2 block text-[0.8rem] font-bold text-on-surface">
                    Requirement Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Volume requirements, destination port, and preferred timelines..."
                    className="input-shell resize-none"
                  />
                </div>

                <div className="pt-2">
                   <button
                     type="submit"
                     className="button-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                     disabled={isSubmitting || !form.product}
                   >
                     {isSubmitting ? "Sending..." : "Send Export Inquiry"}
                   </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
