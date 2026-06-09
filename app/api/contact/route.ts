import { NextResponse } from "next/server";

const recipientEmail = "gunlak2004@gmail.com";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  suburb?: string;
  service?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const enquiry = {
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    suburb: clean(body.suburb),
    service: clean(body.service),
    message: clean(body.message),
  };

  if (!enquiry.name || !enquiry.phone || !enquiry.suburb) {
    return NextResponse.json({ error: "Name, phone and suburb are required." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Greyline Website <onboarding@resend.dev>";

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY. Greyline Landscaping contact enquiry was not emailed.", enquiry);
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 500 });
  }

  const submittedAt = new Date().toLocaleString("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Australia/Melbourne",
  });
  const subject = `New Greyline quote request from ${enquiry.name}`;
  const text = [
    "New Greyline Landscaping quote request",
    "",
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email || "Not supplied"}`,
    `Suburb: ${enquiry.suburb}`,
    `Service: ${enquiry.service || "Not supplied"}`,
    `Submitted: ${submittedAt}`,
    "",
    "Project details:",
    enquiry.message || "Not supplied",
  ].join("\n");
  const html = `
    <h2>New Greyline Landscaping quote request</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(enquiry.name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(enquiry.phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(enquiry.email || "Not supplied")}</td></tr>
      <tr><td><strong>Suburb</strong></td><td>${escapeHtml(enquiry.suburb)}</td></tr>
      <tr><td><strong>Service</strong></td><td>${escapeHtml(enquiry.service || "Not supplied")}</td></tr>
      <tr><td><strong>Submitted</strong></td><td>${escapeHtml(submittedAt)}</td></tr>
    </table>
    <h3>Project details</h3>
    <p style="white-space:pre-line">${escapeHtml(enquiry.message || "Not supplied")}</p>
  `;

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipientEmail],
      reply_to: enquiry.email || undefined,
      subject,
      text,
      html,
    }),
  });

  if (!emailResponse.ok) {
    const errorText = await emailResponse.text();
    console.error("Failed to email Greyline Landscaping contact enquiry", errorText);
    return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
