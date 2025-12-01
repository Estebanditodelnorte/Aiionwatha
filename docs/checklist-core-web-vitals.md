# Checklist Core Web Vitals

Points de contrôle rapides pour garder LCP, FID/INP et CLS dans le vert.

Technique
- Optimiser LCP : images hero compressées, preload, font-display swap.
- Réduire INP : limiter scripts tiers, déprioriser listeners, lazy hydrate.
- Eviter le CLS : dimensions fixes pour médias/iframes, fonts auto-hosted.
- Mise en cache : HTTP cache, CDN, compression Brotli.

Suivi
- PageSpeed Insights : mobile et desktop, zones rouges à corriger en priorité.
- Chrome UX Report : tendances réelles, segments par device.
- Lighthouse CI (optionnel) : seuils d’alerte >80 sur mobile.

