import { Metadata } from "next";
import { Header } from "@components/AIChat/Header";

export const metadata: Metadata = {
  title: {
    default: "CRM AI Chatbot",
    template: `%s - CRM AI Chatbot`,
  },
  description: "AI-powered CRM chatbot.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
        </div>
      </body>
    </html>
  );
}
