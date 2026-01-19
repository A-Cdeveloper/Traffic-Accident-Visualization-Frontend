import MarkerClusterGroup from 'react-leaflet-cluster'
import type { Accident } from '@/types/accedents'
import AccidentMarker from './AccidentMarker'

type AccidentMarkerClusterProps = {
  accidents: Accident[]
}

/**
 * AccidentMarkerCluster component - Groups nearby accident markers into clusters.
 * Automatically clusters markers when zoomed out and expands them when zoomed in.
 * Uses spiderfy on max zoom to separate markers at the same position.
 */
const AccidentMarkerCluster = ({ accidents }: AccidentMarkerClusterProps) => {
  return (
    <MarkerClusterGroup
      spiderfyOnMaxZoom={true}
      showCoverageOnHover={false}
      zoomToBoundsOnClick={true}
      maxClusterRadius={50}
    >
      {accidents.map((accident) => (
        <AccidentMarker key={accident.id} accident={accident} />
      ))}
    </MarkerClusterGroup>
  )
}

export default AccidentMarkerCluster