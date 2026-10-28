import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-y border-line bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">04 · Experience</p>
        <h2 id="experience-heading" className="mt-3 text-3xl font-semibold tracking-tight">Where I&apos;ve worked</h2>
        <div className="mt-12 divide-y divide-white/20">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="grid gap-3 py-7 md:grid-cols-[0.7fr_1fr_1.3fr] md:gap-8">
              <p className="text-sm text-zinc-400">{item.period}</p>
              <div><h3 className="font-semibold">{item.role}</h3><p className="mt-1 text-sm text-zinc-400">{item.company}</p></div>
              <p className="text-sm leading-6 text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
