import Blog from "@components/landing/Blog";
import CallToAction from "@components/landing/CallToAction";
import Features from "@components/landing/Features";
import HeroSection from "@components/landing/HeroSection";
import Stats from "@components/landing/Stats";
import Testimonials from "@components/landing/Testimonials";

export default function Home() {
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
