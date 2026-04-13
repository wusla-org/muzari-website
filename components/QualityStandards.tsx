import ScrollReveal from "@/components/ScrollReveal";

const workflowSteps = [
  {
    step: "01",
    title: "Direct Sourcing",
    description: "Ethical partnerships directly with traditional farm networks across India.",
    icon: "🌱"
  },
  {
    step: "02",
    title: "Quality Control",
    description: "Strict Global GAP sorting, washing, and safety certifications.",
    icon: "🔍"
  },
  {
    step: "03",
    title: "Cold Chain Logistics",
    description: "Temperature-monitored swift processing ensuring maximum freshness.",
    icon: "❄️"
  },
  {
    step: "04",
    title: "Global Export",
    description: "Rapid port fulfillment and compliance handling to your destination.",
    icon: "🚢"
  }
];

export default function QualityStandards() {
  return (
    <section id="workflow" className="section-shell bg-white py-16 md:py-24 border-y border-black/5">
      <div className="content-shell">
        <ScrollReveal className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-16">
          <div className="max-w-2xl">
             <span className="pill-tag mb-4">Our Process</span>
             <h2 className="text-3xl font-extrabold tracking-tight text-on-surface md:text-5xl">
               From Farm To Port
             </h2>
             <p className="mt-4 text-base leading-relaxed text-on-surface-variant max-w-lg">
                We handle the complete supply chain lifecycle with uncompromising dedication to speed, sustainability, and buyer satisfaction.
             </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Subtle connecting line for desktop view */}
          <div className="hidden lg:block absolute top-8 left-10 right-10 h-0.5 bg-gradient-to-r from-surface via-primary/20 to-surface -z-10"></div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((item, index) => (
              <ScrollReveal
                key={item.title}
                className="flex flex-col relative bg-transparent"
                delay={index * 120}
              >
                {/* Step Icon Bubble */}
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-surface mb-6 shadow-sm border border-black/5">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                
                {/* Step Information */}
                <div>
                  <span className="text-xs font-bold text-primary mb-2 block tracking-widest uppercase">
                    Step {item.step}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-on-surface mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant max-w-[250px]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
