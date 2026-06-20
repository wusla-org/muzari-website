import type { Metadata } from "next";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { products } from "@/lib/site-data";
import type { Product } from "@/lib/site-data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getAdminContent } from "@/lib/get-site-content";
import { getSanityProducts } from "@/lib/sanity-queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Premium Export Produce | Muzari Exports — Bananas, Tapioca & Vegetables from Kerala",
  description:
    "Browse Muzari Exports' catalog of farm-direct produce: Robusta & Nethra bananas, premium tapioca roots, and fresh vegetables from Kerala, South India — export-ready for global markets.",
  alternates: { canonical: "/products" },
};

// Live domain is muzari.in for now — switch to muzariexports.com once the old domain expires.
const BASE_URL = "https://muzari.in";
// const BASE_URL = "https://www.muzariexports.com";

export default async function ProductsPage() {
  const [adminContent, sanityProducts] = await Promise.all([
    getAdminContent(),
    getSanityProducts(),
  ]);
  const productList: Product[] = sanityProducts?.length ? sanityProducts : products;
  const heroAdmin = (adminContent?.heroes as Record<string, Record<string, string>> | undefined)?.products ?? {};
  const eyebrow = heroAdmin.eyebrow ?? "Our Catalog";
  const headline = heroAdmin.headline ?? "Export-ready produce";
  const headlineAccent = heroAdmin.headlineAccent ?? "from India's finest harvests.";
  const body = heroAdmin.body ?? "Our catalog highlights premium products cultivated to meet the highest international standards for quality and consistency.";
  const origin = heroAdmin.origin ?? "Export Grade A Quality Guaranteed";

  const productListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: productList.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.summary,
        image: `${BASE_URL}${product.image}`,
        category: product.label,
        additionalProperty: (product.specs ?? []).map((spec) => ({
          "@type": "PropertyValue",
          name: spec.label,
          value: spec.value,
        })),
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          businessFunction: "http://purl.org/goodrelations/v1#Sell",
          priceSpecification: {
            "@type": "PriceSpecification",
            description: "Pricing on inquiry — CIF/FOB quotes provided per shipment",
          },
        },
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${BASE_URL}/products` },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-green-950 animate-in fade-in duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />

      {/* Hero — dark green card */}
      <section className="w-full bg-white pt-24 lg:pt-28 px-4 sm:px-6 pb-0">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-[#062016]">
          <div className="px-10 py-16 sm:px-16 sm:py-20">

            {/* Pill Badge */}
            <div className="mb-8 inline-flex items-center rounded-full border border-white/25 px-4 py-1.5">
              <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-white/70">{eyebrow}</span>
            </div>

            {/* H1 — unified with underline accent on second line */}
            <h1 className="mb-6 max-w-[780px] font-nunito font-black text-[2.8rem] leading-[1.05] text-white sm:text-[4.5rem]">
              <span className="block">{headline}</span>
              <span className="block underline decoration-[#82E076] decoration-[3px] underline-offset-[8px]">{headlineAccent}</span>
            </h1>

            {/* Body */}
            <p className="mb-10 max-w-[580px] font-sans text-[15px] italic leading-[1.9] text-white/60">
              {body}
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[2.5px] text-white/50">
              <div className="h-2 w-2 rounded-full bg-[#82E076]" />
              {origin}
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] px-4">
          <ScrollReveal delay={0.2}>
            <ProductGrid products={productList} />
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
