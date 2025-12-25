# Deploy to Cloudflare Pages

Deploy the Linktree site to Cloudflare Pages.

## Prerequisites

- Cloudflare account
- Wrangler CLI installed: `npm install -g wrangler`
- Authenticated: `wrangler login`

## Build First

```bash
npm run build
```

## Deploy Options

### Option 1: Wrangler CLI (Direct)
```bash
wrangler pages deploy dist
```

### Option 2: Git Integration (Recommended)
1. Push to GitHub
2. Connect repo in Cloudflare Pages dashboard
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Option 3: Direct Upload
1. Build locally
2. Go to Cloudflare Pages dashboard
3. Upload the `dist` folder

## Configuration Files

- `wrangler.toml` - Wrangler CLI config
- `public/_headers` - Security headers (auto-copied to dist)
- `public/_redirects` - SPA routing (auto-copied to dist)

## Custom Domain

After deploying, add a custom domain in the Cloudflare Pages settings.
