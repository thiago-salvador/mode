"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: {
      (action: string, options?: Record<string, unknown>): void;
      ns?: Record<string, unknown>;
      q?: Array<[string, Record<string, unknown>?]>;
      loaded?: boolean;
    };
  }
}

export function useCal() {
  useEffect(() => {
    // Load Cal.com embed script
    if (typeof window !== "undefined" && !window.Cal) {
      (function (C, A, L) {
        let p = function () {
          if (typeof window.Cal !== "function") {
            const cal: any = function (...args: unknown[]) {
              cal.q = cal.q || [];
              cal.q!.push(args as [string, Record<string, unknown>?]);
            };
            cal.q = [] as Array<[string, Record<string, unknown>?]>;
            window.Cal = cal as Window["Cal"];
          }
          if (!window.Cal?.loaded) {
            const cal_script = A.createElement("script");
            cal_script.type = "text/javascript";
            cal_script.async = true;
            cal_script.src = L;
            const first_script = A.getElementsByTagName("script")[0];
            if (first_script?.parentNode) {
              first_script.parentNode.insertBefore(cal_script, first_script);
            }
            window.Cal!.loaded = true;
          }
        };
        p();
      })("", document, "https://app.cal.com/embed/embed.js");
    }
  }, []);

  const openCalendar = (calLink: string) => {
    if (window.Cal) {
      window.Cal("init", { origin: "https://cal.com" });

      // Configure UI theme
      window.Cal("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#020617",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // Open the popup modal
      window.Cal("openModal", {
        calLink: calLink,
      });
    }
  };

  return { openCalendar };
}
