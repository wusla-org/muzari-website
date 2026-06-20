"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Product } from "@/lib/site-data";
import { toSlug } from "@/lib/product-slug";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({});

  const toggleExpand = (name: string) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="grid gap-x-12 gap-y-32 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <ScrollReveal key={product.name} delay={index * 0.1}>
        <Link
          href={`/products/${toSlug(product.name)}`}
          className="group relative block focus:outline-none"
        >
          {/* Main Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-green-50/50 transition-all duration-1000 group-hover:shadow-2xl group-hover:shadow-green-950/20 group-focus-within:shadow-2xl group-focus-within:shadow-green-950/20">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110 group-focus-within:scale-110"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100" />
          </div>

          {/* Overlapping Content Card */}
          <div className="relative z-10 -mt-24 mx-6 rounded-[2rem] bg-white p-8 shadow-xl shadow-green-950/5 ring-1 ring-green-50 transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-2xl group-hover:shadow-green-950/10 group-focus-within:-translate-y-4 group-focus-within:shadow-2xl group-focus-within:shadow-green-950/10">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-amber-500/40 transition-all duration-700 group-hover:w-full group-hover:bg-amber-500 group-focus-within:w-full group-focus-within:bg-amber-500" />
              <p className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.3em] text-amber-600/80">
                {product.label}
              </p>
            </div>

            <h3 className="mb-3 font-heading text-3xl font-semibold tracking-tight text-green-950 transition-all duration-500 group-hover:text-green-700 group-focus-within:text-green-700">
              {product.name}
            </h3>

            <p className="mb-2 text-sm leading-relaxed text-green-800/60 line-clamp-2 font-sans">
              {product.summary}
            </p>

            {/* Mobile-Only Specification Toggle Button */}
            <button
              onClick={() => toggleExpand(product.name)}
              className="mt-4 flex items-center justify-between w-full rounded-xl bg-green-50 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-green-950 transition-all hover:bg-green-100 md:hidden active:scale-[0.98]"
            >
              <span>{expandedProducts[product.name] ? "Hide Specifications" : "View Specifications"}</span>
              <span className="text-amber-500 text-xs font-black">{expandedProducts[product.name] ? "−" : "+"}</span>
            </button>

            {/* Details - Revealed on hover/focus (desktop) or expand toggle (mobile) */}
            <div className={`overflow-hidden transition-all duration-700 border-green-50 md:max-h-0 md:opacity-0 md:group-hover:max-h-[30rem] md:group-hover:opacity-100 md:group-hover:mt-6 md:group-focus-within:max-h-[30rem] md:group-focus-within:opacity-100 md:group-focus-within:mt-6 md:pt-0 md:group-hover:pt-6 md:group-focus-within:pt-6 md:border-t ${
              expandedProducts[product.name]
                ? "max-h-[30rem] opacity-100 mt-6 pt-6 border-t"
                : "max-h-0 opacity-0 pt-0 border-t-0"
            }`}>
              <div className="space-y-6">
                {/* Selling Points */}
                <div className="space-y-2.5">
                  {product.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-wider text-green-900/40">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                      {detail}
                    </div>
                  ))}
                </div>

                {/* Technical Spec Sheet */}
                {product.specs && (
                  <div className="rounded-2xl bg-green-50/50 p-4 ring-1 ring-green-100/50">
                    <p className="mb-3 text-[9px] font-black uppercase tracking-[0.2em] text-green-950/30">
                      Technical Specs
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {product.specs.map((spec) => (
                        <div key={spec.label}>
                          <p className="text-[8px] font-black uppercase tracking-wider text-amber-600/60">
                            {spec.label}
                          </p>
                          <p className="text-[10px] font-bold text-green-900 truncate">
                            {spec.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-green-50">
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-green-900 transition-all group-hover:gap-4 group-hover:text-amber-600">
                View Details
                <span aria-hidden="true" className="text-amber-500">→</span>
              </span>
            </div>
          </div>
        </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
