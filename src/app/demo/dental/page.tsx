"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type { FormEvent, CSSProperties } from "react";

/* ─── palette ─── */
const C = {
  bg: "#FFFFFF",
  navy: "#1E3A5F",
  navyDark: "#152C4A",
  teal: "#4ECDC4",
  tealDark: "#3DBDB4",
  text: "#2C3E50",
  textLight: "#5A6C7E",
  border: "#E8ECF0",
  bgSoft: "#F7F9FC",
  star: "#F4B942",
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

/* ─── icons (inline SVGs) ─── */
function IconTooth() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9.5 2 7 3.5 7 6c0 2 .5 4 0 7-.3 2-1 5-1 5s2 2 3.5 0c1-1.5 1.5-3 2.5-3s1.5 1.5 2.5 3c1.5 2 3.5 0 3.5 0s-.7-3-1-5c-.5-3 0-5 0-7 0-2.5-2.5-4-5-4z" />
    </svg>
  );
}
function IconSparkle() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.42a16 16 0 006.49 6.49l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.7 2.05z" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── data ─── */
const services = [
  {
    icon: <IconTooth />,
    title: "General Dentistry",
    desc: "Comprehensive care including cleanings, fillings, checkups, and preventive treatments for the whole family.",
    items: ["Routine Cleanings", "Dental Fillings", "Oral Exams & X-Rays"],
  },
  {
    icon: <IconSparkle />,
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with modern cosmetic procedures tailored to your unique goals.",
    items: ["Teeth Whitening", "Porcelain Veneers", "Dental Bonding"],
  },
  {
    icon: <IconPhone />,
    title: "Emergency Care",
    desc: "Dental emergencies can't wait. We offer same-day appointments for urgent dental needs.",
    items: ["Same-Day Appointments", "Toothache Relief", "Broken Tooth Repair"],
  },
];

const testimonials = [
  {
    name: "Jennifer R.",
    text: "Best dental experience ever! Dr. Mitchell and her team are amazing. The office is beautiful and everyone is so welcoming.",
    stars: 5,
  },
  {
    name: "Mark & Lisa T.",
    text: "Finally found a dentist my kids actually like. So gentle and patient! We switched the whole family over.",
    stars: 5,
  },
  {
    name: "David S.",
    text: "Had an emergency on a Saturday and they got me in the same day. Professional, fast, and painless. Highly recommend!",
    stars: 5,
  },
];

