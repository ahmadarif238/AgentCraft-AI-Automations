import {
  Settings,
  BrainCircuit,
  Database,
  Users,
  Mail,
  Network,
  BarChart3,
  Wrench,
  MessageSquare,
  Globe,
  AppWindow,
  TabletSmartphone,
  Layers,
  Palette,
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
    id: "web-development",
    title: "Website Development",
    headline: "Fast, Modern Websites Built to Convert, Not Just to Look Good.",
    description: "Marketing sites and business websites built on a modern stack, with the option to wire AI features and automations straight into them.",
    solves: "Replaces slow websites that are hard to edit with something fast, searchable and built around turning visitors into enquiries.",
    icon: Globe,
    features: [
      "Responsive design across every screen size",
      "SEO fundamentals, structured data and fast page loads",
      "Content management so your team can edit without a developer",
      "Optional AI features and automation built in"
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    idealFor: "Businesses whose current site is slow, dated, or generating nothing."
  },
  {
    id: "ai-agents",
    title: "AI Agents Development",
    headline: "Deploy Intelligent Assistants That Complete Tasks Autonomously.",
    description: "Custom AI agents that think, decide, act and complete complex business workflows on their own, as a standalone tool or built into your product.",
    solves: "Removes bottlenecks where human decisions on routine tasks slows down business velocity.",
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
    id: "app-development",
    title: "Web Application Development",
    headline: "Custom Applications With Real Business Logic Behind Them.",
    description: "Custom web applications, portals, dashboards and internal tools with authentication, databases and integrations, built to run the parts of your operation that spreadsheets have outgrown.",
    solves: "Replaces the tangle of spreadsheets, shared inboxes and manual handoffs that your team has quietly built a business process on top of.",
    icon: AppWindow,
    features: [
      "User accounts, roles and permissions",
      "Dashboards and internal admin tools",
      "Integrations with the systems you already run",
      "Optional AI agents and automated workflows built in"
    ],
    tools: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Docker"],
    idealFor: "Teams running a core process on spreadsheets that keeps breaking."
  },
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
    id: "mobile-app-development",
    title: "Mobile App Development",
    headline: "iOS and Android Apps Your Customers Will Actually Keep.",
    description: "Native feeling mobile apps for iOS and Android from a single codebase, with accounts, payments, push notifications and a backend built to match.",
    solves: "Gives your customers or field team a fast, reliable app instead of a clunky mobile website or a stack of paper forms.",
    icon: TabletSmartphone,
    features: [
      "One codebase for iOS and Android",
      "Sign in, payments and push notifications",
      "Offline support and device features like camera and location",
      "App Store and Google Play release handled for you"
    ],
    tools: ["React Native", "Expo", "Flutter", "Firebase", "Supabase"],
    idealFor: "Businesses that need an app in their customers' pockets, not just a website."
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
    id: "saas-development",
    title: "SaaS Product Development",
    headline: "From Idea to a Subscription Product People Pay For.",
    description: "Multi tenant SaaS products with sign up, teams and roles, subscription billing through Stripe, and an admin panel to run it all, with AI features built in where they help.",
    solves: "Turns a product idea or an internal tool into a real, billable product without you having to assemble and manage a development team.",
    icon: Layers,
    features: [
      "Multi tenant architecture with teams and roles",
      "Authentication, onboarding and account management",
      "Subscription billing and invoicing with Stripe",
      "Admin panel, usage tracking and analytics"
    ],
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Supabase"],
    idealFor: "Founders and teams launching a new software product or MVP."
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Website Assistants",
    headline: "Answer Customers Instantly, Day and Night, On Your Own Site.",
    description: "Chat assistants trained on your own documents, products and policies, embedded directly into your website and styled to match your brand.",
    solves: "Stops repetitive presales questions and support tickets from eating your team's day, and captures the leads that would otherwise leave without contacting you.",
    icon: MessageSquare,
    features: [
      "Assistant trained on your docs, FAQs and product data",
      "Embedded and styled to match your website",
      "Lead capture and qualification inside the chat",
      "Handover to a human with the full conversation attached"
    ],
    tools: ["OpenAI", "LangChain", "Vector Databases", "Next.js", "Webhooks"],
    idealFor: "Businesses fielding the same customer questions over and over."
  },
  {
    id: "ui-ux-design",
    title: "UI and UX Design",
    headline: "Interfaces That Feel Obvious the First Time Someone Uses Them.",
    description: "User flows, wireframes, clickable prototypes and polished interface design for websites, apps and dashboards, handed over as a design system your developers can build from.",
    solves: "Stops products from shipping with confusing screens and inconsistent layouts that cost you signups and support time.",
    icon: Palette,
    features: [
      "User research, flows and wireframes",
      "Clickable prototypes to test before building",
      "High fidelity interface design for web and mobile",
      "Reusable design system and component library"
    ],
    tools: ["Figma", "FigJam", "Tailwind CSS", "shadcn/ui", "Storybook"],
    idealFor: "Teams starting a new product, or fixing one that users find hard to use."
  },
  {
    id: "crm-automation",
    title: "CRM & Lead Automation",
    headline: "Never Let a Warm Lead Slip Through the Cracks Again.",
    description: "End to end lead capture, enrichment, scoring, follow up and pipeline updates.",
    solves: "Fixes slow lead response times and inaccurate CRM data caused by salespeople forgetting to log activities.",
    icon: Users,
    features: [
      "Instant follow ups across email, SMS and WhatsApp",
      "Automated lead scoring based on ICP",
      "Data enrichment via APIs (Clearbit, Apollo)",
      "Automated pipeline stage updates"
    ],
    tools: ["HubSpot", "Salesforce", "Pipedrive", "n8n", "Make"],
    idealFor: "Sales teams losing deals due to slow follow ups."
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    headline: "Get Live Insights Without the Manual Spreadsheet Work.",
    description: "Custom dashboards, automated reports and weekly performance summaries, built as a standalone web app or inside the tools you already use.",
    solves: "Frees up the hours spent every Friday pulling data from five different tools to build a progress report.",
    icon: BarChart3,
    features: [
      "Automated weekly PDF/Slack summaries",
      "Live dashboards that update themselves",
      "KPI tracking and anomaly alerts",
      "Data visualization across every platform"
    ],
    tools: ["Power BI", "Looker Studio", "Python", "Make"],
    idealFor: "Founders and executives who need data without the manual work."
  },
  {
    id: "email-support",
    title: "Email & Support Automation",
    headline: "Transform Overwhelmed Inboxes Into Organized Workflows.",
    description: "Email triage, ticket summaries, drafted replies and customer support assistants.",
    solves: "Reduces ticket resolution time and prevents important client emails from getting lost in the noise.",
    icon: Mail,
    features: [
      "Automatic inbox categorization",
      "Sentiment analysis routing",
      "Drafted replies that understand the context",
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
      "Two way database syncing",
      "Legacy system modernization",
      "Secure webhook implementation"
    ],
    tools: ["PostgreSQL", "Supabase", "FastAPI", "Docker", "AWS"],
    idealFor: "Companies with scattered data across multiple platforms."
  },
  {
    id: "ongoing-support",
    title: "Ongoing Support & Optimization",
    headline: "Keep Your Software and Automations Running Smoothly 24/7.",
    description: "Monitoring, maintenance, new features and continuous optimization for the websites, apps and automations we build.",
    solves: "Provides peace of mind that if an API changes or an edge case occurs, an engineer is already fixing it.",
    icon: Wrench,
    features: [
      "Proactive error monitoring",
      "Workflow scaling and adjustments",
      "Monthly performance review calls",
      "System upgrades and security patches"
    ],
    tools: ["Datadog", "Sentry", "Azure DevOps", "GitHub Actions"],
    idealFor: "Businesses that want a reliable long term technology partner."
  }
];
