import { Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TrustBar } from "@/components/TrustBar";
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
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Showcase } from "@/components/Showcase";
import { DentalROICalculator } from "@/components/DentalROICalculator";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Black Diamond Cyber",
  legalName: "Black Diamond Cyber LLC",
  description:
    "AI-powered website design for local service businesses. Custom websites delivered in 7 days. No contracts. You own the code.",
  url: "https://bd-cyber.com",
  email: "blackdiamondcyber@gmail.com",
  founder: {
    "@type": "Person",
    name: "Erik Pearson",
    jobTitle: "Founder & CEO",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canyon Lake",
    addressRegion: "TX",
    postalCode: "78133",
    addressCountry: "US",
  },
  areaServed: ["Austin", "San Antonio", "Texas"],
  priceRange: "$997-$4997",
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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Black Diamond Cyber",
  description:
    "AI-powered website design and growth systems for dental practices and local businesses",
  url: "https://bd-cyber.com",
  email: "blackdiamondcyber@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canyon Lake",
    addressRegion: "TX",
    postalCode: "78133",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Erik Pearson",
  },
  areaServed: ["Austin", "San Antonio", "Texas"],
  priceRange: "$997-$4997",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
      {/* Page content — restructured for conversion */}
      <div className="pg">
        <Nav />
        <Hero />
        <Marquee />
        <TrustBar />
        <div className="sep" />
        <Services />
        <div className="sep" />
        <WhyBDCyber />
        <div className="sep" />
        <HowItWorks />
        <div className="sep" />
        <BeforeAfter />
        <div className="sep" />
        <Founder />
        <div className="sep" />
        <Reviews />
        <div className="sep" />
        <DentalROICalculator />
        <div className="sep" />
        <Showcase />
        <div className="sep" />
        <Pricing />
        <div className="sep" />
        <FAQ />
        <CTA />
        <Footer />
      </div>
      {/* Sticky mobile CTA */}
      <StickyMobileCTA />
    </>
  );
}
