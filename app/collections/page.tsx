import Navbar from "@/components/Navbar";
import TapiocaCollection from "@/components/TapiocaCollection";
import BananaSpotlight from "@/components/BananaSpotlight";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getHomePageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Muzari Exports | Premium Collections",
  description: "Explore Muzari Exports' premium bulk collections including Grade A Kerala Tapioca and Nendran Bananas.",
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
