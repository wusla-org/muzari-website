import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionVision from "@/components/MissionVision";
import OurProducts from "@/components/OurProducts";
import QualityStandards from "@/components/QualityStandards";
import IndustriesServed from "@/components/IndustriesServed";
import ClientReviews from "@/components/ClientReviews";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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
        <OurProducts />
        <QualityStandards />
        <IndustriesServed />
        <ClientReviews />
        <InquiryForm
          inquiryContent={content.settings}
          productOptions={content.products.map((product) => product.title)}
        />
      </main>
      <Footer settings={content.settings} />
      <FloatingWhatsApp />
    </>
  );
}
