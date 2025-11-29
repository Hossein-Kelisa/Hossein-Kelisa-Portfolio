const corsOptions = {
  origin: [
    "https://localhost:5173",
    "https://hosseinkelisa.com",
    "https://www.hosseinkelisa.com",
    "https://hossein-kelisa.netlify.app",
    "http://localhost:5173",
    "http://hosseinkelisa.com",
    "http://www.hosseinkelisa.com",
    "http://hossein-kelisa.netlify.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

export default corsOptions;
