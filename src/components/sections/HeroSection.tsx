import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { BookingLink } from "@/components/ui/BookingLink";
import { Sparkle } from "@/components/ui/Sparkle";
import { HeroVisual } from "@/components/hero/HeroVisual";

const capabilities = [
  "Workflow Automation",
  "Custom AI Agents",
  "RAG Assistants",
  "CRM Automation",
  "API Integrations",
  "Ongoing Support",
];

/**
 * Rayo hero: an oversized uppercase display headline that alternates solid
 * words with outline-stroked ones set in a capsule, a marquee running behind
 * it, and the accent sparkle as the pivot between the two lines.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-32">
      {/* Marquee behind the headline. Decorative, so hidden from assistive tech. */}
      <div
        aria-hidden="true"
        className="absolute top-28 sm:top-36 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.07] select-none -z-[5]"
      >
        <div className="animate-marquee whitespace-nowrap text-6xl sm:text-8xl lg:text-9xl font-black font-heading tracking-tight text-foreground">
          <span>AI AGENTS ✦ WORKFLOW AUTOMATION ✦ RAG ASSISTANTS ✦ ZERO BUSYWORK ✦&nbsp;</span>
          <span>AI AGENTS ✦ WORKFLOW AUTOMATION ✦ RAG ASSISTANTS ✦ ZERO BUSYWORK ✦&nbsp;</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border label-mono font-bold text-primary-strong uppercase shadow-sm">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>AI Agents &amp; Automations for Modern Businesses</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card/90 border border-border label-mono text-muted-foreground shadow-md backdrop-blur-md">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-foreground font-bold">AUTOMATION:</span>
            <span>LIVE</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-[92px] xl:text-[108px] font-extrabold tracking-tight leading-[0.92] uppercase font-heading mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <span className="flex flex-wrap items-center gap-x-4 sm:gap-x-6">
            <span className="text-foreground">We automate</span>
            <span className="title-outline px-4 sm:px-7 py-0.5 sm:py-1 border border-foreground/25 rounded-full inline-block">
              workflows
            </span>
          </span>
          <span className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 mt-2 sm:mt-4">
            <Sparkle className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-primary animate-pulse" />
            <span className="text-foreground">you scale.</span>
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              AgentCraft AI Automations builds custom AI agents, workflow automations, RAG
              assistants, and business integrations that eliminate repetitive work and help
              companies grow faster.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <BookingLink className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-xl shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all">
                <span>Book a free automation audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </BookingLink>

              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-border bg-card hover:border-primary text-foreground font-medium text-sm transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current text-primary-strong" />
                <span>Explore services</span>
              </Link>
            </div>

            <p className="text-xs text-muted-extra mt-5 max-w-md">
              Free audit includes workflow review, automation opportunities, and a practical
              implementation roadmap.
            </p>

            <div className="flex flex-wrap gap-2 mt-10">
              {capabilities.map((c) => (
                <span
                  key={c}
                  className="px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>

            <p className="label-mono uppercase text-muted-extra mt-6">
              Built with LangGraph, FastAPI, n8n, Zapier, Make, Power Automate, and RAG systems.
            </p>
          </div>

          <div className="lg:col-span-5 animate-in fade-in duration-1000 delay-300">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
