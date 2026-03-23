import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Diamond Cyber — Premium Websites for Local Businesses",
  description:
    "AI-powered websites for dental practices, HVAC, plumbing, electrical, roofing and more. Delivered in days. Starting at $997.",
  metadataBase: new URL("https://bd-cyber.com"),
  openGraph: {
    title: "Black Diamond Cyber",
    description: "Premium AI-powered websites for local businesses",
    url: "https://bd-cyber.com",
    siteName: "Black Diamond Cyber",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Diamond Cyber",
    description: "Premium AI-powered websites for local businesses",
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#06080C",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrumentSerif.variable}`}>
      <body>
        {children}
        <Script id="scroll-reveal" strategy="afterInteractive">
          {`
            document.documentElement.classList.add('js');
            var r=document.querySelectorAll('.rv');
            var o=new IntersectionObserver(function(e){e.forEach(function(n){if(n.isIntersecting){n.target.classList.add('v');o.unobserve(n.target);}})},{threshold:0.02,rootMargin:'0px 0px -20px 0px'});
            r.forEach(function(el){o.observe(el)});
          `}
        </Script>
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js').catch(function() {});
            }
          `}
        </Script>
      </body>
    </html>
  );
}
