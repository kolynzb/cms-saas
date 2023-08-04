"use client";
import Footer from "@components/layout/Footer";
import Nav from "@components/layout/Nav";
import Sidebar from "@components/layout/SideBar";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import routes from "@config/routes";
import { usePathname } from "next/navigation";
import { CRMProviders } from "@components/CRMProviders";

export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "CRM Dashboard",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState(pathname);
  const [currentRouteName, setCurrentRouteName] = useState(
    pathname.substring(1)
  );

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  const getActiveRoute = (routes: any) => {
    let activeRoute = pathname;
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf("/" + routes[i].path) !== -1) {
        setCurrentRoute(routes[i].name);
        setCurrentRouteName(routes[i].name);
      }
    }
    return activeRoute;
  };

  useEffect(() => {
    getActiveRoute(routes);
    setCurrentRoute(pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="flex h-full w-full">
        <CRMProviders attribute="class" defaultTheme="system" enableSystem>
          <Sidebar open={open} onClose={() => setOpen(false)} />
          {/* Navbar & Main Content */}
          <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
            {/* Main Content */}
            <main
              className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
            >
              {/* Routes */}
              <div className="h-full">
                <Nav
                  onOpenSideNav={() => setOpen(true)}
                  // logoText={"CRM APP"}
                  brandText={currentRoute}
                  pageName={currentRouteName}
                  // secondary={getActiveNavbar(routes)}
                  // {...rest}
                />
                <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                  {children}
                </div>
                <div className="p-3">
                  <Footer />
                </div>
              </div>
            </main>
          </div>
        </CRMProviders>
      </body>
    </html>
  );
}
