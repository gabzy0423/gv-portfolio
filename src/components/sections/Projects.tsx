import Image from "next/image";
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

      <div className="mt-10 grid gap-5 md:auto-rows-[10rem] md:grid-cols-4">
        {visibleProjects.map((project, index) => {
          const size = index === 0
            ? "md:col-span-2 md:row-span-2 md:min-h-[21rem]"
            : index === 1
              ? "md:col-span-2 md:min-h-[10rem]"
              : "md:col-span-1 md:min-h-[10rem]";

          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative flex min-h-64 flex-col justify-end overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${size}`}
            >
              {project.image ? (
                <Image src={project.image} alt="" fill sizes="(min-width: 768px) 448px, 100vw" className="object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-background transition-transform duration-500 ease-out group-hover:scale-110" aria-hidden="true" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-line bg-background/40 px-2.5 py-1 font-mono text-[10px] font-semibold text-accent backdrop-blur-sm">PROJECT 0{index + 1}</span>
                  <span className="font-mono text-xs text-muted transition-colors duration-300 group-hover:text-accent">View ↗</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">{project.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-foreground/[0.06] px-2.5 py-1 font-mono text-[10px] text-muted">{technology}</span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {!showAll && (
        <div className="mt-8 flex justify-center">
          <Link href="/projects" className="inline-flex min-h-10 items-center rounded-md border border-line px-4 py-2 font-mono text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">View all projects ↗</Link>
        </div>
      )}
    </section>
  );
}
