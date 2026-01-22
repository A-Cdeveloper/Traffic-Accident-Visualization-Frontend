import { memo, useMemo } from 'react'
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
 * Memoized to prevent unnecessary re-renders and marker recreation.
 */
const AccidentMarkerCluster = memo(function AccidentMarkerCluster({ accidents }: AccidentMarkerClusterProps) {
  // Memoize markers to prevent recreation on every render
  const markers = useMemo(
    () => accidents.map((accident) => (
      <AccidentMarker key={accident.id} accident={accident} />
    )),
    [accidents]
  )

  return (
    <MarkerClusterGroup
      spiderfyOnMaxZoom={true}
      showCoverageOnHover={false}
      zoomToBoundsOnClick={true}
      maxClusterRadius={50}
    >
      {markers}
    </MarkerClusterGroup>
  )
})

export default AccidentMarkerCluster