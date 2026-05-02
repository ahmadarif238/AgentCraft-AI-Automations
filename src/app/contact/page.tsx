"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, ArrowRight, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    question: "What happens after I submit the form?",
    answer: "We'll review your current setup and reach out within 24 hours to schedule a free 30-minute discovery call."
  },
  {
    question: "How long does an automation project take?",
    answer: "Most workflow sprints take 1-2 weeks. Custom AI agents can take 3-6 weeks depending on the complexity of your data and integrations."
  },
  {
    question: "Can you work with our existing tools?",
    answer: "Yes. We specialize in connecting existing CRMs, databases, and SaaS tools via APIs without ripping and replacing your core systems."
  },
  {
    question: "Is our data secure?",
    answer: "Absolutely. We don't store your sensitive business data. Our workflows process data in transit using secure, encrypted API connections."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we offer monthly retainer packages for monitoring, maintenance, and continuous optimization of your automated systems."
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call - TODO: Connect to backend (e.g. Resend, EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
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
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Ways to Connect</h2>
              <p className="text-muted-foreground mb-10">
                We're a remote-first company serving clients worldwide. Choose the best way to reach us below.
              </p>

              <div className="space-y-6 mb-12">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Email Us</h3>
                    <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
                  </div>
                </a>
                
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">{siteConfig.name}</p>
                  </div>
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 relative z-10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 relative z-10 text-foreground">Prefer to book directly?</h3>
                <p className="text-muted-foreground mb-6 relative z-10">
                  Schedule a 30-minute discovery call to map out your workflows and identify immediate automation opportunities.
                </p>
                <Button variant="gold" size="lg" className="w-full sm:w-auto relative z-10" asChild>
                  <a href={siteConfig.links.booking === "/contact" ? "#" : siteConfig.links.booking}>
                    Book Free Automation Audit <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Send a Message</h2>
                
                {isSuccess ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours. (Note: This is currently a demo frontend).</p>
                    <Button variant="outline" className="mt-8" onClick={() => setIsSuccess(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                        <input id="name" required className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                        <input id="email" type="email" required className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground" placeholder="john@company.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-foreground">Company</label>
                        <input id="company" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground" placeholder="Company Name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-foreground">Budget Range</label>
                        <select id="budget" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground">
                          <option value="">Select budget...</option>
                          <option value="under-5k">Under $5k</option>
                          <option value="5k-10k">$5k - $10k</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k+">$25k+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="workflow" className="text-sm font-medium text-foreground">What do you want to automate?</label>
                      <input id="workflow" required className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground" placeholder="e.g., Lead follow-up, Document processing..." />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="tools" className="text-sm font-medium text-foreground">Current tools you use</label>
                      <input id="tools" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground" placeholder="e.g., HubSpot, Gmail, Slack..." />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                      <textarea id="message" required className="w-full min-h-[120px] p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground resize-y" placeholder="Tell us about your operational bottlenecks..." />
                    </div>

                    <Button type="submit" variant="gold" className="w-full shadow-[0_0_15px_rgba(201,152,58,0.15)] hover:shadow-[0_0_20px_rgba(201,152,58,0.3)] transition-all" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
