import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Black Diamond Cyber",
  description:
    "Get in touch with Black Diamond Cyber. Request a quote for your custom AI-powered website. Serving dental, HVAC, plumbing, electrical, and more.",
  alternates: {
    canonical: "https://bd-cyber.com/contact",
  },
  openGraph: {
    title: "Contact Black Diamond Cyber",
    description: "Request a quote for your custom AI-powered website",
    url: "https://bd-cyber.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
