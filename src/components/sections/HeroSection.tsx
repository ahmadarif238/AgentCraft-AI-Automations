"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BrainCircuit, Workflow, Database, LineChart, Network, Folder } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const badges = [
  "Workflow Automation",
  "AI Agents",
  "RAG Assistants",
  "CRM Automation",
  "API Integrations",
  "Ongoing Support"
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-background">
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
                Custom AI agents, workflow automations, RAG assistants, and business integrations built to eliminate repetitive work and help your company grow faster.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
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

            <div className="flex flex-wrap gap-2 max-w-lg animate-in fade-in duration-700 delay-500">
              {badges.map((badge, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-foreground border border-border/50">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Animated Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[550px] w-full flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Base Hub Card */}
            <div className="absolute inset-0 bg-secondary/40 border border-border/40 rounded-3xl backdrop-blur-sm shadow-2xl overflow-hidden" />
            
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(201,152,58,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,152,58,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Central Node */}
            <div className="relative z-20 w-32 h-32 rounded-2xl bg-secondary border border-primary shadow-[0_0_40px_rgba(201,152,58,0.3)] flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-pulse" />
              <BrainCircuit className="w-16 h-16 text-primary" />
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Ring 1 */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-primary/10" />
              
              {/* Ring 2 */}
              <div className="absolute w-[420px] h-[420px] rounded-full border border-primary/5" />

              {/* Connecting lines */}
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45" />
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-45" />

              {/* Node 1: Workflow */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] left-[20%] w-14 h-14 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center z-10"
              >
                <Workflow className="w-6 h-6 text-foreground" />
              </motion.div>

              {/* Node 2: Database */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[10%] right-[25%] w-14 h-14 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center z-10"
              >
                <Database className="w-6 h-6 text-foreground" />
              </motion.div>

              {/* Node 3: Analytics */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[20%] right-[15%] w-14 h-14 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center z-10"
              >
                <LineChart className="w-6 h-6 text-foreground" />
              </motion.div>

              {/* Node 4: APIs */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[15%] left-[25%] w-14 h-14 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center z-10"
              >
                <Network className="w-6 h-6 text-foreground" />
              </motion.div>

              {/* Node 5: Documents */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-[45%] left-[5%] w-14 h-14 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center z-10"
              >
                <Folder className="w-6 h-6 text-foreground" />
              </motion.div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
