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

    let info = await transporter.sendMail(msg);
    return NextResponse.json(
      { msg: "Email envoyez avec success" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ msg: "error" });
  }
  // return NextResponse.json({ data: "ok" });
};
