import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanishq Jindal | Full Stack Developer & AI/ML Enthusiast",
  description:
    "Portfolio of Tanishq Jindal, a 3rd-year Computer Science student at Bennett University. Building full-stack web applications, AI-powered developer tools, and exploring AI/ML systems.",
  keywords: [
    "Tanishq Jindal",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Bennett University",
    "Nexus-AI",
    "TradeVision",
    "Samaadhan",
    "Next.js Developer",
    "FastAPI",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Tanishq Jindal", url: personalInfo.links.github }],
  creator: "Tanishq Jindal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanishqjindal.dev",
    title: "Tanishq Jindal | Full Stack Developer & AI/ML Enthusiast",
    description:
      "3rd-year Computer Science student at Bennett University building full-stack applications, exploring AI-powered systems, and solving algorithmic problems.",
    siteName: "Tanishq Jindal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishq Jindal | Full Stack Developer & AI/ML Enthusiast",
    description:
      "3rd-year Computer Science student at Bennett University building full-stack applications and AI-powered systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-background text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-radial-highlight" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
