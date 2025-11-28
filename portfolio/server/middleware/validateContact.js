export const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email address" });
  }

  next();
};
