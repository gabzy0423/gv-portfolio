import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-line/80 bg-background/95 backdrop-blur">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight" aria-label="Your Name home">
          Your Name<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-5 text-sm font-medium text-muted sm:gap-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-foreground px-4 py-2 text-background transition-colors hover:bg-accent">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
