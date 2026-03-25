import { Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Showcase } from "@/components/Showcase";
import { Founder } from "@/components/Founder";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BookingHandler } from "@/components/BookingHandler";
import { SuccessModal } from "@/components/SuccessModal";

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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I trust a new agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Black Diamond Cyber is new, but its founder is not. Erik Pearson is a Patterson Dental territory sales rep who has worked inside 400+ dental practices across Austin and San Antonio. He is also a self-taught developer who has shipped 8 production web applications.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not happy with the website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your site does not score 90+ on Google PageSpeed within 30 days, we rebuild it at no charge. We also offer unlimited revisions during the build process. No contracts means you can walk away anytime.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most websites are delivered in 3-7 business days depending on the tier. Starter sites are ready in 3-5 days, Premium and Cinematic sites take 10-14 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own my website if I cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100%. You own all the code, content, and design. We hand over everything — no hostage situations, no proprietary lock-in.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No contracts, ever. Pay month-to-month for hosting and maintenance. Cancel anytime with 30 days notice. Your site is yours.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from Wix or Squarespace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build with Next.js — the same framework used by Nike, Hulu, and TikTok. Your site loads in under 2 seconds (Wix averages 6-8s), ranks better on Google, and you own the code.",
      },
    },
    {
      "@type": "Question",
      name: "What are Growth Systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Growth Systems bundle your website with business automation: AI review requests, missed call text-back, appointment reminders, lead nurture sequences, and Google Business Profile optimization.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with dental practices, HVAC companies, plumbing contractors, electricians, roofing companies, med spas, and other local service businesses. Each industry gets tailored design and messaging.",
      },
    },
  ],
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
        <Hero />
        <Marquee />
        <Services />
        <HowItWorks />
        <Showcase />
        <Founder />
        <BeforeAfter />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
