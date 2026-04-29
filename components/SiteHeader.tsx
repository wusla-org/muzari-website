import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsAppHref, navigationLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const whatsappHref = getWhatsAppHref();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-green-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex w-[min(1280px,calc(100%-2rem))] items-center justify-between py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-bold tracking-wide text-green-900">
            Muzari
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
            Farms &amp; Exports
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-green-800 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative transition-colors hover:text-green-600 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={whatsappHref}
          className={cn(
            buttonVariants({ size: "sm" }),
            "hidden rounded-full bg-green-900 px-6 font-bold text-white shadow-md hover:bg-green-800 md:inline-flex"
          )}
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
