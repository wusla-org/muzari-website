"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import ProductGrid from "@/components/ProductGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  aboutPreview,
  getWhatsAppHref,
  missionVision,
  whyChooseUs,
  products,
} from "@/lib/site-data";
import { Users, Leaf, Briefcase, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  const whatsappHref = getWhatsAppHref();

  return (
    <main className="min-h-screen bg-white text-green-950 selection:bg-green-900 selection:text-white">
      <SiteHeader />

      {/* "Smart" Architectural Homepage Hero */}
      <section className="relative h-screen min-h-[750px] w-full overflow-hidden bg-white p-4 pt-32 lg:p-6 lg:pt-32">
        <h1 className="sr-only">Muzari Farms: Premium Agricultural Produce Exporter from India</h1>
        
        <div className="mx-auto flex h-full w-full flex-col gap-4 lg:flex-row lg:gap-6">
          
          {/* Left Panel: Solid Lime Brand Block */}
          <div className="relative flex h-full flex-col justify-center rounded-[2.5rem] bg-[#82E076] px-8 py-16 lg:w-[50%] lg:px-20">
            {/* Precision Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute left-1/2 top-0 h-full w-px bg-white/40" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-white/40" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <Badge className="mb-8 border-none bg-green-950 px-6 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-white">
                Premium Export Quality
              </Badge>

              <h2 className="mb-8 font-heritage text-[32px] font-bold leading-[1.2] tracking-tight text-green-950">
                We export premium-quality bananas, <br />
                tapioca, and fresh vegetables.
              </h2>

              {/* Non-Alcoholic Guarantee Badge - High Visibility */}
              <div className="relative z-10 mb-8 inline-flex items-center gap-4 rounded-2xl bg-white/40 backdrop-blur-md p-4 ring-1 ring-green-950/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-950 text-[#82E076]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-green-950/40">Our Guarantee</p>
                  <p className="font-heritage text-sm font-bold text-green-950 italic">100% Non-Alcoholic & Pure Harvest</p>
                </div>
              </div>

              <div className="mb-10 h-1.5 w-24 bg-green-950 rounded-full" />

              <p className="mb-12 max-w-lg text-lg font-medium leading-relaxed text-green-950/70 italic">
                Muzari exports combines modern farming and global exporting &mdash; 
                from India to our global customers base. Every shipment is delivered with trust, care, and a commitment to excellence.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsappHref}
                  className={cn(
                    "inline-flex items-center justify-center h-14 rounded-full bg-green-950 px-10 text-[11px] font-black uppercase tracking-widest !text-white transition-all hover:scale-105 shadow-xl shadow-green-950/20"
                  )}
                >
                  Order Now
                </Link>
                <Link
                  href="/products"
                  className={cn(
                    "inline-flex items-center justify-center h-14 rounded-full border-2 border-green-950/20 bg-transparent px-10 text-[11px] font-black uppercase tracking-widest text-green-950 transition-all hover:bg-green-950 hover:!text-white"
                  )}
                >
                  Our Harvest
                </Link>
              </div>
            </div>
          </div>

          {/* Right Panel: Framed Cinematic Visual & Massive Brand Hub */}
          <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-green-950 lg:w-[50%] group">
            <Image
              src="/hero_luxury_crate.png"
              alt="Muzari Farms premium produce in luxury export crate"
              fill
              className="object-cover transition-transform duration-[20s] group-hover:scale-105 brightness-[0.7]"
              priority
            />
            {/* The "Luxe Depth" Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-green-950/40" />
            
            {/* Massive Brand Hub - Centered & Powerful */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative flex h-full w-full flex-col items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 transition-transform duration-700 group-hover:scale-110">
                  <Image 
                    src="/logo/logo-light.png" 
                    alt="Muzari Brand Hub" 
                    fill 
                    className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" 
                  />
                </div>
              </div>
            </div>

            {/* Bottom Info Strip */}
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center justify-between border-t border-white/10 pt-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                <div className="flex gap-10">
                  <span className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-amber-500" />
                    PREMIUM EXPORT
                  </span>
                  <span>EST. 1995</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline">KERALA, INDIA</span>
                  <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-950 py-16 border-y border-white/5">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
            {[
              { icon: Users, value: "30+", label: "Local Producers" },
              { icon: Leaf, value: "10+", label: "Partner Farmers" },
              { icon: Briefcase, value: "100%", label: "Farm Direct Sourcing" },
              { icon: Award, value: "100%", label: "Quality Assured" },
            ].map((stat, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-row items-center justify-center gap-6 px-4 transition-all duration-500 hover:opacity-80",
                  i !== 0 && "md:border-l md:border-white/10"
                )}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#82E076]/10 text-[#82E076]">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="font-manrope text-3xl font-bold tracking-tighter text-white">
                    {stat.value}
                  </p>
                  <p className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-green-300/40">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-32 border-b border-green-50">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <div className="grid gap-20 md:grid-cols-2 md:gap-32">
            <ScrollReveal>
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

      <section className="bg-green-50 py-32">
        <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-6 font-label text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">
              {aboutPreview.eyebrow}
            </p>
            <h2 className="mb-8 max-w-2xl font-heritage text-5xl font-bold leading-[1.1] text-green-900 md:text-6xl tracking-tight">
              {aboutPreview.title}
            </h2>
            <p className="mb-6 max-w-2xl text-lg font-medium leading-relaxed text-green-800 italic opacity-80">
              {aboutPreview.intro}
            </p>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-green-700/90">
              {aboutPreview.body}
            </p>
            <div className="space-y-4">
              {aboutPreview.points.map((point) => (
                <div key={point} className="flex items-center gap-4 text-sm font-bold text-green-900 group">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500 transition-transform group-hover:scale-150" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-green-950 p-8 text-white shadow-xl">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-green-700/40 blur-3xl" />
            <div className="relative">
              <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
                Why Muzari
              </p>
              <h3 className="mb-5 font-heritage text-3xl font-bold leading-tight">
                Close to the farm, prepared for export, committed to repeat trust.
              </h3>
              <p className="mb-8 text-sm leading-7 text-green-100/90">
                We focus on dependable supply relationships, careful harvesting discipline, and
                shipment-ready handling that supports long-term global buyers rather than one-off trades.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-300 transition-colors hover:text-white"
              >
                Learn more about us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="produce" className="bg-white py-24">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              What We Export
            </p>
            <h2 className="mb-6 font-heritage text-4xl font-bold text-green-900 md:text-5xl tracking-tight">
              Our Fresh{" "}
              <span className="relative inline-block">
                Harvest
                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-amber-500" />
              </span>
            </h2>
            <p className="text-base leading-relaxed text-green-700 italic font-heritage opacity-80">
              We focus on cultivating the highest quality crops, ensuring that the natural taste
              and nutrition are preserved from the moment they are picked.
            </p>
          </div>

          <ProductGrid products={products} />

          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-green-800 transition-colors hover:text-amber-600"
            >
              Explore all product details
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="relative overflow-hidden bg-green-950 py-32 text-white">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <div className="mb-24 text-center">
            <Badge className="mb-6 rounded-full border border-green-800 bg-green-900/50 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-green-300/80">
              Our Principles
            </Badge>
            <h2 className="font-heritage text-5xl font-bold leading-[1.1] md:text-7xl tracking-tight">
              Setting the <span className="italic text-amber-400 font-light">Gold Standard</span> in <br />
              Agricultural Exports.
            </h2>
          </div>

          <div className="grid gap-x-16 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((point, index) => (
              <div
                key={point.title}
                className="group relative"
              >
                {/* Decorative Number */}
                <div className="absolute -left-6 -top-10 pointer-events-none select-none font-heritage text-[10rem] font-black text-white/[0.02] transition-all duration-700 group-hover:text-amber-400/[0.05] group-hover:-translate-y-4">
                  0{index + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="mb-8 h-px w-16 bg-amber-500/30 transition-all duration-700 group-hover:w-full group-hover:bg-amber-400" />
                  <h3 className="mb-4 font-heritage text-3xl font-bold leading-[1.2] text-white transition-all duration-500 group-hover:text-amber-400 md:text-4xl">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-green-200/60 transition-colors duration-500 group-hover:text-green-100/90">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-green-50 py-24">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="mx-auto max-w-3xl rounded-3xl border border-green-100 bg-white p-10 text-center shadow-lg md:p-16">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 ring-4 ring-green-50">
              <span className="text-2xl" aria-hidden="true">🌾</span>
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Ready to Import?
            </p>

            <h2 className="mb-6 font-heritage text-4xl font-bold text-green-900 md:text-5xl tracking-tight">
              Bring Our Harvest <br className="hidden md:block" />
              to You.
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-green-700">
              Ready to import premium, farm-fresh produce? Reach out to our agricultural
              export team directly. We are ready to fulfill your volume requirements.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={whatsappHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-14 rounded-full bg-green-900 px-10 text-base font-bold text-white shadow-md transition-all hover:bg-green-800 hover:shadow-lg"
                )}
              >
                Message via WhatsApp
              </Link>
              <Link
                href="mailto:farm@muzariexports.com"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-14 rounded-full border-2 border-green-200 px-10 text-base font-bold text-green-800 transition-all hover:border-green-400 hover:bg-green-50"
                )}
              >
                Email Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F59E0B] py-32 text-center relative overflow-hidden">
        {/* Subtle Luxury Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] relative z-10">
          <h2 className="mb-6 font-heritage text-4xl font-bold text-green-950 md:text-6xl tracking-tight">
            Ready to Source Premium <br /> Indian Produce?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-green-900 md:text-xl">
            Let&apos;s grow together. Reach out to our team for pricing, <br className="hidden md:block" />
            availability, and bulk enquiries.
          </p>
          <Link
            href={whatsappHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-16 rounded-full bg-green-950 px-12 text-lg font-bold !text-white shadow-2xl transition-all hover:bg-green-900 hover:scale-105"
            )}
          >
            Get in Touch <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
