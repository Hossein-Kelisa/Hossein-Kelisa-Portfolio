import Message from "../models/messages.js";
// import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email to you
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // await transporter.sendMail({
    //   from: email,
    //   to: process.env.EMAIL,
    //   subject: "New portfolio message",
    //   text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    // });

    // Send email using Resend
    const response = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.MY_EMAIL,
      subject: "New portfolio message",
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });
    console.log("Resend response:", response);

    res.json({ success: true, message: "Message received!" });
  } catch (error) {
    console.log(" Error inside sendMessage:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
