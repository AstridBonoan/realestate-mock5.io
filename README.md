# AETHER — Real Estate Mockup #5

Premium digital real estate network website built with **React**, **Vite**, and **Tailwind CSS**. Deployed to **GitHub Pages** via **GitHub Actions** (build → `gh-pages` branch → Deploy from Branch).

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages setup

1. Push to `main` (workflow builds and publishes to `gh-pages`).
2. In the repo: **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `gh-pages` / `/ (root)`
5. Site URL: `https://AstridBonoan.github.io/realestate-mock5.io/`

SPA routing is supported by copying `index.html` to `404.html` during deploy.

## Brand

Placeholder company name: **AETHER**. Replace contact info, team, properties, and copy in `src/data/`.
