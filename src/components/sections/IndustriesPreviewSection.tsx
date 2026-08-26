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
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Built for Businesses That Want to Move Faster.
          </h2>
          <p className="text-muted-foreground/80 text-lg">
            Every industry has specific bottlenecks. We tailor automation strategies to solve your exact operational problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              /* Same card contract as Core Services and Case Studies: overlay
                 link over the whole card, "Learn more" as the signifier, and a
                 rule holding it off the copy. */
              className="group relative h-full bg-card/5 border border-border/50 rounded-xl p-6 hover:bg-card/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(173,255,47,0.1)] transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-canvas border border-border flex items-center justify-center mb-6 text-primary group-hover:border-primary group-hover:scale-110 transition-all duration-200">
                <useCase.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{useCase.industry}</h3>
              <p className="text-muted-foreground/80 text-sm mb-6 flex-1 leading-relaxed">
                {useCase.summary}
              </p>

              <div className="mt-auto pt-6 border-t border-border/60 flex items-center text-sm font-semibold text-foreground group-hover:text-primary-strong transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>

              <Link
                href={`/use-cases#${useCase.id}`}
                className="absolute inset-0 z-10 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-secondary"
              >
                <span className="sr-only">Learn more about automation for {useCase.industry}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="secondary" size="lg" asChild className="group">
            <Link href="/use-cases">
              Explore All Use Cases
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
