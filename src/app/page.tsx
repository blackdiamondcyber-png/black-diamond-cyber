import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TrustBar } from "@/components/TrustBar";
import { Portfolio } from "@/components/Portfolio";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Founder } from "@/components/Founder";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BookingHandler } from "@/components/BookingHandler";

export default function Home() {
  return (
    <>
      {/* Contact modal handler - intercepts #book links */}
      <BookingHandler />
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
        <HowItWorks />
        <div className="sep"></div>
        <Pricing />
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
