import { foodImages, HERO_IMAGE } from "@/lib/images";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
  objectPosition?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: HERO_IMAGE,
    alt: "Pan-Asian spread — ramen, noodles, and seafood",
    span: "wide",
    objectPosition: "center",
  },
  {
    id: "2",
    src: foodImages.ramen,
    alt: "Steaming ramen bowl",
    span: "tall",
  },
  {
    id: "3",
    src: foodImages.wokNoodles,
    alt: "Wok tossed noodles",
  },
  {
    id: "4",
    src: foodImages.dining,
    alt: "Modern dining space",
    span: "tall",
  },
  {
    id: "5",
    src: foodImages.soup,
    alt: "Asian soup specialties",
  },
  {
    id: "6",
    src: foodImages.wokCooking,
    alt: "Wok cooking in action",
    span: "wide",
  },
  {
    id: "7",
    src: foodImages.interior,
    alt: "Restaurant ambiance and lighting",
  },
  {
    id: "8",
    src: HERO_IMAGE,
    alt: "Noodle House signature platter",
    span: "tall",
    objectPosition: "70% 40%",
  },
];
