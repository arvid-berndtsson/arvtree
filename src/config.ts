export interface LinkItem {
  title: string
  url: string
  icon: string // Icon name from lucide-react
  description?: string
}

export interface ProfileConfig {
  name: string
  initials: string
  bio: string
  email: string
  avatarGradient?: string // Optional gradient class, null for solid color
  avatarBackground?: string // Background color for avatar
}

export interface ThemeConfig {
  background: string // Background class or color
  useGradient: boolean // Whether to use gradient background
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
  accentColor: string // Primary accent color
  cardBackground: string // Card background
  cardBorder: string
  cardHover: string
  textPrimary: string
  textSecondary: string
  buttonGradient?: string // Optional button gradient
  buttonHover?: string
}

export interface Config {
  profile: ProfileConfig
  theme: ThemeConfig
  links: LinkItem[]
}

// Default configuration with black background and lime green accent
export const defaultConfig: Config = {
  profile: {
    name: "Arvid Berndtsson",
    initials: "AB",
    bio: "Developer • Creator • Innovator",
    email: "hello@arvidberndtsson.com",
    avatarBackground: "bg-black",
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
    buttonHover: "hover:bg-lime-600",
  },
  links: [
    {
      title: "Personal Website",
      url: "https://arvidberndtsson.com",
      icon: "Globe",
      description: "Check out my portfolio and blog",
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/arvidberndtsson",
      icon: "Linkedin",
      description: "Connect with me professionally",
    },
    {
      title: "GitHub",
      url: "https://github.com/arvidberndtsson",
      icon: "Github",
      description: "Explore my open source projects",
    },
  ],
}
