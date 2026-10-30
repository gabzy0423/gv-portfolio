import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
    </>
  );
}
