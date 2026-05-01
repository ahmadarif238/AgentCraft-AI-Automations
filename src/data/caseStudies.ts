export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  businessValue: string;
  category: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "sales-ai",
    title: "SalesAI: B2B Sales Automation",
    description: "An agentic sales automation system that handles lead generation, scoring, engagement, and sales pipeline workflows.",
    technologies: ["FastAPI", "Agentic AI", "CRM Automation", "Workflow Orchestration"],
    businessValue: "Reduces manual sales research by 80% and helps teams follow up with qualified leads faster.",
    category: "AI Agents & CRM"
  },
  {
    id: "contract-iq",
    title: "ContractIQ: AI Contract Intelligence",
    description: "A multi-agent AI system for analyzing, verifying, and benchmarking legal agreements using RAG and specialized reasoning agents.",
    technologies: ["LangGraph", "RAG", "Vector Search", "FastAPI", "Multi-Agent Workflows"],
    businessValue: "Helps legal and ops teams review complex documents 10x faster with grounded, structured outputs.",
    category: "Document AI & RAG"
  },
  {
    id: "smart-supply-chain",
    title: "Smart Supply Chain Agent",
    description: "An autonomous multi-agent system for inventory, forecasting, procurement, and purchase order decision support.",
    technologies: ["LangGraph", "Forecasting", "AI Agents", "Optimization Logic"],
    businessValue: "Improves operational visibility and eliminates manual spreadsheet-based inventory planning.",
    category: "Operations & Automation"
  },
  {
    id: "ops-copilot",
    title: "AI Operations Copilot",
    description: "A RAG-based operations assistant for IT policy Q&A, log monitoring, and ticket generation.",
    technologies: ["LangGraph", "RAG", "Vector Databases", "Ticket Automation"],
    businessValue: "Empowers internal teams to resolve tier-1 issues autonomously and access tribal knowledge instantly.",
    category: "Internal Support & RAG"
  },
  {
    id: "voice-executive",
    title: "Voice Executive Agent",
    description: "A voice-enabled assistant for managing email and calendar tasks through natural language commands.",
    technologies: ["LangChain", "Google APIs", "Voice Interface", "AI Assistant Architecture"],
    businessValue: "Reduces executive admin time by handling scheduling and email triage on the go.",
    category: "Voice AI & Assistants"
  }
];
