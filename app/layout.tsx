import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/config/site";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | NOTORIOUS",
  },

  description: siteConfig.description,

  keywords: [
    "men's streetwear",
    "premium men's clothing",
    "minimalist streetwear",
    "everyday essentials",
    "NOTORIOUS",
  ],

  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    images: [
      {
        url: "/images/hero/og.jpg",
        width: 1200,
        height: 630,
        alt: "NOTORIOUS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/hero/og.jpg"],
  },

  // Browser tab favicon
  icons: {
    icon: "/notorious-logo.png",
    shortcut: "/notorious-logo.png",
    apple: "/notorious-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${grotesk.variable}`}
    >
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url,
                logo: `${siteConfig.url}/notorious-logo.png`,
                sameAs: siteConfig.socials.map((s) => s.href),
              },
              {
                "@type": "WebSite",
                name: siteConfig.name,
                url: siteConfig.url,
              },
            ],
          }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:bg-ink focus:text-paper focus:p-3"
        >
          Skip to content
        </a>

        <Header />

        <main id="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}