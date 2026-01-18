import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const MapResizeHandler = () => {
  const map = useMap()

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize()
    })

    const container = map.getContainer()
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [map])

  return null
}

export default MapResizeHandler