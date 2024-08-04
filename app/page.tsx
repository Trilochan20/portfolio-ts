import AboutMeSection from "@/components/Homepage/AboutSection";
import Hero from "@/components/Homepage/Hero";
import PreviousWorkSection from "@/components/Homepage/PreviousWork";
import MySkills from "@/components/Homepage/SkillsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMeSection />
      <MySkills />
      <PreviousWorkSection />
    </main>
  );
}
