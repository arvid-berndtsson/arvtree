import sharp from "sharp"
import { readFile } from "node:fs/promises"
const logo = (await readFile(new URL("../public/logo.svg", import.meta.url), "utf8"))
  .replace('width="100" height="100"', 'x="1000" y="90" width="95" height="95"')
  .replace('stroke="currentColor"', 'stroke="#28251f"')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="hsl(24.6,95%,53.1%)"/>${logo}
<g font-family="Helvetica, Arial, sans-serif" fill="#28251f">
<text x="80" y="240" font-size="150" font-weight="700" letter-spacing="-7">Arvid</text>
<text x="80" y="347" font-size="105" font-weight="700" letter-spacing="-5">Berndtsson</text>
<text x="84" y="428" font-size="27">Head of Information Security</text>
<text x="84" y="473" font-size="23">Software, automation, and AI</text>
<text x="84" y="560" font-size="20">links.arvid.tech</text>
<text x="810" y="428" font-size="30">arvid.tech</text><text x="810" y="480" font-size="30">Tapid</text>
</g></svg>`
await sharp(Buffer.from(svg))
  .png()
  .toFile(new URL("../public/og-image.png", import.meta.url).pathname)
