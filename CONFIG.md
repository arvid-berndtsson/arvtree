# Configuration Guide

This project uses a configuration file to allow easy customization without modifying the code.

## Configuration File

The configuration is defined in two places:
1. **`src/config.ts`** - TypeScript config with type definitions and default values
2. **`config.json`** - JSON config file for easy editing (future feature)

## Configuration Structure

### Profile Section

Configure your personal information:

```typescript
profile: {
  name: string           // Your full name
  initials: string       // Your initials (shown in avatar)
  bio: string           // Your tagline/bio
  email: string         // Your contact email
  avatarBackground: string  // Background color for avatar (e.g., "bg-black")
  avatarGradient?: string   // Optional: gradient for avatar border
}
```

### Theme Section

Customize the visual appearance:

```typescript
theme: {
  background: string        // Main background (e.g., "bg-black")
  useGradient: boolean      // Enable/disable gradient background
  gradientFrom?: string     // Gradient start color (if enabled)
  gradientVia?: string      // Gradient middle color (if enabled)
  gradientTo?: string       // Gradient end color (if enabled)
  accentColor: string       // Primary accent color (hex code, e.g., "#32CD32")
  cardBackground: string    // Card background style
  cardBorder: string        // Card border style
  cardHover: string         // Card hover effect style
  textPrimary: string       // Primary text color
  textSecondary: string     // Secondary text color
  buttonGradient?: string   // Button background
  buttonHover?: string      // Button hover effect
}
```

### Links Section

Add your social links and other URLs:

```typescript
links: [
  {
    title: string          // Link title
    url: string           // Full URL
    icon: string          // Lucide icon name (e.g., "Github", "Linkedin", "Globe")
    description?: string  // Optional description
  }
]
```

## Available Icons

The project uses [Lucide React](https://lucide.dev/) icons. Some popular options:

- `Github` - GitHub profile
- `Linkedin` - LinkedIn profile
- `Twitter` (or `X`) - Twitter/X profile
- `Globe` - Personal website
- `Mail` - Email
- `Instagram` - Instagram profile
- `Youtube` - YouTube channel
- `Facebook` - Facebook profile
- `Music` - Music platform
- `Camera` - Photography portfolio
- `Code` - Coding projects
- `BookOpen` - Blog
- `Briefcase` - Portfolio

See the full list at [lucide.dev/icons](https://lucide.dev/icons)

## Example Configurations

### Example 1: Black Background with Lime Green Accent (Default)

```typescript
{
  profile: {
    name: "Your Name",
    initials: "YN",
    bio: "Developer • Creator • Innovator",
    email: "your.email@example.com",
    avatarBackground: "bg-black"
  },
  theme: {
    background: "bg-black",
    useGradient: false,
    accentColor: "#32CD32", // Lime green
    cardBackground: "bg-white/5",
    cardBorder: "border-lime-500/20",
    cardHover: "hover:border-lime-500/40 hover:bg-white/10",
    textPrimary: "text-white",
    textSecondary: "text-slate-400",
    buttonGradient: "bg-lime-500",
    buttonHover: "hover:bg-lime-600"
  },
  links: [
    {
      title: "GitHub",
      url: "https://github.com/yourusername",
      icon: "Github",
      description: "View my open source projects"
    }
  ]
}
```

### Example 2: Purple Gradient Theme (Original Style)

```typescript
{
  profile: {
    name: "Your Name",
    initials: "YN",
    bio: "Developer • Creator • Innovator",
    email: "your.email@example.com"
  },
  theme: {
    background: "bg-gradient-to-br",
    useGradient: true,
    gradientFrom: "from-slate-900",
    gradientVia: "via-purple-900",
    gradientTo: "to-slate-900",
    accentColor: "#a855f7",
    cardBackground: "bg-white/5",
    cardBorder: "border-white/10",
    cardHover: "hover:border-white/20 hover:bg-white/10",
    textPrimary: "text-white",
    textSecondary: "text-slate-400",
    buttonGradient: "bg-gradient-to-r from-purple-600 to-pink-600",
    buttonHover: "hover:from-purple-500 hover:to-pink-500"
  },
  links: [...]
}
```

### Example 3: Blue Ocean Theme

```typescript
{
  theme: {
    background: "bg-gradient-to-br",
    useGradient: true,
    gradientFrom: "from-blue-900",
    gradientVia: "via-cyan-900",
    gradientTo: "to-blue-900",
    accentColor: "#06b6d4", // Cyan
    cardBackground: "bg-white/5",
    cardBorder: "border-cyan-500/20",
    cardHover: "hover:border-cyan-500/40 hover:bg-white/10",
    textPrimary: "text-white",
    textSecondary: "text-blue-200",
    buttonGradient: "bg-cyan-500",
    buttonHover: "hover:bg-cyan-600"
  }
}
```

## How to Customize

1. Open `src/config.ts`
2. Modify the `defaultConfig` object with your information
3. Update your links, colors, and theme preferences
4. Run `npm run dev` to see your changes
5. Build with `npm run build` when ready to deploy

## Tips

- Use hex color codes (e.g., `#32CD32`) for precise color control
- Tailwind classes work for most styling properties
- Test your theme in both light and dark environments
- Keep your bio concise and impactful
- Use high-quality, recognizable icons
- Limit links to 5-7 most important ones for best UX

## Color Suggestions

- **Lime Green**: `#32CD32` (LimeTip green)
- **Cyan**: `#06b6d4`
- **Orange**: `#f97316`
- **Pink**: `#ec4899`
- **Purple**: `#a855f7`
- **Red**: `#ef4444`
- **Emerald**: `#10b981`
- **Amber**: `#f59e0b`
