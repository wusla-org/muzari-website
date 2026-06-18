import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { aboutPageContent, missionVision, getWhatsAppHref } from "@/lib/site-data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getAdminContent } from "@/lib/get-site-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Muzari Exports | 95-Year Agricultural Legacy from Kerala, India",
  description:
    "Discover the 95-year agricultural heritage of Muzari Exports. We are cultivators and exporters of premium Indian produce — bananas, tapioca and fresh vegetables — from Kerala, India to global markets.",
  alternates: { canonical: "/about" },
};

// Live domain is muzari.in for now — switch to muzariexports.com once the old domain expires.
const BASE_URL = "https://muzari.in";
// const BASE_URL = "https://www.muzariexports.com";

export default async function AboutPage() {
  const adminContent = await getAdminContent();
  const heroAdmin = (adminContent?.heroes as Record<string, Record<string, string>> | undefined)?.about ?? {};
  const eyebrow = heroAdmin.eyebrow ?? "About Muzari";
  const headline = heroAdmin.headline ?? "Indian Exporter of Fresh";
  const headlineAccent = heroAdmin.headlineAccent ?? "Vegetables, Fruits & Spices";
  const body = heroAdmin.body ?? "Our journey began over nine decades ago, deeply rooted in India's rich agricultural heritage. What started with the cultivation of bananas, paddy, and a variety of vegetables has evolved into a trusted agricultural export company, delivering premium Indian produce to international markets.";
  const origin = heroAdmin.origin ?? "Heritage Established Since 1931";

  const whatsappHref = getWhatsAppHref();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-green-950 animate-in fade-in duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />

      {/* Hero — dark green card */}
      <section className="w-full bg-white pt-24 lg:pt-28 px-4 sm:px-6 pb-0">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-[#062016]">
          <div className="px-10 py-16 sm:px-16 sm:py-20">

            {/* Pill Badge */}
            <div className="mb-8 inline-flex items-center rounded-full border border-white/25 px-4 py-1.5">
              <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-white/70">{eyebrow}</span>
            </div>

            {/* H1 — unified with underline accent on second line */}
            <h1 className="mb-6 max-w-[780px] font-nunito font-black text-[2.8rem] leading-[1.05] text-white sm:text-[4.5rem]">
              <span className="block">{headline}</span>
              <span className="block underline decoration-[#82E076] decoration-[3px] underline-offset-[8px]">{headlineAccent}</span>
            </h1>

            {/* Body */}
            <p className="mb-10 max-w-[580px] font-sans text-[15px] italic leading-[1.9] text-white/60">
              {body}
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[2.5px] text-white/50">
              <div className="h-2 w-2 rounded-full bg-[#82E076]" />
              {origin}
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
              <div className="lg:sticky lg:top-32 rounded-[3rem] bg-green-50 p-10 shadow-2xl shadow-green-950/5 ring-1 ring-green-100 overflow-hidden">
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
                    <p className="font-heritage text-sm font-bold text-green-950 italic">Certified Export-Grade Quality</p>
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
