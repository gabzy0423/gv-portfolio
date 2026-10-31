import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/projects/ProjectPage";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailsPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return <ProjectPage project={project} />;
}
