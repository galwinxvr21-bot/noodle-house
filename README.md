# Noodle House Cuddalore

Premium Pan-Asian restaurant website for **Noodle House Cuddalore** — a highly-rated dining destination in Cuddalore, Tamil Nadu.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** — animations, parallax, scroll reveals
- **Lucide React** — icons

## Features

- Cinematic fullscreen hero with parallax
- Signature dishes with steam effects & hover glow
- Animated menu category tabs
- Google-style review carousel
- Masonry gallery with zoom hover
- Reservation form, maps, WhatsApp CTA
- Floating order button & mobile bottom nav
- Elegant loading screen
- Glassmorphism UI, dark premium aesthetic
- SEO-optimized metadata
- Lazy-loaded images

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Live site

**https://noodlehouse.free.nf**

Domain is configured in `src/lib/site.ts` (used for SEO, sitemap, and Open Graph).

## Customize

- Update contact details in `src/components/sections/Contact.tsx` and `Footer.tsx`
- Replace menu prices/items in `src/data/menu.ts` and `src/data/dishes.ts`
- Swap Unsplash image URLs for your own photography
- Update Google Maps embed in `Contact.tsx` with your exact location
