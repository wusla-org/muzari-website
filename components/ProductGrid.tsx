import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/site-data";

type ProductGridProps = {
  products: Product[];
  showInquiryLinks?: boolean;
};

export default function ProductGrid({
  products,
  showInquiryLinks = false,
}: ProductGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card
          key={product.name}
          className="group overflow-hidden rounded-2xl border border-green-100 bg-white p-0 shadow-md transition-all duration-300 hover:border-green-300 hover:shadow-xl"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <CardContent className="p-8">
            <Badge
              variant="secondary"
              className="mb-4 rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-700 hover:bg-green-50"
            >
              {product.label}
            </Badge>

            <h3 className="mb-3 font-serif text-2xl font-bold text-green-900 transition-colors group-hover:text-green-700">
              {product.name}
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-green-700">
              {product.summary}
            </p>

            <ul className="space-y-2.5">
              {product.details.map((detail) => (
                <li key={detail} className="flex items-center text-sm font-medium text-green-800">
                  <span className="mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  {detail}
                </li>
              ))}
            </ul>

            {showInquiryLinks ? (
              <div className="mt-6 border-t border-green-100 pt-5">
                <Link
                  href="/#contact"
                  className="text-sm font-bold uppercase tracking-[0.18em] text-green-800 transition-colors hover:text-amber-600"
                >
                  Request export inquiry
                </Link>
              </div>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
