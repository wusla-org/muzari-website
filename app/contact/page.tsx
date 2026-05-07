"use client";

import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getWhatsAppHref } from "@/lib/site-data";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const whatsappHref = getWhatsAppHref();

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
                    <a href="mailto:farm@muzari.com" className="text-green-800/70 transition-colors hover:text-amber-600">
                      farm@muzari.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-950 mb-1">Direct Call</h4>
                    <a href={whatsappHref} className="text-green-800/70 transition-colors hover:text-amber-600">
                      WhatsApp Inquiry Available
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
              <form className="grid gap-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-green-900/40 px-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full h-14 rounded-2xl border-none bg-white px-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-green-900/40 px-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full h-14 rounded-2xl border-none bg-white px-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-green-900/40 px-2">Inquiry Type</label>
                  <select className="w-full h-14 rounded-2xl border-none bg-white px-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-amber-400 appearance-none">
                    <option>Export Volume Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-green-900/40 px-2">Your Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your requirements..." 
                    className="w-full rounded-2xl border-none bg-white p-6 text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-amber-400 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="h-16 w-full rounded-2xl bg-green-900 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-green-800 hover:shadow-xl active:scale-[0.98]"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
