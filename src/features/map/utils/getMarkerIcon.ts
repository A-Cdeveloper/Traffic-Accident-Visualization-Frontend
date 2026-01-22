import L from 'leaflet'
import { categoryColorMap } from '../constants'

/**
 * Module-level cache for marker icons to avoid recreating the same icons.
 * Significantly improves performance when rendering many markers with the same category.
 */
const iconCache = new Map<string, L.DivIcon>()

/**
 * Creates a custom Leaflet marker icon based on accident category.
 * Returns a colored pin icon (SVG) with category-specific color.
 * Falls back to gray color if category is not found in the color map.
 * Icons are cached to improve performance when rendering many markers.
 *
 * @param category - Accident category label (e.g., "Jedno vozilo", "Pešaci")
 * @returns Leaflet DivIcon with custom SVG pin marker
 */
export const getMarkerIcon = (category: string): L.DivIcon => {
  // Return cached icon if exists
  if (iconCache.has(category)) {
    return iconCache.get(category)!
  }

  const color = categoryColorMap[category] || '#6b7280' // gray as default

  const icon = L.divIcon({
    className: 'custom-marker',
    html: `<div data-testid="marker"><svg width="20" height="36" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 8.5 12 24 12 24s12-15.5 12-24C24 5.373 18.627 0 12 0z" fill="${color}" stroke="white" stroke-width="1.5"/>
    </svg></div>`,
    iconSize: [20, 20],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36],
  })

  // Cache the icon for future use
  iconCache.set(category, icon)
  return icon
}