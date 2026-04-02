import BrandLogo from "@/components/BrandLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { QualityStandardContent } from "@/lib/content";

export default function QualityStandards({
  standards,
}: {
  standards: QualityStandardContent[];
}) {
  return (
    <section id="quality" className="section-shell">
      <div className="content-shell">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mx-auto mb-5 w-fit rounded-[1.2rem] bg-white px-4 py-3 shadow-[0_10px_20px_rgba(25,28,24,0.05)]">
            <BrandLogo variant="mark" className="max-w-[2.25rem]" />
          </div>
          <span className="eyebrow mb-4 inline-block">
            Commitment to excellence
          </span>
          <h2 className="text-3xl font-extrabold text-on-surface md:text-4xl">
            Our Quality Standards
          </h2>
          <p className="mt-4 text-base leading-7 text-on-surface-variant">
            We adhere to international benchmarks so every shipment feels
            dependable before it ever arrives.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {standards.map((standard, index) => (
            <ScrollReveal
              key={standard.title}
              className="rounded-[1.7rem] bg-surface-container p-7"
              delay={index * 90}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-white text-primary-ink">
                <span className="text-sm font-extrabold tracking-[0.18em]">
                  {standard.badge}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold uppercase tracking-[0.08em] text-on-surface">
                {standard.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                {standard.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
