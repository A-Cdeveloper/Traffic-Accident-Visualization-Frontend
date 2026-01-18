import { useQueryStates, parseAsString, parseAsArrayOf } from 'nuqs'
import { useMemo } from 'react'
import useAccidents from '@/features/accidents/hooks/useAccidents'
import { useFilters } from '@/features/filter/hooks/useFilters'
import { validateDateRange } from '@/utils/dates'
import Loading from '@/components/Loading'
import { calculateAccidentStats } from './utils/calculateAccidentStats'
import StatisticSection from './components/StatisticSection'
import DateRangeSection from './components/DateRangeSection'

/**
 * InfoPanel component - Displays accident statistics and filter information.
 * Shows date range, accident counts by type and category, and total count.
 */
const InfoPanel = () => {
  const [filters] = useQueryStates({
    startDate: parseAsString,
    endDate: parseAsString,
    accidentType: parseAsString,
    categories: parseAsArrayOf(parseAsString),
  })

  const { data: accidents, isLoading: isLoadingAccidents } = useAccidents()
  const { data: filterOptions, isLoading: isLoadingFilters } = useFilters()

  const dateValidation = validateDateRange(filters.startDate, filters.endDate)
  const hasDateFilters = Boolean(filters.startDate || filters.endDate)

  // Calculate statistics using memoized helper function
  const accidentsByCategory = useMemo(
    () =>
      calculateAccidentStats(
        accidents?.data,
        filterOptions?.categories,
        filters.categories,
        'category'
      ),
    [accidents?.data, filterOptions?.categories, filters.categories]
  )

  const accidentsByType = useMemo(
    () =>
      calculateAccidentStats(
        accidents?.data,
        filterOptions?.accidentTypes,
        filters.accidentType,
        'accidentType'
      ),
    [accidents?.data, filterOptions?.accidentTypes, filters.accidentType]
  )

  if (hasDateFilters && !dateValidation.isValid) {
    return null
  }

  if (isLoadingAccidents || isLoadingFilters) {
    return <Loading className="size-4" />
  }

  return (
    <div className="text-[13px]">
      <div className="grid grid-cols-1 gap-4">
        <DateRangeSection
          startDate={accidents?.startDate}
          endDate={accidents?.endDate}
        />

        {filters.accidentType && (
          <StatisticSection
            title="Broj nesreća po tipu"
            items={accidentsByType.itemsToShow}
            counts={accidentsByType.counts}
          />
        )}

        {filters.categories && filters.categories.length > 0 && (
          <StatisticSection
            title="Broj nesreća po kategoriji"
            items={accidentsByCategory.itemsToShow}
            counts={accidentsByCategory.counts}
          />
        )}

        <div className="space-y-2 py-2 border-y border-border">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Ukupan broj nesreća:</span>
            <span className="font-bold text-md">{accidents?.total || 0}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel