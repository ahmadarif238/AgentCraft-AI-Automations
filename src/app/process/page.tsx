import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = pageMetadata({
  title: "Our Process",
  description:
    "From free automation audit to scoping, build, testing, handover and ongoing support - how an AgentCraft AI automation project actually runs.",
  path: "/process",
});

/**
 * `artifact` summarises what exists at the end of each step, drawn from the
 * step's own description rather than invented, so the right-hand column adds
 * information instead of decoration.
 */
const processSteps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We understand your workflows, bottlenecks, tools, and goals, and map out exactly where time is being lost.",
    artifact: "Workflow map",
  },
  {
    num: "02",
    title: "Design",
    description:
      "We map the automation architecture, choose the right tools (n8n, Zapier, custom APIs), and present a clear strategy.",
    artifact: "Architecture & tooling plan",
  },
  {
    num: "03",
    title: "Build",
    description:
      "We develop the AI agents, automations, APIs, dashboards, and integrations according to the approved architecture.",
    artifact: "Working system",
  },
  {
    num: "04",
    title: "Test",
    description:
      "We validate reliability, edge cases, security, and the day-to-day experience in a staging environment before anything goes near production.",
    artifact: "Staging sign-off",
  },
  {
    num: "05",
    title: "Deploy",
    description:
      "We launch the system into your real business workflow, with full documentation and training for the people who will use it.",
    artifact: "Documentation & training",
  },
  {
    num: "06",
    title: "Optimize",
    description:
      "We monitor performance, improve the logic, and expand the automation over time as your business changes.",
    artifact: "Ongoing monitoring",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-strong mb-6">
              Our Process
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground leading-[1.05]">
              A proven path <br className="hidden sm:block" />
              to automation.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We don&apos;t just write code. We map your business logic and engineer
              reliable systems that keep running once we hand them over. Six steps,
              every time.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial index. Hairline rules instead of cards, so the type carries it. */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl border-t border-border">
            {processSteps.map((step, index) => (
              <article
                key={step.num}
                className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 items-baseline border-b border-border py-10 md:py-12 transition-colors hover:bg-card/50 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="md:col-span-2">
                  <span className="font-heading font-bold text-4xl md:text-5xl tabular-nums text-primary-strong/80 transition-colors group-hover:text-primary-strong">
                    {step.num}
                  </span>
                </div>

                <div className="md:col-span-7">
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                <div className="md:col-span-3 md:text-right">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70 mb-1">
                    You end up with
                  </p>
                  <p className="text-sm font-semibold text-foreground">{step.artifact}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="max-w-5xl mt-10 text-muted-foreground">
            Steps 01 and 02 are the free automation audit. You get the workflow map and
            the plan whether or not you go ahead with the build.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
