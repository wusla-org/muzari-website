import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { products } from "@/lib/site-data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Premium Export Produce | Muzari Farms Catalog",
  description:
    "Browse Muzari's export-ready produce catalog including bananas, tapioca roots, and vegetables. Farm-direct quality for global markets.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-green-950">
      <SiteHeader />

      {/* "Smart" Architectural Products Hero */}
      <section className="relative w-full pt-28 bg-white pb-6">
        <div className="mx-auto w-[min(1440px,calc(100%-2rem))]">
          <div className="relative overflow-hidden rounded-[3rem] bg-[#062016] p-12 md:p-24 text-white shadow-2xl flex flex-col justify-center min-h-[450px] lg:min-h-[500px]">
            {/* Precision Grid Detail */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute left-10 top-0 h-full w-px bg-white/10" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
            </div>

            <div className="relative z-10 max-w-4xl space-y-8">
              <ScrollReveal>
                <span className="inline-block rounded-full bg-[#82E076]/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-[#82E076] border border-[#82E076]/20">
                  Our Catalog
                </span>
                <h1 className="mt-6 font-heritage text-4xl font-bold leading-[1.1] text-white md:text-7xl tracking-tighter">
                  Export-ready produce <br />
                  from India&apos;s finest harvests.
                </h1>
                <div className="h-1.5 w-24 bg-[#82E076] rounded-full" />
                <p className="max-w-2xl text-xl leading-relaxed text-green-100/80 font-medium italic">
                  Our catalog highlights premium products cultivated to meet the highest international standards for quality and consistency.
                </p>
                {/* Visual Detail Badge */}
                <div className="inline-flex items-center gap-3 pt-4">
                  <span className="h-2 w-2 rounded-full bg-[#82E076] animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Export Grade A Quality Guaranteed</span>
                </div>
              </ScrollReveal>
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
