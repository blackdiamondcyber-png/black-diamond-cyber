import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hill Country Heating & Air — Demo Site | Black Diamond Cyber",
  description:
    "A live demo HVAC company website built by Black Diamond Cyber. See what we deliver for heating and cooling companies — fast, modern, and fully custom.",
  openGraph: {
    title: "Hill Country Heating & Air — Demo Site",
    description: "Live demo of an HVAC company website built by Black Diamond Cyber.",
    url: "https://bd-cyber.com/demo/hvac",
    siteName: "Black Diamond Cyber",
    type: "website",
  },
  alternates: {
    canonical: "https://bd-cyber.com/demo/hvac",
  },
  robots: { index: true, follow: true },
};

export default function HvacDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
