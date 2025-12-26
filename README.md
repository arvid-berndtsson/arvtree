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

This project now supports easy customization through a configuration file! See [CONFIG.md](CONFIG.md) for detailed documentation.

### Quick Start

Edit `src/config.ts` to customize your page:

```typescript
export const defaultConfig: Config = {
  profile: {
    name: "Your Name",
    initials: "YN",
    bio: "Your tagline here",
    email: "your.email@example.com",
    avatarBackground: "bg-black"
  },
  theme: {
    background: "bg-black",
    useGradient: false,
    accentColor: "#32CD32", // Your color here
    // ... more theme options
  },
  links: [
    {
      title: "GitHub",
      url: "https://github.com/yourusername",
      icon: "Github",
      description: "View my projects"
    },
    // Add more links...
  ]
}
```

### Available Themes

- **Black + Lime Green** (default) - Clean, professional look with lime green accents
- **Purple Gradient** - Original colorful theme with animated gradients
- **Custom** - Create your own with any colors and gradients

For more examples and detailed configuration options, see [CONFIG.md](CONFIG.md).

## 📄 License

MIT License - feel free to use this for your own personal links page!
