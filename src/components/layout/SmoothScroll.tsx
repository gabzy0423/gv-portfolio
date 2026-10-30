"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.1,
      anchors: true,
      stopInertiaOnNavigate: true,
      prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
