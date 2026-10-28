import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/about#education", label: "Highlights" },
  { href: "/contact", label: "Community" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background">
      <nav aria-label="Primary navigation" className="mx-auto flex min-h-16 max-w-4xl flex-wrap items-center justify-between gap-4 px-6">
        <Link href="/" className="shrink-0 text-base font-bold tracking-tight text-foreground" aria-label="GV home">
          GV
        </Link>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-normal text-muted sm:gap-x-6 md:gap-x-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background">
              {link.label}
            </Link>
          ))}
          <span className="ml-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
