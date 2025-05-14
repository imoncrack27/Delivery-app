// server/controllers/authController.js
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../libs/utils/generateToken.js";

// Register
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    // Check if user exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ error: "name already exists" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail)
      return res.status(400).json({ message: "email already exists" });

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser.id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
    console.log("Error in signup controller:", err.message);
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect)
      return res.status(400).json({ error: "Invalid credentials" });

    generateTokenAndSetCookie(user.id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
    console.log("Error in login controller:", err.message);
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getMe controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
