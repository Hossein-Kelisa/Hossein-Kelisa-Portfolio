import Message from "../models/messages.js";
import dotenv from "dotenv";
import { uploadToS3 } from "../utils/uploadToS3.js";
import { getObjectBuffer } from "../utils/getObjectBuffer.js";
import { sendEmail } from "../utils/sendEmail.js";

dotenv.config();

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1) Upload file (if provided)
    const attachmentUrl = req.file ? await uploadToS3(req.file) : null;

    // 2) Save to DB
    const newMessage = await Message.create({
      name,
      email,
      message,
      attachment: attachmentUrl,
    });

    console.log(`✅ Message saved to DB: ${newMessage.email}`);

    // 3) Prepare attachment buffer
    let attachmentsList = [];

    if (attachmentUrl) {
      const key = attachmentUrl.split(".amazonaws.com/")[1];
      const buffer = await getObjectBuffer(key);

      attachmentsList.push({
        filename: req.file.originalname,
        content: buffer.toString("base64"),
      });
    }

    // 4) Send email
    await sendEmail({
      name,
      email,
      message,
      attachments: attachmentsList,
    });

    res.json({ success: true, message: "Message received!" });
  } catch (error) {
    console.log("❌ Error inside sendMessage:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
