import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { ctaClass, CtaContent } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/Reveal";

/** A spread across the work: a live SaaS product, a messaging agent, and a RAG system. */
const FEATURED = ["billiie", "whatsapp-ordering-agent", "contract-iq"];

export function CaseStudiesPreviewSection() {
  const featured = FEATURED.map((id) => caseStudies.find((s) => s.id === id)).filter(
    (s): s is CaseStudy => Boolean(s),
  );
  const [lead, ...rest] = featured;

  return (
    <section className="tone-ice">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <span className="kicker">Selected work</span>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Software and AI Built for{" "}
              <span className="text-muted-extra">Real Business Problems.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6">
              Systems we have designed and built ourselves, from SaaS products and web apps to AI agents, RAG assistants and automation.
            </p>
          </div>
          <Link href="/case-studies" className={ctaClass("shrink-0")}>
            <CtaContent>View all {caseStudies.length} systems</CtaContent>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {lead && (
            <Reveal className="lg:col-span-7">
              <Card study={lead} large />
            </Reveal>
          )}
          <div className="lg:col-span-5 grid gap-8">
            {rest.map((study, i) => (
              <Reveal key={study.id} delay={120 * (i + 1)}>
                <Card study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ study, large = false }: { study: CaseStudy; large?: boolean }) {
  return (
    <Link
      href={`/case-studies#${study.id}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ring-offset-background"
    >
      <div className="relative overflow-hidden rounded-sm ring-1 ring-black/10 shadow-[0_30px_60px_-30px_rgba(5,10,26,0.45)]">
        <Image
          src={study.image}
          alt={`${study.title} interface`}
          width={1600}
          height={1000}
          sizes={large ? "(max-width: 1024px) 94vw, 56vw" : "(max-width: 1024px) 94vw, 40vw"}
          className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>
      <div className="flex items-center gap-[3px] mt-4">
        <span className="px-2 py-1 bg-foreground/[.07] label-mono uppercase text-foreground/70">{study.category}</span>
        {study.liveUrl && <span className="px-2 py-1 bg-primary label-mono uppercase text-white">Live</span>}
      </div>
      <div className="flex items-start justify-between gap-4 mt-3">
        <div>
          <h3 className={`font-heading font-medium ${large ? "text-2xl md:text-3xl" : "text-xl"}`}>{study.title}</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{study.overview}</p>
        </div>
        <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-btn text-btn-foreground group-hover:bg-primary group-hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
