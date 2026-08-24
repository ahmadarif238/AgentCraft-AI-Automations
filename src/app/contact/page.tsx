import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Mail, Calendar, MessageCircle, Phone, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { processFaqs } from "@/data/faqs";
import { hasLiveScheduler, linkedinUrl, siteConfig, whatsappUrl } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Book a free automation audit or send an enquiry. Tell us which workflow is costing you time and we'll map out what to automate first.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="gold" className="mb-6">Contact Us</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Let&apos;s Build Your <br className="hidden md:block" /> Automation Strategy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tell us which workflow is costing you the most time. We&apos;ll reply{" "}
              {siteConfig.responseTime} with where automation would pay off first.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Ways to reach us */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Ways to Connect</h2>
              <p className="text-muted-foreground mb-10">
                We work remotely with clients worldwide from {siteConfig.location.city},{" "}
                {siteConfig.location.country}. Pick whichever suits you.
              </p>

              <div className="space-y-4 mb-12">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary-strong" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">
                        Usually the fastest way to get an answer
                      </p>
                    </div>
                  </a>
                )}

                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary-strong" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Email</h3>
                      <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
                    </div>
                  </a>
                )}

                {siteConfig.phone && (
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary-strong" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Phone</h3>
                      <p className="text-sm text-muted-foreground">{siteConfig.phone}</p>
                    </div>
                  </a>
                )}

                {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary-strong" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">{siteConfig.name}</p>
                  </div>
                </a>
                )}

                <div className="flex items-center gap-3 px-4 pt-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 shrink-0 text-primary-strong" />
                  We reply {siteConfig.responseTime}.
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 relative z-10">
                  <Calendar className="w-6 h-6 text-primary-strong" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 relative z-10 text-foreground">
                  {hasLiveScheduler ? "Prefer to book directly?" : "What the free audit covers"}
                </h3>
                <p className="text-muted-foreground mb-6 relative z-10">
                  {hasLiveScheduler
                    ? "Pick a 30-minute slot and we'll map out your workflows and the automation opportunities in them."
                    : "A 30-minute call where we review your current workflows, identify what's worth automating first, and give you a practical roadmap — whether or not you work with us."}
                </p>
                {hasLiveScheduler ? (
                  <Button variant="gold" size="lg" className="w-full sm:w-auto relative z-10" asChild>
                    <a href={siteConfig.links.booking || "#"} target="_blank" rel="noopener noreferrer">
                      Pick a time <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="gold" size="lg" className="w-full sm:w-auto relative z-10" asChild>
                    <Link href="#enquiry-form">
                      Request your free audit <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Form */}
            <div
              id="enquiry-form"
              className="scroll-mt-28 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Send an Enquiry</h2>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={processFaqs}
        heading="Frequently Asked Questions"
        subheading="What to expect once you get in touch."
        showContactLink={false}
      />
    </>
  );
}
