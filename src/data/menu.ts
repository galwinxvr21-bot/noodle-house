export type MenuCategory =
  | "soups"
  | "ramen"
  | "noodles"
  | "rice"
  | "appetizers"
  | "seafood"
  | "vegetarian"
  | "desserts"
  | "beverages";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "soups", label: "Soups" },
  { id: "ramen", label: "Ramen" },
  { id: "noodles", label: "Noodles" },
  { id: "rice", label: "Rice" },
  { id: "appetizers", label: "Appetizers" },
  { id: "seafood", label: "Seafood" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "desserts", label: "Desserts" },
  { id: "beverages", label: "Beverages" },
];

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  soups: [
    {
      name: "Soto Yum Soup",
      description: "Thai lemongrass broth with herbs",
      price: "₹249",
      tag: "Bestseller",
    },
    {
      name: "Tom Yum Soup",
      description: "Spicy-sour classic with prawns",
      price: "₹279",
    },
    {
      name: "Miso Soup",
      description: "Light Japanese miso with tofu",
      price: "₹149",
    },
    {
      name: "Hot & Sour Soup",
      description: "Indo-Chinese comfort bowl",
      price: "₹179",
    },
  ],
  ramen: [
    {
      name: "Chicken Ramen",
      description: "Tonkotsu-style with soft egg",
      price: "₹349",
      tag: "Popular",
    },
    {
      name: "Miso Ramen",
      description: "Rich miso broth, bamboo shoots",
      price: "₹329",
      tag: "Popular",
    },
    {
      name: "Spicy Tan Tan Ramen",
      description: "Sesame chilli pork broth",
      price: "₹369",
    },
    {
      name: "Vegetable Ramen",
      description: "Kombu dashi, seasonal greens",
      price: "₹299",
    },
  ],
  noodles: [
    {
      name: "Wok Tossed Noodles",
      description: "Smoky wok-fired house special",
      price: "₹299",
      tag: "Chef's Pick",
    },
    {
      name: "Mie Goreng",
      description: "Indonesian sweet soy stir-fry",
      price: "₹279",
    },
    {
      name: "Pad Thai",
      description: "Tamarind rice noodles, peanuts",
      price: "₹289",
    },
    {
      name: "Hakka Noodles",
      description: "Indo-Chinese street-style",
      price: "₹259",
    },
  ],
  rice: [
    {
      name: "Nasi Goreng",
      description: "Indonesian fried rice, sambal",
      price: "₹269",
    },
    {
      name: "Thai Fried Rice",
      description: "Basil, jasmine rice, egg",
      price: "₹249",
    },
    {
      name: "Japanese Fried Rice",
      description: "Butter soy with vegetables",
      price: "₹239",
    },
    {
      name: "Steamed Jasmine Rice",
      description: "Fragrant side portion",
      price: "₹99",
    },
  ],
  appetizers: [
    {
      name: "Spring Rolls (4 pcs)",
      description: "Crispy vegetable rolls",
      price: "₹179",
    },
    {
      name: "Gyoza (6 pcs)",
      description: "Pan-seared pork dumplings",
      price: "₹219",
    },
    {
      name: "Satay Chicken",
      description: "Peanut sauce skewers",
      price: "₹249",
    },
    {
      name: "Edamame",
      description: "Steamed with sea salt",
      price: "₹149",
    },
  ],
  seafood: [
    {
      name: "Singapore Chilli Prawn",
      description: "Sweet-spicy signature",
      price: "₹449",
      tag: "Must Try",
    },
    {
      name: "Grilled Fish Teriyaki",
      description: "Glazed fillet, sesame",
      price: "₹399",
    },
    {
      name: "Salt & Pepper Squid",
      description: "Crispy Indo-Chinese style",
      price: "₹329",
    },
    {
      name: "Prawn Fried Rice",
      description: "Wok-fried with garlic",
      price: "₹319",
    },
  ],
  vegetarian: [
    {
      name: "Burmese Egg Bhejo",
      description: "Spiced egg curry tradition",
      price: "₹199",
    },
    {
      name: "Tofu Teriyaki Bowl",
      description: "Grilled tofu, rice, greens",
      price: "₹279",
    },
    {
      name: "Vegetable Dumplings",
      description: "Steamed, chilli oil dip",
      price: "₹189",
    },
    {
      name: "Green Curry (Veg)",
      description: "Thai coconut curry, rice",
      price: "₹269",
    },
  ],
  desserts: [
    {
      name: "Mango Sticky Rice",
      description: "Thai classic, coconut cream",
      price: "₹199",
    },
    {
      name: "Mochi Ice Cream",
      description: "Assorted flavors (3 pcs)",
      price: "₹179",
    },
    {
      name: "Honey Toast",
      description: "Japanese café style",
      price: "₹219",
    },
    {
      name: "Gulab Jamun Cheesecake",
      description: "Fusion Indo-Asian dessert",
      price: "₹189",
    },
  ],
  beverages: [
    {
      name: "Thai Iced Tea",
      description: "Creamy orange-spiced tea",
      price: "₹129",
    },
    {
      name: "Matcha Latte",
      description: "Stone-ground green tea",
      price: "₹149",
    },
    {
      name: "Fresh Lime Soda",
      description: "Sweet or salted",
      price: "₹89",
    },
    {
      name: "Japanese Cold Brew",
      description: "Smooth iced coffee",
      price: "₹139",
    },
  ],
};
