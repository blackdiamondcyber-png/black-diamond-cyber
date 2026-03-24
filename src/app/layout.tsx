import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import { Chatbot } from "@/components/Chatbot";
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
  title: "Dental Practice Websites That Fill Chairs | Black Diamond Cyber",
  description:
    "AI-powered dental practice websites. Fill chairs, dominate local search, own your code. Delivered in days. Starting at $997.",
  metadataBase: new URL("https://bd-cyber.com"),
  openGraph: {
    title: "Dental Practice Websites That Fill Chairs | Black Diamond Cyber",
    description: "AI-powered dental practice websites. Fill chairs, dominate local search, own your code.",
    url: "https://bd-cyber.com",
    siteName: "Black Diamond Cyber",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Black Diamond Cyber — Dental Practice Websites That Fill Chairs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Practice Websites That Fill Chairs | Black Diamond Cyber",
    description: "AI-powered dental practice websites. Fill chairs, dominate local search, own your code.",
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
      <head>
        <meta name="google-site-verification" content="REPLACE_WITH_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="REPLACE_WITH_BING_CODE" />
      </head>
      <body>
        {children}
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
