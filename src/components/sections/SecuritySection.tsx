"use client";

import { ShieldCheck, KeyRound, DatabaseZap, FileCode2, Activity, Presentation } from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Human-in-the-loop Approvals",
    description: "Critical actions pause for your approval before execution, ensuring you remain in total control."
  },
  {
    icon: KeyRound,
    title: "Secure API Key Handling",
    description: "We use enterprise-grade secret managers and environment variables. We never expose your credentials."
  },
  {
    icon: DatabaseZap,
    title: "No Unnecessary Data Storage",
    description: "Our agents process your data in transit. We avoid storing PII or sensitive business data in our own databases."
  },
  {
    icon: FileCode2,
    title: "Client-Owned Workflows",
    description: "You own the automation logic and the documentation. No vendor lock-in or proprietary black boxes."
  },
  {
    icon: Activity,
    title: "Monitoring & Maintenance",
    description: "Optional ongoing support to track API health, catch edge cases, and keep systems running 24/7."
  },
  {
    icon: Presentation,
    title: "Clear Handover & Training",
    description: "Every deployment includes a video walkthrough, documentation, and training for your operations team."
  }
];

export function SecuritySection() {
  return (
    <section className="py-24 bg-background relative border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Built With Security and Reliability in Mind.
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't build brittle web scrapers. We engineer robust, secure, and documented systems that enterprises can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, i) => (
            <div
              key={i}
              className="bg-card/40 border border-border rounded-xl p-6 hover:bg-card hover:border-primary/50 transition-all group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
