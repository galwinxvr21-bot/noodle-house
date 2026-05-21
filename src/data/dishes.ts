import { foodImages, HERO_IMAGE } from "@/lib/images";

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  /** Crop focal point when using the hero spread image */
  objectPosition?: string;
  popular?: boolean;
};

export const signatureDishes: Dish[] = [
  {
    id: "soto-yum",
    name: "Soto Yum Soup",
    description:
      "Aromatic Thai-inspired broth with lemongrass, galangal, and fresh herbs — warming and deeply flavorful.",
    price: "₹249",
    image: foodImages.soup,
    popular: true,
  },
  {
    id: "wok-noodles",
    name: "Wok Tossed Noodles",
    description:
      "Smoky wok-charred noodles tossed with crisp vegetables and your choice of protein in house sauce.",
    price: "₹299",
    image: HERO_IMAGE,
    objectPosition: "88% 72%",
    popular: true,
  },
  {
    id: "chicken-ramen",
    name: "Chicken Ramen",
    description:
      "Rich tonkotsu-style broth, tender chicken, soft-boiled egg, nori, and springy ramen noodles.",
    price: "₹349",
    image: HERO_IMAGE,
    objectPosition: "18% 55%",
    popular: true,
  },
  {
    id: "mie-goreng",
    name: "Mie Goreng",
    description:
      "Indonesian stir-fried noodles with sweet soy, shallots, and a perfect balance of spice and umami.",
    price: "₹279",
    image: foodImages.mieGoreng,
  },
  {
    id: "chilli-prawn",
    name: "Singapore Chilli Prawn",
    description:
      "Succulent prawns in a tangy-sweet chilli sauce — a signature Indo-Chinese favorite.",
    price: "₹449",
    image: foodImages.chilliPrawn,
    popular: true,
  },
  {
    id: "burmese-egg",
    name: "Burmese Egg Bhejo",
    description:
      "Traditional Burmese-style eggs with aromatic spices and a rich, comforting gravy.",
    price: "₹199",
    image: foodImages.eggs,
  },
  {
    id: "miso-ramen",
    name: "Miso Ramen",
    description:
      "Silky miso broth, marinated tofu or pork, bamboo shoots, and perfectly al dente noodles.",
    price: "₹329",
    image: foodImages.misoRamen,
    popular: true,
  },
];
