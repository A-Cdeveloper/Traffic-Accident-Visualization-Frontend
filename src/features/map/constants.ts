// Koordinate centra mape za Vlasotince
export const VLASOTINCE_CENTER: [number, number] = [42.965, 22.14]

// Podrazumevani zoom nivo
export const DEFAULT_ZOOM = 14

// Mapiranje labela kategorija na boje (backend vraća label u accident.category)
export const categoryColorMap: Record<string, string> = {
  'Jedno vozilo': '#3b82f6', // plava
  'Najmanje dva vozila – bez skretanja': '#ef4444', // crvena
  'Najmanje dva vozila – skretanje ili prelazak': '#f97316', // narandžasta
  'Parkirana vozila': '#a855f7', // ljubičasta
  'Pešaci': '#22c55e', // zelena
}
