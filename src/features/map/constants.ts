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
  'Jedno vozilo': '#179AC2', // blue
  'Najmanje dva vozila – bez skretanja': '#DA1717', // red
  'Najmanje dva vozila – skretanje ili prelazak': '#DFE616', // yellow/orange
  'Parkirana vozila': '#6F11C7', // purple
  'Pešaci': '#12D85B', // green
}
