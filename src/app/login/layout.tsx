import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Login — Black Diamond Cyber",
  description: "Log in to your Black Diamond Cyber client dashboard to track your website project status.",
  robots: { index: false, follow: false },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
