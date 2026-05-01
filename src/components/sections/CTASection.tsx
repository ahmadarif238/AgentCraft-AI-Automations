"use client";

import Link from "next/link";
import { Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary border-t border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-card-foreground">
              Ready to Automate Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Book a free automation audit and we’ll identify the workflows you should automate first to save time, reduce costs, and scale effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="lg" className="w-full sm:w-auto font-semibold gap-2" asChild>
                <Link href="/contact">
                  <Sparkles className="w-4 h-4" />
                  Book Free Automation Audit
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2" asChild>
                <Link href="/contact">
                  <MessageSquare className="w-4 h-4" />
                  Send a Message
                </Link>
              </Button>
            </div>
            
            <p className="mt-6 text-xs text-muted-foreground">
              No obligation. Just practical automation ideas built around your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
