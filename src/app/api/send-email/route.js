import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { nama, email, subject, message } = await request.json();

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      // user: 'ahfan2016@gmail.com',
      // pass: 'yciiobvkpiegupsr',

      // qqlnxzgkirfxdvkd -> afandi.achmadtoriq@gmail.com
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      sender: `"${nama} - ${email}" <${email}>`,
      to: 'thoriqahmad17@gmail.com',
      subject: subject,
      text: `Email from: ${email} \n Message: ${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }

}
