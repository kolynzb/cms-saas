"use client";
import "@styles/globals.css";
import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@config/site";
import { Providers } from "./providers";
import { TailwindIndicator } from "@components/TailwindIndicator";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: "Atuhaire Collins Benda", url: "benda.vercel.app" }],
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
    creator: "@Kolynz_b",
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
      },
    ],
  },
  metadataBase: new URL(siteConfig.url),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body>
      <Providers attribute="class" defaultTheme="system" enableSystem>
      {children}
      <TailwindIndicator />
      </Providers>
    </body>
    </html>
  );
}
