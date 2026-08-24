export interface PricingPackage {
  id: string;
  name: string;
  bestFor: string;
  /**
   * Anchor price. Set this to a real number to show "From $X" instead of
   * "Custom quote" — even a rough floor stops visitors bouncing to compare
   * elsewhere. Leave null only while a genuine figure isn't settled.
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
    startingAt: null,
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
    startingAt: null,
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
    startingAt: null,
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

export function formatPrice(pkg: PricingPackage): string {
  if (pkg.priceLabel) return pkg.priceLabel;
  if (pkg.startingAt === null) return "Custom quote";
  return `From $${pkg.startingAt.toLocaleString("en-US")}${pkg.unit ?? ""}`;
}
