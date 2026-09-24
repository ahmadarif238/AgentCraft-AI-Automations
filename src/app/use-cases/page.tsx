import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { useCases } from "@/data/useCases";
import { CTASection } from "@/components/sections/CTASection";
import { enquiryUrl } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { ctaClass, CtaContent } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Software and AI Use Cases by Industry",
  description:
    "The websites, apps and AI systems we build for dental clinics, law firms, healthcare, restaurants, logistics, education, recruitment, home services, agencies, finance, real estate, SaaS and ecommerce.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        kicker="Industries and use cases"
        title="Software and AI"
        muted="Built Around Your Industry"
        aside={
          <dl className="grid grid-cols-2 gap-[3px]">
            <div className="bg-white/[.06] p-5">
              <dt className="label-mono uppercase text-white/55">Industries</dt>
              <dd className="display text-4xl mt-2">{useCases.length}</dd>
            </div>
            <div className="bg-white/[.06] p-5">
              <dt className="label-mono uppercase text-white/55">Every build</dt>
              <dd className="display text-xl mt-3 leading-snug">Web, app and AI</dd>
            </div>
          </dl>
        }
      >
        Every industry runs on its own mix of customers, paperwork and bottlenecks. Here is the website, app
        or platform we would build for yours, and the AI that would run inside it.
      </PageHero>

      {/* Jump list, so a visitor can go straight to their own sector. */}
      <nav aria-label="Industries" className="tone-ink border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-5">
          <ul className="flex flex-wrap gap-[3px]">
            {useCases.map((useCase) => (
              <li key={useCase.id}>
                <a
                  href={`#${useCase.id}`}
                  className="flex items-center gap-2 px-3 py-2 bg-white/[.05] hover:bg-white/[.1] transition-colors label-mono uppercase text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <useCase.icon className="w-3.5 h-3.5" aria-hidden="true" />
                  {useCase.industry}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="tone-ice">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 space-y-24 md:space-y-32">
          {useCases.map((useCase, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={useCase.id}
                id={useCase.id}
                /* scroll-mt clears the fixed header when arriving via an anchor. */
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
              >
                <Reveal className={`lg:col-span-7 lg:sticky lg:top-28 ${flip ? "lg:order-2" : ""}`}>
                  <figure>
                    <div className="relative overflow-hidden rounded-sm shadow-[0_40px_80px_-30px_rgba(5,10,26,0.45)] ring-1 ring-black/10">
                      <Image
                        src={useCase.image}
                        alt={`${useCase.visual} for ${useCase.industry.toLowerCase()}`}
                        width={1600}
                        height={1000}
                        sizes="(max-width: 1024px) 94vw, 58vw"
                        className="w-full h-auto"
                      />
                    </div>
                    <figcaption className="flex items-center justify-between gap-4 mt-3 label-mono uppercase text-muted-extra">
                      <span>
                        {String(i + 1).padStart(2, "0")} / {String(useCases.length).padStart(2, "0")}
                      </span>
                      <span className="text-right">{useCase.visual}</span>
                    </figcaption>
                  </figure>
                </Reveal>

                <Reveal delay={120} className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <span className="kicker">Use case {String(i + 1).padStart(2, "0")}</span>
                  <h2 className="display text-4xl md:text-5xl mt-4">{useCase.industry}</h2>
                  <p className="text-lg text-muted-foreground mt-5 leading-relaxed">{useCase.description}</p>

                  <dl className="mt-8 border-t border-border">
                    {[
                      ["Today", useCase.before],
                      ["With AgentCraft", useCase.after],
                    ].map(([label, text]) => (
                      <div key={label} className="grid grid-cols-12 gap-4 py-4 border-b border-border">
                        <dt className="col-span-4 label-mono uppercase text-muted-extra pt-0.5">{label}</dt>
                        <dd className="col-span-8 text-sm text-foreground/85 leading-relaxed">{text}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px] mt-6">
                    {[
                      ["What we build", useCase.builds],
                      ["AI and automation", useCase.workflows],
                    ].map(([label, items]) => (
                      <div key={label as string} className="bg-card p-5">
                        <h3 className="label-mono uppercase text-primary-strong">{label}</h3>
                        <ul className="mt-4 space-y-3">
                          {(items as string[]).map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                              <span aria-hidden="true" className="w-1.5 h-1.5 mt-[7px] shrink-0 bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <ul className="flex flex-wrap gap-[3px] mt-6" aria-label="Commonly used tools">
                    {useCase.tools.map((tool) => (
                      <li key={tool} className="px-2.5 py-1.5 bg-foreground/[.06] label-mono uppercase text-foreground/75">
                        {tool}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={enquiryUrl({ industry: useCase.industry.toLowerCase() })}
                    className={ctaClass("mt-8")}
                  >
                    <CtaContent>Discuss your project</CtaContent>
                  </Link>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
