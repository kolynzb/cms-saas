import Footer from "@components/layout/landing/Footer";
import Nav from "@components/layout/landing/Nav";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM Saas",
  description: "CRM page",
  authors: [{ name: "Atuhaire Collins Benda", url: "benda.vercel.app" }],
  keywords: ["CRM"],
  themeColor: "#ffffff",
  applicationName: "CRM",
  viewport:
    "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0",
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
