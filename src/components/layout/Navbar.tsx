"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-border/50 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-48 h-12 overflow-hidden flex items-center">
            <img 
              src="/images/logo.png" 
              alt="AgentCraft AI Automations" 
              className="object-contain w-full h-full object-left mix-blend-multiply group-hover:opacity-90 transition-opacity"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button variant="gold" className="shadow-[0_0_15px_rgba(201,152,58,0.15)] hover:shadow-[0_0_20px_rgba(201,152,58,0.3)] transition-all" asChild>
              <Link href={siteConfig.links.booking}>Book Free Audit</Link>
            </Button>
          </div>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-6 md:hidden overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <button
            className="absolute top-6 right-6 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-heading font-semibold transition-colors ${
                  pathname === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 pt-8 border-t border-border">
              <Button variant="gold" size="lg" className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                <Link href={siteConfig.links.booking}>Book Free Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
