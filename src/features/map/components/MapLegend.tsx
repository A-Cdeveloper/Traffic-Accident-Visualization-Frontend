import { useMemo } from 'react'
import { useQueryStates, parseAsArrayOf, parseAsString } from 'nuqs'
import { useFilters } from '@/features/filter/hooks/useFilters'
import { categoryColorMap } from '../constants'

/**
 * MapLegend component - Displays a legend showing accident category colors.
 * Shows only categories that are selected in the URL filters.
 * If no categories are selected, shows all categories.
 * Positioned at the bottom right of the map as an overlay.
 */
const MapLegend = () => {
  const [filters] = useQueryStates({
    categories: parseAsArrayOf(parseAsString),
  })
  
  const { data: filterOptions } = useFilters()
  
  // Memoize categories to display to prevent unnecessary rerenders
  const categoriesToDisplay = useMemo(() => {
    const allCategories = Object.entries(categoryColorMap)
    const selectedCategoryValues = filters.categories || []
    
    // If no categories selected, show all categories
    if (selectedCategoryValues.length === 0) {
      return allCategories
    }
    
    // If categories are selected, filter to show only those
    if (!filterOptions?.categories) {
      return allCategories
    }
    
    // Build index map for O(1) lookups instead of repeated .find() calls
    const categoryByValue = new Map(
      filterOptions.categories.map(cat => [cat.value, cat.label])
    )
    
    const selectedLabels = selectedCategoryValues
      .map(value => categoryByValue.get(value))
      .filter((label): label is string => !!label && label in categoryColorMap)
    
    return allCategories.filter(([label]) => selectedLabels.includes(label))
  }, [filters.categories, filterOptions])

  return (
    <div 
      className="absolute bottom-8 right-4 z-9999999 bg-card border border-border rounded-lg shadow-lg p-2 py-3 max-w-sm pointer-events-none"
      data-testid="map-legend"
    >
      <div className="space-y-2">
        {categoriesToDisplay.map(([category, color]) => (
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
