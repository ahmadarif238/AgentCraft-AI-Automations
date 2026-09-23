"use client";

import { Sun, Moon } from "lucide-react";

/**
 * Rayo's pill colour switcher.
 *
 * Deliberately stateless. The applied theme already lives as a `light` class
 * on <html>, so the control's own appearance is driven from CSS descendant
 * variants rather than mirrored into React state. That keeps it correct on
 * first paint, avoids a hydration mismatch against the pre-paint script in the
 * layout, and means the button only ever does one thing: flip the class.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const nowLight = !root.classList.contains("light");
    root.classList.toggle("light", nowLight);
    try {
      localStorage.setItem("theme", nowLight ? "light" : "dark");
    } catch {
      // Private mode or blocked storage: the choice just won't persist.
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className={`flex items-center gap-2 px-2.5 py-2.5 rounded-full bg-background/90 backdrop-blur-xl border border-border shadow-lg hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      <Sun
        aria-hidden="true"
        className="w-3.5 h-3.5 text-muted-extra [.light_&]:text-primary-strong transition-colors"
      />
      <span aria-hidden="true" className="w-6 h-3 rounded-full bg-border relative p-0.5 block">
        <span className="block w-2 h-2 rounded-full bg-primary translate-x-3 [.light_&]:translate-x-0 transition-transform duration-300" />
      </span>
      <Moon
        aria-hidden="true"
        className="w-3.5 h-3.5 text-primary [.light_&]:text-muted-extra transition-colors"
      />
    </button>
  );
}
