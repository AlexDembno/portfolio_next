import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();

  const { EMAIL_PASSWORD, EMAIL_FROM } = process.env;

  const transporter = nodemailer.createTransport({
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_FROM,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: EMAIL_FROM,
    to: "dembnoveckii@gmail.com",
    subject: "Letter from customer",
    text: `This is email data: ${JSON.stringify(data, null, 2)}`,
    html: `<p>This is email data:</p><pre>${JSON.stringify(
      data,
      null,
      2
    )}</pre>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Email failed", { status: 500 });
  }
}
