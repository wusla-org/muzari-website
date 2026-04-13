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
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <span className="pill-tag mb-4">Solutions</span>
            <h2 className="text-[2.2rem] font-extrabold tracking-tight text-on-surface md:text-5xl">
              Solutions For Agriculture
            </h2>
            <p className="mt-3 text-base text-on-surface-variant max-w-xl">
              {section.tapiocaDescription || "Delivering high-volume, global standard agricultural product exports specifically tailored for your regional demands."}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={120}>
            <a href={section.tapiocaCtaHref} className="button-secondary">
              See All
            </a>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-4">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} delay={index * 100}>
               {/* Make the first item 'expanded' to demonstrate layout */}
               {index === 0 ? (
                 <div className="ag-card p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center group">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface">
                           <span className="text-xl">🌿</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-on-surface tracking-tight">{product.title}</h3>
                      </div>
                      <p className="text-sm leading-6 text-on-surface-variant mb-6">
                        {product.description}
                      </p>
                      <a 
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? ""}?text=${encodeURIComponent(`Hello Muzari, I am interested in ${product.title}`)}`}
                        className="button-primary"
                      >
                        Inquire Grade A
                      </a>
                    </div>
                    <div className="relative h-48 md:h-64 w-full rounded-[1.5rem] overflow-hidden">
                       <Image src={product.imageUrl} alt={product.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                    </div>
                 </div>
               ) : (
                 <a 
                   href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? ""}?text=${encodeURIComponent(`Hello Muzari, I am interested in ${product.title}`)}`}
                   className="accordion-row group"
                 >
                    <div className="flex items-center gap-5">
                       <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface transition-colors group-hover:bg-primary/5">
                           <span className="text-xl">📦</span>
                       </div>
                       <h3 className="text-lg font-bold text-on-surface tracking-tight">{product.title}</h3>
                    </div>
                    <div className="text-on-surface-variant transition-transform group-hover:translate-x-1">
                       ↗
                    </div>
                 </a>
               )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
