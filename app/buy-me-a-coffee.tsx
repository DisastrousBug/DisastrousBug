"use client";

import { useEffect } from "react";

export function BuyMeACoffee({ username }: { username?: string }) {
  useEffect(() => {
    if (!username || document.querySelector('[data-name="BMC-Widget"]')) return;

    const loadWidget = () => {
      if (document.querySelector('[data-name="BMC-Widget"]')) return;

      const script = document.createElement("script");
      script.dataset.name = "BMC-Widget";
      script.dataset.cfasync = "false";
      script.dataset.id = username;
      script.dataset.description = "Support me on Buy me a coffee!";
      script.dataset.message = "";
      script.dataset.color = "#79D6B5";
      script.dataset.position = "Right";
      script.dataset.x_margin = "18";
      script.dataset.y_margin = "18";
      script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
      script.async = true;
      document.body.appendChild(script);
    };

    const fallback = window.setTimeout(loadWidget, 5000);
    return () => window.clearTimeout(fallback);
  }, [username]);

  return null;
}
