import Footer from "@components/layout/Footer";
import Nav from "@components/layout/Nav";
import SideNav from "@components/layout/SideNav";
import FlowbiteContext from "@context/FlowbiteContext";
import { SidebarProvider } from "@context/SidebarContext";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900">
        <FlowbiteContext>
          <SidebarProvider>
            <Nav />
            <div className="flex dark:bg-gray-900">
              <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
                {children}
                <Footer />
              </main>
              <div className="order-1">
                <SideNav />
              </div>
            </div>
          </SidebarProvider>
        </FlowbiteContext>
      </body>
    </html>
  );
}
