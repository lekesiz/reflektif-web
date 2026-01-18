import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { LeadPopup, FloatingCTA, StickyBar } from "@/components/ui";
import { getOrganizationSchema, getWebSiteSchema, generateJSONLD } from "@/lib/structured-data";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Reflektif - Kendini Keşfet, Geleceğini Seç",
    template: "%s | Reflektif",
  },
  description:
    "Türkiye'nin ilk AI destekli yetkinlik değerlendirme ve meslek eşleştirme platformu. Kişiliğini keşfet, yeteneklerini anla, doğru kariyer kararını al.",
  keywords: [
    "kariyer testi",
    "meslek seçimi",
    "yetkinlik değerlendirme",
    "kişilik testi",
    "AI kariyer danışmanlığı",
    "Holland testi",
    "RIASEC",
    "meslek eşleştirme",
    "üniversite seçimi",
    "İK değerlendirme",
    "video mülakat",
    "ATS",
    "işe alım",
  ],
  authors: [{ name: "Reflektif", url: "https://reflektif.net" }],
  creator: "Reflektif",
  publisher: "NETZ Informatique",
  metadataBase: new URL("https://reflektif.net"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://reflektif.net",
    siteName: "Reflektif",
    title: "Reflektif - Kendini Keşfet, Geleceğini Seç",
    description:
      "Türkiye'nin ilk AI destekli yetkinlik değerlendirme ve meslek eşleştirme platformu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reflektif - Yetkinlik Değerlendirme Platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reflektif - Kendini Keşfet, Geleceğini Seç",
    description:
      "Türkiye'nin ilk AI destekli yetkinlik değerlendirme ve meslek eşleştirme platformu.",
    images: ["/og-image.jpg"],
    creator: "@reflektif",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="tr">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJSONLD(organizationSchema),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJSONLD(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* Lead Capture Components */}
        <LeadPopup
          delay={8000}
          exitIntent={true}
          scrollTrigger={60}
        />
        <FloatingCTA />
        <StickyBar position="bottom" delay={5000} />
        
        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
