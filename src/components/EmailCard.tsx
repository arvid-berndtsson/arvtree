import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { profile } from "@/data/links"

export function EmailCard() {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "failed">("idle")
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(resetTimer.current), [])

  async function copyEmail() {
    clearTimeout(resetTimer.current)
    setStatus("copying")
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus("copied")
      resetTimer.current = setTimeout(() => setStatus("idle"), 3000)
    } catch {
      setStatus("failed")
    }
  }

  const Icon = status === "copied" ? Check : Copy
  return (
    <>
      <button
        type="button"
        className="hub-link"
        onClick={copyEmail}
        disabled={status === "copying"}
        aria-label={`Copy email address ${profile.email}`}
      >
        <Icon className="hub-link-icon" size={24} strokeWidth={1.6} aria-hidden="true" />
        <span className="hub-link-copy">
          <span className="hub-link-title">
            {status === "copied" ? "Email copied" : "Email"}
          </span>
          <span className="hub-link-description">{profile.email}</span>
        </span>
      </button>
      <p className={status === "failed" ? "copy-error" : "sr-only"} role="status">
        {status === "copied"
          ? "Email copied"
          : status === "failed"
            ? `Couldn't copy. Select and copy this address: ${profile.email}`
            : ""}
      </p>
      <noscript>
        <p className="copy-error">Select and copy this address: {profile.email}</p>
      </noscript>
    </>
  )
}
