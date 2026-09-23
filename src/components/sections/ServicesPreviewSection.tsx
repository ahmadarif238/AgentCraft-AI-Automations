import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { ctaClass, CtaContent } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/Reveal";

/**
 * A preview of the catalogue, not the catalogue: eight of the eleven services,
 * which tiles evenly at every breakpoint (4+4, then 2x4, then 1x8) instead of
 * leaving a widow card in the last row, and gives the "View all" action
 * something to actually reveal.
 *
 * Tiles are separated by hairline gaps rather than borders, and invert to ink
 * on hover, like keys on a panel.
 */
const PREVIEW_COUNT = 8;

export function ServicesPreviewSection() {
  return (
    <section className="tone-ice">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="kicker">Services</span>
            <h2 className="display text-4xl md:text-6xl mt-6">Our Core Services</h2>
            <p className="text-muted-foreground text-lg mt-6">
              We design and deploy custom AI agents and workflow automations that eliminate repetitive tasks and scale your business.
            </p>
          </div>
          <Link href="/services" className={ctaClass("shrink-0")}>
            <CtaContent>View all services</CtaContent>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3px]">
          {services.slice(0, PREVIEW_COUNT).map((service, i) => (
            <Reveal key={service.id} delay={(i % 4) * 80} className="h-full">
              <div className="group relative h-full bg-card hover:bg-[#05070D] transition-colors duration-300 p-6 flex flex-col min-h-[300px]">
                <div className="flex items-start justify-between">
                  <span className="label-mono text-muted-extra group-hover:text-white/50">{String(i + 1).padStart(2, "0")}</span>
                  <service.icon className="w-5 h-5 text-primary-strong group-hover:text-[#7FA6FF]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-medium mt-10 mb-3 group-hover:text-white">{service.title}</h3>
                <p className="text-muted-foreground text-sm flex-1 group-hover:text-white/65">{service.description}</p>
                <div className="mt-6 flex items-center label-mono uppercase text-foreground group-hover:text-white">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
                <Link
                  href={`/services#${service.id}`}
                  className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                >
                  <span className="sr-only">Learn more about {service.title}</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
