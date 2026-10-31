import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";

export function ProjectGrid() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <ArrowLeftIcon aria-hidden="true" className="size-4" />
              Back to home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}
