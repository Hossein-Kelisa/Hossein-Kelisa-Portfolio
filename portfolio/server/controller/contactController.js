import Message from "../models/messages.js";
import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email to you
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "New portfolio message",
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.json({ success: true, message: "Message received!" });
  } catch (error) {
    console.log(" Error inside sendMessage:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
