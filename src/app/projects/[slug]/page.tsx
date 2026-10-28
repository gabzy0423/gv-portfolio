import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getProjectBySlug } from "@/lib/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
      <Link href="/projects" className="text-sm font-semibold text-accent hover:underline">
        ← Back to projects
      </Link>
      <div className="mt-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Case study</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>
        <p className="mt-6 text-xl leading-8 text-muted">{project.summary}</p>
      </div>
      <div className="mt-16 grid gap-12 border-t border-line pt-10 md:grid-cols-[1fr_240px]">
        <div className="space-y-8 text-lg leading-8 text-muted">
          <p>{project.description}</p>
          <p>{project.outcome}</p>
        </div>
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="font-semibold text-foreground">Role</dt>
            <dd className="mt-1 text-muted">{project.role}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Technologies</dt>
            <dd className="mt-1 text-muted">{project.technologies.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
