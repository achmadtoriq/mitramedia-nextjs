import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, subject, message } = await request.json();

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    //service: "gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    },
    from: '"Your Name" <no-reply@example.com>'
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: '"Your Name" <no-reply@example.com>',
      to: process.env.GMAIL_FROM,
      subject: subject,
      text: message,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }

}
