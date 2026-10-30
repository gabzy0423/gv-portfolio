import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects({ showAll = false }: { showAll?: boolean }) {
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-pixel text-sm font-bold tracking-tight text-foreground">01 — Projects</p>
          <h2 id="projects-heading" className="mt-3 text-3xl font-semibold tracking-tight">Selected work</h2>
        </div>
        {!showAll && <Link href="/projects" className="text-sm font-semibold text-accent hover:underline">View all projects ↗</Link>}
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group flex min-h-72 flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-transform hover:-translate-y-1">
            <div>
              <p className="text-sm font-semibold text-accent">0{index + 1}</p>
              <h3 className="mt-8 text-xl font-semibold tracking-tight group-hover:text-accent">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
            </div>
            <span className="mt-8 text-sm font-semibold">View case study <span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
