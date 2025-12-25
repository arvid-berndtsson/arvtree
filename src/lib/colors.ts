/**
 * Convert hex color to rgba with opacity
 * @param hex - Hex color string (e.g., "#32CD32")
 * @param opacity - Opacity value between 0 and 1
 * @returns rgba color string
 */
export function hexToRgba(hex: string, opacity: number): string {
  // Remove # if present
  const cleanHex = hex.replace("#", "")

  // Parse hex values
  const r = parseInt(cleanHex.substring(0, 2), 16)
  const g = parseInt(cleanHex.substring(2, 4), 16)
  const b = parseInt(cleanHex.substring(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
