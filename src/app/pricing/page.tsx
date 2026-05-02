"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const packages = [
  {
    id: "audit",
    name: "Free Automation Audit",
    price: "Free",
    bestFor: "Businesses exploring automation opportunities.",
    includes: [
      "Workflow review",
      "Automation opportunity map",
      "Tool recommendations",
      "Estimated ROI",
      "Implementation roadmap"
    ],
    cta: "Book Free Audit",
    href: siteConfig.links.booking,
    highlight: false,
  },
  {
    id: "sprint",
    name: "Workflow Automation Sprint",
    price: "Custom Quote",
    bestFor: "One clear workflow that needs to be automated quickly.",
    includes: [
      "One defined workflow automation",
      "Tool/API integration",
      "Testing",
      "Documentation",
      "Handover video",
      "Short support period"
    ],
    cta: "Start a Sprint",
    href: siteConfig.links.booking,
    highlight: true,
  },
  {
    id: "agent",
    name: "Custom AI Agent Build",
    price: "Custom Quote",
    bestFor: "Businesses needing an AI assistant or agent connected to tools, documents, or business logic.",
    includes: [
      "Custom AI agent",
      "RAG or tool-use capability if needed",
      "Business rules",
      "API integrations",
      "Deployment",
      "Testing and handover"
    ],
    cta: "Build an AI Agent",
    href: siteConfig.links.booking,
    highlight: false,
  },
  {
    id: "partner",
    name: "Monthly Automation Partner",
    price: "Custom Monthly Retainer",
    bestFor: "Companies that want ongoing automation support and continuous improvement.",
    includes: [
      "Monitoring",
      "Maintenance",
      "Improvements",
      "New workflow automations",
      "Monthly reporting",
      "Priority support"
    ],
    cta: "Become a Partner",
    href: siteConfig.links.booking,
    highlight: false,
  }
];

export default function PricingPage() {
  return (
    <div className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            AI Automation Packages
          </h1>
          <p className="text-xl text-muted-foreground">
            Final pricing depends on workflow complexity, integrations, data sources, and support requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, i) => (
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
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.bestFor}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-border">
                <span className="text-3xl font-heading font-bold text-foreground">{pkg.price}</span>
              </div>

              <div className="flex-1 mb-8">
                <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Includes:</p>
                <ul className="space-y-4">
                  {pkg.includes.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
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
                <Link href={pkg.href}>{pkg.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
