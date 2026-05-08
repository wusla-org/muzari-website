import type { Metadata } from "next";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products | Farm-Fresh Produce for Export",
  description:
    "Browse Muzari's export-ready produce catalog including bananas, tapioca roots, and vegetables, with room to expand as new products are added.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-green-950">
      <SiteHeader />

      <section className="bg-green-50 pb-20 pt-36">
        <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
            Product Range
          </p>
          <h1 className="mb-6 max-w-4xl font-serif text-5xl font-bold text-green-900 md:text-6xl">
            Export-ready produce built on the same farm-first supply approach.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-green-700">
            Our current catalog highlights the three products we actively present today, with a
            shared structure ready for new additions as the range grows.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
          <ProductGrid products={products} showInquiryLinks />

          <div className="mt-14 rounded-[2rem] bg-green-950 px-8 py-10 text-white shadow-xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  Growing Catalog
                </p>
                <h2 className="mb-3 font-serif text-3xl font-bold">
                  More products can be added here without changing the page structure.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-green-100/85">
                  This catalog now runs from shared product data, so future produce additions can
                  be introduced cleanly while preserving the current experience.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-300 transition-colors hover:text-white"
              >
                Talk to our export team
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
