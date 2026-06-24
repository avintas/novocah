import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  /** Honeypot field — should always be empty for real users. */
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "company" field. Pretend success, send nothing.
  if (data.company && data.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const phone = data.phone?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  const fields: Record<string, string> = {};
  if (!name) fields.name = "Please enter your name.";
  if (!email) fields.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) fields.email = "Please enter a valid email.";
  if (!message) fields.message = "Please enter a message.";

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
      "Contact form not configured: missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL.",
    );
    return Response.json(
      {
        error:
          "The contact form isn't available right now. Please call or email us directly.",
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
      subject: `New website inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend send error:", error);
      return Response.json(
        {
          error:
            "We couldn't send your message. Please try again, or call us directly.",
        },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Resend exception:", err);
    return Response.json(
      {
        error:
          "We couldn't send your message. Please try again, or call us directly.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
