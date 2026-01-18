// Koordinate centra mape za Vlasotince
export const VLASOTINCE_CENTER: [number, number] = [42.965, 22.14]

// Podrazumevani zoom nivo
export const DEFAULT_ZOOM = 14

// Mapiranje labela kategorija na boje (backend vraća label u accident.category)
export const categoryColorMap: Record<string, string> = {
  'Jedno vozilo': '#1960D1', // plava
  'Najmanje dva vozila – bez skretanja': '#E22121', // crvena
  'Najmanje dva vozila – skretanje ili prelazak': '#DFE21F', // narandžasta
  'Parkirana vozila': '#8F48D1', // ljubičasta
  'Pešaci': '#0B8F3B', // zelena
}
