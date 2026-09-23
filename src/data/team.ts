export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Two or three lines. What this person is relied on for. */
  focus: string;
  specialisms: string[];
  /** Public portfolio or profile links only. */
  links: { label: string; href: string }[];
  /** Optional standing credential, shown as a monospace chip. */
  credential?: string;
}

/**
 * The engineering team.
 *
 * Deliberately no personal emails or phone numbers: those appear in client
 * proposals under NDA, not on a public page. Every link here is a portfolio or
 * profile the person already publishes themselves, and each was checked live.
 */
export const team: TeamMember[] = [
  {
    id: "arif-ahmad-khan",
    name: "Arif Ahmad Khan",
    role: "AI Engineer & Founder",
    focus:
      "Leads engagements and owns system architecture: data models, permission boundaries, and the agent workflows that sit on top of them.",
    specialisms: ["Agentic AI", "LangGraph", "RAG & Vector Search", "FastAPI", "Supabase"],
    links: [{ label: "Portfolio", href: "https://portfolio-azui.vercel.app" }],
  },
  {
    id: "bilal-faiz",
    name: "Bilal Faiz",
    role: "Full Stack Developer",
    focus:
      "Builds the money paths. Subscription billing, marketplace payouts, invoicing, and the transactional correctness that has to hold when a calculation error is not cosmetic.",
    specialisms: ["Stripe Connect", "Subscription Billing", "Multi-tenant SaaS", "Deployment"],
    links: [
      { label: "Portfolio", href: "https://bilalfaiz.com" },
      { label: "Billiie", href: "https://billiie.co" },
    ],
  },
  {
    id: "muhammad-shahid",
    name: "Muhammad Shahid",
    role: "Full Stack Developer",
    focus:
      "Front of house. Booking engines, calendars, dashboards and responsive delivery, with a track record of building for owner operators who have never used software like it before.",
    specialisms: ["Next.js", "React", "Booking & Calendars", "PWA", "Third-party APIs"],
    links: [
      { label: "Work", href: "https://reap-rho.vercel.app" },
      { label: "Fiverr", href: "https://www.fiverr.com/shahid_kahn" },
    ],
    credential: "5.0 across 83 reviews · delivering since 2019",
  },
  {
    id: "muhammad-maaz",
    name: "Muhammad Maaz",
    role: "Forward Deployed Engineer",
    focus:
      "Sits closest to the client's process. Form builders, reporting and financial overviews, workflow automation, and the integrations that connect a build to the tools already in use.",
    specialisms: ["Full Stack AI", "Workflow Automation", "Reporting", "Integrations"],
    links: [
      { label: "Portfolio", href: "https://my-portfolio-website-mocha-psi.vercel.app" },
    ],
  },
  {
    id: "hasnain-shah-fahad",
    name: "Hasnain Shah Fahad",
    role: "AI Engineer",
    focus:
      "Messaging infrastructure and quality. Carrier provisioning, automation engines, inbound reply handling, and the QA automation that keeps a live system honest.",
    specialisms: ["Twilio", "Messaging Automation", "Reply Handling", "QA Automation"],
    links: [],
  },
];
