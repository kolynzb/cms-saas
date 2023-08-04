"use client";
import { TailwindIndicator } from "@components/TailwindIndicator";
import "@styles/globals.css";
import { Provider } from "jotai";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider>{children}</Provider>
      <Toaster />
      <TailwindIndicator />
    </>
  );
}
