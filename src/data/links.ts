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
  email: "hello@arvid.tech",
}

export type LinkItem = {
  title: string
  href: string
  description: string
}

export const home: LinkItem = {
  title: "arvid.tech",
  href: "https://arvid.tech",
  description: "My work, experience, and background.",
}

export const projects: LinkItem[] = [
  {
    title: "Tapid",
    href: "https://tapid.dev",
    description: "A JavaScript and TypeScript package manager written in Rust.",
  },
]

export const social = [
  { title: "GitHub", href: "https://github.com/arvid-berndtsson", icon: Github },
  { title: "LinkedIn", href: "https://linkedin.com/in/arvid-berndtsson", icon: Linkedin },
  { title: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { title: "Mastodon", href: "https://mastodon.social/@arvidberndtsson", icon: MastodonIcon },
]

export const hubLinks: LinkItem[] = [
  {
    ...home,
    title: "My website",
    description: "Articles, projects, and background on arvid.tech.",
  },
  ...projects,
  ...["GitHub", "LinkedIn", "Mastodon", "Email"].map((title) => {
    const link = social.find((item) => item.title === title)!
    const descriptions: Record<string, string> = {
      GitHub: "My code and open-source projects.",
      LinkedIn: "My professional profile and experience.",
      Mastodon: "@arvidberndtsson@mastodon.social",
      Email: profile.email,
    }
    return { title: link.title, href: link.href, description: descriptions[title] }
  }),
]
