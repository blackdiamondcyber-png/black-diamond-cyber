import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clearwater Plumbing Co. — Demo Site | Black Diamond Cyber",
  description:
    "A live demo plumbing company website built by Black Diamond Cyber. See what we deliver for plumbing contractors — fast, modern, and fully custom.",
  openGraph: {
    title: "Clearwater Plumbing Co. — Demo Site",
    description: "Live demo of a plumbing company website built by Black Diamond Cyber.",
    url: "https://bd-cyber.com/demo/plumbing",
    siteName: "Black Diamond Cyber",
    type: "website",
  },
  alternates: {
    canonical: "https://bd-cyber.com/demo/plumbing",
  },
  robots: { index: true, follow: true },
};

export default function PlumbingDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
