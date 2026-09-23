import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCases } from "@/data/useCases";
import { ctaClass, CtaContent } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Industries on black, as a ruled index: one row per sector, the summary in
 * the middle, and the whole row as the link.
 */
export function IndustriesPreviewSection() {
  return (
    <section className="tone-ink">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7">
            <span className="kicker">Industries</span>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Built for Businesses{" "}
              <span className="text-white/45">That Want to Move Faster.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 self-end text-white/65 text-lg">
            Every industry has specific bottlenecks. We tailor automation strategies to solve your exact operational problems.
          </p>
        </div>

        <ul className="border-t border-white/10">
          {useCases.map((useCase, i) => (
            <Reveal as="li" key={useCase.id} delay={(i % 4) * 60}>
              <Link
                href={`/use-cases#${useCase.id}`}
                className="group grid grid-cols-12 items-center gap-4 py-6 border-b border-white/10 hover:bg-white/[.03] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              >
                <span className="col-span-2 md:col-span-1 label-mono text-white/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="col-span-10 md:col-span-4 flex items-center gap-3 text-xl font-heading font-medium">
                  <useCase.icon className="w-5 h-5 text-white/50 group-hover:text-primary-strong transition-colors" aria-hidden="true" />
                  {useCase.industry}
                </span>
                <span className="col-span-12 md:col-span-6 text-sm text-white/60 leading-relaxed">{useCase.summary}</span>
                <ArrowRight className="hidden md:block col-span-1 justify-self-end w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </ul>

        <Link href="/use-cases" className={ctaClass("mt-12")}>
          <CtaContent>Explore all use cases</CtaContent>
        </Link>
      </div>
    </section>
  );
}
