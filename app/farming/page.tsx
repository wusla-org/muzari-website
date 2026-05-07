"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { processSteps } from "@/lib/site-data";

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
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 via-green-950/20 to-white" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="mx-auto max-w-4xl px-4">
            <Badge className="mb-8 rounded-full border border-white/30 bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-white backdrop-blur-md">
              Our Legacy
            </Badge>
            <h1 className="font-serif text-6xl font-medium leading-[0.9] text-white md:text-8xl lg:text-9xl">
              Grown by <br />
              <span className="italic font-light text-amber-400">Generations.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">
                30 Years of Soil
              </p>
              <h2 className="mb-8 font-serif text-5xl font-medium leading-tight text-green-950 md:text-6xl">
                More than Exporters, <br />
                We are <span className="italic text-green-800">Cultivators.</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-green-800/80">
                <p>
                  Our journey didn&apos;t start in a boardroom or a warehouse. It started in the red soil of our own fields, over three decades ago. Before we ever shipped a single crate across borders, we were planting, nurturing, and harvesting with our own hands.
                </p>
                <p>
                  This heritage defines Muzari. We understand the biology of a healthy banana bunch and the exact soil conditions needed for robust tapioca. This deep-rooted knowledge allows us to source with an expert eye that traditional brokers simply don&apos;t have.
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-green-50 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <div className="space-y-8">
                  <div className="text-8xl font-serif text-amber-500/20">“</div>
                  <p className="font-serif text-3xl italic text-green-900">
                    We grow what we export, ensuring every shipment carries the standard of our own heritage.
                  </p>
                  <div className="h-px w-24 bg-amber-500 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-green-950 py-32 text-white">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <div className="mb-24 text-center">
             <Badge className="mb-6 rounded-full border border-green-800 bg-green-900/50 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-green-300/80">
              The Journey
            </Badge>
            <h2 className="font-serif text-5xl font-medium leading-[1.1] md:text-7xl tracking-tight">
              From Soil to <span className="italic text-amber-400">Global Port.</span>
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={i} className="group relative">
                <div className="mb-8 text-6xl font-serif font-black text-white/5 transition-colors group-hover:text-amber-400/10">
                  0{i + 1}
                </div>
                <h3 className="mb-4 font-serif text-2xl font-medium text-white transition-colors group-hover:text-amber-400">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-green-100/60 transition-colors group-hover:text-green-100">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Values */}
      <section className="py-32">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 font-serif text-4xl font-medium text-green-950 md:text-5xl">
              Committed to Sustainable <br />
              Agriculture.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Eco-Harvesting", text: "Traditional methods that respect the land." },
                { title: "Fair Wages", text: "Supporting our network of 35+ farmers." },
                { title: "Zero Waste", text: "Optimizing the entire plant lifecycle." },
              ].map((value) => (
                <div key={value.title} className="rounded-3xl border border-green-50 p-8 transition-all hover:bg-green-50">
                  <h4 className="mb-3 font-bold text-green-900">{value.title}</h4>
                  <p className="text-sm text-green-700/70">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
