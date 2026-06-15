"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Mail, MapPin, Phone, MessageSquare, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero — cream/olive/Playfair design with contact info + form */}
      <section className="w-full bg-[#faf8f3] pt-24 lg:pt-28 px-4 sm:px-6 pb-0">
        <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[20px] border border-[#e4dfd5] bg-[#faf8f3]">
          <div className="grid lg:grid-cols-[1fr_1.4fr]">

            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center border-b border-[#e4dfd5] px-8 py-12 sm:px-12 lg:border-b-0 lg:border-r lg:py-16">

              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-[30px] bg-[#7a6b4f]" />
                <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#7a6b4f]">Get in Touch</span>
              </div>

              <h1 className="mb-2 font-playfair text-[2.2rem] font-bold leading-[1.0] text-[#1a1a14] sm:text-[2.8rem]">
                Start Your Global
              </h1>
              <p className="mb-6 font-playfair text-[2.2rem] font-bold italic leading-[1.1] text-[#5a8a3c] sm:text-[2.8rem]">
                Sourcing Inquiry.
              </p>
              <div className="mb-8 h-[2px] w-[60px] bg-[#5a8a3c]" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e4dfd5] bg-white">
                    <MapPin className="h-4 w-4 text-[#5a8a3c]" />
                  </div>
                  <div>
                    <p className="mb-0.5 font-sans text-[10px] uppercase tracking-[2px] text-[#b0a898]">Export Hub</p>
                    <p className="font-playfair text-base font-bold italic text-[#1a1a14]">Kerala, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e4dfd5] bg-white">
                    <Mail className="h-4 w-4 text-[#5a8a3c]" />
                  </div>
                  <div>
                    <p className="mb-0.5 font-sans text-[10px] uppercase tracking-[2px] text-[#b0a898]">Email</p>
                    <a href="mailto:muzariexports@muzari.in" className="font-playfair text-base font-bold italic text-[#1a1a14] hover:text-[#5a8a3c] transition-colors">
                      muzariexports@muzari.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e4dfd5] bg-white">
                    <Phone className="h-4 w-4 text-[#5a8a3c]" />
                  </div>
                  <div className="space-y-3">
                    <p className="font-sans text-[10px] uppercase tracking-[2px] text-[#b0a898]">Phone & WhatsApp</p>
                    <div>
                      <p className="font-playfair text-base font-bold italic text-[#1a1a14]">+91 85908 38554</p>
                      <div className="mt-1 flex gap-3 font-sans text-[11px] uppercase tracking-wider text-[#7a6b4f]">
                        <a href="tel:+918590838554" className="hover:text-[#1a1a14] transition-colors">Call</a>
                        <span className="text-[#e4dfd5]">|</span>
                        <a href="https://wa.me/918590838554" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a14] transition-colors">WhatsApp</a>
                      </div>
                    </div>
                    <div className="border-t border-[#e4dfd5] pt-3">
                      <p className="font-playfair text-base font-bold italic text-[#1a1a14]">+91 96568 08554</p>
                      <div className="mt-1 flex gap-3 font-sans text-[11px] uppercase tracking-wider text-[#7a6b4f]">
                        <a href="tel:+919656808554" className="hover:text-[#1a1a14] transition-colors">Call</a>
                        <span className="text-[#e4dfd5]">|</span>
                        <a href="https://wa.me/919656808554" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a14] transition-colors">WhatsApp</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e4dfd5] bg-white">
                    <MessageCircle className="h-4 w-4 text-[#5a8a3c]" />
                  </div>
                  <div>
                    <p className="mb-0.5 font-sans text-[10px] uppercase tracking-[2px] text-[#b0a898]">Social</p>
                    <a href="https://www.facebook.com/search/top/?q=Muzari%20exports" target="_blank" rel="noopener noreferrer" className="font-playfair text-base font-bold italic text-[#1a1a14] hover:text-[#5a8a3c] transition-colors">
                      Muzari Exports (Facebook)
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#e4dfd5] pt-6">
                <p className="font-sans text-[13px] italic leading-relaxed text-[#7a6b4f]">
                  Fastest response via WhatsApp — typically within an hour for volume inquiries.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white px-8 py-12 sm:px-12 lg:py-16">
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[#1a1a14]">
                    <MessageSquare className="h-8 w-8 text-[#5a8a3c]" />
                  </div>
                  <h3 className="mb-3 font-playfair text-2xl font-bold text-[#1a1a14]">Inquiry Received</h3>
                  <p className="mb-8 max-w-sm font-sans text-sm leading-relaxed text-[#7a6b4f]">
                    Thank you for reaching out. Our export specialists will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#5a8a3c] underline underline-offset-4 transition-colors hover:text-[#1a1a14]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="grid gap-6" onSubmit={handleSubmit}>
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

                  <button
                    type="submit" disabled={isSubmitting}
                    className="h-12 w-full bg-[#1a1a14] font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#faf8f3] transition-all hover:bg-[#2d2d22] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
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
