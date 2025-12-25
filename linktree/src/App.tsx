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
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="w-full max-w-md space-y-8">
          {/* Profile Section */}
          <div className="text-center space-y-4">
            {/* Avatar */}
            <div className="relative inline-block">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 p-[3px] shadow-2xl shadow-purple-500/30">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-br from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
                    AB
                  </span>
                </div>
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900" />
            </div>

            {/* Name and bio */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Arvid Berndtsson
              </h1>
              <p className="text-slate-400 text-lg">
                Developer • Creator • Innovator
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-white group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-white font-semibold text-lg group-hover:text-purple-200 transition-colors">
                          {link.title}
                        </h2>
                        {link.description && (
                          <p className="text-slate-400 text-sm truncate">
                            {link.description}
                          </p>
                        )}
                      </div>
                      <ExternalLink className="size-5 text-slate-500 group-hover:text-white transition-colors flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 h-14 text-lg font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <a href="mailto:hello@arvidberndtsson.com">
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Footer */}
          <footer className="pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Arvid Berndtsson. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
