"use client";
import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Privacy Policy  || Atuhaire Collins Benda - Personal Blog ",
  description: "Under maintenance Page",
  authors: [{ name: "Atuhaire Collins Benda", url: "benda.vercel.app" }],
  keywords: ["Blog"],
  themeColor: "#ffffff",
  applicationName: "Atuhaire Collins Blog",
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

function layout({ children }: Props) {
  return <>{children}</>;
}

export default layout;
