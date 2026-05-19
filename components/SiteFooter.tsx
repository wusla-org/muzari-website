import Link from "next/link";
import Image from "next/image";
import { footerLinks, getWhatsAppHref } from "@/lib/site-data";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  const whatsappHref = getWhatsAppHref();

  return (
    <footer className="bg-green-950 pt-20 pb-10 text-white">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-24 w-64 overflow-hidden flex items-center -ml-4">
                <Image
                  src="/logo/logo-light.png"
                  alt="Muzari Exports Logo"
                  fill
                  className="object-contain scale-[3.2]"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-green-100/70">
              Connecting the world to India&apos;s finest agricultural produce. 
              Grown with tradition, exported with precision.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/search/top/?q=Muzari%20exports" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 transition-colors hover:bg-amber-400 hover:text-green-950" aria-label="Facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 transition-colors hover:bg-amber-400 hover:text-green-950" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-green-100/70">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-amber-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-green-100/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <span>Kerala, India <br /> Agricultural Export Hub</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-amber-400" />
                <a href="mailto:muzariexports@muzari.in" className="transition-colors hover:text-amber-400">muzariexports@muzari.in</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <div className="space-y-1">
                  <a href="tel:+918590838554" className="block transition-colors hover:text-amber-400">+91 85908 38554</a>
                  <a href="tel:+919656808554" className="block transition-colors hover:text-amber-400">+91 96568 08554</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Our Mission</h4>
            <p className="text-sm leading-relaxed text-green-100/70">
              We empower local farmers by providing them direct access to global markets, ensuring fair trade and sustainable farming.
            </p>
            <div className="rounded-2xl bg-green-900/50 p-4 border border-green-800">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Global Shipping</p>
              <p className="text-sm font-medium">CIF & FOB Terms Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-green-100/40">
          <p>&copy; {new Date().getFullYear()} Muzari Farms & Exports. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-amber-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
