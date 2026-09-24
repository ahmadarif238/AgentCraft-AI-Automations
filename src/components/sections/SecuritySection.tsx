import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, KeyRound, DatabaseZap, FileCode2, Activity, Presentation } from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Human in the Loop Approvals",
    description: "Critical actions pause for your approval before execution, ensuring you remain in total control."
  },
  {
    icon: KeyRound,
    title: "Secure API Key Handling",
    description: "We use enterprise grade secret managers and environment variables. We never expose your credentials."
  },
  {
    icon: DatabaseZap,
    title: "No Unnecessary Data Storage",
    description: "Our systems process data in transit wherever possible. We avoid storing personal or sensitive business data in our own databases."
  },
  {
    icon: FileCode2,
    title: "You Own the Code",
    description: "You own the source code, the automation logic and the documentation. No vendor lock in or proprietary black boxes."
  },
  {
    icon: Activity,
    title: "Monitoring & Maintenance",
    description: "Optional ongoing support to track uptime and API health, catch edge cases, and keep your apps and automations running 24/7."
  },
  {
    icon: Presentation,
    title: "Clear Handover & Training",
    description: "Every launch includes a video walkthrough, documentation and training for your team."
  }
];

export function SecuritySection() {
  return (
    <section className="tone-ink">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <span className="kicker">Security &amp; reliability</span>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Built With Security{" "}
              <span className="text-white/45">and Reliability in Mind.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 self-end text-white/65 text-lg">
            We don&apos;t build brittle scripts or throwaway prototypes. We engineer robust, secure and documented software that businesses can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
          {securityFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 90} className="h-full">
              <div className="hud-corners h-full bg-white/[.03] p-7">
                <div className="flex items-center justify-between">
                  <feature.icon className="w-5 h-5 text-primary-strong" aria-hidden="true" />
                  <span className="label-mono text-white/35">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-heading font-medium text-lg mt-8 mb-3">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
