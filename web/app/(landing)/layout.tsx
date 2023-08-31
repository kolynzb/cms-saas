import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Nav from "@components/layout/landing/Nav";
import Footer from "@components/layout/landing/Footer";
import { ThemeToggle } from "@components/theme-toggle";



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
        <Toaster position="top-center" reverseOrder={false} />
        <Footer />

        <div className="fixed right-0 top-[50vh] z-[1000] flex items-center justify-center rounded-l-full bg-white/10  shadow-gray-100  backdrop-blur-xl px-[6px] py-[6px]">
        <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
