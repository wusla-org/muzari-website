import BrandLogo from "@/components/BrandLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { SiteSettingsContent } from "@/lib/content";

const companyLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Mission", href: "#mission" },
  { label: "Heritage", href: "#heritage" },
];

const qualityLinks = [
  { label: "Quality Standards", href: "#quality" },
  { label: "Trade Inquiry", href: "#inquiry" },
];

export default function Footer({
  settings,
}: {
  settings: SiteSettingsContent;
}) {
  return (
    <footer className="section-shell pb-10 pt-0">
      <ScrollReveal className="content-shell">
      <div className="rounded-[1.6rem] bg-primary-ink px-5 py-8 text-white md:rounded-[2rem] md:px-10 md:py-12">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal direction="right" delay={50}>
            <div className="w-fit rounded-[1.35rem] bg-white px-4 py-3 shadow-[0_18px_34px_rgba(0,0,0,0.12)] md:rounded-[1.8rem] md:px-5 md:py-4">
              <BrandLogo
                variant="full"
                className="max-w-[11.5rem] md:max-w-[18rem]"
              />
            </div>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 md:leading-8">
              {settings.footerDescription}
            </p>
            <a href="#inquiry" className="button-primary mt-8">
              {settings.footerCtaLabel}
            </a>
          </ScrollReveal>

          <ScrollReveal className="grid gap-8 sm:grid-cols-2" direction="left" delay={140}>
            <div>
              <h3 className="text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-white/60">
                Explore
              </h3>
              <div className="mt-5 space-y-4">
                {companyLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-base text-white/78 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-white/60">
                Buyer Flow
              </h3>
              <div className="mt-5 space-y-4">
                {qualityLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-base text-white/78 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-8 flex flex-col gap-4 pt-8 text-sm text-white/55 md:mt-10 md:flex-row md:items-center md:justify-between md:pt-10" delay={230}>
          <p>© 2024 Muzari Exports. Crafted for trusted international trade.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              Global
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              Email
            </span>
          </div>
        </ScrollReveal>
      </div>
      </ScrollReveal>
    </footer>
  );
}
