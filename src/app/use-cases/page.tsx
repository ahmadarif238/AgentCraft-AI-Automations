"use client";

import { CheckCircle2 } from "lucide-react";
import { useCases } from "@/data/useCases";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";

export default function UseCasesPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-6">Industries & Use Cases</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Built for Businesses That Want to Move Faster
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover how custom AI agents and workflow automations solve industry-specific bottlenecks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-[0_0_20px_rgba(201,152,58,0.1)] transition-all flex flex-col h-full"
              >
                <h2 className="text-2xl font-heading font-bold mb-4 text-primary">
                  {useCase.industry}
                </h2>
                <p className="text-muted-foreground mb-8 text-sm flex-1">
                  {useCase.description}
                </p>
                
                <div className="space-y-4 border-t border-border/50 pt-6 mt-auto">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Example Workflows</h3>
                  <ul className="space-y-3">
                    {useCase.workflows.map((workflow, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{workflow}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
