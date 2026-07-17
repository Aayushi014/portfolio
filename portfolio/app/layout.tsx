import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL } from "@/constants/data";
import AuroraBackground from "@/components/AuroraBackground";
import MouseGlow from "@/components/MouseGlow";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://aayushisoni.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PERSONAL.name} — Data Analyst & AI Developer`,
    template: `%s — ${PERSONAL.name}`,
  },
  description: PERSONAL.tagline,
  keywords: [
    "Aayushi Soni",
    "Data Analyst",
    "AI Developer",
    "Power BI",
    "SQL",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: PERSONAL.name, url: siteUrl }],
  creator: PERSONAL.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${PERSONAL.name} — Data Analyst & AI Developer`,
    description: PERSONAL.tagline,
    siteName: `${PERSONAL.name} Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} — Data Analyst & AI Developer`,
    description: PERSONAL.tagline,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased selection:bg-aurora-violet/30`}
      >
        <AuroraBackground />
        <MouseGlow />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main id="main-content">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
