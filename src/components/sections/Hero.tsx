import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-4xl px-6 py-14 sm:py-20 lg:py-24">
      <div className="flex items-center gap-5 sm:gap-6">
        <Image
          src="/images/branding/apple-touch-icon.png"
          alt="Gabriel Vargas brand mark"
          width={112}
          height={112}
          className="size-20 rounded-2xl border border-line object-cover sm:size-28"
          priority
        />
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted">Gabriel Vargas</p>
          <p className="mt-2 text-base text-muted sm:text-lg">Software Developer</p>
          <p className="mt-3 font-mono text-xs text-muted">[Add your social links here]</p>
        </div>
      </div>

      <div className="mt-14 max-w-3xl sm:mt-20">
        <h1 id="hero-title" className="text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-6xl">
          I build, create &amp; <span className="text-accent">optimize.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          [Add a short introduction about your work, the problems you solve, and the type of projects you want to build.]
        </p>
        <Link
          href="/projects"
          className="mt-9 inline-flex min-h-11 items-center rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View projects
          <span aria-hidden="true" className="ml-3 text-base">→</span>
        </Link>
      </div>
    </section>
  );
}
