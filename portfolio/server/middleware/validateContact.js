export const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;

  // Required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format.",
    });
  }

  // File is optional → no validation needed unless you want to check size/type here

  next();
};
