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

      {/* Hero Section - Cinematic */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center pt-20">
        <Image
          src="/hero_products.png" 
          alt="Premium Agricultural Harvest"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-950/40 to-white" />
        
        <div className="relative z-10 mx-auto w-[min(1280px,calc(100%-2rem))] px-4 text-white">
          <ScrollReveal>
            <Badge className="mb-6 rounded-full border border-amber-400/30 bg-amber-500/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-amber-400 backdrop-blur-sm">
              Our Catalog
            </Badge>
            <h1 className="mb-8 max-w-4xl font-heritage text-6xl font-bold leading-[1.1] md:text-8xl tracking-tight">
              Export-ready produce <br />
              <span className="italic font-light text-amber-400">Farm-First Supply.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-green-50 opacity-90">
              Our current catalog highlights the premium products we actively cultivate and export today, 
              meeting the highest international standards for quality and consistency.
            </p>
          </ScrollReveal>
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
