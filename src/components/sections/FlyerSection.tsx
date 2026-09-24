import Image from "next/image";
import { Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ctaClass, CtaContent } from "@/components/ui/cta";

export function FlyerSection() {
  return (
    <section className="tone-blue relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <span className="kicker">One page overview</span>
          <h2 className="display text-4xl md:text-6xl mt-6">
            Get the Full <span className="text-white/45">Executive Overview</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-md mt-6">
            Download our one page overview. Share it with your team or stakeholders to
            see how we build websites, apps and custom AI systems that reduce costs and
            improve how your business runs.
          </p>
          <a href={siteConfig.overviewPdf} download className={ctaClass("mt-10")}>
            <CtaContent icon={<Download className="w-4 h-4" />}>Download the PDF</CtaContent>
          </a>
          <p className="label-mono uppercase text-white/50 mt-4">PDF, one page. No email required.</p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 flex justify-center">
          <a
            href={siteConfig.overviewPdf}
            download
            className="group relative block w-full max-w-[360px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ring-offset-background"
          >
            <span aria-hidden="true" className="absolute -inset-6 hud-corners" />
            <span className="block aspect-[2/3] overflow-hidden rounded-sm bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-2">
              <Image
                src="/images/flyer-v2.webp"
                alt="Preview of the AgentCraft AI Automations one page company overview"
                width={900}
                height={1350}
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-cover w-full h-full object-top"
              />
            </span>
            <span aria-hidden="true" className="absolute -bottom-10 left-0 label-mono text-white/50">FIG. 01 / OVERVIEW.PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
