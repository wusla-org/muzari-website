"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem('fullName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      inquiryType: (form.elements.namedItem('inquiryType') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed');

      const waMessage = encodeURIComponent(
        `Hi Muzari Team!\n\nName: ${data.fullName}\nEmail: ${data.email}\nInquiry: ${data.inquiryType}\n\n${data.message}`
      );
      window.open(`https://wa.me/918590838554?text=${waMessage}`, '_blank');

      setIsSubmitted(true);
    } catch {
      setError('Something went wrong. Please try WhatsApp or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf8f3] animate-in fade-in duration-500">
      <SiteHeader />

      {/* Statement Header */}
      <section className="w-full bg-[#faf8f3] pt-24 lg:pt-32 pb-14 px-6 lg:px-12">
        <div className="mx-auto max-w-[1280px]">

          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-[30px] bg-[#7a6b4f]" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#7a6b4f]">Get in Touch</span>
          </div>

          <h1 className="font-playfair text-[2.6rem] font-bold leading-[1.0] text-[#1a1a14] sm:text-[4rem] lg:text-[5.5rem]">
            Start Your Global
          </h1>
          <p className="mb-6 font-playfair text-[2.6rem] font-bold italic leading-[1.1] text-[#5a8a3c] sm:text-[4rem] lg:text-[5.5rem]">
            Sourcing Inquiry.
          </p>
          <div className="mb-6 h-[2px] w-[60px] bg-[#5a8a3c]" />
          <p className="font-sans text-[14px] italic leading-relaxed text-[#7a6b4f]">
            Fastest response via WhatsApp — typically within an hour for volume inquiries.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="w-full bg-[#faf8f3] pb-28 px-6 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-16 lg:grid-cols-[380px_1fr] lg:gap-24">

            {/* Left: Contact Info */}
            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#e4dfd5] bg-white">
                  <MapPin className="h-4 w-4 text-[#5a8a3c]" />
                </div>
                <div>
                  <p className="mb-0.5 font-sans text-[10px] uppercase tracking-[2px] text-[#b0a898]">Export Hub</p>
                  <p className="font-sans text-base font-semibold text-[#1a1a14]">Kerala, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#e4dfd5] bg-white">
                  <Mail className="h-4 w-4 text-[#5a8a3c]" />
                </div>
                <div>
                  <p className="mb-0.5 font-sans text-[10px] uppercase tracking-[2px] text-[#b0a898]">Email</p>
                  <a href="mailto:muzariexports@gmail.com" className="font-sans text-base font-semibold text-[#1a1a14] transition-colors hover:text-[#5a8a3c]">
                    muzariexports@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#e4dfd5] bg-white">
                  <Phone className="h-4 w-4 text-[#5a8a3c]" />
                </div>
                <div className="space-y-4">
                  <p className="font-sans text-[10px] uppercase tracking-[2px] text-[#b0a898]">Phone & WhatsApp</p>
                  <div>
                    <p className="font-sans text-base font-semibold text-[#1a1a14]">+91 85908 38554</p>
                    <div className="mt-1 flex gap-3 font-sans text-[11px] uppercase tracking-wider text-[#7a6b4f]">
                      <a href="tel:+918590838554" className="transition-colors hover:text-[#1a1a14]">Call</a>
                      <span className="text-[#e4dfd5]">|</span>
                      <a href="https://wa.me/918590838554" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#1a1a14]">WhatsApp</a>
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-base font-semibold text-[#1a1a14]">+91 96568 08554</p>
                    <div className="mt-1 flex gap-3 font-sans text-[11px] uppercase tracking-wider text-[#7a6b4f]">
                      <a href="tel:+919656808554" className="transition-colors hover:text-[#1a1a14]">Call</a>
                      <span className="text-[#e4dfd5]">|</span>
                      <a href="https://wa.me/919656808554" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#1a1a14]">WhatsApp</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#e4dfd5] bg-white">
                  <MessageCircle className="h-4 w-4 text-[#5a8a3c]" />
                </div>
                <div>
                  <p className="mb-0.5 font-sans text-[10px] uppercase tracking-[2px] text-[#b0a898]">Social</p>
                  <a href="https://www.facebook.com/search/top/?q=Muzari%20exports" target="_blank" rel="noopener noreferrer" className="font-sans text-base font-semibold text-[#1a1a14] transition-colors hover:text-[#5a8a3c]">
                    Muzari Exports (Facebook)
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/918590838554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#1a1a14] px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#faf8f3] transition-all hover:bg-[#2d2d22]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-8 sm:p-12">
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[#5a8a3c]">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-playfair text-2xl font-bold text-[#1a1a14]">Inquiry Received</h3>
                  <p className="mb-3 max-w-sm font-sans text-sm leading-relaxed text-[#7a6b4f]">
                    Thank you — WhatsApp should have opened so you can connect with our team directly.
                  </p>
                  <p className="mb-8 max-w-sm font-sans text-sm leading-relaxed text-[#b0a898]">
                    Didn&apos;t open?{' '}
                    <a href="https://wa.me/918590838554" target="_blank" rel="noopener noreferrer" className="text-[#5a8a3c] transition-colors hover:text-[#1a1a14]">
                      Click here to open WhatsApp.
                    </a>
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setError(null); }}
                    className="border border-[#1a1a14] px-8 py-3 font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#1a1a14] transition-all hover:bg-[#1a1a14] hover:text-[#faf8f3]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="grid gap-6" onSubmit={handleSubmit}>

                  <div className="mb-2">
                    <p className="font-playfair text-xl font-bold text-[#1a1a14]">Send us a message</p>
                    <p className="mt-1 font-sans text-[13px] text-[#7a6b4f]">Fill out the form and WhatsApp will open automatically with your message.</p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-[#b0a898]">Full Name</label>
                      <input
                        id="fullName" name="fullName" type="text" required placeholder="John Doe"
                        className="w-full h-12 border border-[#e4dfd5] bg-[#faf8f3] px-4 font-sans text-sm text-[#1a1a14] placeholder:text-[#b0a898] transition-all focus:border-[#5a8a3c] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-[#b0a898]">Email Address</label>
                      <input
                        id="email" name="email" type="email" required placeholder="john@company.com"
                        className="w-full h-12 border border-[#e4dfd5] bg-[#faf8f3] px-4 font-sans text-sm text-[#1a1a14] placeholder:text-[#b0a898] transition-all focus:border-[#5a8a3c] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-[#b0a898]">Inquiry Type</label>
                    <div className="relative">
                      <select
                        id="inquiryType" name="inquiryType" required
                        className="w-full h-12 appearance-none border border-[#e4dfd5] bg-[#faf8f3] px-4 font-sans text-sm text-[#1a1a14] transition-all focus:border-[#5a8a3c] focus:bg-white focus:outline-none"
                      >
                        <option value="">Select inquiry type...</option>
                        <option value="export">Export Volume Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="general">General Question</option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#b0a898] text-xs">↓</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-[#b0a898]">Your Message</label>
                    <textarea
                      id="message" name="message" rows={6} required placeholder="Tell us about your requirements..."
                      className="w-full resize-none border border-[#e4dfd5] bg-[#faf8f3] p-4 font-sans text-sm text-[#1a1a14] placeholder:text-[#b0a898] transition-all focus:border-[#5a8a3c] focus:bg-white focus:outline-none"
                    />
                  </div>

                  {error && (
                    <p className="font-sans text-sm text-red-600" role="alert">{error}</p>
                  )}

                  <button
                    type="submit" disabled={isSubmitting}
                    className="h-14 w-full bg-[#1a1a14] font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#faf8f3] transition-all hover:bg-[#2d2d22] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry → WhatsApp"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
