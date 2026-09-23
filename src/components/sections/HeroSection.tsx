import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookingLink } from "@/components/ui/BookingLink";
import { ctaClass, CtaContent } from "@/components/ui/cta";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { caseStudies } from "@/data/caseStudies";

const capabilities = [
  "Workflow Automation",
  "Custom AI Agents",
  "RAG Assistants",
  "CRM Automation",
  "API Integrations",
  "Ongoing Support",
];

/** The newest system on the case studies page, surfaced as the hero's bulletin. */
const latest = caseStudies[caseStudies.length - 1];

/**
 * The hero: navy into cobalt, a large light headline with a muted second
 * line, and the chrome core floating in HUD brackets on the right. A bulletin
 * row along the bottom carries the positioning copy and the newest build.
 */
export function HeroSection() {
  return (
    <section className="tone-navy relative overflow-hidden min-h-[100svh] flex flex-col">
      <div aria-hidden="true" className="absolute inset-0 contours pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 grid-lines pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 pt-32 sm:pt-36 lg:pt-40 pb-10">
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="kicker">AI Agents &amp; Automations for Modern Businesses</span>

          <h1 className="display text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] mt-7">
            We automate workflows.
            <span className="block text-white/45">You scale effortlessly.</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-[3px] mt-10">
            <BookingLink className={ctaClass()}>
              <CtaContent>Book a free automation audit</CtaContent>
            </BookingLink>
            <Link href="/services" className={ctaClass()}>
              <CtaContent tone="ghost">Explore services</CtaContent>
            </Link>
          </div>

          <p className="text-xs text-white/55 mt-4 max-w-md">
            Free audit includes workflow review, automation opportunities, and a practical
            implementation roadmap.
          </p>
        </div>

        {/* The chrome core, framed like a specimen plate. */}
        <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[420px] lg:min-h-0 animate-in fade-in duration-1000 delay-300">
          <div aria-hidden="true" className="absolute inset-[6%] hud-corners pointer-events-none" />
          <span aria-hidden="true" className="absolute top-[8%] left-[9%] label-mono text-white/50">AGENT CORE / 01</span>
          <span aria-hidden="true" className="absolute bottom-[8%] right-[9%] label-mono text-white/50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary" /> DATA IN MOTION
          </span>
          <HeroVisual className="absolute inset-0" />
        </div>
      </div>

      {/* Bulletin row. */}
      <div className="container mx-auto px-4 md:px-6 relative pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end pt-8 border-t border-white/10">
          <p className="md:col-span-3 label-mono uppercase text-white/50 leading-relaxed">
            Built with LangGraph, FastAPI, n8n, Zapier, Make, Power Automate, and RAG systems.
          </p>
          <p className="md:col-span-5 text-[15px] sm:text-base text-white/80 leading-relaxed">
            AgentCraft AI Automations builds custom AI agents, workflow automations, RAG
            assistants, and business integrations that eliminate repetitive work and help
            companies grow faster.
          </p>
          <Link
            href={`/case-studies#${latest.id}`}
            className="md:col-span-4 group relative block bg-white/[.06] hover:bg-white/[.1] transition-colors p-4 pl-5 border-l-2 border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex items-center justify-between label-mono text-white/55 uppercase">
              <span>Latest system</span>
              <span>{latest.category}</span>
            </span>
            <span className="flex items-center justify-between gap-4 mt-2">
              <span className="text-sm font-medium text-white">{latest.title}: {latest.overview.split(",")[0]}</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-white/70 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </span>
          </Link>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-8 label-mono uppercase text-white/45">
          {capabilities.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span aria-hidden="true" className="w-1 h-1 bg-white/40" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
