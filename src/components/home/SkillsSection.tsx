import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">02 · Skills</p>
        <h2 id="skills-heading" className="mt-3 text-3xl font-semibold tracking-tight">Tools I use</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t-2 border-foreground pt-5">
              <h3 className="font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-muted">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
