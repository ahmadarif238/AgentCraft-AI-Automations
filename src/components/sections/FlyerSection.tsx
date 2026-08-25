import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function FlyerSection() {
  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-secondary/30 rounded-[2.5rem] p-8 md:p-16 border border-border shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text & CTA */}
          <div className="w-full lg:w-1/2 text-left space-y-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Get the Full <br className="hidden lg:block" />
              <span className="text-primary-strong">Executive Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Download our one-page automation overview. Share it with your team or
              stakeholders to see exactly how we transform operations, reduce costs, and
              build custom AI workflows.
            </p>
            <div className="pt-4">
              <Button size="lg" className="w-full sm:w-auto font-semibold gap-2 shadow-lg shadow-primary/20" asChild>
                <a href={siteConfig.overviewPdf} download>
                  <Download className="w-5 h-5" />
                  Download the PDF
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                PDF, one page. No email required.
              </p>
            </div>
          </div>

          {/* Right: Preview */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 group-hover:bg-primary/30 group-hover:scale-100 transition-all duration-700 pointer-events-none" />

            <a
              href={siteConfig.overviewPdf}
              download
              className="relative w-full max-w-[380px] aspect-[2/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border-2 border-border group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-12px_rgba(173,255,47,0.3)] transition-all duration-500 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
            >
              <Image
                src="/images/flyer.webp"
                alt="Preview of the AgentCraft AI Automations one-page company overview"
                width={900}
                height={1350}
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover w-full h-full object-top"
              />
              <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-xl flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
