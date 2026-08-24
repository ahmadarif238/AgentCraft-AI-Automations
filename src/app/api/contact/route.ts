import { siteConfig } from "@/config/site";

/**
 * Lead capture endpoint.
 *
 * Required environment variables (set these in Vercel > Settings > Environment Variables):
 *   RESEND_API_KEY           – from resend.com/api-keys
 *   LEAD_NOTIFICATION_EMAIL  – the inbox that should receive enquiries
 *
 * Optional:
 *   LEAD_FROM_EMAIL          – a verified sender on your own domain.
 *                              Defaults to Resend's shared onboarding sender,
 *                              which only delivers to the address that owns the
 *                              Resend account. Set this once you have a domain.
 *
 * If the key is missing the endpoint returns 503 rather than pretending to
 * succeed, so a misconfigured deploy is visible instead of silently dropping leads.
 */

const FIELD_LIMITS = {
  name: 120,
  email: 200,
  company: 160,
  budget: 40,
  workflow: 400,
  tools: 300,
  message: 4000,
} as const;

type FieldName = keyof typeof FIELD_LIMITS;

const REQUIRED_FIELDS: FieldName[] = ["name", "email", "workflow", "message"];

// Good enough to catch typos and junk; real validation is the reply landing.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: real users never fill a hidden field. Return 200 so bots don't retry.
  if (typeof payload.company_website === "string" && payload.company_website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const fields = {} as Record<FieldName, string>;
  for (const field of Object.keys(FIELD_LIMITS) as FieldName[]) {
    const raw = payload[field];
    fields[field] = typeof raw === "string" ? raw.trim().slice(0, FIELD_LIMITS[field]) : "";
  }

  const missing = REQUIRED_FIELDS.filter((field) => !fields[field]);
  if (missing.length > 0) {
    return Response.json(
      { error: "Please fill in all required fields.", fields: missing },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(fields.email)) {
    return Response.json(
      { error: "That email address doesn't look right.", fields: ["email"] },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "[contact] Missing RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL — enquiry not delivered.",
    );
    return Response.json(
      {
        error:
          "Our enquiry form is temporarily unavailable. Please reach out directly and we'll reply right away.",
      },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Company", fields.company || "—"],
    ["Budget", fields.budget || "Not specified"],
    ["Wants to automate", fields.workflow],
    ["Current tools", fields.tools || "—"],
  ];

  const html = `
    <h2>New enquiry via ${escapeHtml(siteConfig.name)}</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
    <h3>Message</h3>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(fields.message)}</p>
  `;

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    fields.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEAD_FROM_EMAIL ?? "AgentCraft AI <onboarding@resend.dev>",
        to: [to],
        // Replying in the mail client goes straight back to the prospect.
        reply_to: fields.email,
        subject: `New enquiry: ${fields.name}${fields.company ? ` (${fields.company})` : ""}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[contact] Resend rejected the request:", response.status, detail);
      return Response.json(
        { error: "We couldn't send that just now. Please try again in a moment." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[contact] Failed to reach Resend:", error);
    return Response.json(
      { error: "We couldn't send that just now. Please try again in a moment." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
