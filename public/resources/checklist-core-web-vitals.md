# Checklist Core Web Vitals

Points de controle rapides pour garder LCP, INP et CLS dans le vert.

Technique
- Optimiser le LCP : images hero compressees, preload, font-display swap.
- Reduire l'INP : limiter scripts tiers, deprioriser listeners, lazy hydrate.
- Eviter le CLS : dimensions fixes pour medias et iframes, fonts auto-hebergees.
- Mise en cache : HTTP cache, CDN, compression Brotli.

Suivi
- PageSpeed Insights : mobile et desktop, priorite aux zones rouges.
- Chrome UX Report : tendances reelles par appareil.
- Lighthouse : seuils d'alerte superieurs a 80 sur mobile.
