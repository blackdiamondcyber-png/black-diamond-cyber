"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent, CSSProperties } from "react";

/* ─── palette ─── */
const C = {
  bg: "#FFFFFF",
  charcoal: "#2D3748",
  charcoalDark: "#1A202C",
  rose: "#B8860B",
  roseSoft: "#FFF5F5",
  sage: "#68D391",
  text: "#2D3748",
  textLight: "#718096",
  border: "#E8E4E0",
  bgSoft: "#FAF8F6",
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
function IconSparkle() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
    </svg>
  );
}
function IconSyringe() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2l4 4M15 5l6 6-4 4-6-6M7 17l-5 5M11 9l-6 6" />
      <path d="M9 11l4 4" />
    </svg>
  );
}
function IconLaser() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  );
}
function IconDroplet() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  );
}
function IconBody() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8v8M8 14h8M9 22l3-6 3 6" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.sage} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── data ─── */
const services = [
  {
    icon: <IconSyringe />,
    title: "Botox & Fillers",
    desc: "Smooth fine lines and restore volume with expertly administered injectables for a refreshed, natural look.",
    items: ["Botox Cosmetic", "Juvederm Fillers", "Lip Enhancement"],
  },
  {
    icon: <IconLaser />,
    title: "Laser Treatments",
    desc: "Advanced laser technology for skin resurfacing, hair removal, and pigmentation correction.",
    items: ["IPL Photofacial", "Laser Hair Removal", "Skin Resurfacing"],
  },
  {
    icon: <IconDroplet />,
    title: "Chemical Peels",
    desc: "Customized peels to reveal brighter, smoother skin — from gentle refreshers to transformative treatments.",
    items: ["Light Peels", "Medium-Depth Peels", "Acne Scar Treatment"],
  },
  {
    icon: <IconBody />,
    title: "Body Contouring",
    desc: "Non-invasive body sculpting to target stubborn fat and tighten skin without surgery or downtime.",
    items: ["CoolSculpting", "Radiofrequency Tightening", "Cellulite Reduction"],
  },
  {
    icon: <IconSparkle />,
    title: "Facials & Skincare",
    desc: "Luxurious medical-grade facials tailored to your unique skin type and concerns.",
    items: ["HydraFacial", "Microneedling", "LED Light Therapy"],
  },
  {
    icon: <IconHeart />,
    title: "IV Therapy & Wellness",
    desc: "Replenish, rehydrate, and rejuvenate from the inside out with customized IV vitamin infusions.",
    items: ["Hydration Drips", "Vitamin B12 Shots", "NAD+ Therapy"],
  },
];

const team = [
  {
    name: "Dr. Elena Vasquez, MD",
    role: "Medical Director",
    credentials: ["Board-Certified Dermatologist", "10+ Years Experience", "Allergan Trainer"],
  },
  {
    name: "Megan Torres, RN, BSN",
    role: "Lead Aesthetician",
    credentials: ["Certified Aesthetic Nurse", "Advanced Injector", "Laser Certified"],
  },
];

const testimonials = [
  {
    name: "Rachel K.",
    text: "I was nervous about Botox for the first time but Dr. Vasquez made me feel so comfortable. The results are incredibly natural — my friends just say I look 'well-rested.' Exactly what I wanted.",
    stars: 5,
  },
  {
    name: "Diane M.",
    text: "The HydraFacial here is life-changing. My skin has never looked better. The spa is gorgeous and every detail feels luxurious. This is my happy place now.",
    stars: 5,
  },
  {
    name: "Jennifer L.",
    text: "I've been to three different med spas in San Antonio. Serenity is in a completely different league. The results, the atmosphere, the expertise — it's unmatched.",
    stars: 5,
  },
];

const transformations = [
  {
    title: "Dermal Filler — Cheek Restoration",
    desc: "Natural volume restoration using Juvederm Voluma, restoring youthful contours with zero downtime.",
  },
  {
    title: "Laser Skin Resurfacing",
    desc: "Fractional CO2 laser treatment reducing fine lines, sun damage, and acne scars in just 3 sessions.",
  },
  {
    title: "Full Facial Rejuvenation",
    desc: "Combined Botox, filler, and HydraFacial protocol for a complete refresh — no surgery required.",
  },
];

