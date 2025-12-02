import Message from "../models/messages.js";
import { Resend } from "resend";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { s3 } from "../config/s3.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getObjectBuffer } from "../utils/s3Upload.js";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Upload file to S3 if exists
    let attachmentUrl = null;
    if (req.file) {
      const key = `forms/${Date.now()}-${uuidv4()}-${req.file.originalname.replace(
        /\s+/g,
        "_"
      )}`;

      const putParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      };

      await s3.send(new PutObjectCommand(putParams));

      attachmentUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    }

    // Step 2: Save in database
    const newMessage = await Message.create({
      name,
      email,
      message,
      attachment: attachmentUrl,
    });

    console.log(`✅ Message saved to DB: ${newMessage.email}`);

    // Step 3: Prepare attachment for email
    let attachmentsList = [];

    if (attachmentUrl) {
      const key = attachmentUrl.split(".amazonaws.com/")[1];
      console.log("🔑 S3 Key:", key);

      // const command = new GetObjectCommand({
      //   Bucket: process.env.S3_BUCKET_NAME,
      //   Key: key,
      // });

      // const file = await s3.send(command);

      // const fileBuffer = await file.Body.transformToByteArray();

      const fileBuffer = await getObjectBuffer(key);

      attachmentsList.push({
        filename: req.file.originalname,
        content: Buffer.from(fileBuffer).toString("base64"),
      });

      console.log("📎 Attachment loaded from S3 (private)");
    }

    // Step 4: Send email via Resend
    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.MY_EMAIL,
      subject: "Portfolio form submission",
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
    <div>
      <strong>Name:</strong> ${name}<br/>
      <strong>Email:</strong> ${email}<br/>
      <p style="white-space: pre-wrap; background: #f4f4f4; padding: 10px; border: 1px solid #ddd; border-radius: 5px; font-family: monospace;">${message}</p>
    </div>
  `,
      attachments: attachmentsList,
    });

    if (response.error) {
      console.log("❌ Email failed:", response.error);
    } else {
      console.log("✅ Email sent successfully:", response.id);
    }

    res.json({ success: true, message: "Message received!" });
  } catch (error) {
    console.log("❌ Error inside sendMessage:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
