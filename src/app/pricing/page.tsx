import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/sections/FaqSection";
import { formatPrice, pricingDrivers, pricingPackages } from "@/data/pricing";
import { objectionFaqs } from "@/data/faqs";
import { bookingUrl } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Pricing & Packages",
  description:
    "Free automation audit, fixed-scope workflow sprints, custom AI agent builds, and monthly automation partnerships. We scope and quote a fixed price before any build starts.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <div className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              AI Automation Packages
            </h1>
            <p className="text-xl text-muted-foreground">
              Every project is quoted as a fixed price before work starts, so there are no
              open-ended hourly bills. What moves that price is set out below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPackages.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col p-8 rounded-3xl border ${
                  pkg.highlight
                    ? "bg-card border-primary shadow-[0_0_30px_rgba(201,152,58,0.15)] scale-100 lg:scale-105 z-10"
                    : "bg-card/40 border-border hover:border-primary/50"
                } transition-all animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-heading font-bold text-foreground mb-2">{pkg.name}</h2>
                  <p className="text-sm text-muted-foreground">{pkg.bestFor}</p>
                </div>

                <div className="mb-8 pb-8 border-b border-border">
                  <span className="text-3xl font-heading font-bold text-foreground">
                    {formatPrice(pkg)}
                  </span>
                </div>

                <div className="flex-1 mb-8">
                  <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                    Includes:
                  </p>
                  <ul className="space-y-4">
                    {pkg.includes.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={pkg.highlight ? "gold" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link href={bookingUrl}>{pkg.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What drives the number — so "custom quote" isn't a black box. */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
              What Changes the Price
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Automation work is priced on scope, not on seat count. These four things
              account for most of the difference between a small build and a large one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingDrivers.map((driver) => (
              <div key={driver.title} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  {driver.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{driver.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="gold" size="lg" asChild>
              <Link href={bookingUrl}>Get a Fixed Quote</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              The audit and the quote are both free.
            </p>
          </div>
        </div>
      </section>

      <FaqSection
        items={objectionFaqs.filter((faq) => faq.question.includes("cost") || faq.question.includes("breaks"))}
        heading="Pricing Questions"
        subheading="The two we get asked most."
      />
    </>
  );
}
