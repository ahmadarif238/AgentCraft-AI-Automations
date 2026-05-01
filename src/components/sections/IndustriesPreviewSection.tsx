"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCases } from "@/data/useCases";
import { Button } from "@/components/ui/button";

export function IndustriesPreviewSection() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Built for Businesses That Want to Move Faster.
            </h2>
            <p className="text-muted-foreground/80 text-lg">
              Every industry has specific bottlenecks. We tailor automation strategies to solve your exact operational problems.
            </p>
          </div>
          <Button variant="gold" asChild className="shrink-0 group">
            <Link href="/use-cases">
              Explore All Use Cases
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {useCases.slice(0, 8).map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card/5 border border-border/50 rounded-xl p-6 hover:border-primary/50 hover:bg-card/10 transition-colors flex items-center justify-center text-center"
            >
              <h3 className="text-lg md:text-xl font-heading font-semibold">{useCase.industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
