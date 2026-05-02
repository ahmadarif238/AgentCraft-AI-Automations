"use client";

import { CheckCircle2, Code2, Database, BrainCircuit, Rocket, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const expertise = [
  { icon: BrainCircuit, label: "Multi-agent AI Systems (LangGraph)" },
  { icon: Database, label: "RAG & Vector Search (Pinecone, Weaviate)" },
  { icon: Rocket, label: "Workflow Automation (n8n, Zapier, Make)" },
  { icon: Code2, label: "Backend AI Applications (FastAPI, PostgreSQL)" },
  { icon: Cpu, label: "Microsoft Power Automate & Power Platform" },
  { icon: ShieldCheck, label: "Cloud & Deployment (AWS, Azure, Docker)" },
];

const values = [
  {
    title: "Honest Engineering",
    description: "We don't sell hype or impossible AI dreams. We build reliable, grounded systems that actually work in production."
  },
  {
    title: "Founder-to-Founder Delivery",
    description: "When you work with AgentCraft, you work directly with the founder. No junior account managers, no offshore handoffs."
  },
  {
    title: "Security by Default",
    description: "Your data is yours. We implement human-in-the-loop approvals and secure API handling from day one."
  }
];

export default function AboutPage() {
  return (
    <div className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">About Us</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            A Founder-Led AI Automation Studio.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We bridge the gap between complex AI research and practical business operations.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
          <div className="md:col-span-5 w-full aspect-[4/5] rounded-3xl bg-secondary border border-border shadow-2xl relative overflow-hidden flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            <div className="text-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center mx-auto mb-4 text-3xl font-heading font-bold text-foreground">
                {siteConfig.founderName.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">{siteConfig.founderName}</h3>
              <p className="text-primary font-medium">{siteConfig.founderTitle}</p>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Meet the Founder</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {siteConfig.founderName} is an AI Engineer specializing in Agentic AI, Generative AI, Retrieval-Augmented Generation systems, multi-agent workflows, and business automation.
              </p>
              <p>
                Frustrated by the hype surrounding AI, {siteConfig.founderName.split(" ")[0]} founded AgentCraft AI Automations to build practical, secure, and highly reliable systems using LangGraph, LangChain, FastAPI, vector databases, n8n, Zapier, Make, Microsoft Power Automate, and modern backend infrastructure.
              </p>
              <p>
                The goal is simple: Help companies eliminate repetitive work so they can scale without scaling headcount.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <Button variant="outline" asChild>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">GitHub Projects</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="max-w-5xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Technical Expertise</h2>
            <p className="text-muted-foreground">The stack we use to build robust automation systems.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-card/40 border border-border p-4 rounded-xl">
                <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-sm text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Founder-Led & Values */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-32">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Why Founder-Led Delivery Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Many agencies sell you using senior partners, only to hand the actual work to junior developers. 
              At AgentCraft, the person designing your system architecture is the same person writing the code and setting up the webhooks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This ensures higher quality, faster communication, and a deep understanding of your business goals throughout the entire project lifecycle.
            </p>
          </div>
          <div className="space-y-8">
            {values.map((value, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flyer / Company Overview */}
        <div className="max-w-4xl mx-auto mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 border border-border flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[350px] aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-border/50 group">
                <img src="/images/flyer.png" alt="AgentCraft AI Automations Flyer" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href="/images/flyer.png" download className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Our Company Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Want to share what we do with your team? Download our quick one-page overview detailing our services, technical capabilities, and business benefits.
              </p>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="/images/flyer.png" download>Download Overview</a>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-card-foreground">
            Let's Build Something Impactful.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Book a call directly with the founder to discuss your operations and see how AI can help you scale.
          </p>
          <Button variant="gold" size="lg" className="w-full sm:w-auto font-semibold gap-2 shadow-[0_0_20px_rgba(201,152,58,0.2)]" asChild>
            <Link href={siteConfig.links.booking}>
              Book a Free Automation Audit
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
