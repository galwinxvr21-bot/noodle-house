import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { RestaurantJsonLd } from "@/components/seo/RestaurantJsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Authentic Pan-Asian Restaurant`,
  description:
    "Experience authentic Pan-Asian cuisine in Cuddalore — Thai, Indonesian, Japanese, Burmese & Indo-Chinese. 4.5★ rated. Ramen, wok noodles, Soto Yum Soup & more.",
  keywords: [
    "Noodle House Cuddalore",
    "Pan-Asian restaurant Cuddalore",
    "ramen Cuddalore",
    "Thai food Cuddalore",
    "best restaurant Cuddalore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} | Authentic Pan-Asian Flavors`,
    description:
      "From sizzling wok noodles to rich ramen bowls — premium Pan-Asian dining in Cuddalore, Tamil Nadu.",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}
    >
      <body
        className="min-h-screen bg-charcoal font-sans text-cream antialiased"
        suppressHydrationWarning
      >
        <RestaurantJsonLd />
        {children}
      </body>
    </html>
  );
}
