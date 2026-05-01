"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-6">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Intelligent Systems Built for Growth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We design, build, and deploy custom automations and AI agents that eliminate manual work and accelerate your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Core Capabilities</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-sm">
                      <strong className="text-foreground font-heading">Ideal For:</strong>{" "}
                      <span className="text-muted-foreground">{service.idealFor}</span>
                    </p>
                  </div>
                </div>
                
                {/* Visual Placeholder */}
                <div className="flex-1 w-full relative">
                  <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden relative group shadow-2xl flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    <service.icon className="w-32 h-32 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-8 left-8 w-16 h-2 bg-primary/20 rounded-full" />
                    <div className="absolute top-12 left-8 w-24 h-2 bg-primary/10 rounded-full" />
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-primary/20 rounded-full" />
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
