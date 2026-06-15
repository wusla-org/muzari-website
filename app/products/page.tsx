import type { Metadata } from "next";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { products } from "@/lib/site-data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { getAdminContent } from "@/lib/get-site-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Premium Export Produce | Muzari Exports — Bananas, Tapioca & Vegetables from Kerala",
  description:
    "Browse Muzari Exports' catalog of farm-direct produce: Robusta & Nethra bananas, premium tapioca roots, and fresh vegetables from Kerala, South India — export-ready for global markets.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage() {
  const adminContent = await getAdminContent();
  const heroAdmin = (adminContent?.heroes as Record<string, Record<string, string>> | undefined)?.products ?? {};
  const eyebrow = heroAdmin.eyebrow ?? "Our Catalog";
  const headline = heroAdmin.headline ?? "From India's Farms";
  const headlineAccent = heroAdmin.headlineAccent ?? "To Your Markets.";
  const body = heroAdmin.body ?? "Our catalog highlights premium products cultivated to meet the highest international standards for quality and consistency — sourced directly from verified farms across South India.";
  const origin = heroAdmin.origin ?? "Kerala & South India";

  return (
    <main className="min-h-screen bg-white text-green-950">
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
                { num: "3+", lbl: "Export Varieties" },
                { num: "20+", lbl: "Countries Served" },
                { num: "A+", lbl: "Export Grade" },
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

      <section className="bg-white py-32">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <ScrollReveal delay={0.2}>
            <ProductGrid products={products} showInquiryLinks />
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-24 relative overflow-hidden rounded-[3rem] bg-green-950 px-10 py-16 text-white shadow-2xl">
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />
              <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-green-700/20 blur-[100px]" />
              
              <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                    Growing Catalog
                  </p>
                  <h2 className="mb-6 font-heritage text-4xl font-bold leading-tight md:text-5xl">
                    Expanding our horizon with <br /> every season.
                  </h2>
                  <p className="max-w-2xl text-lg leading-relaxed text-green-100/70 italic font-heritage">
                    We are constantly evaluating new farm partnerships to expand our export range. 
                    If you require specific Indian produce not listed here, our sourcing team is ready to assist.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-16 items-center justify-center rounded-2xl bg-amber-400 px-10 text-sm font-black uppercase tracking-widest text-green-950 shadow-xl transition-all hover:bg-amber-300 hover:scale-105 active:scale-95"
                >
                  Custom Sourcing Inquiry
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
