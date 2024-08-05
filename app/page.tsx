import AboutMeSection from "@/components/Homepage/AboutSection";
import ContactMe from "@/components/Homepage/ContactSection";
import Footer from "@/components/Homepage/Footer";
import Hero from "@/components/Homepage/Hero";
import PreviousWorkSection from "@/components/Homepage/PreviousWork";
import MySkills from "@/components/Homepage/SkillsSection";
import Timeline from "@/components/Homepage/TimeLine";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMeSection />
      <MySkills />
      <PreviousWorkSection />
      <Timeline />
      <ContactMe />
      <Footer />
    </main>
  );
}
