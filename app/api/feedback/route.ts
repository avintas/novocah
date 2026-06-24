import { Resend } from "resend";

type FeedbackPayload = {
  name?: string;
  email?: string;
  phone?: string;
  relationship?: string;
  service?: string;
  message?: string;
  /** Honeypot — should stay empty for real users. */
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: FeedbackPayload;
  try {
    data = (await request.json()) as FeedbackPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (data.company && data.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const phone = data.phone?.trim() ?? "";
  const relationship = data.relationship?.trim() ?? "";
  const service = data.service?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  const fields: Record<string, string> = {};
  if (!name) fields.name = "Please enter your name.";
  if (!email) fields.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) fields.email = "Please enter a valid email.";
  if (!message) fields.message = "Please share your experience.";

  if (Object.keys(fields).length > 0) {
    return Response.json(
      { error: "Please correct the highlighted fields.", fields },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error(
      "Feedback form not configured: missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL.",
    );
    return Response.json(
      {
        error: "We can't accept notes right now. Please call us directly.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Website feedback from ${name}`,
      text: [
        "New feedback submitted from the Testimonials page.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Relationship: ${relationship || "—"}`,
        `Service: ${service || "—"}`,
        "",
        "Experience:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend feedback error:", error);
      return Response.json(
        {
          error:
            "We couldn't send your note. Please try again, or call us directly.",
        },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Resend feedback exception:", err);
    return Response.json(
      {
        error:
          "We couldn't send your note. Please try again, or call us directly.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
