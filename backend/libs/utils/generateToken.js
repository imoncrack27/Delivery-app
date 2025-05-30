import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, //Prevents XSS attacks cross-site scripting attacks

    // TODO: Set secure to true in production
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};
