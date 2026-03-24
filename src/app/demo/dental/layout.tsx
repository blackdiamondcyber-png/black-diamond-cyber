import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canyon Lake Family Dentistry — Demo Site | Black Diamond Cyber",
  description:
    "A live demo dental practice website built by Black Diamond Cyber. See what we deliver for dental practices — fast, modern, and fully custom.",
  openGraph: {
    title: "Canyon Lake Family Dentistry — Demo Site",
    description: "Live demo of a dental practice website built by Black Diamond Cyber in 48 hours.",
    url: "https://bd-cyber.com/demo/dental",
    siteName: "Black Diamond Cyber",
    type: "website",
  },
  alternates: {
    canonical: "https://bd-cyber.com/demo/dental",
  },
  robots: { index: true, follow: true },
};

export default function DentalDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
