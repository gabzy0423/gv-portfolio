import Link from "next/link";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-8 lg:py-36">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Software developer · Portfolio</p>
          <h1 id="hero-heading" className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            Your Name builds useful things for the web.
          </h1>
        </div>
        <div className="max-w-md lg:justify-self-end">
          <p className="text-lg leading-8 text-muted">
            A clear place to share your work, the problems you solve, and what you are learning next.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent">
              View projects
            </Link>
            <Link href="/contact" className="rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
