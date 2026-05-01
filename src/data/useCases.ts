export interface IndustryUseCase {
  industry: string;
  description: string;
  workflows: string[];
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];
