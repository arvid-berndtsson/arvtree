import { Github, Linkedin, Mail } from "lucide-react"
import { MastodonIcon } from "@/components/MastodonIcon"

export const profile = {
  name: "Arvid Berndtsson",
  siteName: "Arvid Tree",
  url: "https://links.arvid.tech",
  role: "Head of Information Security",
  bio: "I love building software and automation that combine security with generative AI, predictive AI, and machine learning.",
  description:
    "Arvid Berndtsson, Head of Information Security. Projects in software, automation, and AI, including Tapid, plus links to my website and profiles.",
  email: "hej@arvid.tech",
}

type LinkItem = {
  title: string
  href: string
  description: string
}

export const home: LinkItem = {
  title: "My website",
  href: "https://arvid.tech",
  description: "Articles, projects, and background on arvid.tech.",
}

export const projects: LinkItem[] = [
  {
    title: "Tapid",
    href: "https://tapid.dev",
    description: "A JavaScript and TypeScript package manager written in Rust.",
  },
]

export const social = [
  {
    title: "GitHub",
    href: "https://github.com/arvid-berndtsson",
    description: "My code and open-source projects.",
    icon: Github,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/arvid-berndtsson",
    description: "My professional profile and experience.",
    icon: Linkedin,
  },
  {
    title: "Mastodon",
    href: "https://mastodon.social/@arvidberndtsson",
    description: "@arvidberndtsson@mastodon.social",
    icon: MastodonIcon,
  },
  { title: "Email", href: `mailto:${profile.email}`, description: profile.email, icon: Mail },
]

export const hubLinks: LinkItem[] = [home, ...projects, ...social]
