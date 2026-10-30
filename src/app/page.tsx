import { Hero, HeroHighlights } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { Experience } from "@/components/sections/Experience";
import { OutsideIde } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

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
