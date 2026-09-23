export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  businessValue: string;
  adaptation: string;
  /** Interface visual under /images/work/, 1600x1000. */
  image: string;
  /**
   * `capture` is a real screenshot of the live product. `sample` is the
   * product's interface shown in use with illustrative data, since a live
   * deployment on its own shows only empty states.
   */
  imageKind: "capture" | "sample";
  /** Public deployment, when there is one. */
  liveUrl?: string;
}

type Entry = Omit<CaseStudy, "image" | "imageKind" | "liveUrl">;

/**
 * Single source for the case studies. Consumed by the case studies page, the
 * homepage preview, and the markdown mirror, so the three can never disagree.
 */
const entries: Entry[] = [
  {
    id: "sales-ai",
    category: "B2B Sales Automation",
    title: "SalesAI",
    overview: "Automates lead generation, scoring, engagement, and sales workflow coordination.",
    problem: "B2B sales teams spend too much time on manual prospect research, data entry into CRM, and crafting personalized outreach.",
    solution: "A custom multi-agent system that scrapes target companies, scores leads based on ICP fit, and drafts personalized outreach messages.",
    technologies: ["LangGraph", "n8n", "OpenAI", "Pinecone"],
    businessValue: "Cuts manual prospect research time by roughly 60% in our own build of the system.",
    adaptation: "Can be adapted to any CRM (Salesforce, HubSpot) to automatically enrich inbound leads.",
  },
  {
    id: "contract-iq",
    category: "AI Contract Intelligence",
    title: "ContractIQ",
    overview: "Multi-agent system for analyzing, verifying, and benchmarking complex legal agreements.",
    problem: "Legal and procurement teams get bottlenecked reviewing standardized agreements for non-standard clauses.",
    solution: "A RAG-based workflow that compares uploaded contracts against a master playbook, flagging risks and generating a summary report.",
    technologies: ["FastAPI", "Weaviate", "LangChain", "React"],
    businessValue: "Grounded outputs with validation-oriented architecture.",
    adaptation: "Can be deployed internally for HR, Procurement, or Legal teams to speed up document reviews.",
  },
  {
    id: "supply-chain-agent",
    category: "Autonomous Operations",
    title: "Smart Supply Chain Agent",
    overview: "Autonomous inventory, forecasting, procurement, and budget negotiation support system.",
    problem: "Supply chain managers constantly switch between ERPs, emails, and supplier portals to manage inventory levels.",
    solution: "An agent that monitors stock levels, predicts shortages using historical data, and drafts supplier reorder emails automatically.",
    technologies: ["Python", "Supabase", "Make", "Claude"],
    businessValue: "Eliminates stockout surprises and automates routine vendor communication.",
    adaptation: "Integrates directly with Shopify, WooCommerce, or custom ERPs.",
  },
  {
    id: "ai-operations-copilot",
    category: "IT & Operations Support",
    title: "AI Operations Copilot",
    overview: "RAG-based IT operations assistant for policy Q&A, log monitoring, and ticket generation.",
    problem: "IT teams are overwhelmed with repetitive level-1 support questions and manual ticket triaging.",
    solution: "A Slack/Teams integrated assistant that answers questions using internal wikis and auto-creates Jira tickets for unresolved issues.",
    technologies: ["LangGraph", "Slack API", "Jira API", "PostgreSQL"],
    businessValue: "Deflects routine tickets and standardizes internal support responses.",
    adaptation: "Easily trained on any internal Confluence or Notion workspace.",
  },
  {
    id: "voice-executive",
    category: "Voice AI & Productivity",
    title: "Voice Executive Agent",
    overview: "Voice-enabled assistant for email and calendar task management.",
    problem: "Executives waste time manually triaging emails and scheduling meetings while on the go.",
    solution: "A voice-activated agent capable of reading email summaries and scheduling calendar events via natural language.",
    technologies: ["ElevenLabs", "Zapier", "Google Workspace APIs", "OpenAI"],
    businessValue: "Turns drive-time into productive administrative time.",
    adaptation: "Can be customized for specific executive workflows or field sales teams.",
  },
  {
    id: "vivagraph-ai",
    category: "Voice AI & Assessment",
    title: "VivaGraph AI",
    overview:
      "A cognitive core of seven specialized agents that runs realistic oral examinations and scores them.",
    problem:
      "Assessing spoken competence at scale is slow and inconsistent. A human examiner can only sit so many sessions, and two examiners rarely mark the same answer the same way.",
    solution:
      "Seven agents divide the work of an examiner: question selection, follow-up probing, voice analysis, filler word detection, difficulty adjustment, scoring, and feedback. Difficulty adapts live to how the candidate is performing.",
    technologies: ["LangGraph", "Voice Analysis", "Multi-Agent Workflows", "Python"],
    businessValue:
      "Delivers consistent, repeatable assessment against the same rubric every time, with detailed feedback attached to each session.",
    adaptation:
      "Transfers to interview screening, sales pitch practice, language assessment, and internal certification.",
  },
  {
    id: "stock-news-agent",
    category: "Monitoring & Alerting",
    title: "Stock News Alert Agent",
    overview:
      "Watches financial news continuously and pushes sentiment-scored alerts the moment something moves.",
    problem:
      "Market-moving news breaks faster than anyone can read it, and the signal is buried in a very high volume of noise.",
    solution:
      "An agent monitors news sources, scores each item for sentiment and relevance against a watchlist, and delivers only what clears the threshold straight to Telegram.",
    technologies: ["Python", "Groq", "Sentiment Analysis", "Telegram API"],
    businessValue:
      "Replaces manual news monitoring with alerts that arrive already filtered and interpreted.",
    adaptation:
      "The same pattern covers competitor tracking, brand monitoring, regulatory alerts, and supplier risk.",
  },
  {
    id: "billiie",
    category: "Multi-tenant SaaS & Billing",
    title: "Billiie",
    overview:
      "A live digital signage and commerce platform serving small businesses in the US, with tiered subscription billing and per-unit overage.",
    problem:
      "Small retail sites, cafes and parking operators want screens that sell, but the software behind them is priced for chains and needs an operator to run it.",
    solution:
      "A multi-tenant platform where each business manages its own screens, content, campaigns and earnings from an isolated dashboard. Billing is a tiered base subscription with per-unit overage on top, so capacity can be added without changing plan.",
    technologies: ["Stripe", "Multi-tenant Architecture", "Subscription Billing", "Web & TV Apps"],
    businessValue:
      "In production and taking paying customers, across web, smart TV and Amazon Fire TV, with mobile in progress.",
    adaptation:
      "The same tenancy and billing model fits any product sold per seat, per location or per device.",
  },
  {
    id: "whatsapp-ordering-agent",
    category: "Conversational Commerce",
    title: "WhatsApp Ordering Agent",
    overview:
      "A multi-tenant agent that takes orders over WhatsApp in English and Urdu, by text or voice note, and hands each one to a human to confirm.",
    problem:
      "Businesses lose orders in WhatsApp threads. Staff retype items, misprice totals, and there is no record of what was agreed.",
    solution:
      "Inbound messages route to the correct tenant, the agent answers against that business's own menu and builds an order, then stops at a pending state. No code path can mark an order confirmed; only a person clicking Confirm can. Every total is computed from database prices rather than typed.",
    technologies: ["Supabase Postgres", "Next.js App Router", "Webhooks & HMAC", "Voice Transcription"],
    businessValue:
      "Tested end to end against live WhatsApp in both languages, with duplicate deliveries made safe by signature verification and idempotency.",
    adaptation:
      "Transfers to bookings, quotes and reorders wherever the conversation already happens on WhatsApp.",
  },
  {
    id: "reap-card-designer",
    category: "Fintech Tooling",
    title: "Card Design Tool",
    overview:
      "A design tool built for a global financial infrastructure company, letting non-technical staff produce branded cards without a designer.",
    problem:
      "Card artwork went through a design queue, which made a small change slow and put a specialist between the business and a routine task.",
    solution:
      "Logo upload with live colour and element customisation, export to a size-constrained PNG that meets production limits, and Google API integration that saves designs and employee data straight to Drive and Sheets.",
    technologies: ["Next.js", "React", "Google APIs", "Image Processing"],
    businessValue:
      "Puts a production-constrained design task in the hands of the people who need it, with no training.",
    adaptation:
      "The same pattern suits any branded asset a team regenerates often, from badges to certificates to menus.",
  },
  {
    id: "client-hunting-agent",
    category: "Outbound Automation",
    title: "AI Client-Hunting Agent",
    overview:
      "An outbound pipeline that finds prospects, drafts personalised outreach, and sends only after a human approves it.",
    problem:
      "Outbound either goes unsent because nobody has time, or goes out unreviewed and damages the brand it is meant to build.",
    solution:
      "The agent researches target businesses and drafts a personalised message, then waits. Nothing sends without approval. Once sent, it monitors replies and notifies the operator, so follow-up happens while interest is live.",
    technologies: ["FastAPI", "Next.js", "SQL Migrations", "Automated Testing"],
    businessValue:
      "Approval gating and reply monitoring mean volume goes up without anyone losing control of what goes out under their name.",
    adaptation:
      "The same shape covers recruitment outreach, partner development, renewals and win-back campaigns.",
  },
];

