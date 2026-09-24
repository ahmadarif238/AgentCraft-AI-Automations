import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { BookingLink } from "@/components/ui/BookingLink";
import { ctaClass, CtaContent } from "@/components/ui/cta";

/**
 * The closing panel: black, framed in HUD brackets, with the layer stack drawn
 * as a blueprint beside the ask.
 */
export function CTASection() {
  return (
    <section className="tone-ink">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="relative hud-corners bg-[#07080C] grid grid-cols-1 lg:grid-cols-12 items-center overflow-hidden">
          <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 relative z-10">
            <span className="kicker">Free project consultation</span>
            <h2 className="display text-4xl md:text-6xl mt-6">
              Ready to Build <span className="text-white/45">Something Better?</span>
            </h2>
            <p className="text-white/65 text-lg mt-6 max-w-xl">
              Book a free consultation and we&apos;ll talk through your website, app or AI idea, the right approach, and what to build first to save time, cut costs and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-[3px] mt-10">
              <BookingLink className={ctaClass()}>
                <CtaContent>Book a free consultation</CtaContent>
              </BookingLink>
              <Link href="/contact#enquiry-form" className={ctaClass()}>
                <CtaContent tone="ghost" icon={<MessageSquare className="w-4 h-4" />}>Send a message</CtaContent>
              </Link>
            </div>
            <p className="mt-6 label-mono uppercase text-white/45">
              No obligation. Just practical advice on apps, websites and AI for your business.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-[320px] lg:h-full lg:min-h-[560px]">
            <Image
              src="/images/scene/wire.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-contain p-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
