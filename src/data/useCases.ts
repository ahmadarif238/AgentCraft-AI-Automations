export interface IndustryUseCase {
  industry: string;
  description: string;
  workflows: string[];
  before: string;
  after: string;
  tools: string[];
}

export const useCases: IndustryUseCase[] = [
  {
    industry: "Agencies",
    description: "Scale your client delivery and automate administrative overhead so your team can focus on creative and strategic work.",
    workflows: [
      "Lead intake and qualification automation",
      "Client onboarding sequences",
      "Automated proposal and contract generation",
      "Cross-platform reporting automation",
      "Internal task routing and project setup"
    ],
    before: "Manual follow-ups, delayed client onboarding, hours spent formatting weekly reports for different clients.",
    after: "Instant lead routing, automated Slack alerts, auto-generated zero-click client reports.",
    tools: ["HubSpot", "Slack", "Monday.com", "Make"]
  },
  {
    industry: "Consulting Firms",
    description: "Enhance knowledge management and client communication with intelligent systems.",
    workflows: [
      "Massive document analysis and extraction",
      "Client-facing knowledge assistants",
      "Meeting transcription and action item summaries",
      "Follow-up automation sequences",
      "AI research and market analysis assistants"
    ],
    before: "Associates spend hours reading through past deliverables and taking meeting notes.",
    after: "RAG systems instantly query past proposals. AI auto-generates structured meeting recaps and next steps.",
    tools: ["Pinecone", "Notion", "OpenAI", "Zoom"]
  },
  {
    industry: "Accounting & Finance",
    description: "Eliminate manual data entry and ensure compliance with automated financial workflows.",
    workflows: [
      "Automated client document collection",
      "Tax workflow reminders and tracking",
      "Invoice processing and follow-up",
      "Internal policy and compliance assistants",
      "Financial report generation"
    ],
    before: "Chasing clients for W-2s, manual invoice matching, and slow data entry into QuickBooks.",
    after: "Automated document chasing via email/SMS, OCR receipt extraction, and seamless ERP syncing.",
    tools: ["QuickBooks", "Xero", "DocuSign", "n8n"]
  },
  {
    industry: "Real Estate",
    description: "Respond to inquiries instantly and manage property data without the manual heavy lifting.",
    workflows: [
      "24/7 lead qualification and routing",
      "Property inquiry automated responses",
      "Document and lease management",
      "Viewing appointment scheduling",
      "CRM and listing updates synchronization"
    ],
    before: "Agents lose leads due to slow response times after hours. Manual syncing between Zillow and CRM.",
    after: "AI agent answers common property questions 24/7 and books viewings directly into calendars.",
    tools: ["Follow Up Boss", "Calendly", "Twilio", "Zapier"]
  },
  {
    industry: "SaaS & Tech",
    description: "Streamline operations, support, and sales for faster growth and better user experience.",
    workflows: [
      "Intelligent support ticket triage",
      "Product feedback aggregation and summaries",
      "Sales pipeline automation",
      "Internal engineering knowledge base assistant",
      "Automated incident reporting and alerts"
    ],
    before: "Support team answers the same 50 questions daily. Engineers get interrupted for basic policy questions.",
    after: "AI resolves 40% of tier-1 support tickets instantly. Internal bots handle HR/Engineering queries.",
    tools: ["Zendesk", "Jira", "GitHub", "LangGraph"]
  },
  {
    industry: "E-commerce & Retail",
    description: "Connect your storefront, inventory, and customer service into one unified automated system.",
    workflows: [
      "Smart inventory alerts and forecasting",
      "Customer support and returns automation",
      "Order issue routing to suppliers",
      "Sentiment review analysis",
      "Automated multi-channel sales reports"
    ],
    before: "Surprise stockouts, manual refund processing, and fragmented customer data across Shopify and Amazon.",
    after: "Predictive inventory alerts, AI-driven return handling, and unified daily sales dashboards.",
    tools: ["Shopify", "Klaviyo", "Gorgias", "Make"]
  }
];
