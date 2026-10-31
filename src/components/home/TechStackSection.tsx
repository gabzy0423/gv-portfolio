import Link from "next/link";
import { technologies } from "@/data/technologies";

const technologyRows = [technologies.slice(0, 8), technologies.slice(8, 16), technologies.slice(16)];

export function TechStack() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading" className="mx-auto mt-16 w-full max-w-4xl overflow-x-hidden px-6 pb-16 pt-20 lg:mt-24 lg:pb-24 lg:pt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-pixel text-sm font-bold tracking-tight text-foreground">03 — Tech Stack</p>
          <h2 id="tech-stack-heading" className="mt-3 font-mono text-3xl font-semibold tracking-tight">Technologies</h2>
        </div>
        <Link href="#tech-stack" className="shrink-0 font-pixel text-xs font-semibold text-muted transition-[color,transform] duration-300 ease-out hover:translate-x-0.5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background">
          View All ↗
        </Link>
      </div>
      <div className="mt-8 space-y-3">
        {technologyRows.map((row, rowIndex) => (
          <div key={`technology-row-${rowIndex}`} className={`tech-stack-row w-full max-w-full tech-stack-row-${rowIndex + 1}`}>
            <div className="tech-stack-row-track flex w-max items-center">
              {[row, row].map((group, groupIndex) => (
                <div key={groupIndex} aria-hidden={groupIndex === 1} className="flex shrink-0 items-center gap-3 pr-3">
                  {group.map(({ label, icon }) => (
                    <span key={`${label}-${groupIndex}`} className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-foreground">
                      <svg aria-hidden="true" className="size-5 shrink-0" viewBox="0 0 24 24" style={{ fill: `#${icon.hex}` }}>
                        <path d={icon.path} />
                      </svg>
                      {label}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
