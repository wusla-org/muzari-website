import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { HeroContent, ImageAsset } from "@/lib/content";

const highlights = [
  {
    title: "Direct origin",
    description: "Farmer-connected sourcing from Kerala with a cleaner buyer story.",
  },
  {
    title: "Editorial quality",
    description: "A premium presentation that feels curated rather than crowded.",
  },
  {
    title: "Export ready",
    description: "Built for confident trade inquiries, volume discussions, and trust.",
  },
];

export default function HeroSection({
  hero,
  image,
}: {
  hero: HeroContent;
  image: ImageAsset;
}) {
  return (
    <section className="section-shell overflow-hidden pt-28 md:pt-36">
      <div className="content-shell grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div className="relative z-10">
          <ScrollReveal delay={40}>
            <span className="eyebrow mb-6 inline-block">{hero.eyebrow}</span>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[0.98] text-on-surface sm:text-5xl lg:text-[4.75rem]">
              {hero.titleLineOne}
              <span className="mt-3 block italic text-primary-ink">
                {hero.titleLineTwo}
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-7 text-on-surface-variant md:text-[1.05rem]">
              {hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={280}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={hero.primaryCtaHref} className="button-primary">
                {hero.primaryCtaLabel}
              </a>
              <a href={hero.secondaryCtaHref} className="button-secondary">
                {hero.secondaryCtaLabel}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={340}>
            <div className="mt-8 flex items-center gap-3 text-sm text-on-surface-variant">
              <span className="attention-dot" />
              <span>{hero.trustNote}</span>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} delay={380 + index * 90}>
                <div className="editorial-card p-6 shadow-none">
                  <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-ink">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="relative" direction="left" delay={180}>
          <div className="animate-blob-float pointer-events-none absolute -left-10 top-0 z-0 h-40 w-40 rounded-full bg-primary/30 blur-[50px] md:-left-16 md:h-56 md:w-56" />
          <div className="animate-blob-float animation-delay-2000 pointer-events-none absolute -right-8 bottom-10 z-0 h-32 w-32 rounded-full bg-primary-ink/20 blur-[50px] md:-right-12 md:bottom-20 md:h-48 md:w-48" />
          <div className="image-frame mx-auto aspect-[4/5] max-w-[31rem] relative z-10">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              priority
            />
          </div>

          <div className="editorial-card absolute -bottom-6 left-2 z-20 max-w-[16rem] p-6 md:-left-16 md:bottom-12">
            <div className="eyebrow mb-3">Why buyers trust us</div>
            <p className="text-sm leading-6 text-on-surface-variant">
              A calmer, premium-first export presence that emphasizes clarity,
              quality, and confidence instead of crowded trade-portal visuals.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
