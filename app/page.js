// app/page.js
import ModernHero from "../components/home/ModernHero";
import HeroSection from "../components/home/HeroSection";

export default function HomePage() {
  return (
    <>
      {/* The new, modern hero section at the top */}
      <ModernHero />

      {/* The original hero section, now second on the page */}
      <HeroSection />
    </>
  );
}