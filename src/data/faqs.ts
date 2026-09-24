import { siteConfig } from "@/config/site";

export interface Faq {
  question: string;
  answer: string;
  /**
   * Objection-handling questions belong early in the funnel, on the homepage.
   * Process questions belong on the contact page, where they answer
   * "what happens if I send this".
   */
  scope: "objection" | "process";
}

export const faqs: Faq[] = [
  {
    scope: "objection",
    question: "Do you only do AI, or do you build websites and apps too?",
    answer:
      "We do both. We design and build websites, web applications, mobile apps, SaaS products, dashboards and internal tools, and we build AI agents, RAG knowledge assistants, chatbots and workflow automation. Many projects combine the two, for example a customer portal with an AI assistant inside it, or a booking app that follows up with leads automatically.",
  },
  {
    scope: "objection",
    question: "Do you build mobile apps for iOS and Android?",
    answer:
      "Yes. We build cross platform mobile apps with React Native and Expo, or Flutter where it suits the project better, so one codebase ships to both iOS and Android. That includes the backend, sign in, payments, push notifications, and the release to the App Store and Google Play.",
  },
  {
    scope: "objection",
    question: "Can you add AI to a website or app we already have?",
    answer:
      "Yes. We can add an AI assistant, smart search over your own content, document processing or automated workflows to an existing product through its API or codebase, without rebuilding it. We review what you have first and tell you plainly where AI will help and where it will not.",
  },
  {
    scope: "objection",
    question: "How is this different from just using ChatGPT or Zapier ourselves?",
    answer:
      "ChatGPT and Zapier are tools; what we deliver is a system. The hard part is not the prompt or the trigger, it is the error handling, the retries, the approval steps, the data validation and the monitoring that keep a workflow running unattended for months. We build that layer around the tools you already pay for, so the automation still works on the day something upstream changes.",
  },
  {
    scope: "objection",
    question: "What happens if something breaks?",
    answer:
      "Every system we ship includes logging, failure alerts and a documented fallback, so a problem surfaces immediately instead of failing silently. Every project includes a support period after handover, and our monthly partner package covers ongoing monitoring, fixes and improvements.",
  },
  {
    scope: "objection",
    question: "How much does a project cost?",
    answer:
      "The consultation is free. Websites and web apps start from set tiers, and larger builds are driven by scope: how many features and screens, how many systems we integrate, how clean your data is, and how much human approval a workflow needs. We scope and quote a fixed price before any build starts, so there are no open ended hourly bills. See our pricing page for package details.",
  },
  {
    scope: "objection",
    question: "Do we need to replace our current tools?",
    answer:
      "No. We connect to what you already use through APIs, whether that is a CRM, spreadsheets, databases, email or other SaaS tools, rather than asking you to migrate. Ripping out and replacing core systems is usually the most expensive and riskiest route.",
  },
  {
    scope: "objection",
    question: "Is our business data secure?",
    answer:
      "We design for least privilege: scoped API credentials, no unnecessary copies of your data, and human in the loop approval on any step that sends something externally or changes a record that matters. Where a system does need to retain data, we agree on what and for how long before we build it.",
  },
  {
    scope: "process",
    question: "What happens after I send an enquiry?",
    answer: `We review what you sent and reply ${siteConfig.responseTime} to arrange a free 30 minute discovery call. There is no obligation and no sales sequence. The call is to work out what you need, whether that is a website, an app, an AI agent or an automation, and whether it is worth building.`,
  },
  {
    scope: "process",
    question: "How long does a project take?",
    answer:
      "Most single workflow automation sprints run one to two weeks from kickoff to handover. Websites typically take two to four weeks, and custom AI agents three to six weeks. Web apps, mobile apps and SaaS products depend on scope and are planned in milestones, so you see working software every week or two.",
  },
  {
    scope: "process",
    question: "What technology do you build with?",
    answer:
      "For websites and web apps we mostly use Next.js, React, TypeScript and Tailwind CSS, with FastAPI or Node.js, PostgreSQL and Supabase on the backend. Mobile apps use React Native, Expo or Flutter. AI work uses LangGraph, LangChain, OpenAI and Anthropic models with vector databases, and automation runs on n8n, Make, Zapier or custom code. You own all of the code.",
  },
  {
    scope: "process",
    question: "Can you work with our existing tools?",
    answer:
      "Yes. We specialize in connecting existing CRMs, databases and SaaS tools through APIs without replacing your core systems.",
  },
  {
    scope: "process",
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Our monthly partner package covers proactive monitoring, maintenance, continuous optimization, and new features or automation as your business changes.",
  },
];

export const objectionFaqs = faqs.filter((faq) => faq.scope === "objection");
export const processFaqs = faqs.filter((faq) => faq.scope === "process");
