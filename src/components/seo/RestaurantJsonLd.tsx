import { SITE_NAME, SITE_URL } from "@/lib/site";

export function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Authentic Pan-Asian restaurant in Cuddalore serving Thai, Indonesian, Japanese, Burmese, and Indo-Chinese cuisine.",
    servesCuisine: [
      "Thai",
      "Indonesian",
      "Japanese",
      "Burmese",
      "Indo-Chinese",
      "Pan-Asian",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cuddalore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    telephone: "+91-88075-18436",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "680",
      bestRating: "5",
    },
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "12:00",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "22:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
