import Navbar from "@/components/Navbar";
import TapiocaCollection from "@/components/TapiocaCollection";
import BananaSpotlight from "@/components/BananaSpotlight";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getHomePageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://muzariexports.com";

export const metadata = {
  title: "Premium Export Collections",
  description:
    "Browse Muzari Exports' bulk collections: Grade A Kerala Tapioca (whole root, chips, organic starch) and Nendran Bananas. ISO-certified. B2B pricing on request.",
  openGraph: {
    title: "Premium Kerala Export Collections | Muzari Exports",
    description:
      "Grade A Kerala Tapioca and Nendran Banana for bulk B2B export. ISO-certified, Global GAP compliant. Request pricing today.",
    images: [
      {
        url: "/logo/muzari-logo-full.png",
        width: 2240,
        height: 980,
        alt: "Muzari Exports — Premium Kerala Export Collections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/logo/muzari-logo-full.png", alt: "Muzari Exports Collections" }],
  },
  alternates: {
    canonical: `${siteUrl}/collections`,
  },
};

export default async function Collections() {
  const content = await getHomePageContent();

  return (
    <>
      <Navbar />
      <main className="page-shell pt-28">
        <TapiocaCollection
          section={content.settings}
          products={content.products}
        />
        <BananaSpotlight
          section={content.settings}
          images={content.bananaGallery}
        />
      </main>
      <Footer settings={content.settings} />
      <FloatingWhatsApp />
    </>
  );
}
