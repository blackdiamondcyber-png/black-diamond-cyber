"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent, CSSProperties } from "react";

/* ─── palette ─── */
const C = {
  bg: "#FFFFFF",
  navy: "#1B2A4A",
  navyDark: "#142038",
  orange: "#E8792F",
  orangeDark: "#D06820",
  text: "#2C3E50",
  textLight: "#5A6C7E",
  border: "#E8ECF0",
  bgSoft: "#F8F9FA",
  star: "#F4B942",
  bannerBg: "#1a1a2e",
};

/* ─── scroll-reveal hook ─── */
function Section({
  children,
  style,
  id,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <div id={id} style={style}>
      {children}
    </div>
  );
}

/* ─── icons ─── */
function IconSnowflake() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      <path d="M12 6l-2-2M12 6l2-2M12 18l-2 2M12 18l2 2M6 12l-2-2M6 12l-2 2M18 12l2-2M18 12l2 2" />
    </svg>
  );
}
function IconFlame() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c4-4 8-7.58 8-12a8.002 8.002 0 00-15.632-2.401A8 8 0 004 10c0 4.42 4 8 8 12z" />
      <path d="M12 22c-1.5-1.5-3-3.5-3-6a3 3 0 016 0c0 2.5-1.5 4.5-3 6z" />
    </svg>
  );
}
function IconWrench() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
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
function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ─── data ─── */
const services = [
  {
    icon: <IconSnowflake />,
    title: "AC Repair & Installation",
    desc: "Fast, reliable air conditioning repair and new system installation to keep your home cool all summer long.",
    items: ["Same-Day AC Repair", "New System Installation", "Ductless Mini-Splits"],
  },
  {
    icon: <IconFlame />,
    title: "Heating Services",
    desc: "From furnace repairs to complete heating system installations — we keep your family warm when it matters most.",
    items: ["Furnace Repair", "Heat Pump Installation", "Radiant Heating"],
  },
  {
    icon: <IconWrench />,
    title: "Maintenance Plans",
    desc: "Prevent breakdowns and extend the life of your HVAC system with our comprehensive maintenance programs.",
    items: ["Bi-Annual Tune-Ups", "Priority Scheduling", "15% Parts Discount"],
  },
  {
    icon: <IconShield />,
    title: "Emergency 24/7 Service",
    desc: "No heat in January? AC out in August? We answer our phones 24/7 and dispatch technicians fast.",
    items: ["24/7 Availability", "90-Minute Response", "No Overtime Charges"],
  },
];

const testimonials = [
  {
    name: "Robert M.",
    text: "Our AC died on the hottest day of the year. Hill Country had a tech at our house in under an hour. Fixed it on the spot. Incredible service!",
    stars: 5,
  },
  {
    name: "Amanda & Josh K.",
    text: "We got three quotes for a new furnace and Hill Country was the most honest. Fair price, clean install, and the house has never been warmer.",
    stars: 5,
  },
  {
    name: "Patricia L.",
    text: "Been on their maintenance plan for 2 years now. Haven't had a single issue. They catch problems before they become expensive. Worth every penny.",
    stars: 5,
  },
];

const whyUs = [
  { title: "Licensed & Insured", desc: "TACLA licensed with $2M liability coverage" },
  { title: "20+ Years Experience", desc: "Serving the Hill Country since 2004" },
  { title: "Same-Day Service", desc: "Most repairs completed the same day you call" },
  { title: "Flat-Rate Pricing", desc: "Know the price before work begins — no surprises" },
];

const serviceAreas = [
  "Canyon Lake", "New Braunfels", "San Marcos", "Bulverde",
  "Spring Branch", "Wimberley", "Dripping Springs", "Kyle",
];

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Emergency Only" },
];

