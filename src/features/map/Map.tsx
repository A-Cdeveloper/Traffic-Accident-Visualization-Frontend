import Loading from '@/components/Loading'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

import useAccidents from '../accidents/hooks/useAccidents'
import AccidentMarker from './AccidentMarker'
import { DEFAULT_ZOOM, VLASOTINCE_CENTER } from './constants'
import MapResizeHandler from './MapResizeHandler'
import NotFound from '@/pages/NotFound'

const Map = () => {

  const { data: accidentsData, isLoading: isLoadingAccidents } = useAccidents()

  if (isLoadingAccidents) {
    return <Loading />
  }

  // TODO: Add NotFound component
  if (!accidentsData) {
    //toast.error('No accidents found')
    return <NotFound />
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