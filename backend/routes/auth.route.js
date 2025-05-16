// server/routes/authRoutes.js
import express from "express";
import {
  register,
  login,
  getMe,
  logout,
} from "../controllers/auth.controller.js";
import { protectRoute, restaurantOnly } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);
// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);

//test routes
router.get(
  "/me",
  (protectRoute,
  (req, res) => {
    res.status(200).json({ message: `Welcome, user ID: ${req.user.id}` });
  })
);

router.get("/restaurant-only", protectRoute, restaurantOnly, (req, res) => {
  res.status(200).json({ message: "This is a restaurant-only route" });
});

export default router;
