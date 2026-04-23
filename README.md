# Triton Hybrid Battery Repair

Light, modern marketing site for Triton Hybrid Battery Repair — a specialist hybrid service shop in Northern Virginia.

Built with **Astro** + **Tailwind CSS**. Single-page, static, mobile-optimized.

## Design direction

- **Aesthetic:** refined minimalism. Airy, editorial, confident.
- **Palette:** warm off-white paper `#fbfaf7` as the base, deep ink `#16201a` for text, forest moss `#3d6b4e` as accent (evokes EV/hybrid without cliché), warm amber `#c2902e` for stars only. No purple.
- **Typography:** Fraunces for display (variable axis, italic emphasis), Instrument Sans for UI and body.
- **Motion:** CSS-only reveal on scroll, smooth color and transform transitions, pure-CSS marquee for service areas. Respects `prefers-reduced-motion`.
- **Mobile-first:** full-width drawer menu with staggered link reveal, optimized touch targets, no heavy animations or large images.

## Performance notes

- No JavaScript frameworks, no client hydration. Astro ships only the two tiny inline scripts (reveal observer + mobile menu).
- Single Google Fonts stylesheet with `display=swap` so text renders instantly in a fallback and swaps in Fraunces/Instrument Sans as they load.
- Tailwind generates only the classes actually used → small production CSS.
- No background images, no heavy SVG, no blur-wash layers that cost paint time on mobile.
- Target Lighthouse mobile score: 95+ across the board.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Calendly booking setup

The site now includes an inline booking section powered by Calendly.

1. Add your scheduling URL in an environment file:

```bash
echo "PUBLIC_CALENDLY_URL=https://calendly.com/your-team/your-event" > .env
```

2. Restart dev server so Astro picks up the new env var.

Notes:
- Use a public Calendly event URL (team or individual).
- If `PUBLIC_CALENDLY_URL` is not set, the site falls back to the default placeholder URL in `src/components/Booking.astro`.

## Build

```bash
npm run build       # outputs to ./dist
npm run preview     # preview the production build locally
```

## File structure

```
src/
  layouts/Base.astro           — html shell, fonts, reveal observer, nav scroll state
  components/
    Nav.astro                  — sticky nav + animated mobile drawer
    Hero.astro                 — serif statement headline + trust band
    Services.astro             — 2×2 card grid
    HowItWorks.astro           — 4-step process
    Coverage.astro             — scrolling city marquee + vehicle makes
    Reviews.astro              — 4 testimonials
    Contact.astro              — contact rails + service request form
    Footer.astro               — giant wordmark + link columns
  pages/index.astro            — assembles the whole page
  styles/global.css            — tailwind entry + custom utilities
public/favicon.svg
```

## Customizing content

Each section's copy lives in plain arrays at the top of the component (e.g. `services`, `reviews`, `areas`, `makes`). Edit in place — no CMS.

Phone and email appear in `Nav.astro`, `Contact.astro`, `Footer.astro`.

## Form handling

The contact form currently shows a placeholder alert on submit. To wire it up for real, replace the inline `onsubmit` in `Contact.astro` with a `fetch()` to your endpoint (Formspree, Basin, Netlify Forms, or a custom API route).
