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
  description: string;
  icon: LucideIcon;
  features: string[];
  idealFor: string;
}

export const services: Service[] = [
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Automate repetitive tasks across tools and departments. We build seamless connections between your apps to eliminate manual data entry.",
    icon: Settings,
    features: [
      "Cross-platform integration (n8n, Make, Zapier)",
      "Automated document processing",
      "Error reduction systems",
      "Custom trigger-based workflows"
    ],
    idealFor: "Operations teams tired of manual admin tasks."
  },
  {
    id: "ai-agents",
    title: "AI Agents Development",
    description: "Custom AI agents that think, decide, act, and complete business tasks autonomously.",
    icon: BrainCircuit,
    features: [
      "Sales outreach agents",
      "Customer support bots",
      "Research & synthesis agents",
      "Executive assistants"
    ],
    idealFor: "Businesses looking to scale operations without adding headcount."
  },
  {
    id: "rag-systems",
    title: "RAG & Knowledge Assistants",
    description: "AI assistants trained on your company documents, SOPs, policies, and knowledge bases for context-aware answers.",
    icon: Database,
    features: [
      "Vector database integration (Pinecone, Weaviate)",
      "Internal policy Q&A",
      "Contract analysis",
      "Secure knowledge retrieval"
    ],
    idealFor: "Firms with heavy documentation and complex knowledge bases."
  },
  {
    id: "crm-automation",
    title: "CRM & Lead Automation",
    description: "End-to-end lead capture, enrichment, scoring, follow-up, and pipeline updates.",
    icon: Users,
    features: [
      "Automated lead scoring",
      "Instant multi-channel follow-ups",
      "Data enrichment via APIs",
      "Sales pipeline sync"
    ],
    idealFor: "Sales teams losing deals due to slow follow-ups."
  },
  {
    id: "email-support",
    title: "Email & Support Automation",
    description: "Email triage, ticket summaries, auto-drafts, and customer support assistants.",
    icon: Mail,
    features: [
      "Inbox zero automation",
      "Sentiment analysis routing",
      "Auto-drafted responses",
      "Support ticket categorization"
    ],
    idealFor: "Customer service teams overwhelmed by repetitive questions."
  },
  {
    id: "data-integration",
    title: "Data Integration & APIs",
    description: "Connect CRMs, databases, spreadsheets, SaaS tools, and internal systems.",
    icon: Network,
    features: [
      "Custom API development",
      "Database syncing (PostgreSQL, Supabase)",
      "Legacy system modernization",
      "Webhook implementation"
    ],
    idealFor: "Companies with scattered data across multiple platforms."
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    description: "Automated reports, dashboards, insights, and weekly performance tracking summaries.",
    icon: BarChart3,
    features: [
      "Automated weekly summaries",
      "Real-time dashboard updates",
      "KPI tracking alerts",
      "Data visualization"
    ],
    idealFor: "Founders and executives who need data without the manual work."
  },
  {
    id: "ongoing-support",
    title: "Ongoing Support & Optimization",
    description: "Monitoring, maintenance, improvements, and workflow optimization.",
    icon: Wrench,
    features: [
      "Proactive error monitoring",
      "Workflow scaling",
      "Monthly performance reviews",
      "System upgrades"
    ],
    idealFor: "Businesses that want a reliable long-term automation partner."
  }
];
