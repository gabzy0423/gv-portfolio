import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/projects/ProjectDetails";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailsPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
