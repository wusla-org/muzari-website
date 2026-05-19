"use client";

import { useState, useEffect } from "react";
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
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: missionVision.mission.title,
      text: missionVision.mission.text,
      badge: "Purpose",
      icon: "🎯"
    },
    {
      title: missionVision.vision.title,
      text: missionVision.vision.text,
      badge: "Future",
      icon: "👁️"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-green-950 selection:bg-green-900 selection:text-white">
      <SiteHeader />

      {/* "Smart" Architectural Homepage Hero */}
      <section className="relative h-auto lg:h-screen lg:min-h-[750px] w-full overflow-hidden bg-white p-4 pt-28 lg:p-6 lg:pt-32 pb-8 lg:pb-6">
        <h1 className="sr-only">Muzari Farms: Premium Agricultural Produce Exporter from India</h1>
        
        <div className="mx-auto flex h-auto lg:h-full w-full flex-col gap-4 lg:flex-row lg:gap-6">
          
          {/* Left Panel: Solid Dark Brand Block */}
          <div className="relative flex h-auto lg:h-full flex-col justify-center rounded-[2.5rem] bg-green-950 px-6 py-12 sm:px-12 sm:py-16 lg:w-[50%] lg:px-20 lg:py-16">
            {/* Precision Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute left-1/2 top-0 h-full w-px bg-white/20" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-white/20" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <Badge className="mb-8 border-none bg-[#82E076] px-6 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] !text-green-950">
                Premium Export Quality
              </Badge>

              <h2 className="mb-8 font-heritage text-[32px] sm:text-[40px] lg:text-[44px] font-bold leading-[1.2] tracking-tight !text-white">
                Where Indian Produce <br />
                Meets <span className="!text-[#82E076]">International Standards.</span>
              </h2>

              {/* Non-Alcoholic Guarantee Badge - High Visibility Glassmorphism */}
              <div className="relative z-10 mb-8 inline-flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-4 ring-1 ring-white/5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#82E076] text-green-950 shadow-lg shadow-[#82E076]/20">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest !text-white/40">Our Guarantee</p>
                  <p className="font-heritage text-sm font-bold !text-white italic">100% Pure & Premium Harvest</p>
                </div>
              </div>

              <div className="mb-10 h-1.5 w-24 bg-[#82E076] rounded-full" />

              <p className="mb-12 max-w-lg text-lg font-medium leading-relaxed !text-white/70 italic">
                Muzari combines 95 years of agricultural legacy with cutting-edge global logistics &mdash; 
                delivering the finest bananas, tapioca, and fresh vegetables from India's fertile soil directly to international markets with absolute trust.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsappHref}
                  className={cn(
                    "inline-flex items-center justify-center h-14 rounded-full bg-[#82E076] px-10 text-[11px] font-black uppercase tracking-widest !text-green-950 transition-all hover:scale-105 hover:bg-[#82E076]/90 shadow-xl shadow-[#82E076]/20"
                  )}
                >
                  Order Now
                </Link>
                <Link
                  href="/products"
                  className={cn(
                    "inline-flex items-center justify-center h-14 rounded-full border-2 border-white/20 bg-transparent px-10 text-[11px] font-black uppercase tracking-widest !text-white transition-all hover:bg-white hover:!text-green-950"
                  )}
                >
                  Our Harvest
                </Link>
              </div>
            </div>
          </div>

          {/* Right Panel: Framed Cinematic Visual & Massive Brand Hub */}
          <div className="relative h-[320px] sm:h-[400px] lg:h-full overflow-hidden rounded-[2.5rem] bg-green-950 lg:w-[50%] group">
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
                  <span>EST. 1931</span>
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
      <section className="bg-green-950 py-12 sm:py-16 border-y border-white/5">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
            {[
              { icon: Users, value: "30+", label: "Local Producers" },
              { icon: Leaf, value: "10+", label: "Partner Farmers" },
              { icon: Briefcase, value: "100%", label: "Farm Direct Sourcing" },
              { icon: Award, value: "100%", label: "Quality Assured" },
            ].map((stat, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-row items-center justify-start pl-3 sm:pl-0 sm:justify-center gap-3 sm:gap-6 transition-all duration-500 hover:opacity-80",
                  i !== 0 && "md:border-l md:border-white/10",
                  i % 2 !== 0 && "border-l border-white/5 sm:border-l-0"
                )}
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#82E076]/10 text-[#82E076]">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-left">
                  <p className="font-manrope text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                    {stat.value}
                  </p>
                  <p className="whitespace-normal sm:whitespace-nowrap text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-green-300/40 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
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

      {/* Mission & Vision Section - Centered Autoscrolling Card */}
      <section className="bg-white py-32 border-b border-green-50 relative overflow-hidden">
        <style>{`
          @keyframes progressLoad {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="mb-6 font-label text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">
              Core Principles
            </p>
            <h2 className="font-heritage text-4xl font-bold leading-tight text-green-950 md:text-5xl tracking-tight">
              Our Compass for <span className="italic text-green-800">Global Excellence.</span>
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-green-950 p-12 md:p-20 shadow-2xl shadow-green-950/20 text-white min-h-[380px] flex flex-col justify-between">
                
                {/* Visual grid overlay for premium architectural feel */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                  <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
                  <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
                </div>
                
                {/* Quotes background mark */}
                <div className="absolute -left-4 top-4 pointer-events-none select-none text-[20rem] font-heritage text-[#82E076]/5 leading-none">“</div>
                <div className="absolute -right-4 bottom-4 pointer-events-none select-none text-[20rem] font-heritage text-[#82E076]/5 leading-none">”</div>

                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="relative h-[220px] sm:h-[180px]">
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={cn(
                          "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out",
                          index === activeSlide
                            ? "flex opacity-100 translate-y-0 scale-100 pointer-events-auto z-10"
                            : "hidden opacity-0 translate-y-8 scale-95 pointer-events-none z-0"
                        )}
                      >
                        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] !text-[#82E076]">
                          <span>{slide.icon}</span>
                          <span>{slide.badge}</span>
                        </span>
                        <p className="mb-4 font-label text-[10px] font-black uppercase tracking-[0.4em] !text-white/40">
                          {slide.title}
                        </p>
                        <h3 className="font-heritage text-2xl font-bold leading-snug !text-white sm:text-3xl md:text-4xl italic tracking-tight text-center max-w-2xl px-2">
                          &ldquo;{slide.text}&rdquo;
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Indicators at the bottom */}
                <div className="relative z-10 mt-12 flex justify-center gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-500",
                        index === activeSlide
                          ? "w-8 bg-[#82E076]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Progress bar line at the very bottom edge of the card */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                  <div
                    key={activeSlide}
                    className="h-full bg-[#82E076] w-0"
                    style={{
                      animation: "progressLoad 5000ms linear forwards"
                    }}
                  />
                </div>

              </div>
            </ScrollReveal>
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
              Setting the <span className="italic text-amber-400 font-light">Gold Standard</span><span style={{ display: 'inline-block', width: '12px' }}></span>in <br />
              Agricultural Exports.
            </h2>
          </div>

          {/* Mobile Swiper (horizontal scroll with inertia) and Desktop Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-8 pb-12 -mx-4 px-4 sm:grid sm:overflow-visible sm:gap-x-16 sm:gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((point, index) => (
              <div
                key={point.title}
                className="group relative shrink-0 w-[85vw] snap-center sm:w-auto sm:shrink"
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

          {/* Swipe Indicator Dots (Mobile Only) */}
          <div className="mt-4 flex items-center justify-center gap-1.5 sm:hidden">
            {whyChooseUs.map((_, i) => (
              <div 
                key={i} 
                className="h-1 rounded-full bg-white/20 w-4 transition-all duration-300 first:bg-amber-400" 
              />
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
                  "h-14 rounded-full bg-emerald-600 px-10 text-base font-bold !text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
                )}
              >
                Message via WhatsApp
              </Link>
              <Link
                href="mailto:muzariexports@muzari.in"
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
