"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BookingLink } from "@/components/ui/BookingLink";
import { ctaClass, CtaContent } from "@/components/ui/cta";
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
 * A segmented instrument bar: the logo on the left and a row of small
 * rectangular keys on the right, ending in the arrow-capped booking action.
 *
 * Transparent over the hero, then a solid navy strip once the page moves, so
 * the white labels stay legible over the light sections further down.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${
          scrolled
            ? "bg-[#050A1A]/85 backdrop-blur-xl border-white/[.07]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <BrandLogo priority className="h-8 w-auto sm:h-9" />
            <span className="sr-only">AgentCraft AI Automations — home</span>
          </Link>

          <div className="flex items-center gap-[3px]">
            <nav aria-label="Main" className="hidden xl:flex items-center gap-[3px]">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`h-8 px-3 flex items-center rounded-sm font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      active
                        ? "bg-white text-[#05070D]"
                        : "bg-white/[.07] text-white/85 hover:bg-white/[.16] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <BookingLink className={ctaClass("hidden sm:inline-flex h-8 ml-[3px] text-[10.5px] [&>span:first-child]:px-3.5 [&>span:last-child]:w-8")}>
              <CtaContent>Book free audit</CtaContent>
            </BookingLink>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              className="xl:hidden ml-[3px] flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-sm bg-white/[.1] text-white hover:bg-white/[.18] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-cover menu with a numbered index. */}
      {menuOpen && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="tone-navy fixed inset-0 z-50 flex flex-col px-6 pt-5 pb-10 overflow-y-auto animate-in fade-in duration-300"
        >
          <div className="flex items-center justify-between">
            <BrandLogo className="h-8 w-auto" />
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              autoFocus
              className="flex items-center justify-center w-10 h-10 rounded-sm bg-white/[.1] text-white hover:bg-white/[.18] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav aria-label="Menu" className="flex flex-col mt-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`group flex items-baseline gap-5 py-4 border-b border-white/10 text-3xl sm:text-4xl font-heading font-medium tracking-tight transition-colors ${
                  pathname === link.href ? "text-primary-strong" : "text-white hover:text-primary-strong"
                }`}
              >
                <span className="label-mono text-white/50">{String(i + 1).padStart(2, "0")}</span>
                {link.name}
                <ArrowRight className="w-5 h-5 ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-3">
            <BookingLink onClick={closeMenu} className={ctaClass("h-12 w-full [&>span:first-child]:flex-1 [&>span:first-child]:justify-center")}>
              <CtaContent>Book free audit</CtaContent>
            </BookingLink>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClass("h-12 w-full [&>span]:flex-1 [&>span]:justify-center")}
              >
                <CtaContent tone="ghost" icon={<MessageCircle className="w-4 h-4" />}>Chat on WhatsApp</CtaContent>
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
