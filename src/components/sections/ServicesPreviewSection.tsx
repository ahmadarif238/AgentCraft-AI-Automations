import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

/**
 * A preview of the catalogue, not the catalogue: eight of the eleven services,
 * which tiles evenly at every breakpoint (4+4, then 2×4, then 1×8) instead of
 * leaving a widow card in the last row, and gives the "View all" action
 * something to actually reveal.
 */
const PREVIEW_COUNT = 8;

export function ServicesPreviewSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Our Core Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We design and deploy custom AI agents and workflow automations that eliminate repetitive tasks and scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, PREVIEW_COUNT).map((service, i) => (
            /*
              One interaction pattern for every card grid on the page: the whole
              card is the target via an overlay link, the "Learn more" row is
              the signifier, and a rule above it guarantees the same separation
              from the copy whether the description runs two lines or five.
            */
            <div
              key={service.id}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/50 transition-all flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-canvas border border-border flex items-center justify-center mb-6 text-primary group-hover:border-primary group-hover:scale-110 transition-all duration-200">
                <service.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {service.description}
              </p>

              <div className="mt-auto pt-6 border-t border-border flex items-center text-sm font-semibold text-foreground group-hover:text-primary-strong transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>

              <Link
                href={`/services#${service.id}`}
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
              >
                <span className="sr-only">Learn more about {service.title}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="secondary" size="lg" asChild className="group">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
