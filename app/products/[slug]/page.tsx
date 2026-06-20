import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { products } from "@/lib/site-data";
import { getAdminContent } from "@/lib/get-site-content";
import { getSanityProducts } from "@/lib/sanity-queries";
import { toSlug, fromSlug } from "@/lib/product-slug";
import type { Product } from "@/lib/site-data";

const BASE_URL = "https://muzari.in";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: toSlug(p.name) }));
}

async function getProducts(): Promise<Product[]> {
  const sanityProducts = await getSanityProducts();
  if (sanityProducts?.length) return sanityProducts as Product[];
  const adminContent = await getAdminContent();
  const adminProducts = (adminContent as Record<string, unknown> | null)?.products as Product[] | undefined;
  return adminProducts?.length ? adminProducts : products;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const productList = await getProducts();
  const product = fromSlug(slug, productList);
  if (!product) return {};
  return {
    title: `${product.name} — Muzari Exports`,
    description: product.summary,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} | Muzari Exports`,
      description: product.summary,
      images: [{ url: `${BASE_URL}${product.image}`, alt: product.imageAlt }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const productList = await getProducts();
  const product = fromSlug(slug, productList);
  if (!product) notFound();

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "";
  const waMessage = encodeURIComponent(
    `Hi Muzari Exports,\nI'm interested in *${product.name}*.\nPlease share export pricing and details.`
  );
  const waHref = `https://wa.me/${phone}?text=${waMessage}`;

  const productJsonLd = {
    "@context": "https://schema.org",
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
  };

  return (
    <main className="min-h-screen bg-white text-green-950 animate-in fade-in duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />

      <div className="pt-24 lg:pt-28 pb-24">
        {/* Back link */}
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 mb-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-green-700 transition-all hover:gap-4 hover:text-green-950"
          >
            <span aria-hidden="true">←</span>
            All Products
          </Link>
        </div>

        {/* Two-column hero */}
        <section className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">

            {/* Left: sticky image */}
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-green-50/50 shadow-xl shadow-green-950/10">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: content */}
            <div className="flex flex-col gap-8 py-4">
              {/* Label badge */}
              <div className="inline-flex w-fit items-center gap-3">
                <span className="h-px w-8 bg-amber-500/60" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">
                  {product.label}
                </span>
              </div>

              {/* Name */}
              <h1 className="font-heading text-5xl font-semibold tracking-tight text-green-950 leading-tight md:text-6xl">
                {product.name}
              </h1>

              {/* Summary */}
              <p className="text-base leading-relaxed text-green-800/70 font-sans max-w-prose">
                {product.summary}
              </p>

              {/* Highlights */}
              {product.details.length > 0 && (
                <div>
                  <p className="mb-4 text-[9px] font-black uppercase tracking-[0.25em] text-green-950/30">
                    Highlights
                  </p>
                  <div className="space-y-3">
                    {product.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span className="text-[11px] font-black uppercase tracking-wider text-green-900/60">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {product.specs && product.specs.length > 0 && (
                <div className="rounded-2xl bg-green-50/60 p-6 ring-1 ring-green-100/60">
                  <p className="mb-5 text-[9px] font-black uppercase tracking-[0.25em] text-green-950/30">
                    Technical Specifications
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                    {product.specs.map((spec) => (
                      <div key={spec.label}>
                        <p className="text-[9px] font-black uppercase tracking-wider text-amber-600/70 mb-0.5">
                          {spec.label}
                        </p>
                        <p className="text-sm font-bold text-green-900">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-green-500/25 transition-all hover:bg-[#1ebe5d] hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 active:scale-95"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
                <p className="mt-3 text-[10px] text-green-700/50 font-sans">
                  We typically respond within a few hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 mt-24">
          <div className="border-t border-green-100 pt-16">
            <p className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-green-950/30">
              More Products
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {productList
                .filter((p) => p.name !== product.name)
                .map((p) => (
                  <Link
                    key={p.name}
                    href={`/products/${toSlug(p.name)}`}
                    className="group flex items-center gap-4 rounded-2xl bg-green-50/60 p-4 ring-1 ring-green-100/60 transition-all hover:bg-green-50 hover:ring-green-200 hover:shadow-md hover:shadow-green-950/5"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-green-100">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-wider text-amber-600/70 mb-0.5">
                        {p.label}
                      </p>
                      <p className="text-sm font-bold text-green-950 group-hover:text-green-700 transition-colors">
                        {p.name}
                      </p>
                    </div>
                    <span className="ml-auto text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
