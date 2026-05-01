"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

export function ServicesPreviewSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-lg">
              We design and deploy custom AI agents and workflow automations that eliminate repetitive tasks and scale your business.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0 group">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/50 transition-all flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm flex-1">
                {service.description}
              </p>
              
              <Link href={`/services#${service.id}`} className="mt-6 flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
