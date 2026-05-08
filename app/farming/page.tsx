"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { processSteps } from "@/lib/site-data";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function FarmingPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/farming_hero.png"
          alt="Muzari Heritage Farms"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-green-950/20 to-white" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="mx-auto max-w-5xl px-4">
            <ScrollReveal>
              <Badge className="mb-8 rounded-full border border-white/30 bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-white backdrop-blur-md">
                Our Legacy
              </Badge>
              <h1 className="font-heritage text-6xl font-bold leading-[0.9] text-white md:text-8xl lg:text-9xl tracking-tighter">
                Grown by <br />
                <span className="italic font-light text-amber-400">Generations.</span>
              </h1>
            </ScrollReveal>
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
                  30 Years of Soil
                </p>
                <h2 className="mb-8 font-heritage text-5xl font-bold leading-tight text-green-950 md:text-6xl tracking-tight">
                  More than Exporters, <br />
                  We are <span className="italic text-green-800">Cultivators.</span>
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-green-800/80">
                  <p>
                    Our journey didn&apos;t start in a boardroom or a warehouse. It started in the red soil of our own fields, over three decades ago. Before we ever shipped a single crate across borders, we were planting, nurturing, and harvesting with our own hands.
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

          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="group relative">
                  <div className="mb-8 font-heritage text-8xl font-black text-white/5 transition-all duration-700 group-hover:text-amber-400/10 group-hover:translate-x-4">
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
