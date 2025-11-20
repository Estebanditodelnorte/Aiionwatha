Work session summary
---------------------

- Added service tables (FR/EN) with deliverable and “why now” value columns, replacing the service cards on home pages.
- Self-hosted fonts (Inter, Plus Jakarta Sans) with @font-face and preload; removed Google Fonts calls; updated CSP for self fonts.
- Added bilingual 404 pages; localized OG alt handling; optional FAQ schema through layout; skip link and LCP tweaks.
- Security headers (CSP, referrer, permissions, XFO, X-Content-Type-Options, X-XSS-Protection) in netlify.toml.
- Robots now references sitemap and sitemap-index; sitemap index enabled in Astro config.
- GA4 ready via `PUBLIC_GA_ID` env.
- Commit created: `feat: service tables, self-host fonts, security headers, 404s`.
- Added bilingual services page with full services table and packages (`/services`, `/en/services`); nav links and hero CTAs updated to point to the new pages.
- Clarified service descriptions (FR/EN) with plain language, including auxiliary/tech/privacy items; OG image set to hero.webp with absolute URL for social sharing.

Next steps (suggested)
- Set `PUBLIC_GA_ID` in deploy environment.
- Deploy to Netlify to apply headers/404s/fonts.
- Optionally add hreflang-specific XML sitemaps if desired.
