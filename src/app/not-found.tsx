import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { BookingLink } from "@/components/ui/BookingLink";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const usefulLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
        <p className="text-primary-strong font-heading font-bold text-6xl md:text-7xl mb-6">404</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          The link may be out of date. Here&apos;s where most people are headed:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {usefulLinks.map((link) => (
            <Button key={link.href} variant="outline" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        <Button variant="gold" size="lg" asChild>
          <BookingLink>Book a Free Automation Audit</BookingLink>
        </Button>
      </div>
    </section>
  );
}
