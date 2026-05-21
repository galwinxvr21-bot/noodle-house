import {
  Car,
  Truck,
  ShoppingBag,
  Moon,
  Leaf,
  Trees,
  PawPrint,
  ChefHat,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Car,
    title: "Free Parking",
    description: "Convenient parking for all guests",
  },
  {
    icon: Truck,
    title: "Delivery Available",
    description: "Hot meals delivered to your door",
  },
  {
    icon: ShoppingBag,
    title: "Takeaway",
    description: "Quick pickup for busy schedules",
  },
  {
    icon: Moon,
    title: "Halal Options",
    description: "Certified halal selections available",
  },
  {
    icon: Leaf,
    title: "Vegetarian Choices",
    description: "Dedicated veg-friendly menu items",
  },
  {
    icon: Trees,
    title: "Outdoor Seating",
    description: "Al fresco dining experience",
  },
  {
    icon: PawPrint,
    title: "Pet Friendly",
    description: "Well-behaved pets welcome",
  },
  {
    icon: ChefHat,
    title: "Catering Services",
    description: "Events and parties catered",
  },
  {
    icon: Users,
    title: "Family Dining",
    description: "Spacious seating for all ages",
  },
];
