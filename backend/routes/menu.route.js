import express from "express";
import {
  getMenu,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../controllers/menu.controller.js";

//import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

//router.use(protectRoute /*restaurantOnly*/);

router.get("/", getMenu);
router.post("/", createMenuItem);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);

export default router;
