import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
        <div className="flex items-center justify-between gap-4">
          <p className="font-pixel text-sm font-bold tracking-tight">02 — Experience</p>
          <span className="font-mono text-xs font-semibold text-muted transition-[color,transform] duration-300 ease-out hover:translate-x-0.5 hover:text-accent">View details ↗</span>
        </div>
        <h2 id="experience-heading" className="mt-3 font-mono text-3xl font-semibold tracking-tight">Where I&apos;ve worked</h2>
        <div className="relative mt-12 border-l border-line pl-6 sm:pl-8">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-background bg-accent sm:-left-[39px]" aria-hidden="true" />
              <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <p className="font-mono text-sm text-muted">{item.period}</p>
                <div>
                  <h3 className="font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted">{item.company}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
