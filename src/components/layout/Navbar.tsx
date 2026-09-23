"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BookingLink } from "@/components/ui/BookingLink";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { whatsappUrl } from "@/config/site";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

/**
 * Rayo's floating header: separate rounded capsules rather than one bar, over
 * a transparent strip. The row is pointer-inert so the page stays clickable
 * between the capsules.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full px-4 sm:px-8 py-5 pointer-events-none">
        <div className="container mx-auto flex items-center justify-between gap-3 pointer-events-auto">
          <Link
            href="/"
            className="group flex items-center gap-3 bg-background/90 backdrop-blur-xl px-4 py-2.5 rounded-full border border-border shadow-lg hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <BrandLogo variant="dark" priority className="h-7 w-auto sm:h-8" />
            <span className="sr-only">AgentCraft AI Automations — home</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1 bg-background/90 backdrop-blur-xl px-2 py-1.5 rounded-full border border-border shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <BookingLink className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all">
              <span>Book free audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </BookingLink>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full bg-background/90 backdrop-blur-xl border border-border shadow-lg text-foreground hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Curtain menu: full-cover panel with a numbered index, Rayo style. */}
      {menuOpen && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 bg-background flex flex-col px-6 pt-6 pb-10 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="flex items-center justify-between">
            <BrandLogo variant="dark" className="h-8 w-auto" />
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              autoFocus
              className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col mt-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`group flex items-baseline gap-5 py-4 border-b border-border text-3xl sm:text-4xl font-heading font-extrabold uppercase tracking-tight transition-colors ${
                  pathname === link.href ? "text-primary-strong" : "text-foreground hover:text-primary-strong"
                }`}
              >
                <span className="label-mono text-muted-extra">/{String(i + 1).padStart(2, "0")}</span>
                {link.name}
                <ArrowUpRight className="w-5 h-5 ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-3">
            <BookingLink
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 h-14 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-xl shadow-primary/20"
            >
              <span>Book free audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </BookingLink>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 rounded-full border border-border bg-card text-foreground font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
