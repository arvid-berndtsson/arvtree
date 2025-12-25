# Arvid Berndtsson - Personal Links

A modern, beautiful Linktree-style personal links page built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- ⚡ Built with Vite for lightning-fast development
- 🎨 Modern UI with shadcn/ui components
- 💨 Tailwind CSS for utility-first styling
- 📱 Fully responsive design
- 🌙 Beautiful gradient background with animated elements
- 🔒 Security headers configured for Cloudflare Pages

## 📦 Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Hosting:** Cloudflare Pages

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## ☁️ Deploying to Cloudflare Pages

### Option 1: Connect to Git (Recommended)

1. Push this repository to GitHub/GitLab
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/?to=/:account/pages)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click "Save and Deploy"

### Option 2: Direct Upload

1. Build the project locally:
   ```bash
   npm run build
   ```
2. Go to Cloudflare Pages Dashboard
3. Click "Create a project" → "Direct Upload"
4. Upload the `dist` folder

### Option 3: Wrangler CLI

1. Install Wrangler:
   ```bash
   npm install -g wrangler
   ```
2. Login to Cloudflare:
   ```bash
   wrangler login
   ```
3. Deploy:
   ```bash
   npm run build
   wrangler pages deploy dist
   ```

## 🎨 Customization

### Update Links

Edit the `links` array in `src/App.tsx`:

```typescript
const links: LinkItem[] = [
  {
    title: "Your Link Title",
    url: "https://your-url.com",
    icon: <YourIcon className="size-5" />,
    description: "Optional description",
  },
  // Add more links...
]
```

### Update Profile

Modify the profile section in `src/App.tsx` to change:
- Name
- Bio/tagline
- Avatar initials
- Contact email

### Change Colors

The gradient colors can be adjusted in:
- Background: `from-slate-900 via-purple-900 to-slate-900`
- Accent elements: Purple/pink/blue gradients throughout

## 📄 License

MIT License - feel free to use this for your own personal links page!
