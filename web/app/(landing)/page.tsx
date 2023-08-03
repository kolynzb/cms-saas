"use client";
import { redirect } from "next/navigation";
import Blog from "@components/landing/Blog";
import CallToAction from "@components/landing/CallToAction";
import Features from "@components/landing/Features";
import HeroSection from "@components/landing/HeroSection";
import Stats from "@components/landing/Stats";
import Testimonials from "@components/landing/Testimonials";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@config/firebase";

export default function Home() {
  const [user] = useAuthState(auth);

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="space-y-40 mb-40">
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
    </main>
  );
}
