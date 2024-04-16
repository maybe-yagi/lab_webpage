import { NextRequest, NextResponse } from "next/server";
import nodeMailer from "nodemailer";

export async function POST(
  req: NextRequest,
) {
  const body = await req.json();

  const { name, email, message } = body;

  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    secure: false, 
    auth: {
      user: process.env.GMAILUSER, 
      pass: process.env.GMAILPASSWORD, 
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAILUSER,
      subject: `研究室HP閲覧者${name}様からのお問合せ`,
      text: `Message from ${name} (${email}): ${message}`,
    });

    return NextResponse.json({message: "Success!"}, {status: 200, headers: {"Content-Type": "text/plain"}});
  } catch (error) {
    return new NextResponse("Faild...", {status: 500, headers: {"Content-Type": "text/plain"}});
  }
}
