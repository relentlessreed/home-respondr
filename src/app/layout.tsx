import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/lib/business-config";

const headingFont = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: `${businessConfig.name} | ${businessConfig.tagline}`,
  description: businessConfig.description,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: businessConfig.name,
    description: businessConfig.description,
    url: "/",
    siteName: businessConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
