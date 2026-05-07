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

export default function Home() {
  const whatsappHref = getWhatsAppHref();

  return (
    <main className="min-h-screen bg-white text-green-950 selection:bg-green-900 selection:text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-32 pt-32">
        <h1 className="sr-only">Muzari Farms: Premium Agricultural Produce Exporter from India</h1>

        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_premium.png"
            alt="Muzari Farms cinematic agricultural fields"
            fill
            sizes="100vw"
            className="object-cover scale-105"
            priority
          />
          {/* Branded Watermark Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
            <Image 
              src="/logo/logo-dark.png" 
              alt="" 
              width={1000} 
              height={1000} 
              className="object-contain scale-[1.5] brightness-0 invert" 
            />
          </div>
          {/* Sophisticated Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-green-950/40 to-green-950" />
          <div className="absolute inset-0 bg-green-950/20" />
        </div>

        <div className="relative z-10 mx-auto w-[min(1440px,calc(100%-4rem))] px-4 text-center">
          <div className="mx-auto max-w-5xl">
            <Badge className="mb-10 rounded-full border border-amber-400/30 bg-amber-500/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber-400 backdrop-blur-sm shadow-xl">
              100% Authentic Indian Agriculture
            </Badge>

            <h2
              className="mb-8 font-serif text-6xl font-medium leading-[0.9] tracking-tight text-white sm:text-8xl md:text-9xl lg:text-[11rem]"
              aria-hidden="true"
            >
              Indian Produce <br />
              <span className="italic font-light text-amber-400">Meets Perfection.</span>
            </h2>

            <div className="mx-auto mb-14 max-w-3xl">
              <p className="mb-6 font-serif text-2xl italic leading-relaxed text-green-50 md:text-4xl opacity-90">
                &ldquo;Combining Modern Farming & Global Excellence.&rdquo;
              </p>
              
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-green-100/80 md:text-xl font-medium tracking-wide">
                We export premium-quality bananas, tapioca, and fresh vegetables from the heart of India to the global stage. 
                Built on trust, delivered with care.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href={whatsappHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-16 rounded-full bg-green-600 px-10 text-lg font-bold text-white shadow-[0_0_40px_rgba(22,163,74,0.3)] transition-all hover:bg-green-500 hover:scale-105 active:scale-95"
                )}
              >
                Order Farm Fresh
              </Link>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-16 rounded-full border-2 border-white/30 bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-green-950 hover:border-white"
                )}
              >
                View Our Harvest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-950 py-16 border-y border-white/5">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
            {[
              { icon: Users, value: "+50", label: "Local producers" },
              { icon: Leaf, value: "10T", label: "Exported fruit" },
              { icon: Briefcase, value: "5+", label: "Years of Experience" },
              { icon: Award, value: "100%", label: "Quality of Fruit" },
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
            <div className="relative">
              <div className="absolute -left-8 -top-12 pointer-events-none select-none text-[12rem] font-serif text-green-50/80 leading-none">“</div>
              <div className="relative z-10">
                <p className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-amber-600/80">
                  {missionVision.mission.title}
                </p>
                <h3 className="font-serif text-4xl font-medium leading-[1.2] text-green-950 md:text-5xl italic tracking-tight">
                  {missionVision.mission.text}
                </h3>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 -top-12 pointer-events-none select-none text-[12rem] font-serif text-green-50/80 leading-none">“</div>
              <div className="relative z-10">
                <p className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-amber-600/80">
                  {missionVision.vision.title}
                </p>
                <h3 className="font-serif text-4xl font-medium leading-[1.2] text-green-950 md:text-5xl italic tracking-tight">
                  {missionVision.vision.text}
                </h3>
              </div>
            </div>
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
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              What We Export
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-green-900 md:text-5xl">
              Our Fresh{" "}
              <span className="relative inline-block">
                Harvest
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-amber-500" />
              </span>
            </h2>
            <p className="text-base leading-relaxed text-green-700">
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
            <h2 className="font-serif text-5xl font-medium leading-[1.1] md:text-7xl tracking-tight">
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
                <div className="absolute -left-6 -top-10 pointer-events-none select-none font-serif text-[10rem] font-black text-white/[0.02] transition-all duration-700 group-hover:text-amber-400/[0.05] group-hover:-translate-y-4">
                  0{index + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="mb-8 h-px w-16 bg-amber-500/30 transition-all duration-700 group-hover:w-full group-hover:bg-amber-400" />
                  <h3 className="font-serif text-3xl font-medium leading-[1.2] text-white transition-all duration-500 group-hover:text-amber-400 md:text-4xl">
                    {point.title}
                  </h3>
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

            <h2 className="mb-6 font-serif text-4xl font-bold text-green-900 md:text-5xl">
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
                href="mailto:farm@muzari.com"
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

      <section className="bg-[#C5A54B] py-24 text-center">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <h2 className="mb-6 font-serif text-4xl font-bold text-green-950 md:text-6xl">
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
