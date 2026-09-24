import { RoiEstimator } from "@/components/sections/RoiEstimator";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  "Win more enquiries from your website",
  "Replace spreadsheets with software built for the job",
  "Cut hours of repetitive work every week",
  "Respond to leads in minutes, not days",
  "Connect scattered tools into one system",
  "Scale operations without extra headcount",
];

export function BenefitsSection() {
  return (
    <section className="tone-ice">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="kicker">Return on investment</span>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Software That <span className="text-muted-extra">Pays for Itself.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed max-w-xl">
              Every website, app and AI system we build is designed to earn its keep, whether through more enquiries, hours saved, faster sales cycles or fewer operational errors.
            </p>
            <ul className="mt-10 border-t border-border">
              {benefits.map((benefit, i) => (
                <Reveal as="li" key={benefit} delay={i * 70} className="flex items-center gap-4 py-4 border-b border-border">
                  <span className="label-mono text-muted-extra w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-medium">{benefit}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={200} className="lg:col-span-5 lg:col-start-8">
            <RoiEstimator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
