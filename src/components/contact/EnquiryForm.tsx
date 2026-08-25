"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const INPUT_CLASS =
  "w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent";

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setError(null);

    // Object.fromEntries relies on every field having a name attribute.
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setError("We couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-foreground">Enquiry sent.</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out — we&apos;ll reply {siteConfig.responseTime}.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name <span className="text-primary-strong">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" maxLength={120} className={INPUT_CLASS} placeholder="Jane Doe" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-primary-strong">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" maxLength={200} className={INPUT_CLASS} placeholder="jane@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">Company</label>
          <input id="company" name="company" autoComplete="organization" maxLength={160} className={INPUT_CLASS} placeholder="Company name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium text-foreground">Budget range</label>
          <select id="budget" name="budget" className={INPUT_CLASS} defaultValue="">
            <option value="">Select budget...</option>
            <option value="Under $5k">Under $5k</option>
            <option value="$5k - $10k">$5k &ndash; $10k</option>
            <option value="$10k - $25k">$10k &ndash; $25k</option>
            <option value="$25k+">$25k+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="workflow" className="text-sm font-medium text-foreground">
          What do you want to automate? <span className="text-primary-strong">*</span>
        </label>
        <input id="workflow" name="workflow" required maxLength={400} className={INPUT_CLASS} placeholder="e.g. Lead follow-up, document processing..." />
      </div>

      <div className="space-y-2">
        <label htmlFor="tools" className="text-sm font-medium text-foreground">Current tools you use</label>
        <input id="tools" name="tools" maxLength={300} className={INPUT_CLASS} placeholder="e.g. HubSpot, Gmail, Slack..." />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-primary-strong">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={4000}
          className="w-full min-h-[120px] p-3 rounded-md border border-input bg-background text-sm text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder="Tell us about your operational bottlenecks..."
        />
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p role="alert" className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md p-3">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="gold"
        className="w-full shadow-[0_0_15px_rgba(173,255,47,0.15)] hover:shadow-[0_0_20px_rgba(173,255,47,0.3)] transition-all"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "Send enquiry"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We reply {siteConfig.responseTime}. No sales sequences, no shared data.
      </p>
    </form>
  );
}
