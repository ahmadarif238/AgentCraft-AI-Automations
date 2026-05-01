"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";

const processSteps = [
  {
    num: "01",
    title: "Discover",
    description: "We understand your workflows, bottlenecks, tools, and goals. We map out exactly where time is being lost.",
  },
  {
    num: "02",
    title: "Design",
    description: "We map the automation architecture, choose the right tools (n8n, Zapier, custom APIs), and present a clear strategy.",
  },
  {
    num: "03",
    title: "Build",
    description: "We develop custom AI agents, automations, APIs, dashboards, and integrations according to the approved architecture.",
  },
  {
    num: "04",
    title: "Test",
    description: "We rigorously validate reliability, edge cases, security, and user experience in a staging environment.",
  },
  {
    num: "05",
    title: "Deploy",
    description: "We launch the system into your real business workflow with full documentation and team training.",
  },
  {
    num: "06",
    title: "Optimize",
    description: "We monitor performance, improve logic, and expand automation over time as your business evolves.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-6">Our Process</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              A Proven Path to Automation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We don't just write code. We map your business logic and engineer reliable systems that scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto relative">
            
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border" />

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Left Side */}
                  <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12 md:order-2"}`}>
                    <div className="bg-card border border-border p-8 rounded-2xl shadow-lg w-full md:max-w-md relative hover:border-primary/50 transition-colors">
                      <div className="text-6xl font-heading font-bold text-primary/10 absolute top-4 right-6 pointer-events-none">
                        {step.num}
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">{step.title}</h3>
                      <p className="text-muted-foreground relative z-10">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-secondary items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>

                  {/* Mobile Node / Spacer */}
                  <div className="md:hidden flex items-center gap-4 my-6 w-full px-6">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                      {step.num}
                    </div>
                    <div className="h-px bg-border flex-1" />
                  </div>
                  
                  {/* Empty Right Side for alignment */}
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:order-1"}`} />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
