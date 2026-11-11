import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";

// ---- Simple in-memory rate limiter (per server instance) ----
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function sendEmail(data: ContactInput) {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  const subject = `${data.type === "quote" ? "Quote request" : "New enquiry"} from ${data.name}`;
  const rows: [string, string | undefined][] = [
    ["Type", data.type === "quote" ? "Quote request" : "General enquiry"],
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Company", data.company],
    ["Service", data.service],
    ["Budget", data.budget],
  ];
  const text = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${data.message}`;
  const html = `
    <h2 style="font-family:sans-serif">${escapeHtml(subject)}</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v!)}</strong></td></tr>`)
        .join("")}
    </table>
    <p style="font-family:sans-serif;white-space:pre-wrap;margin-top:16px">${escapeHtml(data.message)}</p>`;

  if (!SMTP_HOST) {
    // No SMTP configured: log the enquiry so nothing is lost during development.
    console.info("[contact] SMTP not configured — enquiry received:\n" + text);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: SMTP_SECURE === "true",
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });

  await transporter.sendMail({
    from: CONTACT_FROM_EMAIL || SMTP_USER || siteConfig.contact.email,
    to: CONTACT_TO_EMAIL || siteConfig.contact.email,
    replyTo: `${data.name} <${data.email}>`,
    subject,
    text,
    html,
  });
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    // Honeypot triggered: pretend success so bots don't retry.
    if (fieldErrors.website) return NextResponse.json({ ok: true });
    return NextResponse.json({ ok: false, error: "Please correct the highlighted fields.", fieldErrors }, { status: 422 });
  }

  try {
    await sendEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to send email", err);
    return NextResponse.json(
      { ok: false, error: `We could not send your message right now. Please email us at ${siteConfig.contact.email}.` },
      { status: 500 },
    );
  }
}
