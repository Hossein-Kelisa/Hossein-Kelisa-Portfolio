const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://hosseinkelisa.com",
    "https://www.hosseinkelisa.com",
    "https://hossein-kelisa.netlify.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

export default corsOptions;