import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import type { Project } from "@/types/portfolio";

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <Link href="/projects" className="inline-flex items-center gap-2 font-pixel text-xs text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        <ArrowLeftIcon aria-hidden="true" className="size-4" />
        Back to projects
      </Link>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
        <div>
          <p className="font-pixel text-sm font-bold text-accent">Project case study</p>
          <h1 className="mt-3 font-pixel text-4xl font-bold tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">{project.description}</p>
          <a href={`mailto:gabrielvargas0423@gmail.com?subject=${encodeURIComponent(`Project inquiry: ${project.title}`)}`} className="mt-8 inline-flex min-h-11 items-center rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Discuss a similar project
            <ArrowUpRightIcon aria-hidden="true" className="ml-3 size-4" />
          </a>
        </div>

        <div className="grid gap-6 rounded-xl border border-line bg-foreground/[0.03] p-5 sm:p-6">
          <div>
            <p className="font-pixel text-xs text-muted">Role</p>
            <p className="mt-2 text-sm font-semibold">{project.role}</p>
          </div>
          <div>
            <p className="font-pixel text-xs text-muted">Technologies</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full bg-foreground/[0.06] px-2.5 py-1 font-mono text-[10px] text-muted">{technology}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-pixel text-xs text-muted">Outcome</p>
            <p className="mt-2 text-sm leading-6 text-muted">{project.outcome}</p>
          </div>
        </div>
      </div>

      {project.image && (
        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface">
          <Image src={project.image} alt={`${project.title} preview`} fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
        </div>
      )}
    </article>
  );
}
