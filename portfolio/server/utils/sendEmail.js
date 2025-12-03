import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ name, email, message, attachments }) => {
  const response = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.MY_EMAIL,
    subject: "Portfolio form submission",
    text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div>
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
    attachments: attachments || [],
  });

  if (response.error) {
    console.log("❌ Email failed:", response.error);
    return { success: false, error: response.error };
  } else {
    console.log("✅ Email sent:", response.id);
    return { success: true, id: response.id };
  }
};
