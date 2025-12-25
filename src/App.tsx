import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { defaultConfig } from "@/config"
import { getIcon } from "@/lib/icons"

// Load config from config.json or use default
const config = defaultConfig

function App() {
  const backgroundClass = config.theme.useGradient
    ? `min-h-screen bg-gradient-to-br ${config.theme.gradientFrom} ${config.theme.gradientVia} ${config.theme.gradientTo}`
    : `min-h-screen ${config.theme.background}`

  return (
    <div className={backgroundClass}>
      {/* Animated background elements - only shown if gradient is enabled */}
      {config.theme.useGradient && (
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
      )}

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-md space-y-8">
          {/* Profile Section */}
          <div className="space-y-4 text-center">
            {/* Avatar */}
            <div
              className="relative inline-block"
              role="img"
              aria-label={`Profile picture with initials ${config.profile.initials}`}
            >
              <div
                className="h-28 w-28 rounded-full p-[3px] shadow-2xl"
                style={{
                  background: config.profile.avatarGradient || config.theme.accentColor,
                  boxShadow: `0 20px 25px -5px ${config.theme.accentColor}30`,
                }}
              >
                <div
                  className={`flex h-full w-full items-center justify-center rounded-full ${config.profile.avatarBackground || config.theme.background}`}
                >
                  <span
                    className="text-4xl font-bold"
                    style={{ color: config.theme.accentColor }}
                    aria-hidden="true"
                  >
                    {config.profile.initials}
                  </span>
                </div>
              </div>
              {/* Online indicator */}
              <div
                className="absolute right-1 bottom-1 h-5 w-5 rounded-full border-4"
                style={{
                  borderColor: config.theme.background.includes("black") ? "#000" : undefined,
                  backgroundColor: config.theme.accentColor,
                }}
                aria-label="Online status"
              />
            </div>

            {/* Name and bio */}
            <div className="space-y-2">
              <h1 className={`text-3xl font-bold tracking-tight ${config.theme.textPrimary}`}>
                {config.profile.name}
              </h1>
              <p className={`text-lg ${config.theme.textSecondary}`}>{config.profile.bio}</p>
            </div>
          </div>

          {/* Links Section */}
          <nav className="space-y-4" aria-label="Social media and portfolio links">
            {config.links.map((link) => (
              <Card
                key={link.title}
                className={`group backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${config.theme.cardBackground} ${config.theme.cardBorder} ${config.theme.cardHover}`}
                style={{
                  boxShadow: config.theme.useGradient
                    ? undefined
                    : `0 0 0 1px ${config.theme.accentColor}20`,
                }}
              >
                <CardContent className="py-4">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: `${config.theme.accentColor}20`,
                      }}
                      aria-hidden="true"
                    >
                      <div style={{ color: config.theme.accentColor }}>
                        {getIcon(link.icon, "size-5")}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2
                        className={`text-lg font-semibold transition-colors ${config.theme.textPrimary}`}
                        style={{
                          color: config.theme.textPrimary.includes("text-")
                            ? undefined
                            : config.theme.textPrimary,
                        }}
                      >
                        {link.title}
                      </h2>
                      {link.description && (
                        <p className={`truncate text-sm ${config.theme.textSecondary}`}>
                          {link.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink
                      className={`size-5 flex-shrink-0 transition-colors ${config.theme.textSecondary} group-hover:text-white`}
                      style={{
                        color: config.theme.textSecondary.includes("text-")
                          ? undefined
                          : config.theme.textSecondary,
                      }}
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
              className={`h-14 w-full border-0 text-lg font-semibold text-white shadow-lg transition-all duration-300 ${config.theme.buttonGradient} ${config.theme.buttonHover}`}
              style={{
                backgroundColor: config.theme.buttonGradient?.includes("bg-")
                  ? undefined
                  : config.theme.accentColor,
                boxShadow: `0 10px 15px -3px ${config.theme.accentColor}25`,
              }}
            >
              <a href={`mailto:${config.profile.email}`}>Get in Touch</a>
            </Button>
          </div>

          {/* Footer */}
          <footer className="pt-8 text-center">
            <p className={`text-sm ${config.theme.textSecondary}`}>
              © {new Date().getFullYear()} {config.profile.name}. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
