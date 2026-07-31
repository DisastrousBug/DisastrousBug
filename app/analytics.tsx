"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag: (...args: unknown[]) => void;
  }
}

export function Analytics({ measurementId }: { measurementId?: string }) {
  const loaded = useRef(false);

  useEffect(() => {
    if (!measurementId) return;

    const load = () => {
      if (loaded.current) return;
      loaded.current = true;

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) { window.dataLayer.push(args); };
      window.gtag("js", new Date());
      window.gtag("config", measurementId);

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      window.removeEventListener("pointerdown", load);
      window.removeEventListener("keydown", load);
      window.removeEventListener("scroll", load);
    };

    const fallback = window.setTimeout(load, 5000);
    window.addEventListener("pointerdown", load, { once: true, passive: true });
    window.addEventListener("keydown", load, { once: true });
    window.addEventListener("scroll", load, { once: true, passive: true });

    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("pointerdown", load);
      window.removeEventListener("keydown", load);
      window.removeEventListener("scroll", load);
    };
  }, [measurementId]);

  return null;
}
