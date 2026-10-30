import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects({ showAll = false }: { showAll?: boolean }) {
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto mt-16 max-w-4xl px-6 pb-12 pt-20 lg:mt-24 lg:pb-16 lg:pt-24">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-pixel text-sm font-bold tracking-tight text-foreground">01 — Projects</p>
          <h2 id="projects-heading" className="mt-3 font-mono text-3xl font-semibold tracking-tight">Selected work</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative flex min-h-48 min-w-0 cursor-pointer flex-col overflow-hidden rounded-xl border border-line bg-surface p-4 transition-[border-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" aria-hidden="true" />
            <div className="relative z-10 flex flex-1 flex-col">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-xs font-semibold text-accent">0{index + 1}</p>
                <span className="font-mono text-xs text-muted transition-colors duration-300 group-hover:text-accent">View case study ↗</span>
              </div>
              <div className="mt-auto pt-10">
                <h3 className="text-2xl font-semibold tracking-tight group-hover:text-accent">{project.title}</h3>
              <div className="mt-3">
                  <p className="text-sm leading-6 text-muted">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-foreground/[0.06] px-2.5 py-1 font-mono text-[10px] text-muted">{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {!showAll && (
        <div className="mt-8 flex justify-center">
          <Link href="/projects" className="inline-flex min-h-10 items-center rounded-md border border-line px-4 py-2 font-mono text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">View all projects ↗</Link>
        </div>
      )}
    </section>
  );
}
