"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCases } from "@/data/useCases";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";

export default function UseCasesPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-[0_0_20px_rgba(201,152,58,0.1)] hover:border-primary/50 transition-all flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
                    {useCase.industry}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-destructive mb-2">Before Automation</h3>
                    <p className="text-sm text-muted-foreground">{useCase.before}</p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">After AgentCraft</h3>
                    <p className="text-sm text-foreground font-medium">{useCase.after}</p>
                  </div>
                </div>
                
                <div className="space-y-6 border-t border-border/50 pt-8 mt-auto">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">Example Workflows</h3>
                    <ul className="space-y-3">
                      {useCase.workflows.map((workflow, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span>{workflow}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">Commonly Integrated Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground border border-border">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full sm:w-auto mt-4" asChild>
                    <Link href={`${siteConfig.links.booking}?industry=${useCase.industry.toLowerCase()}`}>
                      Discuss Your Use Case <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
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
