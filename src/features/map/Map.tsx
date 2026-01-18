import Loading from '@/components/Loading'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

import useAccidents from '../accidents/hooks/useAccidents'
import AccidentMarker from './AccidentMarker'
import { DEFAULT_ZOOM, VLASOTINCE_CENTER } from './constants'
import MapResizeHandler from './MapResizeHandler'
import NoAccidentsFound from '../accidents/NoAccidentsFound'

/**
 * Map component - Main interactive map displaying traffic accidents.
 * Renders a Leaflet map with OpenStreetMap tiles, zoom controls, and accident markers.
 * Shows loading state while fetching data and empty state when no accidents are found.
 */
const Map = () => {

  const { data: accidentsData, isLoading: isLoadingAccidents } = useAccidents()

  if (isLoadingAccidents) {
    return <Loading />
  }


  if (!accidentsData) {
    //toast.error('No accidents found')
    return <NoAccidentsFound />
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
      

      {accidentsData.data.map((accident) => (
        <AccidentMarker key={accident.id} accident={accident} />
      ))}
    </MapContainer>
  )
}

export default Map