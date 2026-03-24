"use client";

import { useState, useEffect, useRef } from "react";
import type { FormEvent, CSSProperties } from "react";

/* ─── palette ─── */
const C = {
  bg: "#FFFFFF",
  navy: "#1A365D",
  navyDark: "#132B4D",
  blue: "#3182CE",
  blueSoft: "#EBF8FF",
  text: "#2D3748",
  textLight: "#5A6C7E",
  border: "#E2E8F0",
  bgSoft: "#F7FAFC",
  star: "#F4B942",
  red: "#E53E3E",
  bannerBg: "#1a1a2e",
};

/* ─── scroll-reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Section({
  children,
  style,
  id,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
  id?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      id={id}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity .7s ease, transform .7s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── icons ─── */
function IconDroplet() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  );
}
function IconPipe() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14h6v6H4zM14 4h6v6h-6zM10 14v-4h4V4" />
    </svg>
  );
}
function IconWaterHeater() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <circle cx="12" cy="14" r="3" />
      <path d="M10 6h4" />
      <path d="M9 22v-2M15 22v-2" />
    </svg>
  );
}
function IconWrench() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function IconBath() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z" />
      <path d="M6 12V5a2 2 0 012-2h1" />
      <path d="M7 20v2M17 20v2" />
    </svg>
  );
}
function IconSewer() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12a4 4 0 018 0" />
      <path d="M12 8v8" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={C.star} stroke={C.star} strokeWidth="1">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.42a16 16 0 006.49 6.49l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.7 2.05z" />
    </svg>
  );
}

/* ─── data ─── */
const services = [
  {
    icon: <IconDroplet />,
    title: "Drain Cleaning",
    desc: "Slow drains? Backed-up pipes? We use hydro-jetting and camera inspection to clear any clog — guaranteed.",
    items: ["Hydro-Jetting", "Camera Inspection", "Preventive Maintenance"],
  },
  {
    icon: <IconWaterHeater />,
    title: "Water Heater Services",
    desc: "From tank replacements to tankless upgrades — we install, repair, and maintain all water heater types.",
    items: ["Tank Replacement", "Tankless Installation", "Same-Day Repair"],
  },
  {
    icon: <IconWrench />,
    title: "Leak Detection & Repair",
    desc: "Hidden leaks waste water and money. We pinpoint and fix leaks with minimal disruption to your home.",
    items: ["Electronic Detection", "Slab Leak Repair", "Pipe Relining"],
  },
  {
    icon: <IconPipe />,
    title: "Repiping",
    desc: "Old galvanized or polybutylene pipes? We repipe entire homes with modern PEX for lasting reliability.",
    items: ["Whole-Home Repiping", "PEX Upgrades", "Code Compliance"],
  },
  {
    icon: <IconSewer />,
    title: "Sewer Line Service",
    desc: "Tree roots, age, and ground shifting wreak havoc on sewer lines. We repair and replace without tearing up your yard.",
    items: ["Trenchless Repair", "Root Removal", "Line Replacement"],
  },
  {
    icon: <IconBath />,
    title: "Bathroom Remodeling",
    desc: "Transform your bathroom with new fixtures, showers, and vanities — all handled by licensed plumbers.",
    items: ["Fixture Upgrades", "Shower Installation", "ADA Modifications"],
  },
];

const testimonials = [
  {
    name: "Carlos R.",
    text: "They fixed a leak under my slab that two other companies couldn't find. Clearwater saved us thousands in water damage. Can't recommend them enough.",
    stars: 5,
  },
  {
    name: "Sarah & Mike D.",
    text: "Our water heater died on a Sunday. They had a new one installed by Monday afternoon. Fair price, clean work, polite crew. Our go-to plumber now.",
    stars: 5,
  },
  {
    name: "Linda P.",
    text: "Had them repipe our entire 1970s house. They finished in two days, cleaned up perfectly, and the water pressure is amazing now. Worth every penny.",
    stars: 5,
  },
  {
    name: "James T.",
    text: "Called at 10 PM with a burst pipe. They talked me through shutting off the water and had someone here first thing in the morning. True professionals.",
    stars: 5,
  },
];

const serviceAreas = [
  "Canyon Lake", "New Braunfels", "San Marcos", "Seguin",
  "Kyle", "Buda", "Wimberley", "Dripping Springs",
];

const beforeAfter = [
  {
    title: "Kitchen Drain Restoration",
    before: "Severely corroded cast iron drain with 90% blockage",
    after: "New PVC drainage system with clean-out access points",
  },
  {
    title: "Water Heater Upgrade",
    before: "20-year-old 40-gallon tank with rust and sediment buildup",
    after: "Energy-efficient tankless unit — endless hot water, 40% lower bills",
  },
  {
    title: "Bathroom Remodel",
    before: "Dated 1980s bathroom with corroded fixtures and leaking shower",
    after: "Modern walk-in shower, new vanity, and updated plumbing throughout",
  },
];

