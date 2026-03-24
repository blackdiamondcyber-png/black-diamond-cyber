import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit — Black Diamond Cyber",
  description:
    "Get a free AI-powered audit of your business website. Check your Google ranking, online reputation, site performance, and directory listings in 30 seconds.",
  alternates: {
    canonical: "https://bd-cyber.com/free-audit",
  },
  openGraph: {
    title: "Free Website Audit — Black Diamond Cyber",
    description:
      "Check your Google ranking, online reputation, and site performance in 30 seconds",
    url: "https://bd-cyber.com/free-audit",
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
