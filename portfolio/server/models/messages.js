import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    fileUrl: { type: String, default: null }, // optional (for form with file)
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
