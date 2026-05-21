export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    author: "Arun Kumar",
    rating: 5,
    text: "Best ramen in Cuddalore! The broth is rich and the noodles are perfectly cooked every time.",
    date: "2 weeks ago",
  },
  {
    id: "2",
    author: "Priya Menon",
    rating: 5,
    text: "Authentic flavors and amazing ambiance. Perfect for date nights and family dinners alike.",
    date: "1 month ago",
  },
  {
    id: "3",
    author: "Rahul S.",
    rating: 5,
    text: "Soto Yum Soup is a must-try. Fresh ingredients and no artificial taste — you can tell!",
    date: "3 weeks ago",
  },
  {
    id: "4",
    author: "Divya Nair",
    rating: 4,
    text: "Premium quality food worth every rupee. Wok noodles and chilli prawns are our favorites.",
    date: "1 week ago",
  },
  {
    id: "5",
    author: "Karthik V.",
    rating: 5,
    text: "Great for college hangouts. Fast service, cozy vibe, and portions are generous.",
    date: "2 months ago",
  },
];
