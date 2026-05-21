export type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
};

export const signatureDishes: Dish[] = [
  {
    id: "soto-yum",
    name: "Soto Yum Soup",
    description:
      "Aromatic Thai-inspired broth with lemongrass, galangal, and fresh herbs — warming and deeply flavorful.",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    popular: true,
  },
  {
    id: "wok-noodles",
    name: "Wok Tossed Noodles",
    description:
      "Smoky wok-charred noodles tossed with crisp vegetables and your choice of protein in house sauce.",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    popular: true,
  },
  {
    id: "chicken-ramen",
    name: "Chicken Ramen",
    description:
      "Rich tonkotsu-style broth, tender chicken, soft-boiled egg, nori, and springy ramen noodles.",
    price: "₹349",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    popular: true,
  },
  {
    id: "mie-goreng",
    name: "Mie Goreng",
    description:
      "Indonesian stir-fried noodles with sweet soy, shallots, and a perfect balance of spice and umami.",
    price: "₹279",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80",
  },
  {
    id: "chilli-prawn",
    name: "Singapore Chilli Prawn",
    description:
      "Succulent prawns in a tangy-sweet chilli sauce — a signature Indo-Chinese favorite.",
    price: "₹449",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51f2513a2be?w=800&q=80",
    popular: true,
  },
  {
    id: "burmese-egg",
    name: "Burmese Egg Bhejo",
    description:
      "Traditional Burmese-style eggs with aromatic spices and a rich, comforting gravy.",
    price: "₹199",
    image:
      "https://images.unsplash.com/photo-1589302164678-8265a0ec6f83?w=800&q=80",
  },
  {
    id: "miso-ramen",
    name: "Miso Ramen",
    description:
      "Silky miso broth, marinated tofu or pork, bamboo shoots, and perfectly al dente noodles.",
    price: "₹329",
    image:
      "https://images.unsplash.com/photo-1618841557871-269e3a8e3e5b?w=800&q=80",
    popular: true,
  },
];
