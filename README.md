# Aiionwatha Astro site

This folder contains a static Astro recreation of https://www.aiionwatha.com, ready to be hosted on GitHub Pages or Netlify once the WordPress site is retired.

## 🚀 Project structure

```
website/
├── netlify.toml              # Netlify build settings
├── public/
│   └── images/               # Local copies of hero/founder/testimonial/logo media
├── src/
│   ├── layouts/Layout.astro  # Global <head>, fonts, metadata
│   └── pages/index.astro     # Single-page marketing site
└── package.json
```

## 🧞 Commands

Run these from inside `website/`:

| Command         | Action                                               |
|-----------------|------------------------------------------------------|
| `npm install`   | Install dependencies (already done once)             |
| `npm run dev`   | Start the dev server at `http://localhost:4321`      |
| `npm run build` | Generate the production build into `./dist/`         |
| `npm run preview` | Preview the production build locally               |

## 🌐 Deploying to Netlify

1. Push this folder to GitHub (e.g., as `aiionwatha-astro`).
2. In Netlify, **Add new site → Import from Git**, choose the repo, and point to the `website/` directory if the repo has other files.
3. Build command: `npm run build` · Publish directory: `dist` (already defined in `netlify.toml`).
4. Once deployed, update your domain DNS to point to the Netlify site.

All assets referenced in the page live in `public/images`, so the site remains fully functional after the WordPress subscription ends.
