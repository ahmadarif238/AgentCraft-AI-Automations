import {
  Settings,
  BrainCircuit,
  Database,
  Users,
  Mail,
  Network,
  BarChart3,
  Wrench,
  type LucideIcon
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  headline: string;
  description: string;
  solves: string;
  icon: LucideIcon;
  features: string[]; // Example workflows
  tools: string[];
  idealFor: string;
}

export const services: Service[] = [
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    headline: "Eliminate Manual Data Entry and Repetitive Operations.",
    description: "Automate repetitive tasks across tools and departments. We build seamless connections between your apps to eliminate manual data entry.",
    solves: "Stops your team from wasting hours copying and pasting data between systems, reducing human error to zero.",
    icon: Settings,
    features: [
      "Lead routing and CRM updates",
      "Invoice and payment reminders",
      "Client onboarding sequences",
      "Internal notifications and alerts"
    ],
    tools: ["n8n", "Zapier", "Make", "Power Automate", "Webhooks"],
    idealFor: "Operations teams tired of manual admin tasks."
  },
  {
    id: "ai-agents",
    title: "AI Agents Development",
    headline: "Deploy Intelligent Assistants That Complete Tasks Autonomously.",
    description: "Custom AI agents that think, decide, act, and complete complex business workflows autonomously.",
    solves: "Removes bottlenecks where human decision-making on low-level tasks slows down business velocity.",
    icon: BrainCircuit,
    features: [
      "Sales outreach and personalized drafting",
      "Customer support triage and resolution",
      "Research and data synthesis",
      "Executive voice assistants"
    ],
    tools: ["LangGraph", "LangChain", "OpenAI", "Anthropic", "Python"],
    idealFor: "Businesses looking to scale operations without adding headcount."
  },
  {
    id: "rag-systems",
    title: "RAG & Knowledge Assistants",
    headline: "Unlock Your Company's Knowledge With Instant Accurate Answers.",
    description: "AI assistants trained securely on your company documents, SOPs, policies, and knowledge bases.",
    solves: "Eliminates the hours spent searching through Google Drive, Confluence, or past emails for specific information.",
    icon: Database,
    features: [
      "Internal policy and HR Q&A",
      "Legal contract analysis",
      "Sales enablement knowledge search",
      "Secure technical documentation retrieval"
    ],
    tools: ["Pinecone", "Weaviate", "FAISS", "FastAPI", "React"],
    idealFor: "Firms with heavy documentation and complex knowledge bases."
  },
  {
    id: "crm-automation",
    title: "CRM & Lead Automation",
    headline: "Never Let a Warm Lead Slip Through the Cracks Again.",
    description: "End-to-end lead capture, enrichment, scoring, follow-up, and pipeline updates.",
    solves: "Fixes slow lead response times and inaccurate CRM data caused by salespeople forgetting to log activities.",
    icon: Users,
    features: [
      "Instant multi-channel follow-ups",
      "Automated lead scoring based on ICP",
      "Data enrichment via APIs (Clearbit, Apollo)",
      "Automated pipeline stage updates"
    ],
    tools: ["HubSpot", "Salesforce", "Pipedrive", "n8n", "Make"],
    idealFor: "Sales teams losing deals due to slow follow-ups."
  },
  {
    id: "email-support",
    title: "Email & Support Automation",
    headline: "Transform Overwhelmed Inboxes Into Organized Workflows.",
    description: "Email triage, ticket summaries, auto-drafts, and customer support assistants.",
    solves: "Reduces ticket resolution time and prevents important client emails from getting lost in the noise.",
    icon: Mail,
    features: [
      "Inbox zero automated categorization",
      "Sentiment analysis routing",
      "Auto-drafted context-aware responses",
      "Support ticket summarization for handoff"
    ],
    tools: ["Zendesk", "Intercom", "Gmail/Outlook APIs", "OpenAI"],
    idealFor: "Customer service teams overwhelmed by repetitive questions."
  },
  {
    id: "data-integration",
    title: "Data Integration & APIs",
    headline: "Connect Your Scattered Tools Into a Single Source of Truth.",
    description: "Connect CRMs, databases, spreadsheets, SaaS tools, and internal systems securely.",
    solves: "Ends the silos between marketing, sales, and operations tools so data is always synced and accurate.",
    icon: Network,
    features: [
      "Custom API development",
      "Two-way database syncing",
      "Legacy system modernization",
      "Secure webhook implementation"
    ],
    tools: ["PostgreSQL", "Supabase", "FastAPI", "Docker", "AWS"],
    idealFor: "Companies with scattered data across multiple platforms."
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    headline: "Get Real-Time Insights Without the Manual Spreadsheet Work.",
    description: "Automated reports, dashboards, insights, and weekly performance tracking summaries.",
    solves: "Frees up the hours spent every Friday pulling data from five different tools to build a progress report.",
    icon: BarChart3,
    features: [
      "Automated weekly PDF/Slack summaries",
      "Real-time dashboard updates",
      "KPI tracking and anomaly alerts",
      "Cross-platform data visualization"
    ],
    tools: ["Power BI", "Looker Studio", "Python", "Make"],
    idealFor: "Founders and executives who need data without the manual work."
  },
  {
    id: "ongoing-support",
    title: "Ongoing Support & Optimization",
    headline: "Keep Your Automations Running Smoothly 24/7.",
    description: "Monitoring, maintenance, improvements, and continuous workflow optimization.",
    solves: "Provides peace of mind that if an API changes or an edge case occurs, an engineer is already fixing it.",
    icon: Wrench,
    features: [
      "Proactive error monitoring",
      "Workflow scaling and adjustments",
      "Monthly performance review calls",
      "System upgrades and security patches"
    ],
    tools: ["Datadog", "Sentry", "Azure DevOps", "GitHub Actions"],
    idealFor: "Businesses that want a reliable long-term automation partner."
  }
];
