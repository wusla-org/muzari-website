import ScrollReveal from "@/components/ScrollReveal";
import { MissionVisionContent } from "@/lib/content";

export default function MissionVision({
  content,
}: {
  content: MissionVisionContent;
}) {
  return (
    <section id="mission" className="section-shell">
      <ScrollReveal className="content-shell">
      <div className="editorial-card overflow-hidden px-6 py-7 md:px-9 md:py-9">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal
            className="rounded-[1.7rem] bg-primary-ink px-6 py-7 text-white md:px-8 md:py-9"
            direction="right"
            delay={60}
          >
            <span className="mb-5 inline-block text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-white/70">
              Our Mission
            </span>
            <h2 className="text-[1.8rem] font-bold leading-tight md:text-[2.2rem]">
              {content.missionText}
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
            <ScrollReveal
              className="rounded-[1.7rem] bg-surface-container p-6 md:p-8"
              direction="left"
              delay={150}
            >
              <span className="eyebrow mb-5 inline-block">Our Vision</span>
              <h3 className="text-[1.8rem] font-bold leading-tight text-on-surface md:text-[2.1rem]">
                {content.visionText}
              </h3>
            </ScrollReveal>

            <ScrollReveal
              className="rounded-[1.7rem] bg-surface-bright p-6 md:p-8"
              direction="left"
              delay={230}
            >
              <span className="eyebrow mb-5 inline-block">What this means</span>
              <div className="space-y-4">
                {content.principles.map((principle) => (
                  <p
                    key={principle}
                    className="text-sm leading-7 text-on-surface-variant"
                  >
                    {principle}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
