import { lazy, Suspense } from 'react'
import Loading from '@/components/Loading'

// Lazy load Map komponentu (koja u sebi ima Leaflet)
const LazyMap = lazy(() => import('./components/Map'))

/**
 * LazyMap component - Wrapper that lazy loads the Map component.
 * This defers loading Leaflet until the map is actually needed.
 */
const MapWithSuspense = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LazyMap />
    </Suspense>
  )
}

export default MapWithSuspense