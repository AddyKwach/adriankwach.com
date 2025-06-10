// app/page.js
import ModernHero from "../components/home/ModernHero";
import ExpertiseSection from "../components/home/ExpertiseSection";

// We have removed the import for HomePage.module.css

export default function HomePage() {
  return (
    // We are changing the <div> back to a React Fragment <>
    <>
      <ModernHero />
      <ExpertiseSection />
    </>
  );
}