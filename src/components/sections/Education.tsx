import { education } from "@/data/experience";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">05 · Education</p>
      <h2 id="education-heading" className="mt-3 text-3xl font-semibold tracking-tight">Learning & foundation</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <article key={`${item.institution}-${item.program}`} className="rounded-2xl border border-line bg-white p-6">
            <p className="text-sm text-muted">{item.period}</p>
            <h3 className="mt-6 text-xl font-semibold">{item.program}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{item.institution}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
