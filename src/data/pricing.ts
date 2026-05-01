export interface PricingPackage {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "audit",
    title: "Automation Audit",
    description: "Best for businesses exploring automation and needing a clear roadmap.",
    price: "Free",
    features: [
      "Current workflow review",
      "Automation opportunity map",
      "Tool recommendations",
      "Estimated ROI calculation",
      "Phased implementation roadmap"
    ],
    ctaText: "Book Free Audit"
  },
  {
    id: "sprint",
    title: "Workflow Sprint",
    description: "Best for automating one clear, high-impact business workflow.",
    price: "Custom Quote",
    features: [
      "End-to-end workflow automation",
      "Tool and API integrations",
      "Thorough testing & QA",
      "System documentation",
      "Handover training video"
    ],
    ctaText: "Start a Sprint",
    popular: true
  },
  {
    id: "agent",
    title: "Custom AI Agent",
    description: "Best for businesses needing an intelligent assistant to handle complex tasks.",
    price: "Custom Quote",
    features: [
      "Custom AI agent development",
      "RAG or tool-use capability",
      "Business logic integration",
      "Secure API connections",
      "Cloud deployment & testing"
    ],
    ctaText: "Build an AI Agent"
  },
  {
    id: "partner",
    title: "Automation Partner",
    description: "Best for ongoing automation support, maintenance, and expansion.",
    price: "Starting from $X/mo",
    features: [
      "Proactive system monitoring",
      "Regular maintenance & updates",
      "Continuous workflow improvements",
      "New automation development",
      "Priority technical support",
      "Monthly performance reporting"
    ],
    ctaText: "Become a Partner"
  }
];
