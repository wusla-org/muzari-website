import BrandLogo from "@/components/BrandLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { SiteSettingsContent } from "@/lib/content";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Solutions", href: "#collections" },
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
        <div className="ag-card px-8 py-12 md:px-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 flex">
                <BrandLogo variant="full" className="w-[12rem] md:w-[15rem]" />
              </div>
              <p className="max-w-md text-sm md:text-base leading-relaxed text-on-surface-variant">
                {settings.footerDescription}
              </p>
              <div className="mt-8 flex gap-4">
                 {/* Social placeholders matching 'AgFarm' minimal styling */}
                 <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-on-surface transition-colors hover:bg-primary/10 hover:text-primary">in</a>
                 <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-on-surface transition-colors hover:bg-primary/10 hover:text-primary">tw</a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-extrabold text-on-surface tracking-tight mb-5">
                  Company
                </h3>
                <div className="space-y-4">
                  {companyLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-on-surface tracking-tight mb-5">
                  Resources
                </h3>
                <div className="space-y-4">
                  {qualityLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 text-sm font-medium text-on-surface-variant md:flex-row">
            <p>© 2024 Muzari Exports. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-primary">Privacy Policy</a>
               <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
