import { NextResponse } from "next/server";
//import { Resend } from "resend";
//import { ContactEmailTemplate } from "@/components/contact-email-template";

//const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);
  try {
    const userEmail = email as string;
    // const emailData = await resend.emails.send({
    //   from: 'MyFitHub <security@myfithub.ca>',
    //   to: userEmail,
    //   subject: "MyFitHub Password Reset Request",
    //   react: ForgotPasswordEmailTemplate({ name: existingUser.name as string, token: token.token }) as React.ReactElement,
    // });
    return NextResponse.json({ data: "success" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
