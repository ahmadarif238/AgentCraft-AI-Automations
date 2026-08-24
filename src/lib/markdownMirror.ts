import { siteConfig, whatsappUrl, bookingUrl } from "@/config/site";
import { services } from "@/data/services";
import { useCases } from "@/data/useCases";
import { caseStudies } from "@/data/caseStudies";
import { faqs, objectionFaqs, processFaqs } from "@/data/faqs";
import {
  buildAddOns,
  buildServices,
  formatPrice,
  formatTierPrice,
  pricingDrivers,
  pricingPackages,
} from "@/data/pricing";

/**
 * Plain-markdown mirrors of each page, served at `/<page>.md`.
 *
 * Assistants that read the site (and the crawlers behind AI search) get the
 * substance without wading through markup, and because every mirror is
 * generated from the same data modules the pages render from, the two cannot
 * drift apart the way a hand-written copy would.
 */

const contactBlock = () =>
  [
    `- Website: ${siteConfig.url}`,
    siteConfig.email && `- Email: ${siteConfig.email}`,
    siteConfig.phone && `- Phone: ${siteConfig.phone}`,
    whatsappUrl && `- WhatsApp: ${whatsappUrl}`,
    siteConfig.links.linkedinCompany && `- LinkedIn: ${siteConfig.links.linkedinCompany}`,
    `- Book a call: ${bookingUrl}`,
    `- Based in ${siteConfig.location.city}, ${siteConfig.location.country}; works remotely worldwide`,
    `- Replies ${siteConfig.responseTime}`,
  ]
    .filter(Boolean)
    .join("\n");

const list = (items: readonly string[]) => items.map((i) => `- ${i}`).join("\n");

function home() {
  return `# ${siteConfig.name}

> ${siteConfig.tagline}

${siteConfig.description}

## What we do

${services.map((s) => `- **${s.title}** — ${s.description}`).join("\n")}

## Why businesses work with us

- Save 10+ hours every week on repetitive operations
- Reduce manual data entry errors
- Respond to leads faster
- Connect scattered tools without replacing core systems
- Scale operations without extra headcount

## Common questions

${objectionFaqs.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}

## Contact

${contactBlock()}
`;
}

function servicesPage() {
  return `# AI Automation Services — ${siteConfig.name}

We build custom AI agents, workflow automations, RAG assistants, chatbots, websites and applications for businesses that want to stop doing repetitive work by hand.

${services
  .map(
    (s) => `## ${s.title}

**${s.headline}**

${s.description}

**What it solves:** ${s.solves}

**Example workflows:**
${list(s.features)}

**Tools and technologies:** ${s.tools.join(", ")}

**Ideal for:** ${s.idealFor}`,
  )
  .join("\n\n")}

## Contact

${contactBlock()}
`;
}

function useCasesPage() {
  return `# AI Automation Use Cases by Industry — ${siteConfig.name}

How custom AI agents and workflow automation are applied across different industries.

${useCases
  .map(
    (u) => `## ${u.industry}

${u.description}

**Before automation:** ${u.before}

**After automation:** ${u.after}

**Example workflows:**
${list(u.workflows)}

**Commonly integrated tools:** ${u.tools.join(", ")}`,
  )
  .join("\n\n")}

## Contact

${contactBlock()}
`;
}

function caseStudiesPage() {
  return `# AI Systems & Automations We've Built — ${siteConfig.name}

Production-grade architecture patterns, RAG implementations and multi-agent systems built to solve complex business operations.

${caseStudies
  .map(
    (c) => `## ${c.title} (${c.category})

${c.overview}

**The problem:** ${c.problem}

**The solution:** ${c.solution}

**Business value:** ${c.businessValue}

**How it adapts:** ${c.adaptation}

**Technologies:** ${c.technologies.join(", ")}`,
  )
  .join("\n\n")}

## Contact

${contactBlock()}
`;
}

