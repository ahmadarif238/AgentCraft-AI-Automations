"use client";

import { FileText, Clock, Database, MessageSquare, Search, FileBarChart } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Repetitive Admin Tasks",
    description: "Your team spends hours copying data, sending follow-ups, and managing spreadsheets instead of high-value work.",
  },
  {
    icon: MessageSquare,
    title: "Slow Lead Follow-up",
    description: "Inquiries sit in your inbox while prospects lose interest. Opportunities slip through the cracks.",
  },
  {
    icon: FileText,
    title: "Manual CRM Updates",
    description: "Sales and service teams are forced to manually log every email, call, and status change.",
  },
  {
    icon: Database,
    title: "Scattered Tools & Data",
    description: "Information lives in silos across CRMs, email, and documents, requiring manual context switching.",
  },
  {
    icon: Search,
    title: "Time-Consuming Document Search",
    description: "Employees waste hours looking through drives and past emails to find standard operating procedures or past contracts.",
  },
  {
    icon: FileBarChart,
    title: "Manual Weekly Reports",
    description: "Pulling data from 5 different tools just to build a simple weekly progress report.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Manual Work Is Quietly <br className="hidden md:block" /> Slowing Your Business Down.
          </h2>
          <p className="text-muted-foreground/80 text-lg">
            Every hour spent on a repetitive task is an hour stolen from growth, strategy, and client delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-card/5 border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground/80 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
