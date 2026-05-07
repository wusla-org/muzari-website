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

      <section className="pt-40 pb-24">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <div className="grid gap-20 lg:grid-cols-[1fr_1.5fr]">
            {/* Left: Info */}
            <div className="space-y-12">
              <div>
                <Badge className="mb-6 rounded-full border border-green-100 bg-green-50 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-green-700">
                  Get in Touch
                </Badge>
                <h1 className="font-serif text-6xl font-medium leading-[1.1] text-green-950 md:text-7xl tracking-tight">
                  Start Your <br />
                  <span className="italic font-light text-amber-500">Inquiry.</span>
                </h1>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-950 mb-1">Export Hub</h4>
                    <p className="text-green-800/70 leading-relaxed">
                      Kerala, India <br />
                      Muzari Heritage Estates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-950 mb-1">Email Us</h4>
                    <a href="mailto:farm@muzariexports.com" className="text-green-800/70 transition-colors hover:text-amber-600">
                      farm@muzariexports.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-950 mb-1">WhatsApp</h4>
                    <a href={whatsappHref} className="text-green-800/70 transition-colors hover:text-amber-600">
                      Message Our Export Team
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-green-950 p-8 text-white">
                <MessageSquare className="mb-4 h-8 w-8 text-amber-400" />
                <h4 className="mb-2 font-serif text-2xl font-medium">Quick Quote</h4>
                <p className="mb-6 text-sm text-green-100/60 leading-relaxed">
                  The fastest way to reach our export team is via WhatsApp. We typically respond within an hour for volume inquiries.
                </p>
                <a
                  href={whatsappHref}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-amber-400 px-8 text-xs font-black uppercase tracking-widest text-green-950 transition-all hover:bg-amber-300 hover:scale-105"
                >
                  Message Now
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-[3rem] border border-green-50 bg-green-50/30 p-8 md:p-16">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="h-20 w-20 bg-green-900 rounded-full flex items-center justify-center mb-6">
                    <MessageSquare className="h-10 w-10 text-amber-400" />
                  </div>
                  <h3 className="text-3xl font-serif text-green-950 mb-4">Inquiry Received</h3>
                  <p className="text-green-800/60 max-w-sm">
                    Thank you for reaching out. Our export specialists will review your requirements and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-sm font-black uppercase tracking-widest text-green-900 hover:text-amber-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="grid gap-8" onSubmit={handleSubmit}>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-[10px] font-black uppercase tracking-widest text-green-900/40 px-2 cursor-pointer">Full Name</label>
                      <input 
                        id="fullName"
                        name="fullName"
                        type="text" 
                        required
                        placeholder="John Doe" 
                        className="w-full h-14 rounded-2xl border-none bg-white px-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-green-900/40 px-2 cursor-pointer">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        placeholder="john@company.com" 
                        className="w-full h-14 rounded-2xl border-none bg-white px-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="text-[10px] font-black uppercase tracking-widest text-green-900/40 px-2 cursor-pointer">Inquiry Type</label>
                    <div className="relative">
                      <select 
                        id="inquiryType"
                        name="inquiryType"
                        required
                        className="w-full h-14 rounded-2xl border-none bg-white px-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-amber-400 appearance-none"
                      >
                        <option value="">Select inquiry type...</option>
                        <option value="export">Export Volume Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="general">General Question</option>
                      </select>
                      <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-green-900/20">
                        ↓
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-green-900/40 px-2 cursor-pointer">Your Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your requirements..." 
                      className="w-full rounded-2xl border-none bg-white p-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-amber-400 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="h-16 w-full rounded-2xl bg-green-900 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-green-800 hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
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
