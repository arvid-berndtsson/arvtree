import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import stylesheet from "../index.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "hsl(24.6 95% 53.1%)" },
    ],
    links: [
      { rel: "stylesheet", href: stylesheet },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  component: Root,
  notFoundComponent: () => (
    <main className="not-found">
      <h1>Page not found</h1>
      <p>Check the address or return to the links page.</p>
      <a href="/">View links →</a>
    </main>
  ),
})

function Root() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
