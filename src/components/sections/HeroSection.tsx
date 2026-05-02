"use client";

import { ArrowRight, Sparkles, BrainCircuit, Settings, Users, Database, Network, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const badges = [
  "Workflow Automation",
  "Custom AI Agents",
  "RAG Assistants",
  "CRM Automation",
  "API Integrations",
  "Ongoing Support",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 xl:min-h-[85vh] flex items-center bg-background">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-[1280px] mx-auto">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start text-left">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Badge variant="gold" className="mb-6 px-3 py-1 text-sm font-semibold">
                AI Agents & Automations for Modern Businesses
              </Badge>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                We Automate Workflows. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  You Scale Effortlessly.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                AgentCraft AI Automations builds custom AI agents, workflow automations, RAG assistants, and business integrations that eliminate repetitive work and help companies grow faster.
              </p>
            </div>

            <div className="flex flex-col w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-3 w-full">
                <Button variant="gold" size="lg" className="w-full sm:w-auto font-semibold gap-2 shadow-[0_0_20px_rgba(201,152,58,0.2)] hover:shadow-[0_0_30px_rgba(201,152,58,0.4)] transition-all" asChild>
                  <Link href="/contact">
                    <Sparkles className="w-4 h-4" />
                    Book a Free Automation Audit
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 border-border hover:bg-secondary hover:text-secondary-foreground transition-all" asChild>
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mb-8 max-w-md">
                Free audit includes workflow review, automation opportunities, and a practical implementation roadmap.
              </p>
            </div>

            <div className="flex flex-col gap-4 animate-in fade-in duration-700 delay-500">
              <div className="flex flex-wrap gap-2 max-w-lg">
                {badges.map((badge, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-border/50">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-2">
                Built with LangGraph, FastAPI, n8n, Zapier, Make, Power Automate, and RAG systems.
              </p>
            </div>
          </div>

          {/* Right Side: Animated Hub */}
          <div className="relative h-[400px] lg:h-[600px] hidden lg:flex items-center justify-center animate-in fade-in zoom-in-95 duration-1000 delay-300">
            {/* The animated grid/hub */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,152,58,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,152,58,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            {/* Central Node */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative z-20 w-28 h-28 rounded-2xl bg-secondary border border-primary shadow-[0_0_50px_rgba(201,152,58,0.4)] flex items-center justify-center"
            >
              <span className="font-heading font-bold text-5xl text-primary tracking-tighter">A</span>
              <div className="absolute inset-0 rounded-2xl border border-primary/20 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
            </motion.div>

            {/* Orbiting / Connecting Nodes */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              
              {/* Node 1: AI Agents */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[15%] right-[15%] z-10 flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg relative">
                  <BrainCircuit className="w-6 h-6 text-foreground" />
                  <div className="absolute -left-16 top-1/2 h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-background/80 px-2 rounded">AI Agents</span>
              </motion.div>

              {/* Node 2: Workflow Automation */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute top-[20%] left-[10%] z-10 flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg relative">
                  <Settings className="w-6 h-6 text-foreground" />
                  <div className="absolute -right-12 top-1/2 h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-background/80 px-2 rounded">Workflows</span>
              </motion.div>

              {/* Node 3: CRM */}
              <motion.div 
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[35%] left-[5%] z-10 flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg relative">
                  <Users className="w-6 h-6 text-foreground" />
                  <div className="absolute -right-20 top-1/2 h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-background/80 px-2 rounded">CRM</span>
              </motion.div>

              {/* Node 4: Documents (RAG) */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[15%] left-[25%] z-10 flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg relative">
                  <Database className="w-6 h-6 text-foreground" />
                  <div className="absolute -top-16 left-1/2 w-px h-16 bg-gradient-to-t from-transparent to-primary/50" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-background/80 px-2 rounded">Documents</span>
              </motion.div>

              {/* Node 5: APIs */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-[20%] right-[20%] z-10 flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg relative">
                  <Network className="w-6 h-6 text-foreground" />
                  <div className="absolute -left-12 -top-8 w-16 h-px bg-gradient-to-r from-transparent to-primary/50 origin-left -rotate-45" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-background/80 px-2 rounded">APIs</span>
              </motion.div>

              {/* Node 6: Reports */}
              <motion.div 
                animate={{ x: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.5 }}
                className="absolute top-[45%] right-[5%] z-10 flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg relative">
                  <BarChart3 className="w-6 h-6 text-foreground" />
                  <div className="absolute -left-20 top-1/2 h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-background/80 px-2 rounded">Reports</span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
