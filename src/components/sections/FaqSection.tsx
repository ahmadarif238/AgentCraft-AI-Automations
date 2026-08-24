import Link from "next/link";
import { HelpCircle } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { objectionFaqs } from "@/data/faqs";

/**
 * Objection handling, placed before the final CTA rather than after it.
 * Native <details> keeps this a server component — no JS needed to expand.
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
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            {heading}
          </h2>
          <p className="text-muted-foreground text-lg">{subheading}</p>
        </div>

        <div className="space-y-4">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group bg-card border border-border rounded-xl overflow-hidden transition-colors hover:border-primary/40"
            >
              <summary className="flex items-start gap-4 p-6 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <h3 className="flex-1 font-bold text-lg text-foreground">{faq.question}</h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-primary text-xl leading-none mt-0.5 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 pl-15 text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {showContactLink && (
          <p className="mt-10 text-center text-muted-foreground">
            Still unsure whether your workflow is a good fit?{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              Ask us directly
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}
