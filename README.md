# hchia93.github.io

Personal portfolio, single static page. Built with Astro, hosted on GitHub Pages.

Site: https://hchia93.github.io

## Stack

Astro (static output). No blog, no framework UI libs.

## Develop

```
npm install
npm run dev      # local dev server
npm run build    # output to dist/
```

## Content

All page content lives in `src/data/site.ts` (profile, about, skills, socials, projects). Edit that one file to update the site.

Styles: `src/styles/global.css`
Page shell: `src/pages/index.astro`

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes via GitHub Pages.

One-time setup: in repo Settings > Pages, set Source to "GitHub Actions".
