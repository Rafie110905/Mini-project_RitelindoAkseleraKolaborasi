import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import StoreTypes from "@/components/StoreTypes";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Interior from "@/components/Interior";
import FAQ, { faqs } from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyWA from "@/components/StickyWA";
import { SITE_URL } from "@/lib/config";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ritelindo Group",
    legalName: "Ritelindo Akselera Kolaborasi",
    url: SITE_URL,
    description: "Pabrik rak minimarket, rak gudang, dan perlengkapan retail.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <StoreTypes />
        <Packages />
        <Process />
        <Interior />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
