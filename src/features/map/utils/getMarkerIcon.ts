import L from 'leaflet'
import { categoryColorMap } from '../constants'

export const getMarkerIcon = (category: string): L.DivIcon => {
  const color = categoryColorMap[category] || '#6b7280' // siva kao default

  return L.divIcon({
    className: 'custom-marker',
    html: `<svg width="20" height="36" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 8.5 12 24 12 24s12-15.5 12-24C24 5.373 18.627 0 12 0z" fill="${color}" stroke="white" stroke-width="1.5"/>
    </svg>`,
    iconSize: [20, 20],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36],
  })
}