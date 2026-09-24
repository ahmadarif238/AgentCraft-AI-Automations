import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { caseStudies, displayHost } from "@/data/caseStudies";
import { ctaClass, CtaContent } from "@/components/ui/cta";
import { BookingLink } from "@/components/ui/BookingLink";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies: Software and AI Systems",
  description:
    "SaaS platforms, web apps, AI agents and automations built by AgentCraft AI, with the problem, the architecture and the business value of each.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const live = caseStudies.filter((s) => s.liveUrl).length;

  return (
    <>
      <section className="tone-navy relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 grid-lines pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative pt-40 pb-20 md:pt-48 md:pb-28">
          <span className="kicker">Case studies</span>
          <h1 className="display text-5xl md:text-7xl mt-6 max-w-4xl">
            Software and AI Systems
            <span className="block text-white/45">We&apos;ve Built</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-14 pt-8 border-t border-white/10">
            <p className="md:col-span-6 text-lg text-white/75 leading-relaxed">
              From a live SaaS platform taking payments to multi agent AI systems, each one built end to end: interface, backend, integrations and the intelligence inside.
            </p>
            <dl className="md:col-span-5 md:col-start-8 grid grid-cols-2 gap-[3px]">
              <div className="bg-white/[.06] p-5">
                <dt className="label-mono uppercase text-white/55">Systems</dt>
                <dd className="display text-4xl mt-2">{caseStudies.length}</dd>
              </div>
              <div className="bg-white/[.06] p-5">
                <dt className="label-mono uppercase text-white/55">Live to try</dt>
                <dd className="display text-4xl mt-2">{live}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="tone-ice">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 space-y-24 md:space-y-32">
          {caseStudies.map((system, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={system.id} id={system.id} className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <figure>
                    <div className="relative overflow-hidden rounded-sm shadow-[0_40px_80px_-30px_rgba(5,10,26,0.45)] ring-1 ring-black/10">
                      <Image
                        src={system.image}
                        alt={`${system.title} interface`}
                        width={1600}
                        height={1000}
                        sizes="(max-width: 1024px) 94vw, 58vw"
                        className="w-full h-auto"
                      />
                    </div>
                    <figcaption className="flex items-center justify-between gap-4 mt-3 label-mono uppercase text-muted-extra">
                      <span>{String(i + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}</span>
                      <span className="text-right">
                        {system.imageKind === "capture"
                          ? `Live product at ${displayHost(system.liveUrl ?? "")}`
                          : "Interface shown with sample data"}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>

                <Reveal delay={120} className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <span className="kicker">{system.category}</span>
                  <h2 className="display text-4xl md:text-5xl mt-4">{system.title}</h2>
                  <p className="text-lg text-muted-foreground mt-5 leading-relaxed">{system.overview}</p>

                  <dl className="mt-8 border-t border-border">
                    {[
                      ["The problem", system.problem],
                      ["The solution", system.solution],
                      ["Business value", system.businessValue],
                      ["Adapts to", system.adaptation],
                    ].map(([label, text]) => (
                      <div key={label} className="grid grid-cols-12 gap-4 py-4 border-b border-border">
                        <dt className="col-span-4 label-mono uppercase text-muted-extra pt-0.5">{label}</dt>
                        <dd className="col-span-8 text-sm text-foreground/85 leading-relaxed">{text}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="flex flex-wrap gap-[3px] mt-6" aria-label="Technologies used">
                    {system.technologies.map((tech) => (
                      <li key={tech} className="px-2.5 py-1.5 bg-foreground/[.06] label-mono uppercase text-foreground/75">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {system.liveUrl && (
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                      <a href={system.liveUrl} target="_blank" rel="noopener noreferrer" className={ctaClass()}>
                        <CtaContent>View live demo</CtaContent>
                      </a>
                      <span className="label-mono uppercase text-muted-extra">{displayHost(system.liveUrl)}</span>
                    </div>
                  )}
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <section className="tone-ink">
        <div className="container mx-auto px-4 md:px-6 py-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="display text-3xl md:text-5xl max-w-2xl">
            Every one of these started as a conversation.{" "}
            <span className="text-white/45">Yours can be next.</span>
          </p>
          <BookingLink className={ctaClass("h-12 shrink-0")}>
            <CtaContent>Book a free call</CtaContent>
          </BookingLink>
        </div>
      </section>
    </>
  );
}
