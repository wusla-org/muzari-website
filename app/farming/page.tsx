import type { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { processSteps } from "@/lib/site-data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getAdminContent } from "@/lib/get-site-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Farming Heritage | Muzari Exports — 95 Years of Kerala Agriculture",
  description:
    "Discover the farming heritage behind Muzari Exports. For over 95 years, our family has cultivated bananas, tapioca, and vegetables in Kerala's fertile soil — from seed to global shipment.",
  alternates: { canonical: "/farming" },
};

export default async function FarmingPage() {
  const adminContent = await getAdminContent();
  const heroAdmin = (adminContent?.heroes as Record<string, Record<string, string>> | undefined)?.farming ?? {};
  const eyebrow = heroAdmin.eyebrow ?? "Our Legacy";
  const headline = heroAdmin.headline ?? "Grown by Generations,";
  const headlineAccent = heroAdmin.headlineAccent ?? "Harvested for the World.";
  const body = heroAdmin.body ?? "Our heritage is rooted in the soil. We cultivate our own fields to ensure every export meets our generational standard of quality — from the first seed to the final port clearance.";
  const origin = heroAdmin.origin ?? "Red Soil of Kerala, India";

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero — cream/olive/Playfair design */}
      <section className="w-full bg-[#faf8f3] pt-24 lg:pt-28 px-4 sm:px-6 pb-0">
        <div className="mx-auto max-w-[860px] overflow-hidden rounded-[20px] border border-[#e4dfd5] bg-[#faf8f3]">
          <div className="flex flex-col items-center px-8 py-16 text-center sm:px-16 sm:py-20">

            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-[30px] bg-[#7a6b4f]" />
              <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#7a6b4f]">{eyebrow}</span>
              <div className="h-px w-[30px] bg-[#7a6b4f]" />
            </div>

            {/* Headlines */}
            <h1 className="font-playfair text-[2.6rem] font-bold leading-[1.0] text-[#1a1a14] sm:text-[3.8rem]">
              {headline}
            </h1>
            <p className="mb-6 font-playfair text-[2.6rem] font-bold italic leading-[1.1] text-[#5a8a3c] sm:text-[3.8rem]">
              {headlineAccent}
            </p>

            {/* Rule */}
            <div className="mb-7 h-[2px] w-[60px] bg-[#5a8a3c]" />

            {/* Body */}
            <p className="mb-10 max-w-[520px] font-sans text-[15px] font-light italic leading-[1.9] text-[#5a5548]">
              {body}
            </p>

            {/* Stats */}
            <div className="flex w-full max-w-[500px]" style={{ gap: "2px" }}>
              {[
                { num: "1931", lbl: "Est. Year" },
                { num: "95+", lbl: "Years Farming" },
                { num: "35+", lbl: "Farm Partners" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex-1 border border-[#e4dfd5] bg-white px-3 py-5 text-center",
                    i === 0 && "rounded-l-[10px]",
                    i === 2 && "rounded-r-[10px]"
                  )}
                >
                  <div className="mb-1 font-playfair text-[1.8rem] font-bold leading-none text-[#1a1a14]">{stat.num}</div>
                  <div className="mt-1 font-sans text-[10px] uppercase tracking-[1.5px] text-[#7a6b4f]">{stat.lbl}</div>
                </div>
              ))}
            </div>

            {/* Origin */}
            <div className="mb-4 mt-6 flex items-center gap-2 font-sans text-[11px] uppercase tracking-[2px] text-[#b0a898]">
              <div className="h-px w-5 bg-[#d8d2c8]" />
              {origin}
              <div className="h-px w-5 bg-[#d8d2c8]" />
            </div>

          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 overflow-hidden">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div>
                <p className="mb-6 font-label text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">
                  95 Years of Soil
                </p>
                <h2 className="mb-8 font-heritage text-5xl font-bold leading-tight text-green-950 md:text-6xl tracking-tight">
                  More than Exporters, <br />
                  We are <span className="italic text-green-800">Cultivators.</span>
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-green-800/80">
                  <p>
                    Our journey didn&apos;t start in a boardroom or a warehouse. It started in the red soil of our own fields, over nine decades ago. Before we ever shipped a single crate across borders, we were planting, nurturing, and harvesting with our own hands.
                  </p>
                  <p className="italic font-heritage text-green-900/60">
                    This heritage defines Muzari. We understand the biology of a healthy banana bunch and the exact soil conditions needed for robust tapioca.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="relative aspect-square overflow-hidden rounded-[4rem] bg-green-50 shadow-2xl shadow-green-950/10 ring-1 ring-green-100/50">
                <Image 
                  src="/heritage_story.png"
                  alt="Generational farming"
                  fill
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <div className="space-y-8">
                    <div className="text-9xl font-heritage text-amber-500/20 leading-none">“</div>
                    <p className="font-heritage text-3xl font-bold italic text-green-950 leading-snug tracking-tight">
                      We grow what we export, ensuring every shipment carries the standard of our own heritage.
                    </p>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-green-950 py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.1),transparent)]" />
        </div>
        
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4 relative z-10">
          <div className="mb-32 text-center">
            <ScrollReveal>
              <Badge className="mb-6 rounded-full border border-green-800 bg-green-900/50 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-green-300/80">
                The Journey
              </Badge>
              <h2 className="font-heritage text-5xl font-bold leading-[1.1] md:text-8xl tracking-tight">
                From Soil to <br />
                <span className="italic text-amber-400">Global Port.</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Mobile Swiper and Desktop Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-8 pb-12 -mx-4 px-4 md:grid md:overflow-visible md:gap-16 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={i} className="shrink-0 w-[80vw] snap-center md:w-auto md:shrink">
                <ScrollReveal delay={i * 0.15}>
                  <div className="group relative">
                    <div className="mb-8 font-heritage text-8xl font-black text-white/10 transition-all duration-500 group-hover:text-amber-400 group-hover:scale-110 group-hover:translate-x-2 select-none pointer-events-none inline-block origin-left">
                      0{i + 1}
                    </div>
                    <h3 className="mb-4 font-heritage text-3xl font-bold text-white transition-colors group-hover:text-amber-400">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-green-100/60 transition-colors group-hover:text-green-50">
                      {step.text}
                    </p>
                    <div className="mt-8 h-1 w-0 bg-amber-400 transition-all duration-700 group-hover:w-full" />
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Swipe Indicator Dots (Mobile Only) */}
          <div className="mt-4 flex items-center justify-center gap-1.5 md:hidden">
            {processSteps.map((_, i) => (
              <div 
                key={i} 
                className="h-1 rounded-full bg-white/20 w-4 transition-all duration-300 first:bg-amber-400" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Values */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4 text-center">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl">
              <p className="mb-6 font-label text-[10px] font-black uppercase tracking-[0.4em] text-green-800/40">
                Our Commitment
              </p>
              <h2 className="mb-20 font-heritage text-5xl font-bold text-green-950 md:text-7xl tracking-tight leading-[1.1]">
                Committed to <br />
                Sustainable <span className="italic text-green-800">Agriculture.</span>
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { title: "Eco-Harvesting", text: "Traditional methods that respect the land and its cycles." },
                  { title: "Fair Wages", text: "Supporting our dedicated network of 35+ local farmers." },
                  { title: "Zero Waste", text: "Optimizing the entire plant lifecycle for maximum sustainability." },
                ].map((value, i) => (
                  <ScrollReveal key={value.title} delay={i * 0.2}>
                    <div className="group rounded-[2.5rem] border border-green-50 bg-white p-10 shadow-sm transition-all hover:bg-green-50 hover:shadow-xl hover:shadow-green-950/5">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-900 text-amber-400 transition-all group-hover:scale-110 group-hover:rotate-3">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="mb-4 font-label text-sm font-black uppercase tracking-wider text-green-950">{value.title}</h4>
                      <p className="text-sm leading-relaxed text-green-800/60">{value.text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
