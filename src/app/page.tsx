import { Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TrustBar } from "@/components/TrustBar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { WhyBDCyber } from "@/components/WhyBDCyber";
import { Founder } from "@/components/Founder";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BookingHandler } from "@/components/BookingHandler";
import { SuccessModal } from "@/components/SuccessModal";
import { FAQ } from "@/components/FAQ";
import { CostComparison } from "@/components/CostComparison";
import { FeatureMatrix } from "@/components/FeatureMatrix";
import { TrustBadges } from "@/components/TrustBadges";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Black Diamond Cyber",
  description:
    "AI-powered website design and hosting for local service businesses. Custom websites for dental practices, HVAC, plumbing, electrical, roofing and more.",
  url: "https://bd-cyber.com",
  email: "blackdiamondcyber@gmail.com",
  founder: {
    "@type": "Person",
    name: "Erik Pearson",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canyon Lake",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: "US",
  priceRange: "$997 - $14,997",
  serviceType: [
    "Website Design",
    "Website Hosting",
    "SEO",
    "AI Website Generation",
    "AI Automation",
    "Lead Generation",
    "Review Management",
  ],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "997",
    highPrice: "4997",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Contact modal handler - intercepts #book links */}
      <BookingHandler />
      {/* Purchase success modal */}
      <Suspense>
        <SuccessModal />
      </Suspense>
      {/* Ambient background orbs */}
      <div className="amb">
        <div className="orb"></div>
        <div className="orb"></div>
      </div>
      {/* Grain texture overlay */}
      <div className="grain"></div>
      {/* Page content */}
      <div className="pg">
        <Nav />
        <Hero />
        <Marquee />
        <TrustBar />
        <Portfolio />
        <div className="sep"></div>
        <Services />
        <div className="sep"></div>
        <WhyBDCyber />
        <div className="sep"></div>
        <HowItWorks />
        <div className="sep"></div>
        <Pricing />
        <div className="sep"></div>
        <CostComparison />
        <div className="sep"></div>
        <FeatureMatrix />
        <div className="sep"></div>
        <FAQ />
        <div className="sep"></div>
        <TrustBadges />
        <div className="sep"></div>
        <Founder />
        <div className="sep"></div>
        <Reviews />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
