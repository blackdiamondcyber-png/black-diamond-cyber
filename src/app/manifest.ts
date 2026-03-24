import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Black Diamond Cyber",
    short_name: "BDC",
    description:
      "AI-powered websites for dental practices, HVAC, plumbing, electrical, roofing and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#06080C",
    theme_color: "#06080C",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
