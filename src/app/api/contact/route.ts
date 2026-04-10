import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ---------------------------------------------------------------------------
// In-memory rate limiter (sliding window)
// Allows 5 submissions per IP per 15 minutes.
// Works fine for a portfolio site. No external service required.
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  const timestamps = (rateLimitMap.get(ip) ?? []).filter(
    (t) => t > windowStart,
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    return false; // not allowed
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true; // allowed
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  const name = data.name?.trim() || "";
  const email = data.email?.trim() || "";
  const message = data.message?.trim() || "";

  if (name.length === 0) {
    errors.name = "Name is required";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (name.length > 100) {
    errors.name = "Name must not exceed 100 characters";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address";
  } else if (email.length > 255) {
    errors.email = "Email must not exceed 255 characters";
  }

  if (message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (message.length > 5000) {
    errors.message = "Message must not exceed 5000 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    // Reject non-JSON bodies early to avoid an opaque SyntaxError in the catch.
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Content-Type must be application/json." },
        { status: 415 },
      );
    }

    // Environment validation
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not defined");
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 503 },
      );
    }

    // Rate limiting — in-memory sliding window (5 requests / 15 min per IP)
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again in 15 minutes.",
        },
        { status: 429 },
      );
    }

    const body: ContactFormData = await request.json();

    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid input",
          errors: validation.errors,
        },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(body.name.trim());
    const safeEmail = escapeHtml(body.email.trim());
    const safeMessage = escapeHtml(body.message.trim());

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rushibutani@gmail.com",
      replyTo: body.email.trim(),
      subject: `Portfolio Contact from ${body.name.trim()}`,
      html: `
   <div style="background-color:#f3f4f6;padding:40px 0;">
    <div style="
      max-width:600px;
      margin:0 auto;
      background:#ffffff;
      border-radius:12px;
      overflow:hidden;
      font-family:Arial,Helvetica,sans-serif;
      box-shadow:0 10px 25px rgba(0,0,0,0.05);
    ">

      <div style="
        background:#6366f1;
        padding:20px 24px;
        color:#ffffff;
      ">
        <h2 style="margin:0;font-size:20px;font-weight:600;">
          New Portfolio Contact
        </h2>
        <p style="margin:4px 0 0;font-size:13px;opacity:0.9;">
          Someone just reached out via your portfolio
        </p>
      </div>

      <div style="padding:24px;">
        <div style="margin-bottom:20px;">
          <p style="margin:0;font-size:14px;color:#6b7280;">
            <strong style="color:#111827;">Name</strong><br />
            ${safeName}
          </p>
        </div>

        <div style="margin-bottom:20px;">
          <p style="margin:0;font-size:14px;color:#6b7280;">
            <strong style="color:#111827;">Email</strong><br />
            <a href="mailto:${safeEmail}" style="color:#6366f1;text-decoration:none;">
              ${safeEmail}
            </a>
          </p>
        </div>

        <div style="margin-bottom:24px;">
          <p style="margin:0 0 6px;font-size:14px;font-weight:600;color:#111827;">
            Message
          </p>
          <div style="
            background:#f9fafb;
            border:1px solid #e5e7eb;
            border-radius:8px;
            padding:14px;
            font-size:14px;
            line-height:1.6;
            color:#374151;
            white-space:pre-wrap;
          ">
            ${safeMessage}
          </div>
        </div>

        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />

        <p style="font-size:12px;color:#9ca3af;margin:0;">
          This message was sent from your portfolio contact form.
        </p>
      </div>

    </div>
  </div>
`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Failed to send message. Please try again or email me directly at rushibutani@gmail.com",
        },
        { status: 500 },
      );
    }

    console.log("Contact form submission received from:", ip);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error && error.message.includes("API key")) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service configuration error. Please try again later.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send message. Please try again or email me directly at rushibutani@gmail.com",
      },
      { status: 500 },
    );
  }
}