/* ─── main page ─── */
export default function MedSpaDemoPage() {
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

  const sectionPad: CSSProperties = { padding: "96px 0", minHeight: "200px" };

  const heading: CSSProperties = {
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontWeight: 400,
    color: C.charcoal,
    lineHeight: 1.15,
  };

  const btn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: C.rose,
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
    border: `2px solid ${C.charcoal}`,
    color: C.charcoal,
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
          🔷 <strong>LIVE DEMO</strong> built by Black Diamond Cyber
        </span>
        <span>&rarr;</span>
        <a
          href="/free-audit"
          style={{
            color: C.rose,
            fontWeight: 700,
            textDecoration: "none",
            borderBottom: `1px solid ${C.rose}`,
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
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${C.charcoal}, ${C.rose})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              S
            </div>
            <span style={{ fontWeight: 500, fontSize: "16px", color: C.charcoal, letterSpacing: "1px" }}>
              SERENITY
            </span>
          </div>
          <div className="spa-nav-links">
            {["Services", "Team", "Gallery", "Book"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: C.textLight,
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                  transition: "color .2s",
                }}
              >
                {l}
              </a>
            ))}
            <a href="#book" style={{ ...btn, padding: "10px 24px", fontSize: "12px", borderRadius: "6px", letterSpacing: "0.5px" }}>
              Book Consultation
            </a>
          </div>
          <button
            className="spa-hamburger"
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
            <span style={{ display: "block", width: "24px", height: "2px", background: C.charcoal, borderRadius: "2px", transition: "transform .2s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: C.charcoal, borderRadius: "2px", transition: "opacity .2s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: C.charcoal, borderRadius: "2px", transition: "transform .2s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* ─── MOBILE DRAWER ─── */}
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
          {["Services", "Team", "Gallery", "Book"].map((l) => (
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
            Book Consultation
          </a>
        </div>
      )}

      {/* ─── HERO ─── */}
      <Section>
        <section
          style={{
            background: `linear-gradient(135deg, ${C.charcoal} 0%, #3D2B1E 50%, ${C.charcoalDark} 100%)`,
            padding: "120px 0 100px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle leaf/star pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.03,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z' fill='%23fff' fill-opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
          {/* Decorative blobs */}
          <div
            style={{
              position: "absolute",
              top: "-30%",
              right: "-15%",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${C.rose}20, transparent 70%)`,
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "-10%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${C.sage}10, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
          {/* Hero background photo */}
          <Image
            src="/images/medspa-treatment-room.jpg"
            alt="Luxury med spa treatment room"
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
          <div style={{ ...container, position: "relative", zIndex: 1, textAlign: "center" }}>
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: C.rose,
                  marginBottom: "24px",
                }}
              >
                Med Spa &amp; Wellness Center
              </p>
              <h1 style={{ ...heading, fontSize: "clamp(32px, 5.5vw, 60px)", color: "#fff", marginBottom: "20px", fontStyle: "italic" }}>
                Reveal Your Natural{" "}
                <span style={{ color: C.rose }}>Radiance</span>
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,.7)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 24px" }}>
                Expert aesthetics and wellness treatments in a luxurious, tranquil setting. Board-certified providers. Natural-looking results. Your journey to confidence starts here.
              </p>
              {/* Stat badges */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
                {[
                  { icon: "⭐", text: "5.0 Google Rating" },
                  { icon: "✨", text: "Board Certified" },
                  { icon: "💆", text: "1000+ Treatments" },
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
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <a href="#book" style={btn}>
                  Book Your Consultation
                </a>
                <a href="#services" style={{ ...btnOutline, borderColor: "rgba(255,255,255,.3)", color: "#fff" }}>
                  Explore Treatments
                </a>
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* ─── SPECIAL OFFER ─── */}
      <div
        style={{
          background: C.roseSoft,
          borderBottom: `1px solid ${C.border}`,
          padding: "16px 0",
          textAlign: "center",
        }}
      >
        <div style={{ ...container, fontSize: "14px", color: C.charcoal }}>
          <span style={{ fontWeight: 700, color: C.rose }}>New Client Special:</span>
          {" "}$199 Signature Facial + Consultation{" "}
          <span style={{ color: C.textLight }}>(reg. $350)</span>
          {" — "}
          <a href="#book" style={{ color: C.rose, fontWeight: 600, textDecoration: "none" }}>
            Book Now &rarr;
          </a>
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <Section id="services" style={sectionPad}>
        <section>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: C.rose, marginBottom: "12px" }}>
                Our Treatments
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 44px)", fontStyle: "italic" }}>
                Curated Aesthetic Services
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
                    borderRadius: "16px",
                    padding: "36px",
                    border: `1px solid ${C.border}`,
                    transition: "box-shadow .3s, transform .3s",
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>{s.icon}</div>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: C.charcoal, marginBottom: "8px" }}>
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

      {/* ─── MEET THE TEAM ─── */}
      <Section id="team">
        <section style={{ ...sectionPad, background: C.bgSoft }}>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: C.rose, marginBottom: "12px" }}>
                Our Experts
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 44px)", fontStyle: "italic" }}>
                Meet the Team
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "32px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {team.map((t) => (
                <div
                  key={t.name}
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                    <Image
                      src={t.name.includes("Elena") ? "/images/medspa-aesthetician.jpg" : "/images/medspa-botox.jpg"}
                      alt={t.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <div style={{ padding: "28px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 600, color: C.charcoal, marginBottom: "4px" }}>
                      {t.name}
                    </h3>
                    <p style={{ fontSize: "13px", color: C.rose, fontWeight: 500, marginBottom: "16px" }}>
                      {t.role}
                    </p>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {t.credentials.map((c) => (
                        <span
                          key={c}
                          style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            padding: "4px 12px",
                            borderRadius: "40px",
                            background: `${C.sage}15`,
                            color: C.charcoal,
                            border: `1px solid ${C.sage}30`,
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── BEFORE / AFTER GALLERY ─── */}
      <Section id="gallery" style={sectionPad}>
        <section>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: C.rose, marginBottom: "12px" }}>
                Real Results
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 44px)", fontStyle: "italic" }}>
                Transformation Gallery
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {transformations.map((t) => (
                <div
                  key={t.title}
                  style={{
                    background: C.bgSoft,
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                    }}
                  >
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${C.charcoal}20, ${C.charcoal}08)`,
                        aspectRatio: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px",
                        borderRight: `1px solid ${C.border}`,
                      }}
                    >
                      <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.textLight }}>Before</span>
                      <span style={{ fontSize: "32px", opacity: 0.3 }}>🖼</span>
                    </div>
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${C.rose}08, ${C.sage}08)`,
                        aspectRatio: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px",
                      }}
                    >
                      <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.sage }}>After</span>
                      <span style={{ fontSize: "32px", opacity: 0.3 }}>✨</span>
                    </div>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, color: C.charcoal, marginBottom: "6px" }}>
                      {t.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: C.textLight, lineHeight: 1.6 }}>
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── TESTIMONIALS ─── */}
      <Section>
        <section style={{ ...sectionPad, background: C.bgSoft }}>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: C.rose, marginBottom: "12px" }}>
                Client Reviews
              </p>
              <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "12px", fontStyle: "italic" }}>
                What Our Clients Say
              </h2>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", borderRadius: "40px", padding: "8px 20px", border: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <IconStar key={s} />
                  ))}
                </div>
                <span style={{ fontSize: "14px", fontWeight: 600, color: C.charcoal }}>5.0</span>
                <span style={{ fontSize: "13px", color: C.textLight }}>(64 reviews on Google)</span>
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
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "32px",
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                    {Array.from({ length: t.stars }, (_, i) => (
                      <IconStar key={i} />
                    ))}
                  </div>
                  <p style={{ fontSize: "15px", color: C.text, lineHeight: 1.8, marginBottom: "16px", fontStyle: "italic" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: C.charcoal }}>
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
        <section style={sectionPad}>
          <div style={container}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: C.rose, marginBottom: "12px" }}>
                  Begin Your Journey
                </p>
                <h2 style={{ ...heading, fontSize: "clamp(28px, 4vw, 40px)", marginBottom: "8px", fontStyle: "italic" }}>
                  Book Your Consultation
                </h2>
                <p style={{ fontSize: "14px", color: C.textLight }}>
                  Complimentary consultations available. Let&apos;s create your personalized treatment plan.
                </p>
              </div>

              {formSubmitted ? (
                <div
                  style={{
                    background: `${C.sage}10`,
                    border: `2px solid ${C.sage}`,
                    borderRadius: "16px",
                    padding: "48px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "12px" }}>&#10003;</div>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: C.charcoal, marginBottom: "8px" }}>
                    Demo Submission Received!
                  </h3>
                  <p style={{ fontSize: "14px", color: C.textLight }}>
                    This is a demo — no actual consultation was booked. But this is exactly how your clients would book online!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: C.bgSoft,
                    borderRadius: "16px",
                    padding: "36px",
                    border: `1px solid ${C.border}`,
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  {[
                    { label: "Full Name", type: "text", placeholder: "Sarah Johnson" },
                    { label: "Email Address", type: "email", placeholder: "sarah@example.com" },
                    { label: "Phone Number", type: "tel", placeholder: "(830) 555-0000" },
                  ].map((f) => (
                    <label key={f.label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "12px", fontWeight: 600, color: C.charcoal, letterSpacing: "0.5px" }}>{f.label}</span>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        style={{
                          padding: "14px 16px",
                          borderRadius: "10px",
                          border: `1px solid ${C.border}`,
                          fontSize: "15px",
                          color: C.text,
                          outline: "none",
                          transition: "border-color .2s",
                          background: "#fff",
                        }}
                      />
                    </label>
                  ))}

                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: C.charcoal, letterSpacing: "0.5px" }}>Service Interest</span>
                    <select
                      required
                      defaultValue=""
                      style={{
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: `1px solid ${C.border}`,
                        fontSize: "15px",
                        color: C.text,
                        outline: "none",
                        background: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      <option value="" disabled>Select a treatment...</option>
                      <option>Botox & Fillers</option>
                      <option>Laser Treatments</option>
                      <option>Chemical Peels</option>
                      <option>Body Contouring</option>
                      <option>Facials & Skincare</option>
                      <option>IV Therapy</option>
                      <option>Not Sure — Need Consultation</option>
                    </select>
                  </label>

                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: C.charcoal, letterSpacing: "0.5px" }}>Preferred Date</span>
                    <input
                      type="date"
                      required
                      style={{
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: `1px solid ${C.border}`,
                        fontSize: "15px",
                        color: C.text,
                        outline: "none",
                        background: "#fff",
                      }}
                    />
                  </label>

                  <button type="submit" style={{ ...btn, justifyContent: "center", marginTop: "8px", border: "none", borderRadius: "10px", padding: "16px 32px" }}>
                    Book Consultation
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </Section>

      <Section>
        <section style={{ padding: "80px 0", background: C.bgSoft }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, color: C.charcoal, marginBottom: "12px", letterSpacing: "1px" }}>
              Meet Our Team
            </h2>
            <p style={{ textAlign: "center", color: C.textLight, marginBottom: "48px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Board-certified aestheticians and licensed practitioners
            </p>
            <div className="spa-grid-3col" style={{ display: "grid", gap: "32px" }}>
              {[
                { img: "/images/medspa-aesthetician.jpg", name: "Dr. Natalie Chen, MD", role: "Medical Director — Board-Certified Dermatologist" },
                { img: "/images/medspa-botox.jpg", name: "Sophia Reyes, RN", role: "Lead Injector — Advanced Botox & Fillers" },
                { img: "/images/medspa-team.jpg", name: "Our Team", role: "Licensed aestheticians & wellness specialists" },
              ].map((m) => (
                <div key={m.name} style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,.06)" }}>
                  <div style={{ position: "relative", width: "100%", height: "320px" }}>
                    <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 600, color: C.charcoal, marginBottom: "4px" }}>{m.name}</h3>
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
            <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, color: C.charcoal, marginBottom: "12px", letterSpacing: "1px" }}>
              Client Transformations
            </h2>
            <p style={{ textAlign: "center", color: C.textLight, marginBottom: "48px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Real results from real clients
            </p>
            <div className="spa-grid-2col" style={{ display: "grid", gap: "32px" }}>
              {[
                { img: "/images/medspa-client-result.jpg", name: "Jessica L.", quote: "After my HydraFacial series, my skin has never looked better. The team at Serenity truly understands skincare on a deeper level." },
                { img: "/images/medspa-treatment.jpg", name: "Christina M.", quote: "Sophia is an artist with injectables. Natural results, zero downtime, and the most relaxing environment. I drive 45 minutes and it's worth every mile." },
              ].map((t) => (
                <div key={t.name} className="demo-client-card" style={{ display: "flex", gap: "24px", background: C.bgSoft, borderRadius: "16px", padding: "24px", alignItems: "center" }}>
                  <div style={{ position: "relative", width: "160px", minWidth: "160px", height: "160px", borderRadius: "12px", overflow: "hidden" }}>
                    <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "15px", color: C.text, lineHeight: 1.7, marginBottom: "12px", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: C.charcoal }}>— {t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* ─── RESPONSIVE STYLES ─── */}
      {/* ─── FOOTER ─── */}
      <footer style={{ background: C.charcoal, color: "rgba(255,255,255,.7)", padding: "48px 0 100px" }}>
        <div style={container}>
          <div className="spa-grid-footer" style={{ display: "grid", gap: "32px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.rose}, ${C.sage})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  S
                </div>
                <span style={{ fontWeight: 500, fontSize: "15px", color: "#fff", letterSpacing: "1px" }}>
                  SERENITY MED SPA
                </span>
              </div>
              <p style={{ fontSize: "13px", lineHeight: 1.7, maxWidth: "280px" }}>
                Expert aesthetics and wellness in the heart of the Hill Country. Board-certified providers, natural results, luxurious experience.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Treatments
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                {["Botox & Fillers", "Laser Treatments", "Chemical Peels", "Body Contouring", "Facials"].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Hours
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                <span>Mon–Fri: 9:00 AM – 6:00 PM</span>
                <span>Saturday: 9:00 AM – 3:00 PM</span>
                <span>Sunday: Closed</span>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Contact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                <span>(830) 964-5500</span>
                <span>hello@serenityspa.com</span>
                <span>321 Wellness Blvd</span>
                <span>Wimberley, TX 78676</span>
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
            &copy; 2026 Serenity Med Spa &amp; Wellness. All rights reserved.
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
        <span>PageSpeed: <strong style={{ color: "#34D399" }}>98/100</strong></span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span>Load Time: <strong style={{ color: "#34D399" }}>&lt;1s</strong></span>
        <a
          href="/free-audit"
          style={{
            background: C.rose,
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
      <style>{`
        * { box-sizing: border-box; margin: 0; }
        .spa-grid-footer { grid-template-columns: 2fr 1fr 1fr 1fr; }
        .spa-nav-links { display: flex; align-items: center; gap: 24px; }
        .spa-hamburger { display: none; }
        .spa-grid-3col { grid-template-columns: repeat(3, 1fr); }
        .spa-grid-2col { grid-template-columns: repeat(2, 1fr); }
        input:focus, select:focus, textarea:focus {
          border-color: ${C.rose} !important;
          box-shadow: 0 0 0 3px ${C.rose}20;
        }
        @media (max-width: 768px) {
          .spa-grid-footer { grid-template-columns: 1fr !important; }
          .spa-nav-links { display: none !important; }
          .spa-hamburger { display: flex !important; }
          .spa-grid-3col { grid-template-columns: 1fr !important; }
          .spa-grid-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
