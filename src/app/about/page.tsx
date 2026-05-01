"use client";

import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";
import { Code2, Server, Database, BrainCircuit, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-6">About AgentCraft</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Practical Automation. <br /> Not Hype.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are a founder-led AI automation studio helping businesses build intelligent systems that solve real workflow problems.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center max-w-5xl mx-auto">
            <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl bg-card border border-border shadow-2xl relative overflow-hidden flex items-center justify-center">
              {/* Photo Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-80" />
              <div className="text-center relative z-10 p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 border-2 border-primary/50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">AK</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <h3 className="text-xl font-heading font-bold text-foreground">Arif Ahmad Khan</h3>
                <p className="text-sm text-primary">Founder & AI Engineer</p>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-heading font-bold mb-6">Expert Engineering. Direct Communication.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AgentCraft AI Automations was built on the belief that AI should generate ROI, not just headlines. 
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                As an AI Engineer specializing in Agentic AI, Generative AI, Retrieval-Augmented Generation (RAG) systems, and multi-agent workflows, I build production-ready applications that connect your business tools and automate repetitive work.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">Agentic AI & RAG</span>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">LangGraph & FastAPI</span>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                  <Server className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">n8n, Zapier, Make</span>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">Vector DBs & SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Why Founder-Led Matters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Implementation</h3>
              <p className="text-muted-foreground text-sm">No bureaucratic delays. We move from strategy to deployment quickly, focusing on immediate business value.</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border text-center relative overflow-hidden border-primary/30 shadow-[0_0_20px_rgba(201,152,58,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Scalable Architecture</h3>
              <p className="text-muted-foreground text-sm relative z-10">Systems built correctly from day one. We use proper engineering practices so your automation doesn't break as you grow.</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-muted-foreground text-sm">No forced templates. Every workflow is mapped to your specific business logic, tools, and operational goals.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
