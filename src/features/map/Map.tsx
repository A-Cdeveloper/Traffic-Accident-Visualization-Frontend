import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapResizeHandler from './MapResizeHandler'
import AccidentMarker from './AccidentMarker'
import { VLASOTINCE_CENTER, DEFAULT_ZOOM } from './constants'
import type { Accident } from '@/types/accedents'

const Map = () => {
  // Test markeri - po jedna nesreća za svaku kategoriju
  const testAccidents: Accident[] = [
    {
      id: 1,
      accidentId: 1001,
      pdepartment: 'LESKOVAC',
      pstation: 'VLASOTINCE',
      latitude: 42.965,
      longitude: 22.14,
      accidentType: 'Sa materijalnom štetom',
      category: 'Jedno vozilo',
      dateTime: '2024-01-15T10:30:00.000Z',
      description: 'Test nesreća - Jedno vozilo'
    },
    {
      id: 2,
      accidentId: 1002,
      pdepartment: 'LESKOVAC',
      pstation: 'VLASOTINCE',
      latitude: 42.97,
      longitude: 22.15,
      accidentType: 'Sa povređenim',
      category: 'Najmanje dva vozila – bez skretanja',
      dateTime: '2024-02-20T14:45:00.000Z',
      description: 'Test nesreća - Bez skretanja'
    },
    {
      id: 3,
      accidentId: 1003,
      pdepartment: 'LESKOVAC',
      pstation: 'VLASOTINCE',
      latitude: 42.955,
      longitude: 22.13,
      accidentType: 'Sa materijalnom štetom',
      category: 'Najmanje dva vozila – skretanje ili prelazak',
      dateTime: '2024-03-10T08:20:00.000Z',
      description: 'Test nesreća - Skretanje ili prelazak'
    },
    {
      id: 4,
      accidentId: 1004,
      pdepartment: 'LESKOVAC',
      pstation: 'VLASOTINCE',
      latitude: 42.975,
      longitude: 22.16,
      accidentType: 'Sa materijalnom štetom',
      category: 'Parkirana vozila',
      dateTime: '2024-04-05T16:30:00.000Z',
      description: 'Test nesreća - Parkirana vozila'
    },
    {
      id: 5,
      accidentId: 1005,
      pdepartment: 'LESKOVAC',
      pstation: 'VLASOTINCE',
      latitude: 42.96,
      longitude: 22.12,
      accidentType: 'Sa povređenim',
      category: 'Pešaci',
      dateTime: '2024-05-12T12:15:00.000Z',
      description: 'Test nesreća - Pešaci'
    }
  ]

  return (
    <MapContainer
      center={VLASOTINCE_CENTER}
      zoom={DEFAULT_ZOOM}
      className="w-full h-full"
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      <MapResizeHandler />
      
      {/* Prikazi marker za svaku nesreću */}
      {testAccidents.map((accident) => (
        <AccidentMarker key={accident.id} accident={accident} />
      ))}
    </MapContainer>
  )
}

export default Map