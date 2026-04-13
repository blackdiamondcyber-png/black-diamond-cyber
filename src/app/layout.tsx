import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import { Chatbot } from "@/components/Chatbot";
import { GSAPProvider } from "@/components/GSAPProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
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
  title: "AI Growth Systems for Local Businesses | Black Diamond Cyber",
  description:
    "High-performance websites, AI search optimization (GEO), and automation systems for local businesses. Built in 7 days. No contracts. You own the code.",
  metadataBase: new URL("https://bd-cyber.com"),
  openGraph: {
    title: "AI Growth Systems for Local Businesses | Black Diamond Cyber",
    description: "Websites, AI search optimization, and automation for local businesses. Built in 7 days. No contracts.",
    url: "https://bd-cyber.com",
    siteName: "Black Diamond Cyber",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Black Diamond Cyber — AI-Powered Websites for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Growth Systems for Local Businesses | Black Diamond Cyber",
    description: "Websites, AI search optimization, and automation for local businesses. Built in 7 days. No contracts.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: 'https://bd-cyber.com',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
      <head />
      <body>
        <ScrollProgress />
        <GSAPProvider>
          {children}
        </GSAPProvider>
        <Chatbot />
        <Script id="scroll-reveal" strategy="afterInteractive">
          {`
            document.documentElement.classList.add('js');
            function initReveal(){
              var r=document.querySelectorAll('.rv:not(.v)');
              if(!r.length)return;
              var o=new IntersectionObserver(function(e){e.forEach(function(n){if(n.isIntersecting){n.target.classList.add('v');o.unobserve(n.target);}})},{threshold:0.02,rootMargin:'0px 0px -20px 0px'});
              r.forEach(function(el){o.observe(el)});
            }
            initReveal();
            new MutationObserver(function(){initReveal()}).observe(document.body,{childList:true,subtree:true});
            window.addEventListener('load',function(){setTimeout(initReveal,100);setTimeout(initReveal,500);});
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
