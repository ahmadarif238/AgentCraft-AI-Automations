import { cn } from "@/lib/utils";

/**
 * The opening band of every inner page: navy into cobalt, a kicker, a large
 * light headline whose second part is muted, and the lede beneath a hairline.
 * Keeps each page's own copy; only the presentation is shared.
 */
export function PageHero({
  kicker,
  title,
  muted,
  children,
  aside,
  className,
}: {
  kicker: string;
  title: React.ReactNode;
  /** Optional continuation of the headline, set in the muted tone. */
  muted?: React.ReactNode;
  /** The lede. */
  children?: React.ReactNode;
  /** Optional right-hand column beside the lede, such as key figures. */
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("tone-navy relative overflow-hidden", className)}>
      <div aria-hidden="true" className="absolute inset-0 grid-lines pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 contours opacity-60 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative pt-36 pb-16 md:pt-44 md:pb-24">
        <span className="kicker">{kicker}</span>
        <h1 className="display text-[42px] sm:text-6xl md:text-7xl mt-6 max-w-5xl">
          {title}
          {muted && <span className="block text-white/45">{muted}</span>}
        </h1>
        {(children || aside) && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 md:mt-14 pt-8 border-t border-white/10">
            {children && <div className="md:col-span-7 text-lg md:text-xl text-white/75 leading-relaxed">{children}</div>}
            {aside && <div className="md:col-span-4 md:col-start-9">{aside}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
