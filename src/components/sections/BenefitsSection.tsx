"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Save 10+ hours every week",
  "Reduce manual data entry errors",
  "Respond to leads 5x faster",
  "Connect scattered tools effortlessly",
  "Scale operations without extra headcount",
  "Improve customer and employee experience"
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Automation That Pays for Itself.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every system we build is designed to generate a measurable return on investment—whether through hours saved, faster sales cycles, or reduced operational errors.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Visual / Mini ROI */}
          <div className="w-full md:w-1/2">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              
              <h3 className="text-xl font-heading font-bold mb-6">Automation ROI Estimator</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hours wasted weekly</span>
                    <span className="font-bold">20 hours</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div className="bg-primary w-1/2 h-full rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg. Hourly Rate</span>
                    <span className="font-bold">$40/hr</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div className="bg-primary w-1/3 h-full rounded-full" />
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Estimated Annual Cost</p>
                      <p className="text-3xl font-heading font-bold text-foreground">$41,600</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-primary font-bold">You could automate this.</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
