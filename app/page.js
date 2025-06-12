// app/page.js
import ModernHero from "../components/home/ModernHero";
import ExpertiseSection from "../components/home/ExpertiseSection";
import SkillsSection from "../components/home/SkillsSection"; // 1. Import the new component

export default function HomePage() {
  return (
    <>
      <ModernHero />
      <ExpertiseSection />
      <SkillsSection /> {/* 2. Add the new section here */}
    </>
  );
}