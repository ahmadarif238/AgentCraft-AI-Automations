"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BookingLink } from "@/components/ui/BookingLink";
import { whatsappUrl } from "@/config/site";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Closed on navigation from the handler rather than an effect, so tapping a
  // link never leaves the overlay stranded open over the new page.
  const closeMenu = () => setMobileMenuOpen(false);

  // Escape to close, and lock the page behind the overlay so it can't scroll underneath.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href="/"
            className="flex items-center shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background hover:opacity-90 transition-opacity"
          >
            <BrandLogo variant="dark" priority className="h-9 w-auto sm:h-10" />
            <span className="sr-only">AgentCraft AI Automations — home</span>
          </Link>

          {/* Telemetry chip: the system's "this thing is running" tell. */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-canvas border border-border label-mono text-muted-foreground">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Automation: live</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          )}

          <BookingLink className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:border-primary bg-canvas text-xs font-semibold text-foreground hover:text-primary hover:shadow-[0_0_15px_rgba(173,255,47,0.25)] transition-all duration-200">
            <span>Book free audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </BookingLink>

          <button
            className="lg:hidden p-2 -mr-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 bg-background flex flex-col pt-6 px-6 pb-10 lg:hidden overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="flex items-center justify-between">
            <BrandLogo variant="dark" className="h-9 w-auto" />
            <button
              className="p-2 -mr-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={closeMenu}
              aria-label="Close menu"
              autoFocus
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 mt-12">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`flex items-baseline gap-4 py-4 border-b border-border/60 text-2xl font-heading font-semibold transition-colors ${
                  pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                <span className="label-mono text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-3">
            <BookingLink className="inline-flex items-center justify-center gap-2 h-12 rounded-full border border-primary bg-canvas text-primary font-semibold text-sm shadow-[0_0_20px_rgba(173,255,47,0.2)]">
              <span>Book free audit</span>
              <ArrowRight className="w-4 h-4" />
            </BookingLink>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 rounded-full border border-border bg-card text-foreground font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
