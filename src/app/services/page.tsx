"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function ServicesPage() {
  return (
    <div className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            AI Automation Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We design, build, and deploy custom AI agents and intelligent workflows that eliminate repetitive tasks and help your business scale efficiently.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-24 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="lg:col-span-5 flex flex-col gap-6 sticky top-32">
                <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center shadow-lg">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">{service.title}</h2>
                  <p className="text-xl text-primary font-semibold leading-snug mb-6">{service.headline}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="bg-card/40 border border-border p-5 rounded-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Ideal For:</span>
                  <p className="text-sm font-medium text-foreground">{service.idealFor}</p>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-10">
                
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">What It Solves</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.solves}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Example Workflows</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map(tool => (
                      <span key={tool} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground border border-border">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto shadow-[0_0_15px_rgba(201,152,58,0.15)] hover:shadow-[0_0_20px_rgba(201,152,58,0.3)] transition-all" asChild>
                    <Link href={`${siteConfig.links.booking}?service=${service.id}`}>
                      Automate This Workflow
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
