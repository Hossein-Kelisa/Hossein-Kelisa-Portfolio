import { s3 } from "../config/s3.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import path from "path";

export const uploadToS3 = async (file) => {
  // Get extension safely (.pdf, .jpg, etc.)
  const ext = path.extname(file.originalname).toLowerCase();

  // Create a fully safe filename (no user input)
  const key = `forms/${Date.now()}-${uuidv4()}${ext}`;

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    await s3.send(new PutObjectCommand(params));
  } catch (err) {
    throw new Error(
      `Failed to upload file "${file.originalname}" to S3: ${err.message}`
    );
  }

  return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
};
