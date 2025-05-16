export const dummyMenu = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and cheese",
    price: 250,
  },
  {
    id: 2,
    name: "Spicy Chicken Wings",
    description: "Crispy wings tossed in our signature hot sauce",
    price: 180,
  },
  {
    id: 3,
    name: "Veggie Wrap",
    description: "Grilled veggies with hummus in a soft tortilla",
    price: 200,
  },
];

export const dummyOrders = [
  {
    id: 101,
    customer: "Alice",
    items: ["Classic Burger", "Spicy Chicken Wings"],
    total: 430,
    status: "pending",
  },
  {
    id: 102,
    customer: "Bob",
    items: ["Veggie Wrap"],
    total: 200,
    status: "accepted",
  },
];
