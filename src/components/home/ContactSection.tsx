import Image from "next/image";
import { ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const email = "gabrielvargas0423@gmail.com";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-4xl px-6 pb-24 pt-20 lg:pb-28 lg:pt-24">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-16">
        <div>
          <p className="font-pixel text-sm font-bold tracking-tight text-foreground">05 — Contact</p>
          <h2 id="contact-heading" className="mt-3 max-w-xl font-pixel text-3xl font-bold tracking-tight sm:text-5xl">Let&apos;s build something useful.</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
            Have a project, collaboration, or idea that could use a thoughtful build? Send me a message and let&apos;s talk through it.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-7 inline-flex min-h-11 items-center rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
            <ArrowUpRightIcon aria-hidden="true" className="ml-3 size-4" />
          </a>
        </div>

        <div className="grid gap-3">
          <div className="rounded-xl border border-line bg-foreground/[0.03] p-4">
            <a href="https://www.linkedin.com/in/gabriel-vargas-b15977347/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-accent">
              <Image src="/images/social/linkedin.svg" alt="" width={20} height={20} className="social-icon size-5" />
              <span className="flex flex-col gap-0.5">
                <span className="font-mono text-xs font-semibold text-foreground">LinkedIn</span>
                <span className="font-mono text-[11px] text-muted">gabriel-vargas-b15977347</span>
              </span>
            </a>
          </div>
          <div className="rounded-xl border border-line bg-foreground/[0.03] p-4">
            <a href="https://github.com/gabzy0423" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-accent">
              <Image src="/images/social/github.svg" alt="" width={20} height={20} className="social-icon size-5" />
              <span className="flex flex-col gap-0.5">
                <span className="font-mono text-xs font-semibold text-foreground">GitHub</span>
                <span className="font-mono text-[11px] text-muted">gabzy0423</span>
              </span>
            </a>
          </div>
          <div className="rounded-xl border border-line bg-foreground/[0.03] p-4">
            <a href={`mailto:${email}`} className="flex items-center gap-3 font-mono text-sm font-semibold text-foreground transition-colors hover:text-accent">
              <EnvelopeIcon aria-hidden="true" className="size-5 shrink-0" />
              <span className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold">Email me</span>
                <span className="break-all text-[11px] font-normal text-muted">{email}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
