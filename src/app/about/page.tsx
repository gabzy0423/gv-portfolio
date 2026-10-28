import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";

export const metadata = {
  title: "About | Your Name",
  description: "About Your Name, software developer.",
};

export default function AboutPage() {
  return (
    <div className="border-b border-line">
      <About />
      <Experience />
      <Education />
    </div>
  );
}
