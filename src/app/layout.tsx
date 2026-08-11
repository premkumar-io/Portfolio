import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data/profile";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Prem Kumar — Software Developer & B.Tech CSE Student",
    template: "%s | Prem Kumar",
  },
  description:
    "Personal portfolio of Prem Kumar — Software Developer & CSE Student specializing in Full-Stack Web Applications, MERN Stack, Python FastAPI, AI/ML models, and AWS Cloud.",
  keywords: [
    "Prem Kumar",
    "Software Developer",
    "Full Stack Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Python Developer",
    "FastAPI",
    "Invoisen AI",
    "Insure AI",
  ],
  authors: [{ name: "Prem Kumar" }],
  creator: "Prem Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://premkumar.dev",
    title: "Prem Kumar — Software Developer & B.Tech CSE Student",
    description:
      "Personal portfolio of Prem Kumar — Software Developer specializing in Full-Stack Web Applications, MERN Stack, Next.js, React, and Python AI/ML models.",
    siteName: "Prem Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prem Kumar — Software Developer",
    description: "Building intelligent, accessible, and high-performance software products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.title,
    url: "https://premkumar.dev",
    sameAs: [profileData.github, profileData.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Web Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[var(--bg-main)] text-[var(--text-primary)] font-sans selection:bg-blue-600 selection:text-white min-h-screen flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
