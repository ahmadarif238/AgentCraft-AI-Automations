import { CheckCircle2 } from "lucide-react";
import { RoiEstimator } from "@/components/sections/RoiEstimator";

const benefits = [
  "Save 10+ hours every week",
  "Reduce manual data entry errors",
  "Respond to leads 5x faster",
  "Connect scattered tools effortlessly",
  "Scale operations without extra headcount",
  "Improve customer and employee experience"
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Automation That Pays for Itself.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every system we build is designed to generate a measurable return on investment—whether through hours saved, faster sales cycles, or reduced operational errors.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li 
                  key={i}
                  className="flex items-center gap-3 text-foreground font-medium animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual / Interactive ROI */}
          <div className="w-full md:w-1/2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <RoiEstimator />
          </div>

        </div>
      </div>
    </section>
  );
}
