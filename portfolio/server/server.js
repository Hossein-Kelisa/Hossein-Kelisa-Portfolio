import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import process from "process";
import contactRoutes from "./routes/contact.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors({ origin: "http://localhost:3000" })); /// i have to separate this file with all the routes
app.use(express.json());
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
