import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const POST = async (req) => {
  const data = await req.json();

  const { email, subject, message } = data;
  try {
    const msg = {
      form: "ryadbenmanser@gmail.com",
      to: "ryadbenmanser@gmail.com",
      subject: `Message from Portfolio || ${subject}`,
      html: `message: ${message} <br/> email: <b> ${email} </b>`,
    };
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    transporter.sendMail(msg, (err, info) => {
      if (err) {
        return NextResponse.json({ msg: "connection refused" });
      } else {
        return NextResponse.json({ msg: "msg sent" });
      }
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ msg: "error" });
  }
  return NextResponse.json({ data: "ok" });
};
