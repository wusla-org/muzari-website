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

      {/* Hero Section - Cinematic */}
      <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center pt-20">
        <Image
          src="/hero_heritage.png" 
          alt="Muzari Heritage Fields"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-950/40 to-white" />
        
        <div className="relative z-10 mx-auto w-[min(1280px,calc(100%-2rem))] px-4 text-center text-white">
          <ScrollReveal>
            <p className="mb-6 font-label text-[10px] font-black uppercase tracking-[0.4em] text-amber-400">
              {aboutPageContent.eyebrow}
            </p>
            <h1 className="mx-auto mb-8 max-w-5xl font-heritage text-6xl font-bold leading-[1.1] md:text-8xl tracking-tight">
              {aboutPageContent.title}
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-green-50 italic font-heritage opacity-90">
              {aboutPageContent.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision - Refined */}
      <section className="bg-white py-32 border-b border-green-50 overflow-hidden">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <div className="grid gap-20 md:grid-cols-2 md:gap-32">
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -left-8 -top-12 pointer-events-none select-none text-[12rem] font-heritage text-green-50/80 leading-none">“</div>
                <div className="relative z-10">
                  <p className="mb-6 font-label text-[10px] font-black uppercase tracking-[0.4em] text-amber-600/80">
                    {missionVision.mission.title}
                  </p>
                  <h3 className="font-heritage text-4xl font-bold leading-[1.2] text-green-950 md:text-5xl italic tracking-tight">
                    {missionVision.mission.text}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="relative">
                <div className="absolute -left-8 -top-12 pointer-events-none select-none text-[12rem] font-heritage text-green-50/80 leading-none">“</div>
                <div className="relative z-10">
                  <p className="mb-6 font-label text-[10px] font-black uppercase tracking-[0.4em] text-amber-600/80">
                    {missionVision.vision.title}
                  </p>
                  <h3 className="font-heritage text-4xl font-bold leading-[1.2] text-green-950 md:text-5xl italic tracking-tight">
                    {missionVision.vision.text}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
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
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
                
                <p className="relative z-10 mb-6 font-label text-xs font-black uppercase tracking-[0.3em] text-amber-600">
                  Core Values
                </p>
                <h2 className="relative z-10 mb-8 font-heritage text-3xl font-bold text-green-950 leading-tight">
                  The principles behind our <br /> sourcing excellence.
                </h2>
                
                <div className="relative z-10 space-y-4">
                  {aboutPageContent.values.map((value) => (
                    <div key={value} className="flex items-center gap-4 rounded-2xl bg-white/80 backdrop-blur-sm p-5 text-green-900 shadow-sm transition-all hover:translate-x-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                      <span className="text-sm font-bold uppercase tracking-wider">{value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="relative z-10 mt-12 border-t border-green-200 pt-10">
                  <Link
                    href={whatsappHref}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-16 w-full rounded-2xl bg-green-900 px-8 text-sm font-black uppercase tracking-widest text-white hover:bg-green-800 hover:scale-[1.02] transition-all"
                    )}
                  >
                    Start an Inquiry
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
