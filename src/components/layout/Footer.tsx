import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-4xl flex-col gap-5 border-t border-dashed border-line px-6 py-8 text-xs text-muted sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-sm italic text-muted">Driven by curiosity, guided by purpose.</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 font-mono">
            <span className="text-foreground">Gabriel Vargas</span>
            <span aria-hidden="true" className="text-line">/</span>
            <span>Still Evolving</span>
            <span aria-hidden="true" className="text-line">/</span>
            <span>Metro Manila, PH</span>
          </div>
        </div>

        <div className="flex items-center">
          <Image
            src="/images/branding/gv-favicon.svg"
            alt="GV logo"
            width={48}
            height={48}
            className="size-12 rounded-xl border border-line object-cover"
          />
        </div>
      </div>
    </footer>
  );
}
