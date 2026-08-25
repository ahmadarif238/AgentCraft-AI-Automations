import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Workflow, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies & AI Systems",
  description:
    "Multi-agent systems, RAG implementations and workflow automations built by AgentCraft AI - the problem, the architecture, and the business value in each.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <div className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            AI Systems &amp; Automations We&apos;ve Built
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore production-grade architecture patterns, RAG implementations, and multi-agent systems built to solve complex business operations.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24 max-w-5xl mx-auto">
          {caseStudies.map((system, i) => (
            <div 
              key={system.id} 
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Visual Placeholder Side */}
              <div className="lg:col-span-5 w-full aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden relative shadow-lg group-hover:shadow-xl group-hover:border-primary/50 transition-all flex flex-col">
                <div className="h-10 bg-secondary border-b border-border flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-border/80" />
                  <div className="w-3 h-3 rounded-full bg-border/80" />
                  <div className="w-3 h-3 rounded-full bg-border/80" />
                </div>
                <div className="flex-1 p-6 flex flex-col items-center justify-center text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
                  <Workflow className="w-12 h-12 text-primary-strong/40 mb-4" />
                  <span className="font-heading font-bold text-foreground/80">{system.title} Architecture</span>
                  <span className="text-xs text-muted-foreground mt-2">System architecture</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="text-primary-strong border-primary/30 bg-primary/5">
                    {system.category}
                  </Badge>
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">{system.title}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {system.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/40 p-4 rounded-xl border border-border">
                    <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                      The Problem
                    </h3>
                    <p className="text-sm text-muted-foreground">{system.problem}</p>
                  </div>
                  <div className="bg-card/40 p-4 rounded-xl border border-border">
                    <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      The Solution
                    </h3>
                    <p className="text-sm text-muted-foreground">{system.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-mono text-[11px] font-semibold text-primary mb-3 uppercase tracking-[0.16em]">Business Value</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-strong shrink-0" />
                    <p className="text-foreground font-medium">{system.businessValue}</p>
                  </div>
                  <div className="flex items-start gap-3 mt-3">
                    <CheckCircle className="w-5 h-5 text-primary-strong shrink-0" />
                    <p className="text-foreground font-medium">{system.adaptation}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-mono text-[11px] font-semibold text-primary mb-3 uppercase tracking-[0.16em]">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {system.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
