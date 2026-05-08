import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsAppHref, navigationLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const whatsappHref = getWhatsAppHref();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-green-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex w-[min(1280px,calc(100%-2rem))] items-center justify-between py-2.5">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-40 md:h-12 md:w-48 overflow-hidden flex items-center">
            <Image
              src="/logo/logo-dark.png"
              alt="Muzari Exports Logo"
              fill
              className="object-contain scale-[2.8] translate-y-[2px]"
              priority
            />
          </div>
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
            "hidden rounded-full bg-green-900 px-6 font-bold !text-white shadow-md hover:bg-green-800 md:inline-flex"
          )}
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
