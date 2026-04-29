import Link from "next/link";
import { footerLinks } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="bg-green-950 py-10">
      <div className="mx-auto flex w-[min(1280px,calc(100%-2rem))] flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-serif text-lg font-bold text-green-200">Muzari</span>
        <p className="text-center text-sm font-medium text-green-400/70">
          &copy; {new Date().getFullYear()} Muzari Farms &amp; Exports. Grown with Care.
        </p>
        <div className="flex gap-6 text-sm font-medium text-green-400/70">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-green-300">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
