import { Github, Linkedin, Globe, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface LinkItem {
  title: string
  url: string
  icon: React.ReactNode
  description?: string
}

const links: LinkItem[] = [
  {
    title: "Personal Website",
    url: "https://arvidberndtsson.com",
    icon: <Globe className="size-5" />,
    description: "Check out my portfolio and blog",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/arvidberndtsson",
    icon: <Linkedin className="size-5" />,
    description: "Connect with me professionally",
  },
  {
    title: "GitHub",
    url: "https://github.com/arvidberndtsson",
    icon: <Github className="size-5" />,
    description: "Explore my open source projects",
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-3xl filter" />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-3xl filter"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-pink-500 opacity-10 mix-blend-multiply blur-3xl filter"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-md space-y-8">
          {/* Profile Section */}
          <div className="space-y-4 text-center">
            {/* Avatar */}
            <div
              className="relative inline-block"
              role="img"
              aria-label="Profile picture with initials AB"
            >
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 p-[3px] shadow-2xl shadow-purple-500/30">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900">
                  <span
                    className="bg-gradient-to-br from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-4xl font-bold text-transparent"
                    aria-hidden="true"
                  >
                    AB
                  </span>
                </div>
              </div>
              {/* Online indicator */}
              <div
                className="absolute right-1 bottom-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-green-500"
                aria-label="Online status"
              />
            </div>

            {/* Name and bio */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-white">Arvid Berndtsson</h1>
              <p className="text-lg text-slate-400">Developer • Creator • Innovator</p>
            </div>
          </div>

          {/* Links Section */}
          <nav className="space-y-4" aria-label="Social media and portfolio links">
            {links.map((link) => (
              <Card
                key={link.title}
                className="group border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <CardContent className="py-4">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-white transition-all duration-300 group-hover:from-purple-500/30 group-hover:to-pink-500/30"
                      aria-hidden="true"
                    >
                      {link.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-semibold text-white transition-colors group-hover:text-purple-200">
                        {link.title}
                      </h2>
                      {link.description && (
                        <p className="truncate text-sm text-slate-400">{link.description}</p>
                      )}
                    </div>
                    <ExternalLink
                      className="size-5 flex-shrink-0 text-slate-500 transition-colors group-hover:text-white"
                      aria-hidden="true"
                    />
                  </a>
                </CardContent>
              </Card>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="h-14 w-full border-0 bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/40"
            >
              <a href="mailto:hello@arvidberndtsson.com">Get in Touch</a>
            </Button>
          </div>

          {/* Footer */}
          <footer className="pt-8 text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Arvid Berndtsson. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
