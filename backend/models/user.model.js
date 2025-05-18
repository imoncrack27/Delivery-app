// server/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["customer", "restaurant", "admin"],
      default: "customer",
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const User = mongoose.model("User", userSchema);

export default User;