/** Where each system can be seen running, and whether its visual is a capture. */
const deployments: Record<string, Pick<CaseStudy, "imageKind" | "liveUrl">> = {
  "sales-ai": { imageKind: "sample", liveUrl: "https://ai-sales-automation-agent.vercel.app" },
  "contract-iq": { imageKind: "sample", liveUrl: "https://contract-iq-six.vercel.app" },
  "supply-chain-agent": { imageKind: "sample", liveUrl: "https://smart-supply-chain-agent.vercel.app" },
  "stock-news-agent": { imageKind: "sample", liveUrl: "https://stock-news-agent.vercel.app" },
  "vivagraph-ai": { imageKind: "sample", liveUrl: "https://vivagraph-ai.vercel.app" },
  billiie: { imageKind: "capture", liveUrl: "https://billiie.co" },
  "reap-card-designer": { imageKind: "capture", liveUrl: "https://reap-rho.vercel.app" },
};

export const caseStudies: CaseStudy[] = entries.map((entry) => ({
  ...entry,
  image: `/images/work/${entry.id}.webp`,
  imageKind: deployments[entry.id]?.imageKind ?? "sample",
  liveUrl: deployments[entry.id]?.liveUrl,
}));

/** "billiie.co" from "https://billiie.co", for captions and link labels. */
export function displayHost(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
