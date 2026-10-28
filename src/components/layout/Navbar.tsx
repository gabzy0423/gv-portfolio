import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/about#education", label: "Highlights" },
  { href: "/contact", label: "Community" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#f0f0f0] bg-white">
      <nav aria-label="Primary navigation" className="mx-auto flex min-h-20 max-w-4xl flex-wrap items-center justify-between gap-4 px-6">
        <Link href="/" className="shrink-0 text-base font-bold tracking-tight text-[#111827]" aria-label="RBL home">
          RBL
        </Link>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-normal text-[#98a2b3] sm:gap-x-6 md:gap-x-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap transition-colors hover:text-[#111827] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-4">
              {link.label}
            </Link>
          ))}
          <span className="ml-1 hidden h-6 w-px bg-[#d9dde5] sm:block" aria-hidden="true" />
          <span className="grid size-10 shrink-0 place-items-center text-[#667085]" title="Theme" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="3.25" />
              <path strokeLinecap="round" d="M12 2.5v2M12 19.5v2M4.58 4.58l1.42 1.42M18 18l1.42 1.42M2.5 12h2M19.5 12h2M4.58 19.42 6 18M18 6l1.42-1.42" />
            </svg>
          </span>
        </div>
      </nav>
    </header>
  );
}
