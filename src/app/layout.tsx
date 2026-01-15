import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Reflektif - Kendini Kesfet, Gelecegini Sec",
    template: "%s | Reflektif",
  },
  description:
    "Turkiye'nin ilk AI destekli yetkinlik degerlendirme ve meslek eslestirme platformu. Kisiligini kesfet, yeteneklerini anla, dogru kariyer kararini al.",
  keywords: [
    "kariyer testi",
    "meslek secimi",
    "yetkinlik degerlendirme",
    "kisilik testi",
    "AI kariyer danismanligi",
    "Holland testi",
    "RIASEC",
    "meslek eslestirme",
    "universite secimi",
    "IK degerlendirme",
  ],
  authors: [{ name: "Reflektif", url: "https://reflektif.net" }],
  creator: "Reflektif",
  publisher: "NETZ Informatique",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://reflektif.net",
    siteName: "Reflektif",
    title: "Reflektif - Kendini Kesfet, Gelecegini Sec",
    description:
      "Turkiye'nin ilk AI destekli yetkinlik degerlendirme ve meslek eslestirme platformu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reflektif - Yetkinlik Degerlendirme Platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reflektif - Kendini Kesfet, Gelecegini Sec",
    description:
      "Turkiye'nin ilk AI destekli yetkinlik degerlendirme ve meslek eslestirme platformu.",
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
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
