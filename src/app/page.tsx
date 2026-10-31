import { Hero, HeroHighlights } from "@/components/home/HeroSection";
import { Projects } from "@/components/home/ProjectPreview";
import { TechStack } from "@/components/home/TechStackSection";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import { Experience } from "@/components/experience/ExperienceTimeline";
import { OutsideIde } from "@/components/home/AboutSection";
import { Contact } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroHighlights />
      <TechStackMarquee />
      <Projects />
      <Experience />
      <TechStack />
      <OutsideIde />
      <Contact />
    </>
  );
}
