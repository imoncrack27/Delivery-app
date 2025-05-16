import MenuItem from "../models/MenuItem.js";

// Get all menu items for a restaurant
export const getMenu = async (req, res) => {
  try {
    const items = await MenuItem.find({ restaurantId: req.user.id });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.log("Error in get menu controller:", error.message);
  }
};

// Create new menu item
export const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required." });
    }

    const newItem = new MenuItem({
      restaurantId: req.user.id,
      name,
      description,
      price,
      imageUrl,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.log("Error in create menu controller:", error.message);
  }
};

// Update menu item
export const updateMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);

    if (!item || item.restaurantId.toString() !== req.user.id) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    Object.assign(item, req.body);
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.log("Error in update menu controller:", error.message);
  }
};

// Delete menu item
export const deleteMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);

    if (!item || item.restaurantId.toString() !== req.user.id) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    await item.deleteOne();
    res.json({ message: "Menu item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.log("Error in delete menu controller:", error.message);
  }
};
