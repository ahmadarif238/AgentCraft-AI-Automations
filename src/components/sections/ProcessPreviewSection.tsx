import Link from "next/link";
import { ctaClass, CtaContent } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/Reveal";

const processSteps = ["Discover", "Design", "Build", "Test", "Deploy", "Optimize"];

/**
 * Six stages as a single instrument strip: numbered cells joined by a
 * hairline, with the accent square marking the start.
 */
export function ProcessPreviewSection() {
  return (
    <section className="tone-navy relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grid-lines pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="kicker">Process</span>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Our Proven <span className="text-white/45">Automation Process</span>
            </h2>
          </div>
          <Link href="/process" className={ctaClass("shrink-0")}>
            <CtaContent>See how we work</CtaContent>
          </Link>
        </div>

        <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[3px]">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 90} className="relative bg-white/[.06] backdrop-blur-sm p-5 pt-6 min-h-[160px] flex flex-col justify-between">
              <span className="flex items-center justify-between label-mono text-white/55">
                {String(i + 1).padStart(2, "0")}
                {i === 0 && <span aria-hidden="true" className="w-1.5 h-1.5 bg-primary" />}
              </span>
              <h3 className="display text-2xl">{step}</h3>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
