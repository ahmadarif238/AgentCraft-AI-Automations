"use client";

import { pricingPackages } from "@/data/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export default function PricingPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-6">Pricing & Packages</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From one-off sprints to long-term partnerships, we offer flexible models tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-card rounded-2xl p-8 border ${
                  pkg.popular ? "border-primary shadow-[0_0_30px_rgba(201,152,58,0.15)] relative" : "border-border shadow-lg"
                } flex flex-col h-full hover:-translate-y-1 transition-transform`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <h2 className="text-xl font-heading font-bold mb-2">{pkg.title}</h2>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{pkg.description}</p>
                
                <div className="mb-8 pb-8 border-b border-border">
                  <span className="text-3xl font-heading font-bold text-foreground">{pkg.price}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button 
                    variant={pkg.popular ? "gold" : "outline"} 
                    className="w-full" 
                    asChild
                  >
                    <Link href="/contact">{pkg.ctaText}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* FAQ Preview */}
          <div className="mt-32 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-bold text-lg mb-2">How long does an automation project take?</h3>
                <p className="text-muted-foreground">Most Workflow Sprints take 2-4 weeks from discovery to deployment. Complex AI Agent builds may take 4-8 weeks depending on the required integrations and logic.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-bold text-lg mb-2">Do you offer ongoing support?</h3>
                <p className="text-muted-foreground">Yes! Our Automation Partner package provides ongoing maintenance, monitoring, and new feature development to ensure your systems scale with your business.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-bold text-lg mb-2">Is our business data secure?</h3>
                <p className="text-muted-foreground">Absolutely. We use enterprise-grade platforms, secure APIs, and ensure human-in-the-loop approvals for critical workflows. We do not unnecessarily store your data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
