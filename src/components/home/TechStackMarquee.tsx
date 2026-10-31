import { technologies } from "@/data/technologies";

export function TechStackMarquee() {
  const iconGroup = (decorative = false) => (
    <div aria-hidden={decorative} className="flex shrink-0 items-center gap-14 pr-14">
      {technologies.map(({ label, icon }) => (
        <div key={label} className="flex items-center justify-center">
          <svg aria-hidden="true" className="size-11 shrink-0" viewBox="0 0 24 24" style={{ fill: `#${icon.hex}` }}>
            <path d={icon.path} />
          </svg>
          <span className="sr-only">{label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section aria-label="Technology highlights" className="mt-8 py-6 text-muted">
      <div className="mx-auto max-w-4xl overflow-hidden px-6">
        <div className="tech-marquee">
          <div className="tech-marquee-track flex w-max items-center">
            {iconGroup()}
            {iconGroup(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
