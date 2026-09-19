# Arvid Tree

A personal link page for https://links.arvid.tech, inspired by arvid.tech. Built with React 19 and TanStack Start, prerendered to static HTML for Cloudflare Pages.

## Development

Use Node 22.12 or newer.

```sh
npm ci
npm run dev
```

The development server runs at http://localhost:3000.

```sh
npm run check
npm run preview
```

`check` runs formatting, ESLint, the production build, TypeScript, and assertions against the generated HTML. `preview` serves `dist/client` through Cloudflare's local Pages runtime at http://localhost:4173. Build before previewing.

## Content and design

- `src/data/links.ts`: profile, project links, and social destinations.
- `src/index.css`: global styles and self-hosted fonts.
- `src/pages/LinkHub.tsx` and `src/pages/link-hub.css`: the homepage layout and link styles.
- `src/routes/index.tsx`: SEO metadata and Person/ProfilePage/ItemList structured data.
- `public/og-image.png`: 1200×630 social share image. Run `node scripts/generate-og.mjs` to regenerate it.

Links work without JavaScript. The homepage is a single-column link hub using the approved orange and upright logo. There are no analytics, external font requests, or runtime API calls.

## Cloudflare Pages

Use the existing `arvtree` Pages project with:

- Build command: `npm run build`
- Output directory: `dist/client`
- Node version: `22`
- Custom domain: `links.arvid.tech`

For a manual deployment:

```sh
npx wrangler login
npx wrangler whoami
npm run deploy
```

Only `dist/client` is deployed. The generated server bundle in `dist/server` is used during prerendering and is not required in production. A real `404.html` prevents Pages from returning the home page with a successful status for nonexistent URLs. Hashed assets have immutable caching; HTML uses Pages' default revalidation. The pages.dev domain is marked noindex.

The production domain is explicit in `src/data/links.ts`, `public/robots.txt`, and `public/sitemap.xml`. Update all three and the build assertions if you move domains. Add the custom domain in the Pages dashboard before publishing, then submit the sitemap in Google Search Console. Search rankings and indexing depend on search engines; the build supplies crawlable content and technical SEO metadata.

## Design

The homepage is the only content page. Its six full-width links come from `hubLinks` in `src/data/links.ts`. Add featured projects to `projects` in the same file.

The orange is the primary color from arvid.tech, `hsl(24.6 95% 53.1%)`. Keep the Arvid logo upright and preserve its original color, including in the favicon. Keep the page free of divider lines, eyebrows, and duplicate links to arvid.tech.
