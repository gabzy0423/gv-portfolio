"use client";

import { useEffect, useState } from "react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

type ThemeMode = "default" | "light" | "dark";

export function ThemeToggle({ segmented = false }: { segmented?: boolean }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("default");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const nextThemeMode: ThemeMode = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "default";
    const shouldUseDark = nextThemeMode === "dark";

    document.documentElement.classList.toggle("dark", shouldUseDark);

    const frame = window.requestAnimationFrame(() => setThemeMode(nextThemeMode));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function setTheme(nextThemeMode: ThemeMode) {
    const nextIsDark = nextThemeMode === "dark";

    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextThemeMode);
    setThemeMode(nextThemeMode);
  }

  const isDark = themeMode === "dark";

  if (!segmented) {
    return (
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
        className="grid size-9 shrink-0 place-items-center rounded-full text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="relative size-4" aria-hidden="true">
          <SunIcon className={`absolute inset-0 size-4 transition-[transform,opacity] duration-200 ${isDark ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
          <MoonIcon className={`absolute inset-0 size-4 transition-[transform,opacity] duration-200 ${isDark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} />
        </span>
      </button>
    );
  }

  return (
    <div role="group" aria-label="Theme preference" className="inline-flex items-center rounded-full border border-line p-0">
      <button
        type="button"
        onClick={() => setTheme("default")}
        aria-label="Use default light mode"
        aria-pressed={themeMode === "default"}
        className={`grid size-5 place-items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          themeMode === "default" ? "bg-foreground/10 text-foreground" : "text-muted hover:bg-foreground/10 hover:text-foreground"
        }`}
      >
        <ComputerDesktopIcon className="size-3" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Use light mode"
        aria-pressed={themeMode === "light"}
        className={`grid size-5 place-items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          themeMode === "light" ? "bg-foreground/10 text-foreground" : "text-muted hover:bg-foreground/10 hover:text-foreground"
        }`}
      >
        <SunIcon className="size-3" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Use dark mode"
        aria-pressed={themeMode === "dark"}
        className={`grid size-5 place-items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          themeMode === "dark" ? "bg-foreground/10 text-foreground" : "text-muted hover:bg-foreground/10 hover:text-foreground"
        }`}
      >
        <MoonIcon className="size-3" aria-hidden="true" />
      </button>
    </div>
  );
}
