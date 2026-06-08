import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ConsultationRequest = {
  name?: string;
  email?: string;
  phone?: string;
  preferredContact?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: string) {
  return value.trim().slice(0, 1000);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConsultationRequest;

    const name = sanitize(body.name || "");
    const email = sanitize(body.email || "");
    const phone = sanitize(body.phone || "");
    const preferredContact = sanitize(body.preferredContact || "");
    const message = sanitize(body.message || "");

    if (!name || !email || !phone || !preferredContact || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.CONSULTATION_TO_EMAIL) {
      return Response.json(
        { error: "Consultation recipient email is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.CONSULTATION_FROM_EMAIL) {
      return Response.json(
        { error: "Consultation sender email is not configured." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.CONSULTATION_FROM_EMAIL,
      to: process.env.CONSULTATION_TO_EMAIL,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Consultation Request</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>

          <h3>Message</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      return Response.json(
        { error: "Unable to send the consultation request." },
        { status: 500 }
      );
    }

    return Response.json(
      { message: "Consultation request sent successfully." },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}