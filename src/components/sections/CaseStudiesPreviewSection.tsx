"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CaseStudiesPreviewSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              AI Systems Built for Real Business Workflows.
            </h2>
            <p className="text-muted-foreground text-lg">
              Real systems we have designed and shipped, showcasing advanced Agentic AI, RAG, and automation architectures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/50 transition-all flex flex-col h-full"
            >
              <Badge variant="outline" className="w-fit mb-4 text-primary-strong border-primary/30 bg-primary/5">
                {study.category}
              </Badge>
              <h3 className="text-xl font-heading font-bold mb-3">{study.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {study.overview}
              </p>
              
              <div className="mt-auto pt-6 border-t border-border flex items-center text-sm font-semibold text-foreground group-hover:text-primary-strong transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
              
              <Link
                href="/case-studies"
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
              >
                <span className="sr-only">Learn more about {study.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="secondary" size="lg" asChild className="group">
            <Link href="/case-studies">
              View All Systems
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
