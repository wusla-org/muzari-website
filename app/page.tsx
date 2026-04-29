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
  whyChooseUs,
  products,
} from "@/lib/site-data";

export default function Home() {
  const whatsappHref = getWhatsAppHref();

  return (
    <main className="min-h-screen bg-white text-green-950 selection:bg-green-900 selection:text-white">
      <SiteHeader />

      <section className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-20 md:items-center md:pb-0">
        <h1 className="sr-only">Muzari Farms: Premium Agricultural Produce Exporter from India</h1>

        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_background.png"
            alt="Muzari Farms agricultural fields in India"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/60 to-green-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="max-w-2xl">
            <Badge className="mb-6 rounded-full border-0 bg-amber-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-950 shadow-sm hover:bg-amber-500">
              100% Authentic Agriculture
            </Badge>

            <h2
              className="mb-6 font-serif text-5xl font-bold leading-[1] text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-7xl"
              aria-hidden="true"
            >
              When Indian Produce <br />
              Meets <span className="text-amber-400">International Standards.</span>
            </h2>

            <div className="mb-10 max-w-xl drop-shadow-md">
              <p className="mb-4 font-serif text-2xl font-bold leading-relaxed text-white md:text-3xl">
                Muzari Exports Combines Modern Farming & Global Exporting.
              </p>
              
              <p className="text-base leading-relaxed text-green-100 md:text-lg">
                We export premium-quality bananas, tapioca, and fresh vegetables — from India to our global customer base. Every shipment is delivered with trust, care, and a commitment to excellence.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={whatsappHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-14 rounded-full bg-green-600 px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-green-500 hover:shadow-xl"
                )}
              >
                Order Farm Fresh
              </Link>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-14 rounded-full border-2 border-white/80 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-green-900"
                )}
              >
                View Our Harvest
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block">
          <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
            <div className="mb-8 inline-flex gap-12 rounded-2xl border border-white/20 bg-white/10 px-10 py-5 backdrop-blur-md">
              {[
                { value: "15+", label: "Countries Supplied" },
                { value: "100%", label: "Farm Direct" },
                { value: "CIF/FOB", label: "Shipping Terms" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-bold text-amber-400">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-100">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-24">
        <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              {aboutPreview.eyebrow}
            </p>
            <h2 className="mb-6 max-w-2xl font-serif text-4xl font-bold text-green-900 md:text-5xl">
              {aboutPreview.title}
            </h2>
            <p className="mb-5 max-w-2xl text-base leading-relaxed text-green-800">
              {aboutPreview.intro}
            </p>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-green-700">
              {aboutPreview.body}
            </p>
            <div className="space-y-3">
              {aboutPreview.points.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm font-medium text-green-900">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-green-950 p-8 text-white shadow-xl">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-green-700/40 blur-3xl" />
            <div className="relative">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Why Muzari
              </p>
              <h3 className="mb-5 font-serif text-3xl font-bold leading-tight">
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

      <section id="why-choose-us" className="relative overflow-hidden bg-green-900 py-24 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green-800 opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-green-950 opacity-60 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto w-[min(1280px,calc(100%-2rem))]">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Why Choose Us
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
              Built for <span className="text-amber-400">Global Excellence.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((point, index) => (
              <div
                key={point.title}
                className="group rounded-2xl border border-green-700/50 bg-green-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:bg-green-800 hover:shadow-xl hover:shadow-green-950/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-serif text-xl font-bold text-green-950 transition-colors group-hover:bg-amber-400">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{point.title}</h3>
                <p className="text-sm leading-relaxed text-green-200">{point.text}</p>
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

      <SiteFooter />
    </main>
  );
}
