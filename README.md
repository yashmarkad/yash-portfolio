# Yash Markad — AI Engineer Portfolio

Responsive, dark-themed personal portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Personalize

Update `src/data.js` to revise profile links, skills, project descriptions, experience, and education. Review all employer-related descriptions before making the site public.

## GitHub Pages deployment

This repository is configured for the URL:

https://yashmarkad.github.io/yash-portfolio/

A GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Vite app and deploys the `dist` directory.

In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow runs automatically on pushes to `main`. You can also start it from the **Actions** tab using **Deploy portfolio to GitHub Pages → Run workflow**.

The Vite base path is configured in `vite.config.js` as `/yash-portfolio/`.

## Security

This is a static site and does not require API keys. Never commit passwords, access tokens, `.env` files, or private credentials.
