import { createFileRoute } from "@tanstack/react-router"
import { profile, hubLinks, home, social } from "@/data/links"
import { LinkHub } from "@/pages/LinkHub"
import styles from "@/pages/link-hub.css?url"

const title = `${profile.name} | Links, Projects & Contact`
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.url}/#person`,
      name: profile.name,
      url: home.href,
      jobTitle: profile.role,
      email: profile.email,
      description: profile.bio,
      sameAs: social.filter((link) => link.href.startsWith("https:")).map((link) => link.href),
    },
    {
      "@type": "ProfilePage",
      "@id": `${profile.url}/#webpage`,
      url: `${profile.url}/`,
      name: title,
      description: profile.description,
      mainEntity: { "@id": `${profile.url}/#person` },
      hasPart: { "@id": `${profile.url}/#links` },
    },
    {
      "@type": "ItemList",
      "@id": `${profile.url}/#links`,
      name: "Arvid Berndtsson’s website, projects, and profiles",
      itemListElement: hubLinks
        .filter((link) => !link.href.startsWith("mailto:"))
        .map((link, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: link.title,
          url: link.href,
        })),
    },
  ],
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: profile.description },
      { name: "author", content: profile.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: profile.siteName },
      { property: "og:title", content: title },
      { property: "og:description", content: profile.description },
      { property: "og:url", content: `${profile.url}/` },
      { property: "og:image", content: `${profile.url}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Arvid Berndtsson. Head of Information Security. Software, automation, and AI.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: profile.description },
      { name: "twitter:image", content: `${profile.url}/og-image.png` },
      {
        name: "twitter:image:alt",
        content: "Arvid Berndtsson. Head of Information Security. Software, automation, and AI.",
      },
    ],
    links: [
      { rel: "canonical", href: `${profile.url}/` },
      { rel: "stylesheet", href: styles },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema).replace(/</g, "\\u003c") },
    ],
  }),
  component: LinkHub,
})
