"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon, Bars3Icon, EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SoundToggle } from "@/components/ui/SoundToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/about#education", label: "Highlights" },
  { href: "/contact", label: "Community" },
];

const MENU_CLOSE_DURATION = 260;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
      return;
    }

    setIsMenuMounted(true);
    setIsMenuOpen(true);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isMenuOpen || !isMenuMounted) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setIsMenuMounted(false), prefersReducedMotion ? 0 : MENU_CLOSE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [isMenuOpen, isMenuMounted]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/75 shadow-sm backdrop-blur-xl backdrop-saturate-150">
      <nav aria-label="Primary navigation" className="mx-auto flex min-h-10 max-w-4xl items-center justify-between gap-4 px-4 sm:min-h-16 sm:px-6">
        <Link href="/" className="shrink-0 font-mono text-base font-bold tracking-tight text-foreground" aria-label="GV home">
          <Image src="/images/branding/gv-favicon.svg" alt="GV" width={28} height={28} className="size-7 rounded-md" priority />
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
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:hidden"
          >
            <span className="relative size-5" aria-hidden="true">
              <Bars3Icon className={`absolute inset-0 size-5 transform-gpu transition-[transform,opacity] duration-200 ease-out ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
              <XMarkIcon className={`absolute inset-0 size-5 transform-gpu transition-[transform,opacity] duration-200 ease-out ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} />
            </span>
          </button>
        </div>
      </nav>

      {isMenuMounted && (
        <>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className={`mobile-menu-backdrop fixed inset-x-0 bottom-0 top-10 z-30 bg-black/20 sm:hidden ${isMenuOpen ? "mobile-menu-open" : "mobile-menu-closing"}`}
          />
          <aside
            role="dialog"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            aria-modal="true"
            data-lenis-prevent
            className={`mobile-menu-sheet fixed inset-x-0 top-10 z-40 flex h-[calc(100vh-2.5rem)] w-full flex-col overflow-y-auto rounded-b-2xl border border-t-0 border-line bg-background p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-xl sm:hidden ${isMenuOpen ? "mobile-menu-open" : "mobile-menu-closing"}`}
          >
            <div className="flex flex-col pt-3 font-pixel text-2xl text-muted">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-line px-0 py-4 transition-[color,transform] duration-300 ease-out hover:translate-x-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>{link.label}</span>
                  <ArrowRightIcon aria-hidden="true" className="size-4 shrink-0" />
                </Link>
              ))}
            </div>
            <div className="mt-8 max-w-xs">
              <div className="flex items-center gap-2 font-pixel text-xs text-foreground">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                Available for freelance &amp; collaboration
              </div>
              <p className="mt-2 font-pixel text-[11px] leading-relaxed text-muted">Software Developer · Metro Manila, Philippines</p>
            </div>
            <div className="mt-auto mb-4 flex flex-col gap-5 border-t border-line pt-5">
              <div className="flex items-center gap-2">
                <ThemeToggle segmented />
                <div className="rounded-full border border-line p-0">
                  <SoundToggle />
                </div>
              </div>
              <a
                href="mailto:gabrielvargas0423@gmail.com"
                className="flex flex-col gap-2 text-muted transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="max-w-xs font-pixel text-[11px] leading-relaxed">For work, projects &amp; everything else, reach me at</span>
                <span className="flex items-center gap-2 font-pixel text-xs font-semibold text-foreground">
                  <EnvelopeIcon className="size-3.5 shrink-0" aria-hidden="true" />
                  gabrielvargas0423@gmail.com
                </span>
              </a>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
