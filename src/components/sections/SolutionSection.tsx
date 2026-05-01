"use client";

import { Search, Cog, Network, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Identify",
    description: "We map out your current workflows and identify exactly where time is being lost to manual data entry or repetitive logic."
  },
  {
    icon: Cog,
    title: "2. Automate",
    description: "We build custom logic and AI agents that handle decisions, data formatting, and routing without human intervention."
  },
  {
    icon: Network,
    title: "3. Integrate",
    description: "We connect your CRMs, databases, emails, and SaaS tools so information flows seamlessly across your business."
  },
  {
    icon: TrendingUp,
    title: "4. Optimize",
    description: "We monitor performance, handle edge cases, and continuously improve the system as your operations scale."
  }
];

export function SolutionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            AgentCraft Turns Repetitive Processes Into Intelligent Workflows.
          </h2>
          <p className="text-muted-foreground text-lg">
            Our approach goes beyond basic triggers and actions. We build robust, error-resistant systems that handle complex business logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-border z-0" />
          
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-24 h-24 rounded-full bg-card border-4 border-background flex items-center justify-center mb-6 shadow-xl group-hover:border-primary/50 transition-colors">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
