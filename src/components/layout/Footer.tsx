import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© Your Name. Replace with your details.</p>
        <Link href="/contact" className="font-semibold text-foreground hover:text-accent">
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </footer>
  );
}
