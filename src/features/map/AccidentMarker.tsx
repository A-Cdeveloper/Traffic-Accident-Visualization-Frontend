import { Marker, Popup } from 'react-leaflet'
import type { Accident } from '@/types/accedents'
import { getMarkerIcon } from './utils/getMarkerIcon'
import AccidentPopup from './AccidentPopup'

type AccidentMarkerProps = {
  accident: Accident
}

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