/* ─── main page ─── */
export default function PlumbingDemoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  const wrap: CSSProperties = {
    fontFamily: "'Outfit', system-ui, -apple-system, sans-serif",
    color: C.text,
    background: C.bg,
    lineHeight: 1.6,
    WebkitFontSmoothing: "antialiased",
  };

  const container: CSSProperties = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const sectionPad: CSSProperties = { padding: "80px 0" };

  const heading: CSSProperties = {
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontWeight: 400,
    color: C.navy,
    lineHeight: 1.15,
  };

  const btn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: C.blue,
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    transition: "background .2s, transform .2s",
  };

  const btnOutline: CSSProperties = {
    ...btn,
    background: "transparent",
    border: `2px solid ${C.navy}`,
    color: C.navy,
  };

  const btnRed: CSSProperties = {
    ...btn,
    background: C.red,
  };

  return (
    <div style={wrap}>
      {/* ─── EMERGENCY BANNER ─── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10000,
          background: C.red,
          color: "#fff",
          fontSize: "13px",
          padding: "10px 16px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          fontWeight: 600,
        }}
      >
        <span>🚨 24/7 Emergency Plumbing Service</span>
        <a
          href="tel:+18305550199"
          style={{
            color: "#fff",
            textDecoration: "underline",
            fontWeight: 700,
          }}
        >
          Call Now: (830) 555-0199
        </a>
      </div>

      {/* ─── BDC TOP BANNER ─── */}
      <div
        style={{
          position: "fixed",
          top: "38px",
          left: 0,
          right: 0,
          zIndex: 9999,
          background: C.bannerBg,
          color: "#fff",
          fontSize: "12px",
          padding: "8px 16px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ opacity: 0.9 }}>
          🔷 <strong>LIVE DEMO</strong> built by Black Diamond Cyber
        </span>
        <span>&rarr;</span>
        <a
          href="/free-audit"
          style={{
            color: C.blue,
            fontWeight: 700,
            textDecoration: "none",
            borderBottom: `1px solid ${C.blue}`,
          }}
        >
          Get Your Free Audit
        </a>
      </div>

      {/* ─── NAV ─── */}
      <nav
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 100,
          background: "rgba(255,255,255,.95)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${C.border}`,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: C.navy,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: C.blue,
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              CW
            </div>
            <span style={{ fontWeight: 600, fontSize: "16px", color: C.navy }}>
              Clearwater Plumbing Co.
            </span>
          </div>
          <div className="plumb-nav-links">
            {["Services", "Projects", "Reviews", "Book"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: C.textLight,
                  textDecoration: "none",
                  transition: "color .2s",
                }}
              >
                {l}
              </a>
            ))}
            <a href="#book" style={{ ...btn, padding: "10px 20px", fontSize: "13px", borderRadius: "6px" }}>
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <Section>
        <section
          style={{
            background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyDark} 100%)`,
            padding: "100px 0 80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${C.blue}15, transparent 70%)`,
            }}
          />
          <div style={{ ...container, position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "640px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: `${C.red}30`,
                  borderRadius: "40px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  color: "#FF9999",
                  fontWeight: 600,
                  marginBottom: "24px",
                }}
              >
                Emergency? Call (830) 555-0199 — We Answer 24/7
              </div>
              <h1 style={{ ...heading, fontSize: "clamp(36px, 5.5vw, 56px)", color: "#fff", marginBottom: "16px" }}>
                Fast, Reliable Plumbing —{" "}
                <span style={{ color: C.blue }}>Guaranteed</span>
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,.75)", lineHeight: 1.7, marginBottom: "16px", maxWidth: "520px" }}>
                From clogged drains to full repiping — Clearwater Plumbing Co. has been the Hill Country&apos;s most trusted plumber for over 15 years. Licensed, bonded, and always transparent.
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,.8)",
                  marginBottom: "32px",
                }}
              >
                <span style={{ fontWeight: 700, color: "#fff" }}>Service call: $79</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <span>Includes diagnosis. Flat-rate quotes before any work begins.</span>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="#book" style={btn}>
                  Book Now
                </a>
                <a href="tel:+18305550199" style={btnRed}>
                  Emergency? Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* ─── TRUST STRIP ─── */}
      <div style={{ background: C.bgSoft, borderBottom: `1px solid ${C.border}`, padding: "16px 0" }}>
        <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", flexWrap: "wrap", fontSize: "13px", color: C.textLight }}>
          {["Licensed & Bonded", "15+ Years Experience", "4.8★ on Google (89 reviews)", "Flat-Rate Pricing"].map((b) => (
            <span key={b} style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 500 }}>
              <IconCheck /> {b}
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <Section id="services" style={sectionPad}>
        <section>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.blue, marginBottom: "8px" }}>
                Our Services
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)" }}>
                Full-Service Plumbing Solutions
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {services.map((s) => (
                <div
                  key={s.title}
                  style={{
                    background: C.bgSoft,
                    borderRadius: "12px",
                    padding: "32px",
                    border: `1px solid ${C.border}`,
                    transition: "box-shadow .3s, transform .3s",
                  }}
                >
                  <div style={{ marginBottom: "16px" }}>{s.icon}</div>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: C.navy, marginBottom: "8px" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: C.textLight, marginBottom: "16px", lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {s.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "13px",
                          color: C.text,
                          padding: "4px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <IconCheck /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── BEFORE / AFTER ─── */}
      <Section id="projects">
        <section style={{ ...sectionPad, background: C.blueSoft }}>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.blue, marginBottom: "8px" }}>
                Recent Projects
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)" }}>
                Before &amp; After
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {beforeAfter.map((p) => (
                <div
                  key={p.title}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div style={{ padding: "20px 24px", borderBottom: `1px solid ${C.border}` }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 600, color: C.navy }}>
                      {p.title}
                    </h3>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <div style={{ padding: "20px", borderRight: `1px solid ${C.border}` }}>
                      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.red, marginBottom: "8px" }}>
                        Before
                      </div>
                      <div
                        style={{
                          background: `${C.red}08`,
                          borderRadius: "8px",
                          padding: "20px",
                          minHeight: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <span style={{ fontSize: "28px" }}>⚠️</span>
                      </div>
                      <p style={{ fontSize: "13px", color: C.textLight, lineHeight: 1.6 }}>
                        {p.before}
                      </p>
                    </div>
                    <div style={{ padding: "20px" }}>
                      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#38A169", marginBottom: "8px" }}>
                        After
                      </div>
                      <div
                        style={{
                          background: "#38A16908",
                          borderRadius: "8px",
                          padding: "20px",
                          minHeight: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <span style={{ fontSize: "28px" }}>✅</span>
                      </div>
                      <p style={{ fontSize: "13px", color: C.textLight, lineHeight: 1.6 }}>
                        {p.after}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── TESTIMONIALS ─── */}
      <Section id="reviews" style={sectionPad}>
        <section>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.blue, marginBottom: "8px" }}>
                Customer Reviews
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)", marginBottom: "12px" }}>
                What Our Customers Say
              </h2>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: C.bgSoft, borderRadius: "40px", padding: "8px 20px", border: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <IconStar key={s} />
                  ))}
                </div>
                <span style={{ fontSize: "14px", fontWeight: 600, color: C.navy }}>4.8</span>
                <span style={{ fontSize: "13px", color: C.textLight }}>(89 reviews on Google)</span>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    background: C.bgSoft,
                    borderRadius: "12px",
                    padding: "28px",
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
                    {Array.from({ length: t.stars }, (_, i) => (
                      <IconStar key={i} />
                    ))}
                  </div>
                  <p style={{ fontSize: "15px", color: C.text, lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: C.navy }}>
                    &mdash; {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── SERVICE AREAS ─── */}
      <Section>
        <section style={{ ...sectionPad, background: C.bgSoft }}>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.blue, marginBottom: "8px" }}>
                Service Areas
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)" }}>
                Serving the Hill Country &amp; Beyond
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  style={{
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "16px 20px",
                    border: `1px solid ${C.border}`,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: C.navy,
                  }}
                >
                  <IconMapPin /> {area}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── BOOKING FORM ─── */}
      <Section id="book">
        <section style={sectionPad}>
          <div style={container}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "36px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.blue, marginBottom: "8px" }}>
                  Book Service
                </p>
                <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 38px)", marginBottom: "8px" }}>
                  Schedule a Plumber
                </h2>
                <p style={{ fontSize: "14px", color: C.textLight }}>
                  Or call us at{" "}
                  <a href="tel:+18305550199" style={{ color: C.blue, fontWeight: 600, textDecoration: "none" }}>
                    (830) 555-0199
                  </a>
                </p>
              </div>

              {formSubmitted ? (
                <div
                  style={{
                    background: `${C.blue}10`,
                    border: `2px solid ${C.blue}`,
                    borderRadius: "12px",
                    padding: "40px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "12px" }}>&#10003;</div>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: C.navy, marginBottom: "8px" }}>
                    Demo Submission Received!
                  </h3>
                  <p style={{ fontSize: "14px", color: C.textLight }}>
                    This is a demo — no actual appointment was booked. But this is exactly how your customers would schedule service online!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "32px",
                    border: `1px solid ${C.border}`,
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {[
                    { label: "Full Name", type: "text", placeholder: "John Smith" },
                    { label: "Phone Number", type: "tel", placeholder: "(830) 555-0000" },
                    { label: "Email Address", type: "email", placeholder: "john@example.com" },
                  ].map((f) => (
                    <label key={f.label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: C.navy }}>{f.label}</span>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        style={{
                          padding: "12px 16px",
                          borderRadius: "8px",
                          border: `1px solid ${C.border}`,
                          fontSize: "15px",
                          color: C.text,
                          outline: "none",
                          transition: "border-color .2s",
                          background: C.bgSoft,
                        }}
                      />
                    </label>
                  ))}

                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: C.navy }}>Service Needed</span>
                    <select
                      required
                      defaultValue=""
                      style={{
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: `1px solid ${C.border}`,
                        fontSize: "15px",
                        color: C.text,
                        outline: "none",
                        background: C.bgSoft,
                        cursor: "pointer",
                      }}
                    >
                      <option value="" disabled>Select a service...</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater Repair/Install</option>
                      <option>Leak Detection & Repair</option>
                      <option>Repiping</option>
                      <option>Sewer Line Service</option>
                      <option>Bathroom Remodel</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: C.navy }}>Describe the Issue</span>
                    <textarea
                      placeholder="Tell us about the problem..."
                      rows={3}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: `1px solid ${C.border}`,
                        fontSize: "15px",
                        color: C.text,
                        outline: "none",
                        background: C.bgSoft,
                        resize: "vertical",
                        fontFamily: "inherit",
                      }}
                    />
                  </label>

                  <button type="submit" style={{ ...btn, justifyContent: "center", marginTop: "8px", border: "none" }}>
                    Schedule Service
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: C.navy, color: "rgba(255,255,255,.7)", padding: "48px 0 100px" }}>
        <div style={container}>
          <div className="plumb-grid-footer" style={{ display: "grid", gap: "32px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: C.blue,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  CW
                </div>
                <span style={{ fontWeight: 600, fontSize: "15px", color: "#fff" }}>
                  Clearwater Plumbing Co.
                </span>
              </div>
              <p style={{ fontSize: "13px", lineHeight: 1.7, maxWidth: "280px" }}>
                The Hill Country&apos;s trusted plumber since 2009. Licensed, bonded, and insured. We stand behind every job.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Services
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                {["Drain Cleaning", "Water Heaters", "Leak Repair", "Repiping", "Sewer Lines"].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Hours
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                <span>Mon–Fri: 7:00 AM – 6:00 PM</span>
                <span>Sat: 8:00 AM – 2:00 PM</span>
                <span style={{ color: "#FC8181", fontWeight: 600 }}>24/7 Emergency Service</span>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Contact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                <span>(830) 555-0199</span>
                <span>info@clearwaterplumbing.com</span>
                <span>789 Water St</span>
                <span>San Marcos, TX 78666</span>
                <span style={{ marginTop: "4px", fontSize: "11px", opacity: 0.6 }}>
                  TX Master Plumber License #M-42198
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,.1)",
              marginTop: "40px",
              paddingTop: "20px",
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            &copy; 2026 Clearwater Plumbing Co. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ─── BOTTOM FLOATING BAR ─── */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: C.bannerBg,
          color: "rgba(255,255,255,.8)",
          fontSize: "13px",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
          borderTop: "1px solid rgba(255,255,255,.1)",
        }}
      >
        <span>
          Built by <strong style={{ color: "#fff" }}>Black Diamond Cyber</strong>
        </span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>PageSpeed: <strong style={{ color: "#34D399" }}>95/100</strong></span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>Load Time: <strong style={{ color: "#34D399" }}>&lt;1s</strong></span>
        <a
          href="/free-audit"
          style={{
            background: C.blue,
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "6px",
            fontWeight: 700,
            fontSize: "12px",
            textDecoration: "none",
            marginLeft: "8px",
          }}
        >
          Build Mine &rarr;
        </a>
      </div>

      {/* ─── RESPONSIVE STYLES ─── */}
      <style>{`
        * { box-sizing: border-box; margin: 0; }
        .plumb-grid-footer { grid-template-columns: 2fr 1fr 1fr 1fr; }
        .plumb-nav-links { display: flex; align-items: center; gap: 24px; }
        input:focus, select:focus, textarea:focus {
          border-color: ${C.blue} !important;
          box-shadow: 0 0 0 3px ${C.blue}20;
        }
        @media (max-width: 768px) {
          .plumb-grid-footer { grid-template-columns: 1fr !important; }
          .plumb-nav-links > a:not(:last-child) { display: none !important; }
        }
      `}</style>
    </div>
  );
}
