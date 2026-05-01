"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-6">Contact Us</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Let's Build Your <br className="hidden md:block" /> Automation Strategy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Book a free automation audit or send us a message to discuss how we can help your business scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Booking */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Ways to Connect</h2>
              <p className="text-muted-foreground mb-10">
                We're a remote-first company serving clients worldwide. Choose the best way to reach us below.
              </p>

              <div className="space-y-6 mb-12">
                <a href="mailto:hello@agentcraftai.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-sm text-muted-foreground">hello@agentcraftai.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/company/agentcraft-ai-automations" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">AgentCraft AI Automations</p>
                  </div>
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 relative z-10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">Book a Free Audit</h3>
                <p className="text-muted-foreground mb-6 relative z-10">
                  Schedule a 30-minute discovery call to map out your workflows and identify immediate automation opportunities.
                </p>
                <Button variant="gold" size="lg" className="w-full sm:w-auto relative z-10">
                  Schedule on Calendly <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-heading font-bold mb-6">Send a Message</h2>
                
                {isSuccess ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <Button variant="outline" className="mt-8" onClick={() => setIsSuccess(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input id="name" required className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input id="email" type="email" required className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@company.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">Company</label>
                        <input id="company" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Company Name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium">Budget Range</label>
                        <select id="budget" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring text-foreground">
                          <option value="">Select budget...</option>
                          <option value="under-5k">Under $5k</option>
                          <option value="5k-10k">$5k - $10k</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k+">$25k+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="workflow" className="text-sm font-medium">What do you want to automate?</label>
                      <input id="workflow" required className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g., Lead follow-up, Document processing..." />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="tools" className="text-sm font-medium">Current tools you use</label>
                      <input id="tools" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g., HubSpot, Gmail, Slack..." />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea id="message" required className="w-full min-h-[120px] p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y" placeholder="Tell us about your operational bottlenecks..." />
                    </div>

                    <Button type="submit" variant="gold" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
