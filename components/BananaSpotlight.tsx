import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { ImageAsset, SiteSettingsContent } from "@/lib/content";

const features = [
  {
    icon: "ECO",
    title: "Ethically sourced",
    description: "Direct partnerships with local farmer cooperatives in Wayanad.",
  },
  {
    icon: "CC",
    title: "Cold-chain optimized",
    description: "Preserving peak freshness through structured logistics.",
  },
  {
    icon: "TG",
    title: "Trade-grade consistency",
    description: "Built for repeat global buyers who need dependable presentation.",
  },
];

export default function BananaSpotlight({
  section,
  images,
}: {
  section: SiteSettingsContent;
  images: ImageAsset[];
}) {
  return (
    <section id="heritage" className="section-shell bg-surface-container">
      <div className="content-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <ScrollReveal className="grid grid-cols-2 gap-4" direction="right">
          {images.map((image, index) => (
            <div
              key={image.slotKey}
              className={`image-frame ${index % 2 === 0 ? "mt-8" : ""} ${
                index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.05]"
              />
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal className="editorial-card p-6 md:p-8" direction="left" delay={120}>
          <span className="eyebrow mb-5 inline-block">{section.bananaEyebrow}</span>
          <h2 className="text-3xl font-extrabold text-on-surface md:text-[3.25rem]">
            {section.bananaTitle}
            <span className="mt-2 block italic text-primary-ink">
              {section.bananaAccent}
            </span>
          </h2>
          <p className="mt-5 text-base leading-7 text-on-surface-variant">
            {section.bananaDescription}
          </p>

          <div className="mt-7 space-y-4">
            {features.map((feature, index) => (
              <ScrollReveal
                key={feature.title}
                className="rounded-[1.5rem] bg-surface-container p-5"
                delay={190 + index * 90}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-ink text-white">
                    <span className="text-xs font-extrabold tracking-[0.18em]">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold uppercase tracking-[0.12em] text-on-surface">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <a href={section.bananaCtaHref} className="button-primary mt-9">
            {section.bananaCtaLabel}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
