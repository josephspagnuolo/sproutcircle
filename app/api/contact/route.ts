import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'Emails <onboarding@resend.dev>',
      to: 'sproutcirclegames@gmail.com',
      subject: "Contact Form Submission",
      react: ContactEmailTemplate({ name, email, message }) as React.ReactElement,
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
