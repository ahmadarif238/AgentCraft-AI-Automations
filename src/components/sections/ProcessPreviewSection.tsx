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

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16 relative">
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-px bg-border -translate-y-1/2 z-0" />
          
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-row md:flex-col items-center gap-4 md:gap-4 w-full md:w-auto"
            >
              <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center text-sm font-bold shadow-lg">
                0{i + 1}
              </div>
              <h3 className="font-heading font-semibold text-lg md:text-base whitespace-nowrap">
                {step}
              </h3>
            </motion.div>
          ))}
        </div>

        <Button variant="gold" size="lg" asChild className="group">
          <Link href="/process">
            See How We Work
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
