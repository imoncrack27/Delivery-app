import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectMongoDB from "./db/connectMongoDB.js";

import authRoutes from "./routes/auth.route.js";
import menuRoutes from "./routes/menu.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT isn't set

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use(cookieParser()); // to parse cookies

//Route Middleware
app.use("/api/auth", authRoutes); // Use auth routes for authentication-related endpoints
app.use("/api/menu", menuRoutes); // Use menu routes for menu-related endpoints

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
