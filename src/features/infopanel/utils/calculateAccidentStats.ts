import type { Accident } from '@/types/accedents'
import type { FilterOption } from '@/types/accedents'

type AccidentStatsResult = {
  counts: Record<string, number>
  itemsToShow: FilterOption[]
}

/**
 * Calculates accident counts grouped by a specific field (category or type).
 * Maps backend labels to filter option values for accurate counting.
 *
 * @param accidents - Array of accident data
 * @param filterOptions - Available filter options (categories or types)
 * @param filterValues - Selected filter values (array for categories, string for type)
 * @param accidentField - Field name to group by ('category' or 'accidentType')
 * @returns Object with counts and items to display
 */
export const calculateAccidentStats = (
  accidents: Accident[] | undefined,
  filterOptions: FilterOption[] | undefined,
  filterValues: string[] | string | null | undefined,
  accidentField: 'category' | 'accidentType'
): AccidentStatsResult => {
  if (!accidents || !filterOptions || !filterValues) {
    return { counts: {}, itemsToShow: [] }
  }

  const filterArray = Array.isArray(filterValues) ? filterValues : [filterValues]
  
  if (filterArray.length === 0) {
    return { counts: {}, itemsToShow: [] }
  }

  const itemsToShow = filterOptions.filter(item => filterArray.includes(item.value))
  
  if (itemsToShow.length === 0) {
    return { counts: {}, itemsToShow: [] }
  }

  // Create label -> value mapping (backend returns labels, not values)
  const labelToValueMap: Record<string, string> = {}
  const counts: Record<string, number> = {}
  
  itemsToShow.forEach(item => {
    labelToValueMap[item.label] = item.value
    counts[item.value] = 0
  })

  // Count accidents - backend returns label, not value
  accidents.forEach(accident => {
    const fieldValue = accident[accidentField]
    const mappedValue = labelToValueMap[fieldValue]
    if (mappedValue !== undefined) {
      counts[mappedValue]++
    }
  })

  return { counts, itemsToShow }
}
