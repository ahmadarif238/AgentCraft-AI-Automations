import Link from "next/link";
import type { Faq } from "@/data/faqs";
import { objectionFaqs } from "@/data/faqs";

/**
 * Objection handling, placed before the final CTA rather than after it.
 * Numbered rows with a square toggle; native <details> keeps this a server
 * component, with no JS needed to expand.
 */
export function FaqSection({
  items = objectionFaqs,
  heading = "Questions You're Probably Asking",
  subheading = "The things most people want to know before booking a call.",
  showContactLink = true,
}: {
  items?: Faq[];
  heading?: string;
  subheading?: string;
  showContactLink?: boolean;
}) {
  return (
    <section className="tone-ice">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <span className="kicker">FAQ</span>
          <h2 className="display text-4xl md:text-5xl mt-6">{heading}</h2>
          <p className="text-muted-foreground text-lg mt-6">{subheading}</p>
          {showContactLink && (
            <p className="mt-8 text-muted-foreground">
              Still unsure whether your project is a good fit?{" "}
              <Link href="/contact" className="text-primary-strong font-semibold hover:underline">
                Ask us directly
              </Link>
              .
            </p>
          )}
        </div>

        <div className="lg:col-span-8 flex flex-col gap-[3px]">
          {items.map((faq, i) => (
            <details key={faq.question} className="group bg-card/80 open:bg-card transition-colors">
              <summary className="flex items-center gap-4 p-5 md:p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
                <span className="px-1.5 py-0.5 bg-foreground/[.07] label-mono text-muted-extra shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 font-medium text-base md:text-lg text-foreground">{faq.question}</h3>
                <span
                  aria-hidden="true"
                  className="w-7 h-7 shrink-0 flex items-center justify-center bg-btn text-btn-foreground text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 md:px-6 pb-6 md:pl-[4.75rem] text-muted-foreground leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
