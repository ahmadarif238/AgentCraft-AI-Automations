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

        {/*
          Previously bare text boxes, which read as inert next to the iconed
          cards in Core Services and Security. Same icon-plus-copy structure as
          those cards now, and the whole card is the link, so the visual weight
          and the affordance both match the rest of the page.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {useCases.slice(0, 8).map((useCase, i) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/use-cases#${useCase.id}`}
                className="group h-full bg-card/5 border border-border/50 rounded-xl p-6 hover:border-primary/50 hover:bg-card/10 transition-colors flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-secondary"
              >
                <div className="w-12 h-12 rounded-xl bg-canvas border border-border flex items-center justify-center mb-5 text-primary group-hover:border-primary group-hover:scale-110 transition-all duration-200">
                  <useCase.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2">{useCase.industry}</h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed flex-1">
                  {useCase.summary}
                </p>
                <span className="mt-5 flex items-center text-sm font-semibold text-primary-strong/80 group-hover:text-primary-strong transition-colors">
                  See the workflows
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
