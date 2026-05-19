"use client";

import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getWhatsAppHref } from "@/lib/site-data";
import { Mail, MapPin, Phone, MessageSquare, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const whatsappHref = getWhatsAppHref();
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

      {/* "Smart" Architectural Contact Hero & Form */}
      <section className="relative h-auto lg:min-h-screen w-full overflow-hidden bg-white pt-24 pb-12 lg:pb-20">
        <div className="mx-auto flex h-auto lg:h-full lg:min-h-[750px] w-[min(1440px,calc(100%-2rem))] flex-col gap-6 lg:flex-row">
          
          {/* Left Panel: Solid Brand Block (Inquiry Focus) */}
          <div className="relative flex h-auto lg:h-full flex-col justify-center rounded-[2.5rem] bg-[#82E076] px-6 py-12 sm:px-12 sm:py-16 lg:w-[40%]">
            {/* Precision Grid Detail */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute left-10 top-0 h-full w-px bg-white/30" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-white/30" />
            </div>

            <div className="relative z-10 space-y-12">
              <div>
                <Badge className="mb-8 border-none bg-green-950 px-6 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-white">
                  Get in Touch
                </Badge>
                <h1 className="mb-8 font-heritage text-[32px] font-bold leading-[1.2] tracking-tight text-green-950">
                  Start your global <br />
                  sourcing inquiry.
                </h1>
                <div className="h-1.5 w-20 bg-green-950 mb-8 rounded-full" />
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-green-950 transition-colors group-hover:bg-white group-hover:scale-110">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-950/40 mb-1">Export Hub</h4>
                    <p className="font-heritage text-lg font-bold text-green-950 italic">Kerala, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-green-950 transition-colors group-hover:bg-white group-hover:scale-110">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-950/40 mb-1">Email Support</h4>
                    <a href="mailto:muzariexports@muzari.in" className="font-heritage text-lg font-bold text-green-950 italic hover:underline decoration-green-950/30">
                      muzariexports@muzari.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-green-950 transition-colors group-hover:bg-white group-hover:scale-110">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-950/40 mb-1">Phone & WhatsApp</h4>
                    
                    <div className="space-y-2">
                      <p className="font-heritage text-lg font-bold text-green-950 italic leading-none">+91 85908 38554</p>
                      <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-green-900">
                        <a href="tel:+918590838554" className="hover:text-green-950 hover:underline">Call</a>
                        <span className="text-green-950/20">|</span>
                        <a href="https://wa.me/918590838554" target="_blank" rel="noopener noreferrer" className="hover:text-green-950 hover:underline">WhatsApp</a>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-green-950/10">
                      <p className="font-heritage text-lg font-bold text-green-950 italic leading-none">+91 96568 08554</p>
                      <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-green-900">
                        <a href="tel:+919656808554" className="hover:text-green-950 hover:underline">Call</a>
                        <span className="text-green-950/20">|</span>
                        <a href="https://wa.me/919656808554" target="_blank" rel="noopener noreferrer" className="hover:text-green-950 hover:underline">WhatsApp</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-green-950 transition-colors group-hover:bg-white group-hover:scale-110">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-950/40 mb-1">Social Media</h4>
                    <a href="https://www.facebook.com/search/top/?q=Muzari%20exports" target="_blank" rel="noopener noreferrer" className="font-heritage text-lg font-bold text-green-950 italic hover:underline decoration-green-950/30">
                      Muzari Exports (Facebook)
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-green-950/5 p-8 border border-white/20">
                <p className="text-xs leading-relaxed text-green-950/70 italic font-heritage">
                  The fastest way to reach our export team is via WhatsApp. We typically respond within an hour for volume inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Framed Inquiry Form */}
          <div className="relative h-auto lg:h-full overflow-hidden rounded-[2.5rem] bg-green-50 lg:w-[60%] px-6 py-12 sm:px-12 sm:py-16 flex items-center shadow-inner">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="h-full w-full bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>

            <div className="relative z-10 w-full">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="h-20 w-20 bg-green-950 rounded-full flex items-center justify-center mb-6 text-[#82E076]">
                    <MessageSquare className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-heritage font-bold text-green-950 mb-4">Inquiry Received</h3>
                  <p className="text-green-800/60 max-w-sm">
                    Thank you for reaching out. Our export specialists will review your requirements and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-sm font-black uppercase tracking-widest text-green-950 hover:text-[#82E076] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="grid gap-8" onSubmit={handleSubmit}>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-[10px] font-black uppercase tracking-widest text-green-950/40 px-2 cursor-pointer">Full Name</label>
                      <input 
                        id="fullName"
                        name="fullName"
                        type="text" 
                        required
                        placeholder="John Doe" 
                        className="w-full h-14 rounded-2xl border border-green-100 bg-white px-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-[#82E076]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-green-950/40 px-2 cursor-pointer">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        placeholder="john@company.com" 
                        className="w-full h-14 rounded-2xl border border-green-100 bg-white px-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-[#82E076]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="text-[10px] font-black uppercase tracking-widest text-green-950/40 px-2 cursor-pointer">Inquiry Type</label>
                    <div className="relative">
                      <select 
                        id="inquiryType"
                        name="inquiryType"
                        required
                        className="w-full h-14 rounded-2xl border border-green-100 bg-white px-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-[#82E076] appearance-none"
                      >
                        <option value="">Select inquiry type...</option>
                        <option value="export">Export Volume Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="general">General Question</option>
                      </select>
                      <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-green-950/20">↓</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-green-950/40 px-2 cursor-pointer">Your Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your requirements..." 
                      className="w-full rounded-2xl border border-green-100 bg-white p-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-[#82E076] resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="h-16 w-full rounded-2xl bg-green-950 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-green-900 hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
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
