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
    question: "How is this different from just using ChatGPT or Zapier ourselves?",
    answer:
      "ChatGPT and Zapier are tools; what we deliver is a system. The hard part is not the prompt or the trigger, it is the error handling, the retries, the approval steps, the data validation, and the monitoring that keep a workflow running unattended for months. We build that layer around the tools you already pay for, so the automation still works on the day something upstream changes.",
  },
  {
    scope: "objection",
    question: "What happens if the automation breaks?",
    answer:
      "Every system we ship includes logging, failure alerts, and a documented manual fallback, so a broken run surfaces immediately instead of failing silently. Sprints include a support period after handover, and our monthly partner package covers ongoing monitoring, fixes, and improvements.",
  },
  {
    scope: "objection",
    question: "How much does an automation project cost?",
    answer:
      "The audit is free. Beyond that, cost is driven by how many systems we have to integrate, how clean your data is, and how much human approval the workflow needs. We scope and quote a fixed price before any build starts, so there are no open-ended hourly bills. See our pricing page for package details.",
  },
  {
    scope: "objection",
    question: "Do we need to replace our current tools?",
    answer:
      "No. We connect to what you already use via APIs — CRMs, spreadsheets, databases, email, and SaaS tools — rather than asking you to migrate. Ripping and replacing core systems is usually the most expensive and riskiest way to automate.",
  },
  {
    scope: "objection",
    question: "Is our business data secure?",
    answer:
      "We design for least privilege: scoped API credentials, no unnecessary copies of your data, and human-in-the-loop approval on any step that sends something externally or changes a record that matters. Where a workflow does need to retain data, we agree on what and for how long before we build it.",
  },
  {
    scope: "process",
    question: "What happens after I send an enquiry?",
    answer: `We review your current setup and reply ${siteConfig.responseTime} to arrange a free 30-minute discovery call. There is no obligation and no sales sequence — the call is to work out whether automation is actually worth it for your workflow.`,
  },
  {
    scope: "process",
    question: "How long does an automation project take?",
    answer:
      "Most single-workflow sprints run one to two weeks from kickoff to handover. Custom AI agents typically take three to six weeks, depending on the complexity of your data sources and integrations.",
  },
  {
    scope: "process",
    question: "Can you work with our existing tools?",
    answer:
      "Yes. We specialize in connecting existing CRMs, databases, and SaaS tools via APIs without replacing your core systems.",
  },
  {
    scope: "process",
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Our monthly partner package covers proactive monitoring, maintenance, continuous optimization, and new automation work as your operations change.",
  },
];

export const objectionFaqs = faqs.filter((faq) => faq.scope === "objection");
export const processFaqs = faqs.filter((faq) => faq.scope === "process");
