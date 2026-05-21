export const SITE_URL = "https://noodlehouse.free.nf";
export const SITE_NAME = "Noodle House Cuddalore";
export const WHATSAPP_NUMBER = "918807518436";

/** Official Google Maps link */
export const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/smyU9HY2BSxaMrKF9";

export const RESTAURANT_ADDRESS = {
  street: "13, Nellikuppam Main Rd",
  plusCode: "QQ72+86",
  area: "Semmandalam",
  city: "Cuddalore",
  state: "Tamil Nadu",
  postalCode: "607001",
  country: "India",
} as const;

export const RESTAURANT_ADDRESS_LINE = `${RESTAURANT_ADDRESS.street}, ${RESTAURANT_ADDRESS.plusCode}, ${RESTAURANT_ADDRESS.area}, ${RESTAURANT_ADDRESS.state} ${RESTAURANT_ADDRESS.postalCode}`;

export const RESTAURANT_ADDRESS_SHORT = `${RESTAURANT_ADDRESS.plusCode}, ${RESTAURANT_ADDRESS.area}, ${RESTAURANT_ADDRESS.state} ${RESTAURANT_ADDRESS.postalCode}`;

/** Embedded map (no API key) — matches Google Maps place */
export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${RESTAURANT_ADDRESS.street}, ${RESTAURANT_ADDRESS.area}, ${RESTAURANT_ADDRESS.state} ${RESTAURANT_ADDRESS.postalCode}, ${RESTAURANT_ADDRESS.country}`
)}&hl=en&z=17&output=embed`;