function pricingPage() {
  return `# Pricing & Packages — ${siteConfig.name}

Every project is quoted as a fixed price before work starts. No open-ended hourly bills.

## Automation packages

${pricingPackages
  .map(
    (p) => `### ${p.name} — ${formatPrice(p)}

Best for: ${p.bestFor}

Includes:
${list(p.includes)}`,
  )
  .join("\n\n")}

## Websites, apps and chatbots

${buildServices
  .map(
    (b) => `### ${b.name}

${b.summary}

${b.tiers.map((t) => `- **${t.name}** — ${formatTierPrice(t)}${t.note ? ` (${t.note})` : ""}`).join("\n")}`,
  )
  .join("\n\n")}

### Add-ons

${buildAddOns.map((a) => `- **${a.name}** — +$${a.price.toLocaleString("en-US")}. ${a.description}`).join("\n")}

## What changes the price

${pricingDrivers.map((d) => `### ${d.title}\n\n${d.description}`).join("\n\n")}

## Contact

${contactBlock()}
`;
}

function aboutPage() {
  return `# About ${siteConfig.name}

A founder-led AI automation studio bridging the gap between complex AI research and practical business operations.

## Founder

${siteConfig.founderName}, ${siteConfig.founderTitle}. Specialises in agentic AI, generative AI, retrieval-augmented generation, multi-agent workflows and business automation.

## Technical expertise

- Multi-agent AI systems (LangGraph)
- RAG and vector search (Pinecone, Weaviate)
- Workflow automation (n8n, Zapier, Make)
- Backend AI applications (FastAPI, PostgreSQL)
- Microsoft Power Automate and Power Platform
- Cloud and deployment (AWS, Azure, Docker)

## How we work

- **Honest engineering.** No hype, no impossible AI promises. Reliable systems that work in production.
- **Founder-led delivery.** The founder stays hands-on from architecture through to handover.
- **Security by default.** Human-in-the-loop approvals and secure API handling from day one.

## Contact

${contactBlock()}
`;
}

function processPage() {
  return `# Our Process — ${siteConfig.name}

How an automation project runs, from first call to ongoing support.

1. **Free automation audit.** We review your current workflows and map where automation would pay off first.
2. **Scoping and fixed quote.** We define exactly what gets built and quote a fixed price before any work starts.
3. **Build.** We develop the workflow or agent, integrating with the tools you already use.
4. **Testing and QA.** We test against real edge cases, not just the happy path.
5. **Handover.** Documentation and a training video so your team can run it.
6. **Ongoing support.** Optional monthly partnership for monitoring, maintenance and improvements.

## Contact

${contactBlock()}
`;
}

function contactPage() {
  return `# Contact ${siteConfig.name}

Tell us which workflow is costing you the most time. We reply ${siteConfig.responseTime}.

${contactBlock()}

## Frequently asked questions

${processFaqs.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}
`;
}

/** Every mirrored page, keyed by the slug used in the `.md` URL. */
export const MIRRORS: Record<string, () => string> = {
  index: home,
  services: servicesPage,
  "use-cases": useCasesPage,
  "case-studies": caseStudiesPage,
  pricing: pricingPage,
  about: aboutPage,
  process: processPage,
  contact: contactPage,
};

/** Route path -> mirror URL, used to advertise the mirrors in llms.txt. */
export const MIRROR_PATHS: { route: string; mirror: string; title: string }[] = [
  { route: "/", mirror: "/index.md", title: "Home" },
  { route: "/services", mirror: "/services.md", title: "Services" },
  { route: "/use-cases", mirror: "/use-cases.md", title: "Use cases by industry" },
  { route: "/case-studies", mirror: "/case-studies.md", title: "Systems we have built" },
  { route: "/pricing", mirror: "/pricing.md", title: "Pricing and packages" },
  { route: "/process", mirror: "/process.md", title: "How we work" },
  { route: "/about", mirror: "/about.md", title: "About and founder" },
  { route: "/contact", mirror: "/contact.md", title: "Contact and FAQ" },
];

/** Shared response builder for the `.md` route handlers. */
export function markdownResponse(slug: keyof typeof MIRRORS | string): Response {
  const render = MIRRORS[slug];
  if (!render) return new Response("Not found", { status: 404 });

  return new Response(render(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

export { faqs };
