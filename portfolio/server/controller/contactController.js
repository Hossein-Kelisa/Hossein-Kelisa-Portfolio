import Message from "../models/messages.js";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log(
      `✅ Message saved to DB: ${newMessage.name} <${newMessage.email}>`
    );

    // Send email using Resend
    const response = await resend.emails.send({
      from: "📩 Portfolio Contact <onboarding@resend.dev>",
      to: process.env.MY_EMAIL,
      subject: "New message from your portfolio 🚀",
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<div style="font-family: Arial, sans-serif; padding: 20px;">
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Message:</strong><br/>
        <div style="margin-top:10px; padding:10px; background:#f0f0f0; border-radius:5px; border:1px solid #cffb58ff;">
          ${message}
        </div>
      </div>`,
    });
    // Only log the result of the email
    if (response.error) {
      console.log("❌ Email failed:", response.error);
    } else {
      console.log("✅ Email sent successfully:", response.id);
    }

    res.json({ success: true, message: "Message received!" });
  } catch (error) {
    console.log(" ❌ Error inside sendMessage:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