/* ─── main page ─── */
export default function HvacDemoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const sectionPad: CSSProperties = { padding: "80px 0", minHeight: "200px" };

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
    background: C.orange,
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

  return (
    <div style={wrap}>
      {/* ─── TOP BANNER ─── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "rgba(15, 23, 42, 0.95)",
          color: "#fff",
          fontSize: "12px",
          padding: "8px 16px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.75)" }}>
          <strong>LIVE DEMO</strong> built by Black Diamond Cyber
        </span>
        <span>&rarr;</span>
        <a
          href="/free-audit"
          style={{
            color: C.orange,
            fontWeight: 700,
            textDecoration: "none",
            borderBottom: `1px solid ${C.orange}`,
          }}
        >
          Get Your Free Audit
        </a>
      </div>

      {/* ─── NAV ─── */}
      <nav
        style={{
          position: "sticky",
          top: "40px",
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
                color: C.orange,
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              HC
            </div>
            <span style={{ fontWeight: 600, fontSize: "16px", color: C.navy }}>
              Hill Country Heating &amp; Air
            </span>
          </div>
          <div className="hvac-nav-links">
            {["Services", "Why Us", "Reviews", "Schedule"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
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
            <a href="#schedule" style={{ ...btn, padding: "10px 20px", fontSize: "13px", borderRadius: "6px" }}>
              Schedule Service
            </a>
          </div>
          <button
            className="hvac-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            <span style={{ display: "block", width: "24px", height: "2px", background: C.navy, borderRadius: "2px", transition: "transform .2s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: C.navy, borderRadius: "2px", transition: "opacity .2s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: C.navy, borderRadius: "2px", transition: "transform .2s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: "104px",
          left: 0,
          right: 0,
          zIndex: 99,
          background: "#fff",
          borderBottom: `1px solid ${C.border}`,
          boxShadow: "0 8px 32px rgba(0,0,0,.1)",
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}>
          {["Services", "Why Us", "Reviews", "Schedule"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: C.text,
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: `1px solid ${C.border}`,
                minHeight: "48px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {l}
            </a>
          ))}
          <a href="#schedule" onClick={() => setMenuOpen(false)} style={{ ...btn, justifyContent: "center", marginTop: "8px", minHeight: "48px" }}>
            Schedule Service
          </a>
        </div>
      )}

      {/* ─── HERO ─── */}
      <Section>
        <section
          style={{
            background: `linear-gradient(135deg, ${C.navy} 0%, #3A2010 50%, ${C.navyDark} 100%)`,
            padding: "100px 0 80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle snowflake/flame pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.04,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07' stroke='%23fff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
          {/* Decorative blobs */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${C.orange}20, transparent 70%)`,
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30%",
              left: "-10%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(59,130,246,.1), transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
          {/* Hero background photo */}
          <Image
            src="/images/ai/hvac-technician.jpg"
            alt="HVAC technician servicing outdoor unit"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.35,
              zIndex: 0,
            }}
          />
          {/* Dark gradient overlay on photo */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65))",
              zIndex: 0,
            }}
          />
          <div style={{ ...container, position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "640px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(255,255,255,.1)",
                  borderRadius: "40px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  color: C.orange,
                  fontWeight: 500,
                  marginBottom: "24px",
                }}
              >
                <IconPhone /> 24/7 Emergency Service Available
              </div>
              <h1 style={{ ...heading, fontSize: "clamp(32px, 5.5vw, 56px)", color: "#fff", marginBottom: "16px" }}>
                Keep Your Home{" "}
                <span style={{ color: C.orange }}>Comfortable</span>{" "}
                Year-Round
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,.75)", lineHeight: 1.7, marginBottom: "24px", maxWidth: "520px" }}>
                From AC repairs to furnace installations — Hill Country Heating &amp; Air has been keeping Texas families comfortable for over 20 years. Licensed, insured, and always on time.
              </p>
              {/* Stat badges */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
                {[
                  { icon: "", text: "4.8 Google Rating" },
                  { icon: "", text: "NATE Certified" },
                  { icon: "", text: "Same-Day Service" },
                ].map((s) => (
                  <span key={s.text} style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: "40px", padding: "6px 14px", fontSize: "13px", color: "rgba(255,255,255,.85)", fontWeight: 500,
                  }}>
                    <span>{s.icon}</span> {s.text}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="#schedule" style={btn}>
                  Schedule Service
                </a>
                <a href="tel:+18306254400" style={{ ...btnOutline, borderColor: "rgba(255,255,255,.3)", color: "#fff" }}>
                  Call (830) 625-4400
                </a>
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* ─── TRUST STRIP ─── */}
      <div style={{ background: C.bgSoft, borderBottom: `1px solid ${C.border}`, padding: "16px 0" }}>
        <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", flexWrap: "wrap", fontSize: "13px", color: C.textLight }}>
          {["TACLA Licensed", "BBB A+ Rated", "20+ Years Experience", "Satisfaction Guaranteed"].map((b) => (
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
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.orange, marginBottom: "8px" }}>
                Our Services
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)" }}>
                Heating &amp; Cooling Experts
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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

      {/* ─── WHY CHOOSE US ─── */}
      <Section id="why-us">
        <section style={{ ...sectionPad, background: C.bgSoft }}>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.orange, marginBottom: "8px" }}>
                Why Choose Us
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)" }}>
                The Hill Country Difference
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "24px",
              }}
            >
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "28px",
                    border: `1px solid ${C.border}`,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: `${C.orange}12`,
                      border: `2px solid ${C.orange}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <IconCheck />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: C.navy, marginBottom: "6px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: C.textLight, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
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
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.orange, marginBottom: "8px" }}>
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
                <span style={{ fontSize: "13px", color: C.textLight }}>(214 reviews on Google)</span>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.orange, marginBottom: "8px" }}>
                Service Areas
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)" }}>
                Proudly Serving the Hill Country
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
      <Section id="schedule">
        <section style={sectionPad}>
          <div style={container}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "36px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.orange, marginBottom: "8px" }}>
                  Schedule Service
                </p>
                <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 38px)", marginBottom: "8px" }}>
                  Request an Appointment
                </h2>
                <p style={{ fontSize: "14px", color: C.textLight }}>
                  Or call us at{" "}
                  <a href="tel:+18306254400" style={{ color: C.orange, fontWeight: 600, textDecoration: "none" }}>
                    (830) 625-4400
                  </a>
                </p>
              </div>

              {formSubmitted ? (
                <div
                  style={{
                    background: `${C.orange}10`,
                    border: `2px solid ${C.orange}`,
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
                    { label: "Phone Number", type: "tel", placeholder: "(830) 625-4400" },
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
                    <span style={{ fontSize: "13px", fontWeight: 600, color: C.navy }}>Service Type</span>
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
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>Heating Repair</option>
                      <option>Heating Installation</option>
                      <option>Maintenance / Tune-Up</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: C.navy }}>Preferred Date</span>
                    <input
                      type="date"
                      required
                      style={{
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: `1px solid ${C.border}`,
                        fontSize: "15px",
                        color: C.text,
                        outline: "none",
                        background: C.bgSoft,
                      }}
                    />
                  </label>

                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: C.navy }}>Urgency</span>
                    <select
                      defaultValue="routine"
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
                      <option value="routine">Routine Service</option>
                      <option value="urgent">Urgent — Need it this week</option>
                      <option value="emergency">Emergency — System is down</option>
                    </select>
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

      <Section>
        <section style={{ padding: "80px 0", background: C.bg }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, color: C.navy, marginBottom: "12px" }}>
              Our Work
            </h2>
            <p style={{ textAlign: "center", color: C.textLight, marginBottom: "48px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              See the difference quality installation makes
            </p>
            <div style={{ position: "relative", width: "100%", height: "480px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,.08)" }}>
              <Image src="/images/ai/hvac-before-after.jpg" alt="Before and after HVAC installation" fill style={{ objectFit: "cover" }} />
            </div>
            <p style={{ textAlign: "center", color: C.textLight, marginTop: "16px", fontSize: "14px" }}>
              Complete system replacement — old inefficient unit → new high-efficiency heat pump
            </p>
          </div>
        </section>
      </Section>


      <Section>
        <section style={{ padding: "80px 0", background: C.bgSoft }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, color: C.navy, marginBottom: "12px" }}>
              Meet Our Team
            </h2>
            <p style={{ textAlign: "center", color: C.textLight, marginBottom: "48px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Licensed, insured, and NATE-certified technicians
            </p>
            <div className="hvac-grid-3col" style={{ display: "grid", gap: "32px" }}>
              {[
                { img: "/images/ai/hvac-technician.jpg", name: "Marcus Johnson", role: "Lead Technician — 15 yrs experience" },
                { img: "/images/ai/hvac-team-truck.jpg", name: "Our Field Team", role: "Factory-trained & background-checked" },
                { img: "/images/ai/hvac-handshake.jpg", name: "Customer First", role: "100% satisfaction guaranteed" },
              ].map((m) => (
                <div key={m.name} style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,.06)" }}>
                  <div style={{ position: "relative", width: "100%", height: "320px" }}>
                    <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 600, color: C.navy, marginBottom: "4px" }}>{m.name}</h3>
                    <p style={{ fontSize: "14px", color: C.textLight }}>{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── HAPPY CLIENTS ─── */}
      <Section>
        <section style={{ padding: "80px 0", background: C.bg }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, color: C.navy, marginBottom: "12px" }}>
              Happy Customers
            </h2>
            <p style={{ textAlign: "center", color: C.textLight, marginBottom: "48px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Trusted by San Antonio homeowners since 2015
            </p>
            <div className="hvac-grid-2col" style={{ display: "grid", gap: "32px" }}>
              {[
                { img: "/images/ai/hvac-handshake.jpg", name: "David & Lisa R.", quote: "Our AC died in July — they had a new system installed the next day. Professional, fair pricing, and our energy bill dropped 40%." },
                { img: "/images/ai/hvac-team-truck.jpg", name: "Jennifer T.", quote: "Finally found an HVAC company that shows up on time and does what they say. Marcus and his crew are the real deal." },
              ].map((t) => (
                <div key={t.name} className="demo-client-card" style={{ display: "flex", gap: "24px", background: C.bgSoft, borderRadius: "16px", padding: "24px", alignItems: "center" }}>
                  <div style={{ position: "relative", width: "160px", minWidth: "160px", height: "160px", borderRadius: "12px", overflow: "hidden" }}>
                    <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "15px", color: C.text, lineHeight: 1.7, marginBottom: "12px", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: C.navy }}>— {t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── RESPONSIVE STYLES ─── */}
      {/* ─── FOOTER ─── */}
      <footer style={{ background: C.navy, color: "rgba(255,255,255,.7)", padding: "48px 0 100px" }}>
        <div style={container}>
          <div className="hvac-grid-footer" style={{ display: "grid", gap: "32px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: C.orange,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  HC
                </div>
                <span style={{ fontWeight: 600, fontSize: "15px", color: "#fff" }}>
                  Hill Country Heating &amp; Air
                </span>
              </div>
              <p style={{ fontSize: "13px", lineHeight: 1.7, maxWidth: "280px" }}>
                Keeping the Texas Hill Country comfortable since 2004. Licensed, insured, and committed to honest service.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Services
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                {["AC Repair", "Heating Installation", "Maintenance Plans", "Emergency Service"].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Hours
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                {hours.map((h) => (
                  <span key={h.day}>{h.day}: {h.time}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Contact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                <span>(830) 625-4400</span>
                <span>info@hillcountryhvac.com</span>
                <span>456 Main Street</span>
                <span>New Braunfels, TX 78130</span>
                <span style={{ marginTop: "4px", fontSize: "11px", opacity: 0.6 }}>
                  TACLA License #042198B
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
            &copy; 2026 Hill Country Heating &amp; Air. All rights reserved.
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
        <span>PageSpeed: <strong style={{ color: "#34D399" }}>96/100</strong></span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>Load Time: <strong style={{ color: "#34D399" }}>&lt;1s</strong></span>
        <a
          href="/free-audit"
          style={{
            background: C.orange,
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


      <style>{`
        * { box-sizing: border-box; margin: 0; }
        .hvac-grid-footer { grid-template-columns: 2fr 1fr 1fr 1fr; }
        .hvac-grid-3col { grid-template-columns: repeat(3, 1fr); }
        .hvac-grid-2col { grid-template-columns: repeat(2, 1fr); }
        .hvac-nav-links { display: flex; align-items: center; gap: 24px; }
        .hvac-hamburger { display: none; }
        input:focus, select:focus {
          border-color: ${C.orange} !important;
          box-shadow: 0 0 0 3px ${C.orange}20;
        }
        @media (max-width: 768px) {
          .hvac-grid-footer { grid-template-columns: 1fr !important; }
          .hvac-grid-3col { grid-template-columns: 1fr !important; }
          .hvac-grid-2col { grid-template-columns: 1fr !important; }
          .hvac-nav-links { display: none !important; }
          .hvac-hamburger { display: flex !important; }
          .demo-client-card { flex-direction: column !important; }
          .demo-client-card > div:first-child { width: 100% !important; min-width: unset !important; height: 220px !important; }
        }
      `}</style>
    </div>
  );
}
