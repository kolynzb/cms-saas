"use client";
import "@styles/globals.css";
import { Provider } from "jotai";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
   
      {children}
    </>
  );
}
