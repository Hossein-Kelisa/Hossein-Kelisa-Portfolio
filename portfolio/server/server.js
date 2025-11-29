import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import connectDB from "./config/db.js";
import corsOption from "./config/corsOptions.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors(corsOption));
app.use(express.json());
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
