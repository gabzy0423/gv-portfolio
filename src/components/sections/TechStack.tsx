import type { SimpleIcon } from "simple-icons";
import {
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const technologies: { label: string; icon: SimpleIcon }[] = [
  { label: "PHP", icon: siPhp },
  { label: "Laravel", icon: siLaravel },
  { label: "React", icon: siReact },
  { label: "Next.js", icon: siNextdotjs },
  { label: "Tailwind CSS", icon: siTailwindcss },
  { label: "TypeScript", icon: siTypescript },
  { label: "MySQL", icon: siMysql },
  { label: "JavaScript", icon: siJavascript },
  { label: "HTML5", icon: siHtml5 },
  { label: "CSS3", icon: siCss },
  { label: "Git", icon: siGit },
  { label: "GitHub", icon: siGithub },
  { label: "Node.js", icon: siNodedotjs },
  { label: "PostgreSQL", icon: siPostgresql },
];

export function TechStack() {
  const iconGroup = (decorative = false) => (
    <div aria-hidden={decorative} className="flex shrink-0 items-center gap-14 pr-14">
      {technologies.map(({ label, icon }) => (
        <div key={label} className="flex items-center justify-center">
          <svg aria-hidden="true" className="size-9 fill-current" viewBox="0 0 24 24">
            <path d={icon.path} />
          </svg>
          <span className="sr-only">{label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section aria-label="Technologies I work with" className="mt-8 py-6 text-muted">
      <div className="mx-auto max-w-4xl overflow-hidden px-6">
        <div className="tech-marquee">
          <div className="tech-marquee-track flex w-max items-center">
            {iconGroup()}
            {iconGroup(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
