import * as LucideIcons from "lucide-react"

type LucideIconsType = typeof LucideIcons

export function getIcon(iconName: string, className: string = "size-5") {
  const IconComponent = (LucideIcons as LucideIconsType)[iconName as keyof LucideIconsType] as
    | React.ComponentType<{ className?: string }>
    | undefined

  if (!IconComponent) {
    // Fallback to ExternalLink if icon not found
    return <LucideIcons.ExternalLink className={className} />
  }
  return <IconComponent className={className} />
}
