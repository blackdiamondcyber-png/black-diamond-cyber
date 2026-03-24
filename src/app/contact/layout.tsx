import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Black Diamond Cyber",
  description:
    "Get in touch with Black Diamond Cyber. Request a quote for your custom AI-powered website. Serving dental, HVAC, plumbing, electrical, and more.",
  openGraph: {
    title: "Contact Black Diamond Cyber",
    description: "Request a quote for your custom AI-powered website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
