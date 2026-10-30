import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, MapPinIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-4xl px-6 py-6 sm:py-10 lg:py-12">
      <div className="flex items-center gap-5 sm:gap-6">
        <Image
          src="/images/profile/gab.jpg"
          alt="Gabriel Vargas"
          width={160}
          height={160}
          className="size-32 rounded-2xl border border-line object-cover sm:size-40"
          priority
        />
        <div>
          <p className="mb-2 flex items-center gap-1.5 font-mono text-[11px] text-muted">
            <MapPinIcon className="size-3.5 shrink-0" aria-hidden="true" />
            Metro Manila, Philippines <span aria-hidden="true">·</span> GMT+8
          </p>
          <p className="flex items-center gap-2 font-pixel text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Gabriel Vargas
            <Image
              src="/images/branding/verified.png"
              alt="Verified"
              width={24}
              height={24}
              className="size-4 shrink-0 object-contain sm:size-5"
            />
          </p>
          <p className="mt-2 font-mono text-xs text-muted sm:text-sm">Software Developer · Web Developer · AI Enthusiast</p>
          <div className="mt-3 flex items-center gap-3">
            <a href="https://github.com/gabzy0423" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <Image src="/images/social/github.svg" alt="" width={20} height={20} className="social-icon size-5" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-vargas-b15977347/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <Image src="/images/social/linkedin.svg" alt="" width={20} height={20} className="social-icon size-5" />
            </a>
            <a href="mailto:gabrielvargas0423@gmail.com" aria-label="Email Gabriel Vargas" className="rounded-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <EnvelopeIcon className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 max-w-3xl sm:mt-6">
        <h1 id="hero-title" className="font-pixel text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
          I design, build &amp; <span className="text-accent">innovate.</span>
        </h1>
        <p className="mt-4 max-w-none text-base leading-7 text-muted">
          I&apos;m a Software Developer specializing in full-stack web development, with experience building web applications, custom management systems, and digital solutions. I work with <strong className="font-semibold text-foreground">Laravel</strong>, <strong className="font-semibold text-foreground">React</strong>, <strong className="font-semibold text-foreground">Next.js</strong>, <strong className="font-semibold text-foreground">PHP</strong>, <strong className="font-semibold text-foreground">TypeScript</strong>, and <strong className="font-semibold text-foreground">MySQL</strong>, turning ideas into functional, user-focused applications that solve real-world problems and support business growth.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Let&apos;s build
            <RocketLaunchIcon aria-hidden="true" className="ml-3 size-4" />
          </Link>
          <span
            aria-disabled="true"
            title="Resume coming soon"
            className="inline-flex min-h-11 cursor-not-allowed items-center rounded-md bg-muted/15 px-5 py-3 text-sm font-semibold text-muted"
          >
            View my resume
          </span>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:w-[calc(100%+5rem)] lg:grid-cols-4" aria-label="Portfolio highlights">
          <li className="rounded-lg border border-line bg-foreground/[0.03] px-4 py-3 transition-colors duration-300 hover:border-accent/50">
            <p className="font-pixel text-2xl font-bold tracking-tight text-foreground">
              3<span className="text-accent">+</span> yrs
            </p>
            <p className="mt-1 font-mono text-[11px] text-muted">Experience</p>
          </li>
          <li className="rounded-lg border border-line bg-foreground/[0.03] px-4 py-3 transition-colors duration-300 hover:border-accent/50">
            <p className="font-pixel text-2xl font-bold tracking-tight text-foreground">
              15<span className="text-accent">+</span>
            </p>
            <p className="mt-1 font-mono text-[11px] text-muted">Shipped projects</p>
          </li>
          <li className="rounded-lg border border-line bg-foreground/[0.03] px-4 py-3 transition-colors duration-300 hover:border-accent/50">
            <p className="font-pixel text-2xl font-bold tracking-tight text-foreground">
              20<span className="text-accent">+</span>
            </p>
            <p className="mt-1 font-mono text-[11px] text-muted">Websites built</p>
          </li>
          <li className="rounded-lg border border-line bg-foreground/[0.03] px-4 py-3 transition-colors duration-300 hover:border-accent/50">
            <p className="font-pixel text-lg font-bold tracking-tight text-foreground">Open to</p>
            <p className="mt-1 font-mono text-[11px] text-muted">Freelance &amp; collaboration</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
