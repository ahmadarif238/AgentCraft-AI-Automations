import { siteConfig, whatsappUrl, bookingUrl } from "@/config/site";
import { services } from "@/data/services";
import { useCases } from "@/data/useCases";
import { caseStudies } from "@/data/caseStudies";
import { team } from "@/data/team";
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
 * Plain markdown mirrors of each page, served at `/<page>.md`.
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

${services.map((s) => `- **${s.title}**: ${s.description}`).join("\n")}

## Why businesses work with us

- One team for websites, web and mobile apps, SaaS products and AI
- Software with AI and automation built in, not bolted on
- Fewer hours lost to repetitive work and manual data entry
- Connect scattered tools without replacing core systems
- Scale operations without extra headcount
- Fixed price quotes, and you own the code

## Common questions

${objectionFaqs.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}

## Contact

${contactBlock()}
`;
}

function servicesPage() {
  return `# Software Development and AI Services: ${siteConfig.name}

We design and build websites, web applications, mobile apps, SaaS products and internal tools, along with custom AI agents, workflow automation, RAG knowledge assistants, chatbots and integrations. Many projects combine the two: software with the AI built in.

${services
  .map(
    (s) => `## ${s.title}

**${s.headline}**

${s.description}

**What it solves:** ${s.solves}

**What we build:**
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
  return `# Use Cases by Industry: ${siteConfig.name}

How custom software, AI agents and workflow automation are applied across different industries.

${useCases
  .map(
    (u) => `## ${u.industry}

${u.description}

**Today:** ${u.before}

**With AgentCraft:** ${u.after}

**What we build:**
${list(u.builds)}

**AI and automation:**
${list(u.workflows)}

**Commonly integrated tools:** ${u.tools.join(", ")}`,
  )
  .join("\n\n")}

## Contact

${contactBlock()}
`;
}

function caseStudiesPage() {
  return `# Software and AI Systems We've Built: ${siteConfig.name}

Production grade SaaS products, web apps, RAG implementations and multi agent systems, designed and built by our team to solve real business problems.

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
  return `# Pricing & Packages: ${siteConfig.name}

Every website, app, AI and automation project is quoted as a fixed price before work starts. No open ended hourly bills.

## Packages

${pricingPackages
  .map(
    (p) => `### ${p.name}: ${formatPrice(p)}

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

${b.tiers.map((t) => `- **${t.name}**: ${formatTierPrice(t)}${t.note ? ` (${t.note})` : ""}`).join("\n")}`,
  )
  .join("\n\n")}

Mobile apps and SaaS products are scoped individually and quoted at a fixed price after the free consultation.

### Optional extras

${buildAddOns.map((a) => `- **${a.name}**: +$${a.price.toLocaleString("en-US")}. ${a.description}`).join("\n")}

## What changes the price

${pricingDrivers.map((d) => `### ${d.title}\n\n${d.description}`).join("\n\n")}

## Contact

${contactBlock()}
`;
}

function aboutPage() {
  return `# About ${siteConfig.name}

A founder led software and AI studio. We design and build websites, apps, SaaS products and AI systems, bridging the gap between complex AI research and practical business operations.

## Founder

${siteConfig.founderName}, ${siteConfig.founderTitle}. A software engineer who builds web products and artificial intelligence systems for businesses, covering full stack web and app development, intelligent agents, retrieval augmented assistants, machine learning services, and the automation that connects them to existing tools. Has delivered AI and automation work for international companies across several sectors before founding AgentCraft.

## Technical expertise

- Websites and web apps (Next.js, React, TypeScript)
- Mobile apps (React Native, Expo, Flutter)
- SaaS platforms (auth, Stripe, Supabase)
- Multi agent AI systems (LangGraph)
- RAG and vector search (Pinecone, Weaviate)
- Workflow automation (n8n, Zapier, Make)
- Backends and APIs (FastAPI, PostgreSQL)
- Microsoft Power Automate and Power Platform
- Cloud and deployment (AWS, Azure, Docker)

## How we work

- **Honest engineering.** No hype, no impossible AI promises. Reliable systems that work in production.
- **Founder led delivery.** The founder stays hands on from architecture through to handover.
- **Security by default.** Human in the loop approvals, secure authentication and careful API handling from day one.

## Contact

${contactBlock()}
`;
}

function teamPage() {
  const member = (m: (typeof team)[number]) => {
    const parts = [
      `## ${m.name}, ${m.role}`,
      "",
      m.focus,
      "",
      `**Specialisms:** ${m.specialisms.join(", ")}`,
    ];
    if (m.credential) parts.push("", `**Track record:** ${m.credential}`);
    if (m.links.length) {
      parts.push("", ...m.links.map((l) => `- ${l.label}: ${l.href}`));
    }
    return parts.join("\n");
  };

  return `# The Team: ${siteConfig.name}

Five engineers working in house, no subcontractors. Builds are resourced across specialists so independent workstreams run in parallel and no single person's availability becomes a bottleneck.

${team.map(member).join("\n\n")}

## Contact

${contactBlock()}
`;
}

function processPage() {
  return `# Our Process: ${siteConfig.name}

How a website, app, AI or automation project runs, from first call to ongoing support.

1. **Free consultation.** We review your goals, users and current workflows, and map out what to build first.
2. **Design and fixed quote.** We plan the architecture, design the screens and flows, and quote a fixed price before any work starts.
3. **Build.** We develop the website, app, agent or workflow in milestones, integrating with the tools you already use.
4. **Testing and QA.** We test against real edge cases and across devices, not just the happy path.
5. **Launch and handover.** We deploy to production or the app stores, with documentation and a training video so your team can run it.
6. **Ongoing support.** Optional monthly partnership for monitoring, maintenance and improvements.

## Contact

${contactBlock()}
`;
}

function contactPage() {
  return `# Contact ${siteConfig.name}

Tell us what you want to build, or which workflow is costing you the most time. We reply ${siteConfig.responseTime}.

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
  team: teamPage,
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
  { route: "/team", mirror: "/team.md", title: "The engineering team" },
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
