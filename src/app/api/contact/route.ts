import { NextResponse } from "next/server";
import { Resend } from "resend";
import { businessConfig } from "@/lib/business-config";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();
  const email = payload.email?.trim();
  const service = payload.service?.trim();
  const message = payload.message?.trim();

  if (!name || !phone || !email || !service || !message) {
    return NextResponse.json(
      { message: "Please complete all form fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.LEAD_EMAIL_TO;
  const emailFrom = process.env.LEAD_EMAIL_FROM;

  if (!resendApiKey || !emailTo || !emailFrom) {
    return NextResponse.json(
      { message: "Missing email configuration. Check your environment variables." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject: `New lead for ${businessConfig.name}: ${service}`,
      text: [
        `Business: ${businessConfig.name}`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New lead for ${escapeHtml(businessConfig.name)}</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Thanks. Your request has been sent successfully.",
    });
  } catch (error) {
    console.error("Resend error", error);
    return NextResponse.json(
      { message: "Unable to send your message right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
