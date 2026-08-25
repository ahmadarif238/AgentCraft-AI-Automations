import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingLink } from "@/components/ui/BookingLink";
import { HeroVisual } from "@/components/hero/HeroVisual";

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
                {/* Text-safe gradient stops: the brand gold reads at only 2.36:1 on cream. */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-strong to-accent-strong">
                  You Scale Effortlessly.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                AgentCraft AI Automations builds custom AI agents, workflow automations, RAG assistants, and business integrations that eliminate repetitive work and help companies grow faster.
              </p>
            </div>

            <div className="flex flex-col w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-3 w-full">
                <Button variant="gold" size="lg" className="w-full sm:w-auto font-semibold gap-2 shadow-[0_0_20px_rgba(173,255,47,0.2)] hover:shadow-[0_0_30px_rgba(173,255,47,0.4)] transition-all" asChild>
                  <BookingLink>
                    <Sparkles className="w-4 h-4" />
                    Book a Free Automation Audit
                  </BookingLink>
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
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.14em] mt-2">
                Built with LangGraph, FastAPI, n8n, Zapier, Make, Power Automate, and RAG systems.
              </p>
            </div>
          </div>

          {/* Right Side: 3D workflow graph, with a static fallback. */}
          <HeroVisual />

        </div>
      </div>
    </section>
  );
}