const hours = [
  { day: "Monday", time: "8:00 AM – 5:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 5:00 PM" },
  { day: "Thursday", time: "8:00 AM – 5:00 PM" },
  { day: "Friday", time: "8:00 AM – 5:00 PM" },
  { day: "Saturday", time: "9:00 AM – 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

/* ─── main page ─── */
export default function DentalDemoPage() {
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
    background: C.teal,
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
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.75)" }}>
          This is a <strong>LIVE DEMO</strong> built by Black Diamond Cyber in 48 hours.
        </span>
        <span>Want one for your practice?</span>
        <a
          href="/free-audit"
          style={{
            color: C.teal,
            fontWeight: 700,
            textDecoration: "none",
            borderBottom: `1px solid ${C.teal}`,
          }}
        >
          Get Your Free Audit &rarr;
        </a>
      </div>

      {/* ─── DENTAL NAV ─── */}
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
                color: "#fff",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              CL
            </div>
            <span style={{ fontWeight: 600, fontSize: "16px", color: C.navy }}>
              Canyon Lake Family Dentistry
            </span>
          </div>
          <div className="demo-nav-links">
            {["Services", "About", "Reviews", "Book"].map((l) => (
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
          <button
            className="demo-hamburger"
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
          {["Services", "About", "Reviews", "Book"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
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
          <a href="#book" onClick={() => setMenuOpen(false)} style={{ ...btn, justifyContent: "center", marginTop: "8px", minHeight: "48px" }}>
            Book Now
          </a>
        </div>
      )}

      {/* ─── HERO ─── */}
      <Section>
        <section
          style={{
            background: `linear-gradient(135deg, ${C.navy} 0%, #1A4A5A 50%, ${C.navyDark} 100%)`,
            padding: "100px 0 80px",
            marginTop: "0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle tooth pattern background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.04,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C9.5 2 7 3.5 7 6c0 2 .5 4 0 7-.3 2-1 5-1 5s2 2 3.5 0c1-1.5 1.5-3 2.5-3s1.5 1.5 2.5 3c1.5 2 3.5 0 3.5 0s-.7-3-1-5c-.5-3 0-5 0-7 0-2.5-2.5-4-5-4z' fill='%23fff' fill-opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
          {/* Decorative blob */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${C.teal}20, transparent 70%)`,
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
              background: `radial-gradient(circle, ${C.teal}10, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
          {/* Hero background photo */}
          <Image
            src="/images/dental-reception.jpg"
            alt="Modern dental office reception"
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
                  color: C.teal,
                  fontWeight: 500,
                  marginBottom: "24px",
                }}
              >
                <IconClock /> Mon–Fri 8am–5pm &middot; Sat 9am–1pm
              </div>
              <h1 style={{ ...heading, fontSize: "clamp(32px, 5.5vw, 56px)", color: "#fff", marginBottom: "16px" }}>
                Welcome to <br />
                <span style={{ color: C.teal }}>Canyon Lake</span> Family Dentistry
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,.75)", lineHeight: 1.7, marginBottom: "24px", maxWidth: "520px" }}>
                Gentle, modern dentistry for your whole family. From routine cleanings to cosmetic transformations — we make every visit comfortable.
              </p>
              {/* Stat badges */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
                {[
                  { icon: "⭐", text: "4.9 Google Rating" },
                  { icon: "🦷", text: "12 Years Trusted" },
                  { icon: "📱", text: "Online Booking" },
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
                <a href="#book" style={btn}>
                  Book Your Appointment
                </a>
                <a href="tel:+18309642100" style={{ ...btnOutline, borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}>
                  Call (830) 964-2100
                </a>
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* ─── TRUST STRIP ─── */}
      <div style={{ background: C.bgSoft, borderBottom: `1px solid ${C.border}`, padding: "16px 0" }}>
        <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", flexWrap: "wrap", fontSize: "13px", color: C.textLight }}>
          {["ADA Member", "Invisalign Provider", "Accepting New Patients", "Most Insurance Accepted"].map((b) => (
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
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.teal, marginBottom: "8px" }}>
                Our Services
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)" }}>
                Comprehensive Dental Care
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
                    {s.items.map((i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "13px",
                          color: C.text,
                          padding: "4px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <IconCheck /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── ABOUT ─── */}
      <Section id="about">
        <section style={{ ...sectionPad, background: C.bgSoft }}>
          <div style={container}>
            <div className="demo-grid-2col" style={{ display: "grid", gap: "48px", alignItems: "center" }}>
              {/* Photo placeholder */}
              <div
                style={{
                  background: `linear-gradient(135deg, ${C.navy}, ${C.teal})`,
                  borderRadius: "16px",
                  aspectRatio: "4/3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,.4)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Dr. Mitchell & Team Photo
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.teal, marginBottom: "8px" }}>
                  About Our Practice
                </p>
                <h2 style={{ ...heading, fontSize: "clamp(26px, 3.5vw, 38px)", marginBottom: "16px" }}>
                  Dr. Sarah Mitchell & Team
                </h2>
                <p style={{ fontSize: "15px", color: C.textLight, lineHeight: 1.8, marginBottom: "16px" }}>
                  We treat every patient like family. With 15+ years of experience in Canyon Lake, we combine the latest technology with a gentle touch to provide the highest quality dental care.
                </p>
                <p style={{ fontSize: "15px", color: C.textLight, lineHeight: 1.8, marginBottom: "24px" }}>
                  From your child&apos;s first visit to advanced cosmetic procedures, our team is dedicated to making every appointment comfortable and stress-free.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  {["ADA Member", "15+ Years Experience", "Invisalign Certified", "Pediatric Friendly"].map((b) => (
                    <span
                      key={b}
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        padding: "6px 14px",
                        borderRadius: "6px",
                        background: `${C.teal}15`,
                        color: C.navy,
                        border: `1px solid ${C.teal}30`,
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* ─── TESTIMONIALS ─── */}
      <Section id="reviews" style={sectionPad}>
        <section>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.teal, marginBottom: "8px" }}>
                Patient Reviews
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)", marginBottom: "12px" }}>
                What Our Patients Say
              </h2>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: C.bgSoft, borderRadius: "40px", padding: "8px 20px", border: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <IconStar key={s} />
                  ))}
                </div>
                <span style={{ fontSize: "14px", fontWeight: 600, color: C.navy }}>4.9</span>
                <span style={{ fontSize: "13px", color: C.textLight }}>(127 reviews on Google)</span>
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

      {/* ─── BOOKING FORM ─── */}
      <Section id="book">
        <section style={{ ...sectionPad, background: C.bgSoft }}>
          <div style={container}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "36px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.teal, marginBottom: "8px" }}>
                  Schedule a Visit
                </p>
                <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 38px)", marginBottom: "8px" }}>
                  Book Your Appointment
                </h2>
                <p style={{ fontSize: "14px", color: C.textLight }}>
                  Or call us at{" "}
                  <a href="tel:+18309642100" style={{ color: C.teal, fontWeight: 600, textDecoration: "none" }}>
                    (830) 964-2100
                  </a>
                </p>
              </div>

              {formSubmitted ? (
                <div
                  style={{
                    background: `${C.teal}10`,
                    border: `2px solid ${C.teal}`,
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
                    This is a demo — no actual appointment was booked. But this is exactly how your patients would book online!
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
                    { label: "Full Name", type: "text", placeholder: "Jane Smith" },
                    { label: "Phone Number", type: "tel", placeholder: "(830) 555-0000" },
                    { label: "Email Address", type: "email", placeholder: "jane@example.com" },
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
                      <option>General Checkup & Cleaning</option>
                      <option>Teeth Whitening</option>
                      <option>Veneers Consultation</option>
                      <option>Emergency Dental Care</option>
                      <option>Invisalign Consultation</option>
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

                  <button type="submit" style={{ ...btn, justifyContent: "center", marginTop: "8px", border: "none" }}>
                    Book Your Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── LOCATION & HOURS ─── */}
      <Section id="contact" style={sectionPad}>
        <section>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: C.teal, marginBottom: "8px" }}>
                Find Us
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 42px)" }}>
                Location & Hours
              </h2>
            </div>
            <div className="demo-grid-2col" style={{ display: "grid", gap: "32px", alignItems: "start" }}>
              {/* Map placeholder */}
              <div
                style={{
                  background: C.bgSoft,
                  borderRadius: "12px",
                  border: `1px solid ${C.border}`,
                  aspectRatio: "4/3",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: C.textLight,
                }}
              >
                <IconMapPin />
                <span style={{ fontSize: "14px", fontWeight: 500 }}>123 Dental Way</span>
                <span style={{ fontSize: "13px" }}>Canyon Lake, TX 78133</span>
              </div>

              {/* Hours table */}
              <div
                style={{
                  background: C.bgSoft,
                  borderRadius: "12px",
                  border: `1px solid ${C.border}`,
                  padding: "28px",
                }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: C.navy, marginBottom: "16px" }}>
                  Office Hours
                </h3>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} style={{ borderBottom: `1px solid ${C.border}` }}>
                        <td style={{ padding: "10px 0", fontSize: "14px", fontWeight: 500, color: C.navy }}>
                          {h.day}
                        </td>
                        <td
                          style={{
                            padding: "10px 0",
                            fontSize: "14px",
                            color: h.time === "Closed" ? "#E74C3C" : C.textLight,
                            textAlign: "right",
                            fontWeight: h.time === "Closed" ? 600 : 400,
                          }}
                        >
                          {h.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: C.textLight }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <IconMapPin /> 123 Dental Way, Canyon Lake, TX 78133
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <IconPhone /> (830) 964-2100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* ─── DENTAL FOOTER ─── */}
      <footer style={{ background: C.navy, color: "rgba(255,255,255,.7)", padding: "48px 0 100px" }}>
        <div style={container}>
          <div className="demo-grid-footer" style={{ display: "grid", gap: "32px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: C.teal,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  CL
                </div>
                <span style={{ fontWeight: 600, fontSize: "15px", color: "#fff" }}>
                  Canyon Lake Family Dentistry
                </span>
              </div>
              <p style={{ fontSize: "13px", lineHeight: 1.7, maxWidth: "280px" }}>
                Gentle, modern dentistry for your whole family. Proudly serving Canyon Lake and the surrounding Hill Country since 2010.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Services
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                {["General Dentistry", "Cosmetic Dentistry", "Emergency Care", "Invisalign"].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Quick Links
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                {["About", "Reviews", "Book Online", "Contact"].map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Contact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                <span>(830) 964-2100</span>
                <span>info@canyonlakedental.com</span>
                <span>123 Dental Way</span>
                <span>Canyon Lake, TX 78133</span>
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
            &copy; 2026 Canyon Lake Family Dentistry. All rights reserved.
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
        <span>PageSpeed: <strong style={{ color: "#34D399" }}>97/100</strong></span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>Load Time: <strong style={{ color: "#34D399" }}>&lt;1s</strong></span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>Code Ownership: <strong style={{ color: "#34D399" }}>100%</strong></span>
        <a
          href="/free-audit"
          style={{
            background: C.teal,
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

      {/* ─── MEET THE TEAM ─── */}
      <Section>
        <section style={{ padding: "80px 0", background: C.bgSoft }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, color: C.navy, marginBottom: "12px" }}>
              Meet Our Team
            </h2>
            <p style={{ textAlign: "center", color: C.textLight, marginBottom: "48px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Experienced professionals dedicated to your smile
            </p>
            <div className="demo-grid-3col" style={{ display: "grid", gap: "32px" }}>
              {[
                { img: "/images/dental-dentist-female.jpg", name: "Dr. Maria Santos, DDS", role: "General & Cosmetic Dentistry" },
                { img: "/images/dental-dentist-male.jpg", name: "Dr. James Mitchell, DMD", role: "Implants & Oral Surgery" },
                { img: "/images/dental-team.jpg", name: "Our Dental Team", role: "Hygienists, Assistants & Front Office" },
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
              Happy Patients
            </h2>
            <p style={{ textAlign: "center", color: C.textLight, marginBottom: "48px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Real smiles from real patients
            </p>
            <div className="demo-grid-2col" style={{ display: "grid", gap: "32px" }}>
              {[
                { img: "/images/dental-patient-happy.jpg", name: "Sarah M.", quote: "Best dental experience I've ever had. The team made me feel completely at ease — I actually look forward to my visits now!" },
                { img: "/images/dental-exam-room.jpg", name: "Robert K.", quote: "State-of-the-art facility with a warm, welcoming atmosphere. Dr. Santos explained every step and my results are incredible." },
              ].map((t) => (
                <div key={t.name} style={{ display: "flex", gap: "24px", background: C.bgSoft, borderRadius: "16px", padding: "24px", alignItems: "center" }}>
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
      <style>{`
        * { box-sizing: border-box; margin: 0; }
        .demo-grid-2col { grid-template-columns: 1fr 1fr; }
        .demo-grid-3col { grid-template-columns: repeat(3, 1fr); }
        .demo-grid-footer { grid-template-columns: 2fr 1fr 1fr 1fr; }
        .demo-nav-links { display: flex; align-items: center; gap: 24px; }
        .demo-hamburger { display: none; }
        input:focus, select:focus {
          border-color: ${C.teal} !important;
          box-shadow: 0 0 0 3px ${C.teal}20;
        }
        @media (max-width: 768px) {
          .demo-grid-2col { grid-template-columns: 1fr !important; }
          .demo-grid-3col { grid-template-columns: 1fr !important; }
          .demo-grid-footer { grid-template-columns: 1fr !important; }
          .demo-nav-links { display: none !important; }
          .demo-hamburger { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
