import type { Product } from "@/lib/site-data";

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export function fromSlug(slug: string, productList: Product[]): Product | undefined {
  return productList.find((p) => toSlug(p.name) === slug);
}
