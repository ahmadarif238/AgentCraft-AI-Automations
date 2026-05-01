"use client";

import { caseStudies } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-6">Portfolio & Demos</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Systems We've Built
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore example solutions, internal builds, and demo systems showcasing our technical capabilities in AI and workflow automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(201,152,58,0.15)] transition-all flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-secondary border-b border-border relative flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
                  <span className="text-muted-foreground font-heading font-bold text-xl group-hover:scale-110 transition-transform duration-500">
                    {study.title}
                  </span>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <Badge variant="outline" className="w-fit mb-4 text-primary border-primary/30">
                    {study.category}
                  </Badge>
                  
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    {study.title}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {study.description}
                  </p>
                  
                  <div className="space-y-6 mt-auto">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Business Value</h3>
                      <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                        {study.businessValue}
                      </p>
                    </div>
                  </div>
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
