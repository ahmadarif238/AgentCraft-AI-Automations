"use client";

import { ArrowRight, FileCode2, ExternalLink, Workflow, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const systems = [
  {
    id: "sales-ai",
    category: "B2B Sales Automation",
    title: "SalesAI",
    label: "Founder-built system",
    overview: "Automates lead generation, scoring, engagement, and sales workflow coordination.",
    problem: "B2B sales teams spend too much time on manual prospect research, data entry into CRM, and crafting personalized outreach.",
    solution: "A custom multi-agent system that scrapes target companies, scores leads based on ICP fit, and drafts personalized outreach messages.",
    technologies: ["LangGraph", "n8n", "OpenAI", "Pinecone"],
    businessValue: "Reduced manual sales research time by 60% in founder-built project work.",
    adaptation: "Can be adapted to any CRM (Salesforce, HubSpot) to automatically enrich inbound leads.",
  },
  {
    id: "contract-iq",
    category: "AI Contract Intelligence",
    title: "ContractIQ",
    label: "Founder-built system",
    overview: "Multi-agent system for analyzing, verifying, and benchmarking complex legal agreements.",
    problem: "Legal and procurement teams get bottlenecked reviewing standardized agreements for non-standard clauses.",
    solution: "A RAG-based workflow that compares uploaded contracts against a master playbook, flagging risks and generating a summary report.",
    technologies: ["FastAPI", "Weaviate", "LangChain", "React"],
    businessValue: "Grounded outputs with validation-oriented architecture.",
    adaptation: "Can be deployed internally for HR, Procurement, or Legal teams to speed up document reviews.",
  },
  {
    id: "supply-chain-agent",
    category: "Autonomous Operations",
    title: "Smart Supply Chain Agent",
    label: "Founder-built system",
    overview: "Autonomous inventory, forecasting, procurement, and budget negotiation support system.",
    problem: "Supply chain managers constantly switch between ERPs, emails, and supplier portals to manage inventory levels.",
    solution: "An agent that monitors stock levels, predicts shortages using historical data, and drafts supplier reorder emails automatically.",
    technologies: ["Python", "Supabase", "Make", "Claude"],
    businessValue: "Eliminates stockout surprises and automates routine vendor communication.",
    adaptation: "Integrates directly with Shopify, WooCommerce, or custom ERPs.",
  },
  {
    id: "ai-operations-copilot",
    category: "IT & Operations Support",
    title: "AI Operations Copilot",
    label: "Founder-built system",
    overview: "RAG-based IT operations assistant for policy Q&A, log monitoring, and ticket generation.",
    problem: "IT teams are overwhelmed with repetitive level-1 support questions and manual ticket triaging.",
    solution: "A Slack/Teams integrated assistant that answers questions using internal wikis and auto-creates Jira tickets for unresolved issues.",
    technologies: ["LangGraph", "Slack API", "Jira API", "PostgreSQL"],
    businessValue: "Deflects routine tickets and standardizes internal support responses.",
    adaptation: "Easily trained on any internal Confluence or Notion workspace.",
  },
  {
    id: "voice-executive",
    category: "Voice AI & Productivity",
    title: "Voice Executive Agent",
    label: "Founder-built system",
    overview: "Voice-enabled assistant for email and calendar task management.",
    problem: "Executives waste time manually triaging emails and scheduling meetings while on the go.",
    solution: "A voice-activated agent capable of reading email summaries and scheduling calendar events via natural language.",
    technologies: ["ElevenLabs", "Zapier", "Google Workspace APIs", "OpenAI"],
    businessValue: "Turns drive-time into productive administrative time.",
    adaptation: "Can be customized for specific executive workflows or field sales teams.",
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Founder-Built AI Systems & Automation Demos
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore production-grade architecture patterns, RAG implementations, and multi-agent systems built to solve complex business operations.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24 max-w-5xl mx-auto">
          {systems.map((system, i) => (
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
                  <Workflow className="w-12 h-12 text-primary/40 mb-4" />
                  <span className="font-heading font-bold text-foreground/80">{system.title} Architecture</span>
                  <span className="text-xs text-muted-foreground mt-2">Interactive Demo Coming Soon</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
                    {system.category}
                  </Badge>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-secondary px-2 py-1 rounded">
                    {system.label}
                  </span>
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
                  <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Business Value</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-foreground font-medium">{system.businessValue}</p>
                  </div>
                  <div className="flex items-start gap-3 mt-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-foreground font-medium">{system.adaptation}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {system.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <Button variant="outline" className="gap-2" disabled>
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </Button>
                  <Button variant="ghost" className="gap-2" disabled>
                    <FileCode2 className="w-4 h-4" />
                    View Source
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
