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

// Wake-up route for Render / frontend ping
app.get("/wakeup", (req, res) => {
  res.status(200).send("Backend is awake");
  console.log("Wake-up request received");
});

// Ignore favicon or Vite auto requests
app.get(["/__vite_ping", "/favicon.ico"], (req, res) => {
  return res.status(204).end();
});

// Handle 404 (Not Found)
app.use((req, res, next) => {
  console.log(`404 Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ status: "fail", message: "Route not found" });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal server error",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
