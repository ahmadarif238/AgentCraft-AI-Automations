/**
 * Single source of truth for contact details, links and pricing anchors.
 *
 * Anything left as an empty string is treated as "not configured yet" and the
 * UI hides that channel entirely rather than rendering a dead link. Fill a
 * value in here and it lights up everywhere it is used.
 */

/** Digits only, including country code, no "+" or spaces. Used to build wa.me links. */
const whatsappNumber = "923710962883";

/**
 * Fields you are expected to fill in later. Typed as plain `string` rather than
 * inferred as the literal `""`, so code that branches on "is this configured
 * yet" type-checks both ways.
 */
interface ConfigurableContact {
  email: string;
  phone: string;
  whatsappNumber: string;
}

interface ConfigurableLinks {
  github: string;
  linkedin: string;
  linkedinCompany: string;
  twitter: string;
  booking: string;
}

export const siteConfig: {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  whatsappMessage: string;
  founderName: string;
  founderTitle: string;
  location: { city: string; country: string; countryCode: string };
  responseTime: string;
  links: ConfigurableLinks;
  overviewPdf: string;
} & ConfigurableContact = {
  name: "AgentCraft AI Automations",
  shortName: "AgentCraft AI",
  tagline: "We Automate Workflows. You Scale Effortlessly.",
  description:
    "AgentCraft AI Automations builds custom AI agents, workflow automations, RAG assistants, CRM automation, and intelligent business systems that help companies save time, reduce costs, and scale faster.",

  /**
   * Canonical origin. This drives canonical tags, the sitemap, OG URLs and
   * JSON-LD, so it must always match where the site is actually served from.
   * Switch this to "https://agentcraftai.com" only once that domain resolves
   * to this deployment — nothing else needs to change.
   */
  url: "https://agent-craft-ai-automations.vercel.app",

  /** Public inbox. Leave "" until it is a real, monitored address. */
  email: "agentcraftaiautomations@gmail.com",
  /** Public phone in display form. Leave "" to hide. */
  phone: "+92 371 0962883",
  whatsappNumber,
  /** Prefilled first message so enquiries arrive with context. */
  whatsappMessage:
    "Hi AgentCraft AI — I'd like to talk about automating a workflow in my business.",

  founderName: "Arif Ahmad Khan",
  founderTitle: "AI Engineer & Founder",

  /** Where the business is run from. Shown in the footer and in JSON-LD. */
  location: {
    city: "Lahore",
    country: "Pakistan",
    /** ISO 3166-1 alpha-2, for structured data. */
    countryCode: "PK",
  },

  /** Stated turnaround, surfaced up front instead of buried in an FAQ. */
  responseTime: "within 24 hours",

  links: {
    github: "https://github.com/ahmadarif238",
    /**
     * The founder's personal profile. Intentionally blank: the previously
     * hard-coded value pointed at someone else's profile, and a wrong link is
     * worse than none. Fill in the real URL to show the About page button.
     */
    linkedin: "",
    /** The company page — preferred everywhere a company link is shown. */
    linkedinCompany: "https://www.linkedin.com/company/agentcraft-ai-automations",
    twitter: "",
    /**
     * Live scheduler (Cal.com / Calendly). While this is "", every "Book a call"
     * CTA points at the contact form instead of a broken link.
     */
    booking: "",
  },

  /** The downloadable one-pager. A real PDF, not an image named like one. */
  overviewPdf: "/agentcraft-ai-overview.pdf",
};

/** wa.me deep link, or null when no number is configured. */
export const whatsappUrl = siteConfig.whatsappNumber
  ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
  : null;

/**
 * Where a "book a call" CTA should go: the live scheduler if there is one,
 * otherwise the contact form. Never a dead "#".
 */
export const bookingUrl = siteConfig.links.booking || "/contact#enquiry-form";

/** True when the scheduler is real, so copy can say "pick a slot" vs "send a message". */
export const hasLiveScheduler = Boolean(siteConfig.links.booking);

/**
 * Best available LinkedIn destination — the company page if there is one,
 * otherwise the founder's profile, otherwise nothing so the link is hidden
 * rather than pointing at the wrong person.
 */
export const linkedinUrl =
  siteConfig.links.linkedinCompany || siteConfig.links.linkedin || null;

/**
 * Contact-page link carrying context about what the visitor was reading, so an
 * enquiry from the "Legal" use case arrives tagged as such. Always an absolute
 * path — building "?service=x" alone would resolve against the current page.
 */
export function enquiryUrl(params?: Record<string, string>): string {
  const query = params ? new URLSearchParams(params).toString() : "";
  return `/contact${query ? `?${query}` : ""}#enquiry-form`;
}

export type SiteConfig = typeof siteConfig;
