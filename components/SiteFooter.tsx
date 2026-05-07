import Link from "next/link";
import Image from "next/image";
import { footerLinks, getWhatsAppHref } from "@/lib/site-data";
import { Camera, Link as LinkIcon, Share, Mail, MapPin, Phone } from "lucide-react";

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
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 transition-colors hover:bg-amber-400 hover:text-green-950">
                <Camera className="h-5 w-5" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 transition-colors hover:bg-amber-400 hover:text-green-950">
                <LinkIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 transition-colors hover:bg-amber-400 hover:text-green-950">
                <Share className="h-5 w-5" />
              </Link>
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
                <a href="mailto:farm@muzariexports.com" className="transition-colors hover:text-amber-400">farm@muzariexports.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-amber-400" />
                <a href={whatsappHref} className="transition-colors hover:text-amber-400">WhatsApp Inquiry</a>
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
