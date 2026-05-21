export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    alt: "Steaming ramen bowl",
    span: "tall",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    alt: "Restaurant interior ambiance",
    span: "wide",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    alt: "Wok tossed noodles",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    alt: "Modern dining space",
    span: "tall",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    alt: "Asian soup specialties",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
    alt: "Wok cooking in action",
    span: "wide",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    alt: "Asian decor and lighting",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    alt: "Pan-Asian noodle platter",
    span: "tall",
  },
];
