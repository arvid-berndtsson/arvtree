import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    tanstackStart({ prerender: { enabled: true, failOnError: true, crawlLinks: false } }),
    react(),
  ],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  server: { port: 3000 },
})
