"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const processSteps = [
  "Discover",
  "Design",
  "Build",
  "Test",
  "Deploy",
  "Optimize"
];

export function ProcessPreviewSection() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16">
          Our Proven Automation Process
        </h2>

        {/*
          Each step takes an equal share of the row (md:flex-1) rather than
          shrinking to its label and clustering in the middle of the container,
          so the timeline fills the section it heads. The connector is inset by
          half a column at each end — 1/12 of the row for six steps — which
          lands it exactly on the first and last circle centres instead of
          overshooting them by several percent of the container.
        */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-4 mb-16 relative max-w-5xl mx-auto">
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-8 left-[8.333%] right-[8.333%] h-px bg-border -translate-y-1/2 z-0" />

          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-row md:flex-col items-center gap-4 w-full md:w-auto md:flex-1"
            >
              <div className="w-16 h-16 shrink-0 rounded-full bg-card border-2 border-border flex items-center justify-center font-heading text-lg font-bold shadow-lg">
                0{i + 1}
              </div>
              <h3 className="font-heading font-semibold text-lg whitespace-nowrap">
                {step}
              </h3>
            </motion.div>
          ))}
        </div>

        <Button variant="secondary" size="lg" asChild className="group">
          <Link href="/process">
            See How We Work
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
