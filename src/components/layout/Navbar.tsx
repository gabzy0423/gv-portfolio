"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/about#education", label: "Highlights" },
  { href: "/contact", label: "Community" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background">
      <nav aria-label="Primary navigation" className="mx-auto flex min-h-16 max-w-4xl items-center justify-between gap-4 px-6">
        <Link href="/" className="shrink-0 font-mono text-base font-bold tracking-tight text-foreground" aria-label="GV home">
          GV
        </Link>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-x-4 font-mono text-[13px] font-normal text-muted sm:flex md:gap-x-7">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="whitespace-nowrap transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background">
                {link.label}
              </Link>
            ))}
            <span className="ml-1 h-6 w-px bg-line" aria-hidden="true" />
          </div>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
            className="fixed inset-0 z-30 bg-black/20 sm:hidden"
          />
          <aside
            role="dialog"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            aria-modal="true"
            className="fixed inset-y-0 right-0 z-40 flex w-[min(19rem,85vw)] flex-col border-l border-line bg-background p-6 shadow-xl sm:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted">Menu</span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className="grid size-11 place-items-center rounded-md text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-1 font-mono text-sm text-muted">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-3 py-3 transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
