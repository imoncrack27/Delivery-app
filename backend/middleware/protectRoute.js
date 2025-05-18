import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    console.log("Incoming cookies:", req.cookies); // LINE 1

    const token =
      req.cookies?.jwt ||
      (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
        ? req.headers.authorization.split(" ")[1]
        : null);
    console.log("Token received:", token);
    if (!token) {
      console.log("No JWT token found in cookies."); // LINE 2
      return res.status(401).json({ error: "Unauthorized: No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // LINE 3

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    }
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      console.log("No user found with ID:", decoded.userId); // LINE 4
      return res.status(404).json({ error: " User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Optional: Only allow restaurant role
// export const restaurantOnly = (req, res, next) => {
//   if (req.user?.role !== "restaurant") {
//     return res
//       .status(403)
//       .json({ message: "Forbidden: Restaurant access only" });
//   }
//   next();
// };
