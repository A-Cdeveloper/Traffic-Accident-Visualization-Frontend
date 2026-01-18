import { Marker, Popup } from 'react-leaflet'
import type { Accident } from '@/types/accedents'
import { getMarkerIcon } from './utils/getMarkerIcon'
import AccidentPopup from './AccidentPopup'

type AccidentMarkerProps = {
  accident: Accident
}

/**
 * AccidentMarker component - Renders a single accident marker on the map.
 * Uses a custom colored pin icon based on the accident category.
 * Displays a popup with detailed accident information when clicked.
 */
const AccidentMarker = ({ accident }: AccidentMarkerProps) => {
  return (
    <Marker 
      position={[accident.latitude, accident.longitude]}
      icon={getMarkerIcon(accident.category)}
    >
      <Popup>
        <AccidentPopup accident={accident} />
      </Popup>
    </Marker>
  )
}

export default AccidentMarker