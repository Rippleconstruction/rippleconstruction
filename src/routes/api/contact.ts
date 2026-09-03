import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 12px;font-weight:600;color:#111827;vertical-align:top;white-space:nowrap;">${label}</td>
      <td style="padding:8px 12px;color:#374151;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
    </tr>`;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "Please check the form fields and try again." }, { status: 400 });
        }
        const data = parsed.data;

        const apiKey = process.env["RESEND_API_KEY"];
        if (!apiKey) {
          console.error("RESEND_API_KEY is not configured");
          return Response.json({ error: "Email service is not configured." }, { status: 500 });
        }

        const html = `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#111827;">New Website Enquiry - Ripple Construction</h2>
            <table style="border-collapse:collapse;width:100%;border:1px solid #e5e7eb;">
              ${row("Name", data.name)}
              ${row("Company", data.company || "—")}
              ${row("Email", data.email)}
              ${row("Phone", data.phone || "—")}
              ${row("Service", data.service || "—")}
              ${row("Project details", data.message)}
            </table>
          </div>`;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Ripple Construction Website <website@rippleconstruction.com.au>",
            to: ["Michael@rippleconstruction.com.au"],
            reply_to: data.email,
            subject: "New Website Enquiry - Ripple Construction",
            html,
          }),
        });

        if (!res.ok) {
          const errorBody = await res.text();
          console.error(`Resend request failed [${res.status}]: ${errorBody}`);
          return Response.json(
            { error: "We couldn't send your enquiry just now. Please try again, or call us directly." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
