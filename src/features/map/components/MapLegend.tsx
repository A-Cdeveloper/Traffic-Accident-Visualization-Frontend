import { categoryColorMap } from '../constants'

/**
 * MapLegend component - Displays a legend showing accident category colors.
 * Positioned at the bottom right of the map as an overlay.
 */
const MapLegend = () => {
  const categories = Object.entries(categoryColorMap)

  return (
    <div 
      className="absolute bottom-4 right-4 z-9999999 bg-card border border-border rounded-lg shadow-lg p-2 py-3 max-w-sm pointer-events-none"
      data-testid="map-legend"
    >
      <div className="space-y-2">
        {categories.map(([category, color]) => (
          <div key={category} className="flex items-center gap-2">
            <div
              className="w-3 h-3  shrink-0 border border-white/20"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground leading-tight">
              {category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MapLegend
