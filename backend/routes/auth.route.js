// server/routes/authRoutes.js
import express from "express";
import {
  register,
  login,
  getMe,
  logout,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);
// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);
export default router;
