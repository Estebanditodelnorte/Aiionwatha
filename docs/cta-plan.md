# CTA Implementation Plan (What Gets Done First)

Priority order
1) Add a seasonal CTA block (“Holiday Readiness Audit”) to home (FR/EN) with primary/secondary buttons.
2) Add a downsell CTA (“Send me 2 questions”) with a simple Netlify form.
3) Add CTA repeats after proof/FAQ sections to reduce friction.
4) Add a sticky mobile CTA (“Book the audit”) for quick access on phones.

Details
- Seasonal CTA: headline/subheadline + urgency line (“Limited slots until Dec 20”) + primary CTA to book, secondary to downsell form.
- Downsell form: email + optional first name + “Your 2 questions”; Netlify Forms enabled; email notifications on.
- Placement: hero block and a second CTA cluster after proof/FAQ on `src/pages/index.astro` and `src/pages/en/index.astro`.
- Sticky CTA (mobile): floating bottom button linking to the booking anchor.

Ready-to-use copy
- FR headline: “Audit éclair pour vos promos de fin d’année.”  
- FR subheadline: “En 30–45 minutes, je trouve 2–3 gains rapides pour sécuriser vos ventes et éviter les ratés de période de pointe.”  
- FR primary CTA: “Réserver l’audit” · Secondary: “Envoyer 2 questions”  
- EN headline: “Holiday Readiness Audit, fast.”  
- EN subheadline: “In 30–45 minutes, I’ll surface 2–3 quick wins to protect your peak-season revenue and avoid launch mistakes.”  
- EN primary CTA: “Book the audit” · Secondary: “Send 2 questions”  
- Urgency: “Offer available until December 20; limited weekly slots.”

Form fields (Netlify)
- email (required)
- first_name (optional)
- questions (textarea, required)
- hidden `form-name`, honeypot field; `data-netlify="true"`

Testing checklist
- CTAs visible above the fold; repeats visible after proof/FAQ.
- Forms submit to Netlify; notifications received.
- Sticky CTA shows on mobile and scrolls to the form/anchor.
- FR/EN content matches per locale.
