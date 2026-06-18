import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import ProductGrid from "@/components/ProductGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MissionVisionSlider from "@/components/MissionVisionSlider";
import {
  aboutPreview,
  getWhatsAppHref,
  missionVision,
  whyChooseUs,
  products,
} from "@/lib/site-data";
import { Users, Leaf, Briefcase, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getAdminContent } from "@/lib/get-site-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const HOME_DEFAULTS = {
  eyebrow: "Premium Export Quality",
  headline: "Where Indian Produce",
  headlineAccent: "Meets International Standards.",
  body: "Muzari combines 95 years of agricultural legacy with cutting-edge global logistics — delivering the finest bananas, tapioca, and fresh vegetables from India's fertile soil directly to international markets with absolute trust.",
  ctaPrimary: "Order Now",
  ctaSecondary: "Our Harvest",
  origin: "Kerala, India",
};

export default async function Home() {
  const whatsappHref = getWhatsAppHref();
  const adminContent = await getAdminContent();
  const heroAdmin = (adminContent?.heroes as Record<string, Record<string, string>> | undefined)?.home;
  const hero = { ...HOME_DEFAULTS, ...heroAdmin };

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

  return (
    <main className="min-h-screen bg-white text-green-950 selection:bg-green-900 selection:text-white animate-in fade-in duration-500">
      <SiteHeader />

      {/* Hero — client-approved cream/olive/Playfair design */}
      <section className="w-full bg-[#faf8f3] pt-24 lg:pt-32 pb-16 px-4 sm:px-6">
        <h1 className="sr-only">Muzari Exports: Premium Agricultural Produce Exporter from India</h1>
        <div className="mx-auto max-w-[860px]">
          <div className="flex flex-col items-center px-4 py-0 text-center sm:px-8">

            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-[30px] bg-[#7a6b4f]" />
              <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#7a6b4f]">{hero.eyebrow}</span>
              <div className="h-px w-[30px] bg-[#7a6b4f]" />
            </div>

            {/* Headlines */}
            <p className="font-playfair text-[2.6rem] font-bold leading-[1.0] text-[#1a1a14] sm:text-[3.8rem]">
              {hero.headline}
            </p>
            <p className="mb-6 font-playfair text-[2.6rem] font-bold italic leading-[1.1] text-[#5a8a3c] sm:text-[3.8rem]">
              {hero.headlineAccent}
            </p>

            {/* Rule */}
            <div className="mb-7 h-[2px] w-[60px] bg-[#5a8a3c]" />

            {/* Body */}
            <p className="mb-10 max-w-[520px] font-sans text-[15px] font-light italic leading-[1.9] text-[#5a5548]">
              {hero.body}
            </p>

            {/* CTAs */}
            <div className="mb-14 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href={whatsappHref}
                className="bg-[#1a1a14] px-9 py-4 font-sans text-[12px] font-medium uppercase tracking-[1.5px] text-[#faf8f3] transition-all hover:bg-[#2d2d22] active:scale-95"
              >
                {hero.ctaPrimary}
              </Link>
              <Link
                href="/products"
                className="border border-[#1a1a14] px-9 py-4 font-sans text-[12px] font-medium uppercase tracking-[1.5px] text-[#1a1a14] transition-all hover:bg-[#1a1a14] hover:text-[#faf8f3] active:scale-95"
              >
                {hero.ctaSecondary}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex w-full max-w-[500px]" style={{ gap: "2px" }}>
              {[
                { num: "35+", lbl: "Years Legacy" },
                { num: "20+", lbl: "Countries" },
                { num: "100%", lbl: "Farm Direct" },
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
              {hero.origin}
              <div className="h-px w-5 bg-[#d8d2c8]" />
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
              <MissionVisionSlider slides={slides} />
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
              Setting the <span className="italic text-amber-400 font-light">Gold Standard</span>{" "}in <br />
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

          {/* Mobile swipe hint */}
          <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">Swipe to explore</span>
            <span className="text-white/30 text-xs">→</span>

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
                href="mailto:muzariexports@gmail.com"
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
