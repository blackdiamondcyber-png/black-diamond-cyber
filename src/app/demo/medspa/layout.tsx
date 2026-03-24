import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serenity Med Spa & Wellness — Demo Site | Black Diamond Cyber",
  description:
    "A live demo med spa website built by Black Diamond Cyber. See what we deliver for med spas and wellness clinics — elegant, modern, and fully custom.",
  openGraph: {
    title: "Serenity Med Spa & Wellness — Demo Site",
    description: "Live demo of a med spa website built by Black Diamond Cyber.",
    url: "https://bd-cyber.com/demo/medspa",
    siteName: "Black Diamond Cyber",
    type: "website",
  },
  alternates: {
    canonical: "https://bd-cyber.com/demo/medspa",
  },
  robots: { index: true, follow: true },
};

export default function MedSpaDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
