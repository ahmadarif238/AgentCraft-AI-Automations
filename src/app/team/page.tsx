import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";
import { team } from "@/data/team";

export const metadata: Metadata = pageMetadata({
  title: "Our Team",
  description:
    "The engineers behind AgentCraft AI Automations: five in-house specialists across agentic AI, full stack delivery, payments infrastructure, messaging automation and workflow integration.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge variant="gold" live className="mb-6">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground leading-[1.05]">
              Five engineers, <br className="hidden sm:block" />
              no subcontractors.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Every build is resourced across specialists rather than handed to one
              generalist, so independent workstreams run in parallel and no single
              person&apos;s availability becomes your bottleneck. You can meet them before
              you commit to anything.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <article
                key={member.id}
                className="group flex flex-col bg-card border border-border rounded-2xl p-7 transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_25px_rgba(173,255,47,0.12)] animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="font-heading font-bold text-xl text-foreground mb-1">
                      {member.name}
                    </h2>
                    <p className="label-mono uppercase text-primary">{member.role}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="label-mono text-muted-foreground shrink-0 pt-1"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.focus}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {member.specialisms.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-canvas border border-border text-xs font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {member.credential && (
                  <p className="label-mono text-muted-foreground mb-5">{member.credential}</p>
                )}

                {member.links.length > 0 && (
                  <div className="mt-auto pt-5 border-t border-border/60 flex flex-wrap gap-x-5 gap-y-2">
                    {member.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <p className="max-w-5xl mt-10 text-muted-foreground">
            Everyone listed works on the others&apos; code regularly, which is why parallel
            workstreams converge instead of colliding. If anyone joins or leaves a project
            mid-build, you are told before it happens rather than after.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
