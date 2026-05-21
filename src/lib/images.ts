/** Restaurant hero — Pan-Asian spread (ramen, wok noodles, prawns, dim sum) */
export const HERO_IMAGE = "/images/hero-pan-asian-spread.png";

/** Curated Unsplash — noodles, ramen, soup, seafood only (no biryani/rice platters) */
const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80`;

export const foodImages = {
  hero: HERO_IMAGE,
  about: HERO_IMAGE,
  soup: u("photo-1547592166-23ac45744acd"),
  wokNoodles: u("photo-1569718212165-3a8278d5f624"),
  ramen: u("photo-1563379091339-03b21ab4a4f8"),
  mieGoreng: u("photo-1563245372-f21724fb5cbf"),
  chilliPrawn: u("photo-1525755662778-989dbe090eb9"),
  eggs: u("photo-1589302164678-8265a0ec6f83"),
  misoRamen: u("photo-1618841557871-269e3a8e3e5b"),
  interior: u("photo-1555396273-367ea4eb4db5"),
  wokCooking: u("photo-1551218808-94e220e084d2"),
  dining: u("photo-1517248135467-4c7edcad34c4"),
} as const;
