import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapResizeHandler from './MapResizeHandler'
import AccidentMarker from './AccidentMarker'
import { VLASOTINCE_CENTER, DEFAULT_ZOOM } from './constants'
import useAccidents from '../accidents/hooks/useAccidents'
import Loading from '@/components/Loading'

const Map = () => {

  const { data: accidentsData, isLoading: isLoadingAccidents } = useAccidents()

  if (isLoadingAccidents) {
    return <Loading />
  }

  if (!accidentsData) {
    return <div>No accidents found</div>
  }



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
      {accidentsData.data.map((accident) => (
        <AccidentMarker key={accident.id} accident={accident} />
      ))}
    </MapContainer>
  )
}

export default Map