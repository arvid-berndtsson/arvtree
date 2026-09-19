import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"

const root = new URL("../dist/client/", import.meta.url)
const html = await readFile(new URL("index.html", root), "utf8")
assert.match(html.replace(/<[^>]+>/g, ""), /Arvid Berndtsson/)
for (const destination of ["https://tapid.dev", "https://arvid.tech", "mailto:hej@arvid.tech"]) {
  assert.ok(html.includes(`href="${destination}"`), `Missing prerendered link: ${destination}`)
}
assert.match(html, /rel="canonical"[^>]*href="https:\/\/links.arvid.tech\/"/)
assert.match(html, /property="og:image"[^>]*og-image.png/)
const jsonLd = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)
assert.ok(jsonLd, "Structured data must be in the static HTML")
assert.equal(JSON.parse(jsonLd[1])["@graph"][0]["@type"], "Person")
const robots = await readFile(new URL("robots.txt", root), "utf8")
const sitemap = await readFile(new URL("sitemap.xml", root), "utf8")
assert.ok(robots.includes("https://links.arvid.tech/sitemap.xml"))
assert.ok(sitemap.includes("<loc>https://links.arvid.tech/</loc>"))
const notFound = await readFile(new URL("404.html", root), "utf8")
assert.match(notFound, /name="robots" content="noindex"/)
const image = await readFile(new URL("og-image.png", root))
assert.equal(image.readUInt32BE(16), 1200)
assert.equal(image.readUInt32BE(20), 630)
console.log(
  "Static build verified: crawlable links, canonical, social metadata, JSON-LD, sitemap, robots, 404, and 1200×630 share image."
)

assert.ok(html.includes('class="link-hub"'), "Homepage must use the link hub")
assert.ok(
  !html.includes('aria-label="Compare designs"'),
  "Homepage must not show review navigation"
)
assert.ok(!html.includes('name="robots" content="noindex'), "Homepage must be indexable")
const graph = JSON.parse(jsonLd[1])["@graph"]
const items = graph.find((item) => item["@type"] === "ItemList").itemListElement
for (const item of items)
  assert.ok(html.includes(`href="${item.url}"`), "Schema must match visible links")
const outputFiles = await readdir(root, { recursive: true })
const htmlFiles = outputFiles.filter((file) => file.endsWith(".html")).sort()
assert.deepEqual(
  htmlFiles,
  ["404.html", "index.html"],
  "Only the homepage and error page should ship"
)
console.log("Single-page link hub verified. No comparison pages in the build.")
