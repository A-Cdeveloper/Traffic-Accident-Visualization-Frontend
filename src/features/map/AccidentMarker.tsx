import { Marker, Popup } from 'react-leaflet'
import type { Accident } from '@/types/accedents'
import { getMarkerIcon } from './utils/getMarkerIcon'

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
        <div className="text-sm">
          <p><strong>Tip:</strong> {accident.accidentType}</p>
          <p><strong>Kategorija:</strong> {accident.category}</p>
          <p><strong>Datum:</strong> {new Date(accident.dateTime).toLocaleDateString('sr-RS')}</p>
          {accident.description && (
            <p><strong>Opis:</strong> {accident.description}</p>
          )}
        </div>
      </Popup>
    </Marker>
  )
}

export default AccidentMarker