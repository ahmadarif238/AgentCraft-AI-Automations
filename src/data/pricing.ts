export interface PricingPackage {
  id: string;
  name: string;
  bestFor: string;
  /**
   * Anchor price, rendered as "From $X". Even a rough floor stops visitors
   * bouncing to compare elsewhere. null falls back to "Custom quote".
   */
  startingAt: number | null;
  /** Appended after the price, e.g. "/mo". */
  unit?: string;
  /** Overrides the price display entirely (used for the free audit). */
  priceLabel?: string;
  includes: string[];
  cta: string;
  highlight?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "audit",
    name: "Free Automation Audit",
    bestFor: "Businesses exploring automation and needing a clear roadmap.",
    startingAt: null,
    priceLabel: "Free",
    includes: [
      "Current workflow review",
      "Automation opportunity map",
      "Tool recommendations",
      "Estimated ROI calculation",
      "Phased implementation roadmap",
    ],
    cta: "Book Free Audit",
  },
  {
    id: "sprint",
    name: "Workflow Automation Sprint",
    bestFor: "One clear, high-impact workflow that needs automating quickly.",
    startingAt: 750,
    includes: [
      "One defined end-to-end workflow",
      "Tool and API integrations",
      "Thorough testing and QA",
      "System documentation",
      "Handover training video",
      "Post-launch support period",
    ],
    cta: "Start a Sprint",
    highlight: true,
  },
  {
    id: "agent",
    name: "Custom AI Agent Build",
    bestFor:
      "Businesses needing an intelligent assistant connected to their tools, documents, or business logic.",
    startingAt: 2000,
    includes: [
      "Custom AI agent development",
      "RAG or tool-use capability",
      "Business logic integration",
      "Secure API connections",
      "Cloud deployment and testing",
      "Documentation and handover",
    ],
    cta: "Build an AI Agent",
  },
  {
    id: "partner",
    name: "Monthly Automation Partner",
    bestFor: "Companies wanting ongoing automation support and continuous improvement.",
    startingAt: 500,
    unit: "/mo",
    includes: [
      "Proactive system monitoring",
      "Regular maintenance and updates",
      "Continuous workflow improvements",
      "New automation development",
      "Priority technical support",
      "Monthly performance reporting",
    ],
    cta: "Become a Partner",
  },
];

export interface BuildTier {
  name: string;
  price: number;
  note?: string;
}

export interface BuildService {
  id: string;
  name: string;
  summary: string;
  tiers: BuildTier[];
}

/**
 * Build work priced by tier rather than by scope call. Kept separate from the
 * automation packages above because buyers shop for these differently — they
 * arrive already knowing roughly which tier they want.
 */
export const buildServices: BuildService[] = [
  {
    id: "web-development",
    name: "Website Development",
    summary: "Marketing sites and business websites, built to load fast and convert.",
    tiers: [
      { name: "Essential", price: 750, note: "Core pages and contact capture" },
      { name: "Standard", price: 1000, note: "Fuller feature set and CMS-backed content" },
      { name: "Premium", price: 1700, note: "Custom design system and advanced features" },
      { name: "Premium + AI", price: 2500, note: "Premium build with AI features integrated" },
    ],
  },
  {
    id: "app-development",
    name: "Application Development",
    summary: "Web applications with real business logic, auth, and data behind them.",
    tiers: [
      { name: "Essential", price: 750, note: "Core pages and contact capture" },
      { name: "Standard", price: 1000, note: "Fuller feature set and CMS-backed content" },
      { name: "Premium", price: 1700, note: "Custom design system and advanced features" },
      { name: "Premium + AI", price: 2500, note: "Premium build with AI features integrated" },
    ],
  },
  {
    id: "chatbot-development",
    name: "Chatbot Development",
    summary: "Assistants trained on your content, for support deflection and lead capture.",
    tiers: [
      { name: "Chatbot build", price: 600, note: "Trained on your documents and FAQs" },
      { name: "Website integration", price: 400, note: "Embedded and styled to match your site" },
    ],
  },
];

/** Bolt-ons that apply on top of any build above. */
export const buildAddOns = [
  {
    name: "Workflow automation or custom AI agent integration",
    price: 500,
    description:
      "Wire an automated workflow or a custom agent directly into the site or application we build for you.",
  },
];

/** What actually moves a quote up or down. Stated openly so "custom" isn't a black box. */
export const pricingDrivers = [
  {
    title: "How many systems we touch",
    description:
      "Two tools talking to each other is a very different job from six, especially when one of them has no proper API.",
  },
  {
    title: "How clean your data is",
    description:
      "Structured records in a CRM are quick. Free-text spreadsheets, scanned PDFs and inconsistent naming take longer to make reliable.",
  },
  {
    title: "How much human approval it needs",
    description:
      "Fully autonomous steps are cheaper to build than workflows requiring review queues, audit trails and rollback paths.",
  },
  {
    title: "What happens when it breaks",
    description:
      "Basic logging is included everywhere. Alerting, retries and failover into a manual process add scope but save far more later.",
  },
];

const usd = (value: number) => `$${value.toLocaleString("en-US")}`;

export function formatPrice(pkg: PricingPackage): string {
  if (pkg.priceLabel) return pkg.priceLabel;
  if (pkg.startingAt === null) return "Custom quote";
  return `From ${usd(pkg.startingAt)}${pkg.unit ?? ""}`;
}

export function formatTierPrice(tier: BuildTier): string {
  return usd(tier.price);
}

export function formatAddOnPrice(price: number): string {
  return `+${usd(price)}`;
}
