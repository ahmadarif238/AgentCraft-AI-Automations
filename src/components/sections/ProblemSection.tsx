import { Reveal } from "@/components/ui/Reveal";
import { Globe, Clock, Database, MessageSquare, Search, FileBarChart } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Repetitive Admin Tasks",
    description: "Your team spends hours copying data, sending follow ups and managing spreadsheets instead of doing the work that matters.",
  },
  {
    icon: Globe,
    title: "A Website That Brings Nothing In",
    description: "Your site is slow, dated or hard to edit, and visitors leave without ever getting in touch.",
  },
  {
    icon: FileBarChart,
    title: "Spreadsheets Running the Business",
    description: "A core process lives in shared sheets and inboxes because there is no proper app or dashboard built for it.",
  },
  {
    icon: Database,
    title: "Scattered Tools & Data",
    description: "Information lives in silos across CRMs, email and documents, so every task needs manual context switching.",
  },
  {
    icon: MessageSquare,
    title: "Slow Lead Follow Up",
    description: "Inquiries sit in your inbox while prospects lose interest. Opportunities slip through the cracks.",
  },
  {
    icon: Search,
    title: "Knowledge Nobody Can Find",
    description: "Employees waste hours looking through drives and past emails to find procedures, policies or old contracts.",
  },
];

/**
 * Symptoms, set as an annotated index on ice: each icon sits in a small HUD
 * frame, and the rows are ruled like a specification sheet.
 */
export function ProblemSection() {
  return (
    <section className="tone-ice">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <span className="kicker">Signs Your Systems Are Holding You Back</span>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Manual Work and Dated Software{" "}
              <span className="text-muted-extra">Are Quietly Slowing You Down.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 self-end text-lg text-muted-foreground leading-relaxed">
            Every hour lost to a repetitive task or a clunky tool is an hour taken from growth, strategy and client delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-border">
          {problems.map((problem, i) => (
            <Reveal
              key={problem.title}
              delay={(i % 3) * 90}
              className="flex gap-5 py-8 md:pr-8 border-b border-border"
            >
              <div className="hud-corners w-14 h-14 shrink-0 flex items-center justify-center text-foreground/80">
                <problem.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="label-mono text-muted-extra">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-heading font-medium mt-1 mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
