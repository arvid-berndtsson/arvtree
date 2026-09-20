import { EmailCard } from "@/components/EmailCard"
import { Globe, Terminal } from "lucide-react"
import { home, hubLinks, profile, social } from "@/data/links"

export function LinkHub() {
  return (
    <div className="link-hub">
      <main className="hub-content">
        <header className="hub-intro">
          <div className="hub-identity">
            <h1>
              Arvid
              <br />
              Berndtsson
            </h1>
            <img src="/logo.svg" width="64" height="64" alt="" />
          </div>
          <p className="hub-role">{profile.role}</p>
          <p className="hub-bio">{profile.bio}</p>
        </header>
        <nav aria-label="My website, projects, and contact links">
          <ul className="hub-links">
            {hubLinks.map((link) => {
              if (link.href.startsWith("mailto:")) {
                return (
                  <li key={link.href}>
                    <EmailCard />
                  </li>
                )
              }
              const socialLink = social.find((item) => item.href === link.href)
              const Icon = socialLink?.icon ?? (link.href === home.href ? Globe : Terminal)
              return (
                <li key={link.href}>
                  <a
                    className="hub-link"
                    href={link.href}
                    rel={link.title === "Mastodon" ? "me" : undefined}
                  >
                    <Icon
                      className="hub-link-icon"
                      size={24}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    <span className="hub-link-copy">
                      <span className="hub-link-title">{link.title}</span>
                      <span className="hub-link-description">{link.description}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </main>
    </div>
  )
}
