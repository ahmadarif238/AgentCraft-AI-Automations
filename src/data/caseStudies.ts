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
}

/**
 * Single source for the case studies. Consumed by the case studies page, the
 * homepage preview, and the markdown mirror, so the three can never disagree.
 */
export const caseStudies: CaseStudy[] = [
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
];
