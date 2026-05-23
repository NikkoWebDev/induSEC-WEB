# InduSEC Automatismos — WEB

Static Astro site for an industrial automation company in Bogotá. Deployed to Netlify at `puertasindusec.com`.

## Stack

- **Astro** (static output, no SSR) — `npm run dev` / `npm run build`
- CSS: single `src/styles/main.css` (no framework)
- JS: vanilla `src/scripts/main.js` (no libraries — GSAP removed)
- Fonts: Google Fonts via CDN (Barlow Condensed, Sora, Space Mono)
- Icons: Font Awesome 6.5.1 via CDN
- SEO: `@astrojs/sitemap`, JSON-LD `LocalBusiness` in layout

## Build

```bash
npm run build   # outputs to dist/
npm run dev     # dev server on localhost:4321
npm run preview # preview built dist/
```

## Project structure

```
src/
├── layouts/BaseLayout.astro   # HTML shell, SEO meta, JSON-LD, fonts
├── components/
│   ├── Header.astro           # nav + mobile menu
│   ├── Footer.astro           # footer + floating WA + back-to-top
│   ├── Hero.astro             # hero section with CSS keyframe animations
│   ├── ScrollReveal.astro     # Intersection Observer fade-in wrapper
│   ├── ServiceCard.astro      # service card with click-to-expand specs
│   ├── ProductCard.astro      # product card with tag + WA link
│   ├── ProjectCard.astro      # project card with <Image /> component
│   └── Stats.astro            # counter section (vanilla JS)
├── pages/
│   ├── index.astro            # home (lead-optimized, WhatsApp CTAs)
│   ├── productos.astro
│   ├── servicios.astro
│   └── proyectos.astro
├── styles/main.css
├── scripts/main.js            # mobile menu, scroll header, counter, reveals
└── assets/images/             # processed by Astro Image pipeline
```

## Key conventions

- **Language:** Spanish (`lang="es"`)
- **Primary contact:** WhatsApp `+57 317 854 4089` — linked from every CTA
- **Images:** Use Astro `<Image />` from `astro:assets` (auto WebP, srcset, lazy). Store in `src/assets/images/` for processing. Logo in `public/logo.png` (no processing needed).
- **Animations:** CSS `@keyframes` for hero entrance, Intersection Observer + CSS transitions for scroll reveals. No JS animation library.
- **Service cards:** Click toggles `.active` class to reveal `.service-card__extra`
- **Router:** Filesystem-based — `/productos/` maps to `src/pages/productos.astro`

## Netlify deploy

- `netlify.toml` at root — build command `npm run build`, publish `dist/`
- Connect GitHub repo in Netlify UI, set domain `puertasindusec.com`
- Cache headers: 1 year immutable for `/_astro/*` assets
