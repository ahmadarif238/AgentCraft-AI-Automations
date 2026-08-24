import { siteConfig, whatsappUrl, bookingUrl } from "@/config/site";
import { services } from "@/data/services";
import { pricingPackages, buildServices, formatPrice, formatTierPrice } from "@/data/pricing";
import { MIRROR_PATHS } from "@/lib/markdownMirror";

/**
 * /llms.txt — the llmstxt.org convention.
 *
 * A single plain-text brief telling an assistant what this business does, what
 * it charges, and where to read more, so it can answer questions about us
 * accurately instead of guessing from rendered HTML. Generated from the same
 * data the site renders from.
 */
export const dynamic = "force-static";

export function GET() {
  const abs = (path: string) => `${siteConfig.url}${path === "/" ? "" : path}`;

  const body = `# ${siteConfig.name}

> ${siteConfig.tagline} We build custom AI agents, workflow automations, RAG assistants, chatbots, websites and applications for businesses that want to stop doing repetitive work by hand.

${siteConfig.description}

## Key facts

- Business: ${siteConfig.name}
- Founder: ${siteConfig.founderName}, ${siteConfig.founderTitle}
- Based in: ${siteConfig.location.city}, ${siteConfig.location.country}
- Serves: clients worldwide, delivered remotely
- Free offer: a no-obligation automation audit (workflow review, opportunity map, ROI estimate, implementation roadmap)
- Typical response time: ${siteConfig.responseTime}

## Services

${services.map((s) => `- **${s.title}**: ${s.description} Ideal for: ${s.idealFor}`).join("\n")}

## Pricing

${pricingPackages.map((p) => `- ${p.name}: ${formatPrice(p)} — ${p.bestFor}`).join("\n")}
${buildServices
  .map(
    (b) =>
      `- ${b.name}: ${b.tiers.map((t) => `${t.name} ${formatTierPrice(t)}`).join(", ")}`,
  )
  .join("\n")}

All project work is quoted at a fixed price after a free scoping call. Cost is
driven by how many systems are integrated, how clean the data is, how much
human approval the workflow needs, and what monitoring is required.

## Docs

${MIRROR_PATHS.map((m) => `- [${m.title}](${abs(m.mirror)}): plain-markdown version of ${abs(m.route)}`).join("\n")}

## Contact

- Book a 30-minute call: ${bookingUrl}
- Enquiry form: ${abs("/contact")}
${siteConfig.email ? `- Email: ${siteConfig.email}\n` : ""}${siteConfig.phone ? `- Phone: ${siteConfig.phone}\n` : ""}${whatsappUrl ? `- WhatsApp: ${whatsappUrl}\n` : ""}${siteConfig.links.linkedinCompany ? `- LinkedIn: ${siteConfig.links.linkedinCompany}\n` : ""}
## Optional

- [Sitemap](${abs("/sitemap.xml")}): every indexable page
- [Company overview PDF](${abs(siteConfig.overviewPdf)}): one-page summary of services and capabilities
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
