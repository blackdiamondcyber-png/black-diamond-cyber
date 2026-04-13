import { Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Showcase } from "@/components/Showcase";
import { Founder } from "@/components/Founder";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BookingHandler } from "@/components/BookingHandler";
import { SuccessModal } from "@/components/SuccessModal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Black Diamond Cyber",
  legalName: "Black Diamond Cybersecurity Consulting LLC",
  description:
    "AI growth systems for local businesses. High-performance websites, AI search optimization (GEO), and automation systems. Built in 7 days. No contracts.",
  url: "https://bd-cyber.com",
  email: "blackdiamondcyber@gmail.com",
  founder: {
    "@type": "Person",
    "@id": "#erik-pearson",
    name: "Erik Pearson",
    jobTitle: "Founder & Developer",
    worksFor: { "@type": "Organization", name: "Black Diamond Cyber" },
    knowsAbout: [
      "Generative Engine Optimization",
      "AI search optimization",
      "dental practice marketing",
      "local SEO",
      "web development",
    ],
    sameAs: [
      "https://www.linkedin.com/in/erik-pearson-a1a2b2206/",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canyon Lake",
    addressRegion: "TX",
    postalCode: "78133",
    addressCountry: "US",
  },
  areaServed: "US",
  priceRange: "$$",
  serviceType: [
    "High-Performance Websites",
    "AI Search Optimization (GEO)",
    "Local SEO & Google Maps",
    "AI Chatbot",
    "Review Generation",
    "Missed Call Recovery",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Growth Systems",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "High-Performance Website",
          description:
            "Custom-designed website with online booking, built in 7 days.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Search Optimization (GEO)",
          description:
            "Get recommended by ChatGPT, Google AI, and Perplexity.",
        },
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GEO and why does it matter for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO (Generative Engine Optimization) is how you show up when customers ask AI tools like ChatGPT, Google AI Overviews, or Perplexity for recommendations. Instead of scrolling Google results, more people now ask AI for direct answers. GEO makes sure that answer is your business.",
      },
    },
    {
      "@type": "Question",
      name: "How is GEO different from regular SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO gets you ranked on Google's search results page. GEO gets you recommended inside AI-generated answers. Both matter — but AI search is growing fast, and most agencies don't offer GEO at all. We optimize for both simultaneously.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most websites are delivered in 7 business days. Complex builds take 10-14 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You own all the code, content, and design. No lock-in, no proprietary platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Month-to-month. Cancel anytime.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dental practices, HVAC, plumbing, med spas, electricians, roofing, and other local service businesses.",
      },
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Black Diamond Cyber",
  legalName: "Black Diamond Cybersecurity Consulting LLC",
  description:
    "AI growth systems for local businesses. Websites, GEO, and automation.",
  url: "https://bd-cyber.com",
  email: "blackdiamondcyber@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canyon Lake",
    addressRegion: "TX",
    postalCode: "78133",
    addressCountry: "US",
  },
  founder: { "@id": "#erik-pearson" },
  areaServed: "US",
  priceRange: "$$",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Contact modal handler - intercepts #book links */}
      <BookingHandler />
      {/* Purchase success modal */}
      <Suspense>
        <SuccessModal />
      </Suspense>
      {/* Grain texture overlay */}
      <div className="grain"></div>
      {/* Page content */}
      <div className="pg">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <HowItWorks />
          <Showcase />
          <Founder />
          <CTA />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
