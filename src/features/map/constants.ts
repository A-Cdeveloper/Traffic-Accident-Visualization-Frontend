/**
 * Center coordinates for Vlasotince municipality map view.
 */
export const VLASOTINCE_CENTER: [number, number] = [42.965, 22.14]

/**
 * Default zoom level for the map.
 */
export const DEFAULT_ZOOM = 14

/**
 * Maps accident category labels to color codes for markers and UI elements.
 * Backend returns category labels in accident.category field.
 */
export const categoryColorMap: Record<string, string> = {
  'Jedno vozilo': '#1960D1', // blue
  'Najmanje dva vozila – bez skretanja': '#E22121', // red
  'Najmanje dva vozila – skretanje ili prelazak': '#DFE21F', // yellow/orange
  'Parkirana vozila': '#8F48D1', // purple
  'Pešaci': '#0B8F3B', // green
}
