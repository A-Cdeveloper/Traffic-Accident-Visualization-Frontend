import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

/**
 * MapResizeHandler component - Handles map resizing when container dimensions change.
 * Uses ResizeObserver to detect container size changes and invalidates the map size
 * to ensure proper rendering when sidebar opens/closes or window is resized.
 */
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
