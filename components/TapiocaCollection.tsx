import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { ProductContent, SiteSettingsContent } from "@/lib/content";

export default function TapiocaCollection({
  section,
  products,
}: {
  section: SiteSettingsContent;
  products: ProductContent[];
}) {
  return (
    <section id="collections" className="section-shell">
      <div className="content-shell">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-3xl">
            <span className="eyebrow mb-4 inline-block">
              {section.tapiocaEyebrow}
            </span>
            <h2 className="text-3xl font-extrabold text-on-surface md:text-4xl">
              {section.tapiocaTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-on-surface-variant">
              {section.tapiocaDescription}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={120}>
            <a href={section.tapiocaCtaHref} className="button-secondary w-fit">
              {section.tapiocaCtaLabel}
            </a>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} delay={index * 120}>
              <article
                className={`editorial-card group overflow-hidden p-6 ${
                  index === 1 ? "lg:-translate-y-2" : ""
                }`}
              >
                <div className="image-frame aspect-[4/4.4]">
                  <Image
                    src={product.imageUrl}
                    alt={product.altText}
                    fill
                    loading={product.featured || index === 1 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="px-2 pb-2 pt-7">
                  <div className="mb-3 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-primary-ink/70">
                    {index === 1 ? <span className="attention-dot" /> : null}
                    <span>Export Category {index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-[-0.02em] text-on-surface md:text-[1.4rem]">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    {product.description}
                  </p>
                  <a href="#inquiry" className="button-primary mt-6 w-full">
                    Send Inquiry
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
