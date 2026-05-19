import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { aboutPageContent, missionVision, getWhatsAppHref } from "@/lib/site-data";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Muzari Farms | 30-Year Agricultural Legacy",
  description:
    "Discover the 30-year agricultural heritage of Muzari Farms. We are cultivators and exporters of premium Indian produce, dedicated to quality and reliability.",
};

export default function AboutPage() {
  const whatsappHref = getWhatsAppHref();

  return (
    <main className="min-h-screen bg-white text-green-950">
      <SiteHeader />

      {/* "Smart" Architectural About Hero */}
      <section className="relative w-full pt-28 bg-white pb-6">
        <div className="mx-auto w-[min(1440px,calc(100%-2rem))]">
          <div className="relative overflow-hidden rounded-[3rem] bg-[#062016] p-12 md:p-24 text-white shadow-2xl flex flex-col justify-center min-h-[500px] lg:min-h-[600px] group">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-15">
              <Image
                src="/hero_heritage.png" 
                alt="Muzari Heritage Fields"
                fill
                className="object-cover transition-transform duration-[20s] group-hover:scale-105 brightness-75"
                priority
              />
            </div>

            {/* Precision Grid Detail */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute left-10 top-0 h-full w-px bg-white/10" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
            </div>

            <div className="relative z-10 max-w-4xl space-y-8">
              <ScrollReveal>
                <span className="inline-block rounded-full bg-[#82E076]/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-[#82E076] border border-[#82E076]/20">
                  {aboutPageContent.eyebrow}
                </span>
                <h1 className="mt-6 font-heritage text-4xl font-bold leading-[1.1] text-white md:text-7xl tracking-tighter">
                  {aboutPageContent.title}
                </h1>
                <div className="h-1.5 w-24 bg-[#82E076] rounded-full" />
                <p className="max-w-2xl text-xl leading-relaxed text-green-100/80 font-medium italic">
                  {aboutPageContent.intro}
                </p>
                {/* Heritage Established Badge */}
                <div className="inline-flex items-center gap-3 pt-4">
                  <span className="h-2 w-2 rounded-full bg-[#82E076] animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Heritage Established Since 1931</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Strategy: Mission & Vision */}
      <section className="py-32 bg-white">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-green-950/5 bg-[#82E076]/5 p-12 transition-all hover:bg-[#82E076]/10">
              {/* Precision Numbering */}
              <div className="absolute right-12 top-12 text-sm font-black tracking-widest text-green-950/10">01</div>
              
              <div className="relative z-10">
                <div className="mb-10 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-green-950" />
                  <p className="font-label text-[10px] font-black uppercase tracking-[0.6em] text-green-950/50">Mission</p>
                </div>
                
                <h3 className="mb-8 font-heritage text-3xl font-bold leading-snug text-green-950 md:text-4xl italic tracking-tight">
                  {missionVision.mission.text}
                </h3>
                
                <div className="h-px w-full bg-green-950/10" />
                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-green-950/40">Core Commitment</p>
              </div>
              
              {/* Architectural Detail */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#82E076] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
            </div>

            {/* Vision Card */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-green-950/5 bg-green-950 p-12 transition-all hover:translate-y-[-4px] shadow-2xl shadow-green-950/10">
              {/* Precision Numbering */}
              <div className="absolute right-12 top-12 text-sm font-black tracking-widest text-white/10">02</div>
              
              <div className="relative z-10">
                <div className="mb-10 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#82E076]" />
                  <p className="font-label text-[10px] font-black uppercase tracking-[0.6em] text-white/50">Vision</p>
                </div>
                
                <h3 className="mb-8 font-heritage text-3xl font-bold leading-snug text-white md:text-4xl italic tracking-tight">
                  {missionVision.vision.text}
                </h3>
                
                <div className="h-px w-full bg-white/10" />
                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-white/40">Global Ambition</p>
              </div>

              {/* Architectural Detail */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#82E076] opacity-20 blur-3xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="bg-white py-32">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <div className="grid gap-24 lg:grid-cols-2 lg:items-start">
            <div className="space-y-20">
              {aboutPageContent.sections.map((section, i) => (
                <ScrollReveal key={section.heading} delay={i * 0.2}>
                  <div>
                    <h2 className="mb-6 font-heritage text-4xl font-bold text-green-900 tracking-tight">
                      {section.heading}
                    </h2>
                    <p className="max-w-2xl text-lg leading-relaxed text-green-800/80">{section.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5}>
              <div className="sticky top-32 rounded-[3rem] bg-green-50 p-10 shadow-2xl shadow-green-950/5 ring-1 ring-green-100 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#82E076]/20 blur-3xl" />
                
                <p className="relative z-10 mb-6 font-label text-xs font-black uppercase tracking-[0.3em] text-green-700">
                  Why Choose Us
                </p>
                <h2 className="relative z-10 mb-8 font-heritage text-3xl font-bold text-green-950 leading-tight">
                  The excellence behind <br /> every global shipment.
                </h2>

                {/* Non-Alcoholic Guarantee Badge */}
                <div className="relative z-10 mb-10 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-green-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#82E076]/10 text-[#82E076]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-950/40">Our Guarantee</p>
                    <p className="font-heritage text-sm font-bold text-green-950 italic">100% Non-Alcoholic & Pure Harvest</p>
                  </div>
                </div>
                
                <div className="relative z-10 space-y-4">
                  {aboutPageContent.values.map((value) => (
                    <div key={value} className="flex items-center gap-4 rounded-2xl bg-white/80 backdrop-blur-sm p-5 text-green-900 shadow-sm transition-all hover:translate-x-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#82E076]" />
                      <span className="text-sm font-bold uppercase tracking-wider">{value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="relative z-10 mt-12 border-t border-green-200 pt-10">
                  <Link
                    href={whatsappHref}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-16 w-full rounded-2xl bg-[#062016] px-8 text-sm font-black uppercase tracking-widest !text-white hover:bg-green-900 hover:scale-[1.02] transition-all"
                    )}
                  >
                    Start Enquiry
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
