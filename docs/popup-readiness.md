# Popup & Consent Readiness Plan

Goal: add a compliant cookie notice, then a simple “subscribe to our newsletter” popup that emails submissions to me and greets people with a personal tone.

## 1) Cookie / consent first
- Inventory scripts: list all third‑party scripts and cookies (analytics, fonts, embeds, chat). Disable anything that isn’t essential until consent is granted.
- Pick a consent tool: choose one that can block tags until opt‑in (examples: Cookiebot, Termly, Osano, or Plausible with self‑hosted consent). Prefer one that supports FR/EN text.
- Implement banner: place the consent script in `src/layouts/Layout.astro` so it loads early; ensure “Accept/Reject/Manage” buttons and a link to Privacy Policy.
- Categorize cookies: essential vs. analytics/marketing; ensure GA/Pixel are only fired after opt‑in.
- Recordkeeping: keep a note of implementation date/version and the exact banner text used; update Privacy Policy to match.

## 2) Newsletter popup — UX rules
- Trigger: delay 8–12s on first view or on exit intent; suppress after dismiss/submit for at least 30 days (store a local flag).
- Content: single field for email + optional first name; keep copy short and personal (see snippet below).
- Placement: modal centered on desktop, full‑width bar/card on mobile; include a close “X” and a secondary “No thanks”.
- Accessibility: focus trap in modal, `aria-modal="true"`, ESC to close, tab order correct; readable contrast and visible focus state.
- Validation: require email, client‑side format check, show inline errors.

## 3) Submission & delivery (email to me)
- Use Netlify Forms (fits the existing Astro/Netlify setup):
  - In the popup form, add `name="newsletter"`, `method="POST"`, `data-netlify="true"`, and a hidden `form-name` input with value `newsletter`.
  - Add a hidden honeypot field (e.g., `netlify-honeypot="bot-field"`).
  - In Netlify dashboard → Forms → newsletter → Notifications, enable email to `steven.germain.gl@gmail.com`.
- If not using Netlify: Formspree/EmailJS are simple alternatives; ensure HTTPS and CORS allowed. Store submissions in a spreadsheet if desired.
- Privacy: mention that the email is used to send occasional updates and can be removed on request; add an unsubscribe line in the confirmation email if you later switch to a mailing tool.

## 4) Copy: friendly + personal (example)
- Title: “I’ll write you back personally”
- Body: “No automated lists. If you share your email, I’ll reach out myself with one or two relevant updates and answer any question you have.”
- Field labels: “Your email”, “Your first name (optional)”
- CTA: “Send it to Steven”
- Post‑submit message: “Merci! I’ll write you soon—if you have a specific question, hit reply when you get my email.”

## 5) Implementation outline (Astro)
- Add a `Popup` component that:
  - Renders the form markup above.
  - Controls open/close with state and saves a `localStorage` flag on dismiss or submit.
  - Only mounts on the client (`client:load` or `client:idle`).
  - On submit, lets the browser POST to Netlify; show a success state without re‑prompting.
- Include `<Popup />` in `src/pages/index.astro` and `src/pages/en/index.astro` (and `/services` if desired).
- Load consent script in `Layout.astro` and gate any analytics/marketing scripts behind consent checks.

## 6) Test checklist
- Consent banner appears on first load; analytics blocked until accepted; rejecting keeps them blocked; reopening “Manage” works.
- Popup triggers as configured, is dismissible, and doesn’t reappear after dismiss/submit.
- Form validation works; a real submission reaches the Netlify Form inbox and triggers an email notification.
- Mobile: modal fits small screens, no scroll lock issues, focus/ESC behaviors verified.
- Privacy/terms link present in both consent banner and popup (small footer text is fine).

## 7) Optional: light upsell/downsell automation (inspired by Tai Lopez)
- Define two offers up front:
  - Core (upsell): e.g., “90‑minute strategy call” or “Audit + 2 quick wins” with a clear price/value.
  - Downsell: low-friction option like “Free 15‑minute call” or “Email me your question, I’ll reply with 2 ideas.”
- Decision points:
  - If a visitor starts a core booking but doesn’t finish, show a downsell popup/banner on exit intent or next visit.
  - If they submit the newsletter form, send a follow-up email sequence: Email 1 (welcome + ask their biggest question), Email 2 (case/mini-win), Email 3 (invite to core offer), Email 4 (downsell reminder if no response).
- Tooling (lightweight, no new backend):
  - Use Netlify Forms for the newsletter, then Zapier/Make to trigger an email sequence via Gmail or a simple provider (e.g., MailerLite/ConvertKit). Map fields: email, first name, source=popup.
  - For booking abandonment, use a “Request a call” form in a modal instead of a complex checkout; if the form is opened but not submitted, set a localStorage flag and show the downsell on the next session.
- Copy examples:
  - Upsell CTA: “Book a 90‑minute strategy call — I’ll prepare 3 funding/strategy options for you.”
  - Downsell CTA: “Not ready to book? I’ll reply personally with 2 ideas you can use right now.”
  - Follow-up email opener: “Thanks for stopping by. I read every reply—tell me one obstacle and I’ll send two tailored ideas.”
- Tracking:
  - Tag submissions with form name and page path; log into a simple spreadsheet via Zapier for manual follow-up.
  - Add UTM tags to buttons in follow-up emails so you can see which offer converts.

## 8) 20 lead-driving ideas you can add alongside the popup
- Add “Book a call” sticky button that opens a short form (name/email/goal) and pipes to Netlify Forms.
- Offer a free mini-audit PDF: form gate it, then email the PDF and a personal note.
- Add a “2 quick ideas for your project” form: they describe a challenge, you reply with tailored bullets.
- Add a one-question poll widget (“What’s your biggest hurdle?”) and invite replies via email.
- Include a “Reply to Steven” mailto link in the hero for people who prefer direct email.
- Add a calendly-style booking link for a 15–30 min intro call (embed or link out).
- Add a testimonial carousel with a “Work with me” CTA under each slide.
- Create service-specific landing blocks (grants, strategy, operations) each with its own CTA anchor.
- Add a pricing/offer snapshot with an “Ask if this fits me” button (opens a question form).
- Launch a “Founders lab” monthly email with one case study and one template; capture emails via popup + inline forms.
- Add a resources section with downloads (checklists, templates) that are emailed on submit.
- Add a “priority line” contact form for time-sensitive asks; promise a 24h reply.
- Add an exit-intent banner offering a downsell (e.g., free 15-min consult) if they skip the main offer.
- Add social proof badges/logos (partners/clients) with a CTA under them.
- Add a “Compare plans” table with a button to request a custom plan.
- Add a footer mini-form (email + question) so every scroll depth has a contact point.
- Add an FAQ block with a final CTA: “Didn’t see your question? Ask me and I’ll reply personally.”
- Add language toggle CTAs that preserve scroll depth and keep the popup available per locale.
- Add a chat-like “Ask Steven” widget (simple form, not live chat) that sends you an email.
- Add a thank-you redirect after any form to a page with a secondary CTA (e.g., book a call).
