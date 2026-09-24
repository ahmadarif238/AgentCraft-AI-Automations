"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ScrollText } from "@/components/ui/ScrollText";

const steps = [
  {
    label: "Discover",
    description: "We learn how your business works, what you want to build, and exactly where time is being lost to manual work or tools that no longer fit.",
  },
  {
    label: "Build",
    description: "We design and build the website, app or AI agent, with the logic that handles decisions, data and routing without someone doing it by hand.",
  },
  {
    label: "Integrate",
    description: "We connect it to your CRMs, databases, email and SaaS tools so information flows smoothly across your business.",
  },
  {
    label: "Optimize",
    description: "We monitor performance, handle edge cases and keep improving the system as your business grows.",
  },
];

/**
 * The approach as a pinned stack: the four stages scroll past on the left and
 * light up in turn, while the chrome layer stack holds still on the right,
 * one layer per stage.
 */
export function SolutionSection() {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      // A thin band across the middle of the viewport decides which row is lit.
      { rootMargin: "-45% 0px -45% 0px" },
    );
    rows.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section className="tone-blue relative">
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32">
        <span className="kicker">How it works</span>
        <h2 className="display text-4xl md:text-6xl mt-6 max-w-4xl">
          AgentCraft Turns Ideas and Manual Processes{" "}
          <span className="text-white/45">Into Intelligent Software.</span>
        </h2>
        <ScrollText
          className="display text-2xl md:text-4xl mt-14 max-w-5xl leading-[1.2]"
          text="Our approach goes beyond templates and basic triggers. We build robust, well tested software and AI systems that handle real business logic."
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 pt-16 pb-24 md:pb-32">
        <ol className="lg:col-span-6">
          {steps.map((step, i) => (
            <li
              key={step.label}
              ref={(el) => {
                rows.current[i] = el;
              }}
              data-index={i}
              className={`grid grid-cols-12 gap-4 py-10 lg:py-16 border-t border-white/10 transition-opacity duration-500 ${
                active === i ? "opacity-100" : "lg:opacity-35"
              }`}
            >
              <span className="col-span-2 label-mono text-white/55 pt-2">{String(i + 1).padStart(2, "0")}</span>
              <div className="col-span-10">
                <h3 className="display text-3xl md:text-4xl">{step.label}</h3>
                <p className="text-white/70 mt-4 leading-relaxed max-w-md">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="hidden lg:block lg:col-span-5 lg:col-start-8">
          <div className="sticky top-28 h-[calc(100svh-9rem)] max-h-[760px] flex items-center justify-center">
            <div aria-hidden="true" className="absolute inset-0 hud-corners" />
            <Image
              src="/images/scene/stack.webp"
              alt=""
              aria-hidden="true"
              width={624}
              height={1220}
              sizes="30vw"
              className="h-[88%] w-auto object-contain"
            />
            {/* One tag per layer, lit to match the step in view. */}
            <ul aria-hidden="true" className="absolute right-0 inset-y-[14%] flex flex-col justify-between">
              {steps.map((step, i) => (
                <li
                  key={step.label}
                  className={`flex items-center gap-2 label-mono uppercase transition-colors duration-500 ${
                    active === i ? "text-white" : "text-white/35"
                  }`}
                >
                  <span className={`w-6 h-px ${active === i ? "bg-primary" : "bg-white/25"}`} />
                  {step.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
