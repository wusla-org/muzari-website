import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionVision from "@/components/MissionVision";
import TapiocaCollection from "@/components/TapiocaCollection";
import BananaSpotlight from "@/components/BananaSpotlight";
import QualityStandards from "@/components/QualityStandards";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import { getHomePageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getHomePageContent();

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <HeroSection hero={content.hero} image={content.heroImage} />
        <MissionVision content={content.missionVision} />
        <TapiocaCollection
          section={content.settings}
          products={content.products}
        />
        <BananaSpotlight
          section={content.settings}
          images={content.bananaGallery}
        />
        <QualityStandards standards={content.qualityStandards} />
        <InquiryForm
          inquiryContent={content.settings}
          productOptions={content.products.map((product) => product.title)}
        />
      </main>
      <Footer settings={content.settings} />
    </>
  );
}
