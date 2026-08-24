"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { bookingUrl, whatsappUrl } from "@/config/site";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Closed on navigation from the handler rather than an effect, so tapping a
  // link never leaves the overlay stranded open over the new page.
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-border/50 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background hover:opacity-90 transition-opacity"
        >
          <BrandLogo priority className="h-9 w-auto sm:h-10 lg:h-11" />
          <span className="sr-only">AgentCraft AI Automations — home</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {whatsappUrl && (
            <Button
              variant="outline"
              className="hidden sm:inline-flex gap-2"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          )}
          <div className="hidden md:block">
            <Button
              variant="gold"
              className="shadow-[0_0_15px_rgba(201,152,58,0.15)] hover:shadow-[0_0_20px_rgba(201,152,58,0.3)] transition-all"
              asChild
            >
              <Link href={bookingUrl}>Book Free Audit</Link>
            </Button>
          </div>
          <button
            className="md:hidden p-2 -mr-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
          className="fixed inset-0 z-50 bg-background flex flex-col pt-6 px-6 pb-10 md:hidden overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="flex items-center justify-between">
            <BrandLogo className="h-9 w-auto" />
            <button
              className="p-2 -mr-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={closeMenu}
              aria-label="Close menu"
              autoFocus
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 mt-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-2xl font-heading font-semibold transition-colors ${
                  pathname === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-3 border-t border-border">
            <Button variant="gold" size="lg" className="w-full" asChild>
              <Link href={bookingUrl} onClick={closeMenu}>Book Free Audit</Link>
            </Button>
            {whatsappUrl && (
              <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
