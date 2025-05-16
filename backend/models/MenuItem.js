import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    imageUrl: String, // Optional for now
  },
  { timestamps: true }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
