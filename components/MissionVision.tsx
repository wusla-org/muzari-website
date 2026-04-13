import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { MissionVisionContent } from "@/lib/content";

export default function MissionVision({
  content,
}: {
  content: MissionVisionContent;
}) {
  return (
    <section id="about" className="section-shell">
      <div className="content-shell flex flex-col items-start text-left">
        <ScrollReveal delay={50}>
          <span className="pill-tag mb-6">About Us</span>
        </ScrollReveal>

        <ScrollReveal delay={120} className="w-full">
          <h2 className="max-w-[70rem] text-[2.4rem] font-extrabold leading-[1.3] tracking-[-0.03em] text-on-surface sm:text-[3rem] md:text-[3.8rem]">
            We Help Farmers{" "}
            <span className="inline-flex h-[1em] w-[2.2em] items-center justify-center align-middle relative overflow-hidden rounded-full border-4 border-surface shadow-sm mx-1">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiDZgyv3xrx8FaQu0jWkqAGASh3Okze46dKeMq8pD_YNWxU_Ppa3SXNr4ivAmYOijZ_Hx6j39vN819ohakBNXQZfu6gWgkzpt-SnSW3nbgpTQkKz36Tx3mLOSAhopmrryHYRnRXd_9jS1YnYI59RWPqi1lDTKR6TQH6mjgs0-AU2syp94WW0OnjAiF9XAS6uR2YOO2CRNtEdAyIcAthbpB6_vjyJIk-gh4ygBi_2qgHUECRdkSZAFrb458EiiwUtIcZ-MDBM3stCun"
                alt="Farmers"
                fill
                className="object-cover"
              />
            </span>{" "}
            Improve Productivity And Sustainability Through Innovative{" "}
            <span className="inline-flex h-[1em] w-[2.2em] items-center justify-center align-middle relative overflow-hidden rounded-full border-4 border-surface shadow-sm mx-1">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD22HSou1rG2SCGYlIaJ7HwbGw1viRyODBc-NRqNbYaCWdYucu7y4n8UdVaY9UFj2Dn1CoxGqU2tYS4Ysjx5NCjMbiNV-BOJP-t_h8EJeaSPnV9TKg-_g2gAATH-TRwZg0ZVikpfFEzoOr_MKjS_kqwWQuNvqgGUhuv2p1Ib8Xwe1y0ByBOeMExQ_vjaufER-TX2x7mcaLRDazanfTQbydRdd7MZFAQmjYAfbd2sV2Nnr1Riytis8CWn8fkkbgXKihZ2GLG4Y7q2Ti3"
                alt="Agricultural"
                fill
                className="object-cover"
              />
            </span>{" "}
            Agricultural Solutions.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-12 w-full max-w-4xl text-left border-t border-black/5 pt-12">
           <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-on-surface mb-3">Our Vision</h3>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  {content.visionText} We build systems where uncompromising agricultural quality and rapid deployment capability converge for modern global markets.
                </p>
              </div>
              <div className="space-y-4">
                 <h3 className="text-xl font-bold tracking-tight text-on-surface mb-3">Core Principles</h3>
                {content.principles.map((principle) => (
                  <div key={principle} className="flex gap-3 items-start">
                     <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary pt-1 text-xs">
                       ✓
                     </span>
                     <p className="text-sm font-medium text-on-surface-variant leading-6">
                       {principle}
                     </p>
                  </div>
                ))}
              </div>
           </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
