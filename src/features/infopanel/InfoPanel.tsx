import { useQueryStates, parseAsString, parseAsArrayOf } from 'nuqs'
import useAccidents from '@/features/accidents/hooks/useAccidents'
import { useFilters } from '@/features/filter/hooks/useFilters'
import { formatDate, validateDateRange } from '@/utils/dates'
import Loading from '@/components/Loading'

const InfoPanel = () => {
  const [filters] = useQueryStates({
    startDate: parseAsString,
    endDate: parseAsString,
    accidentType: parseAsString,
    categories: parseAsArrayOf(parseAsString),
  })

  const { data: accidents, isLoading: isLoadingAccidents } = useAccidents()
  const { data: filterOptions, isLoading: isLoadingFilters } = useFilters()

  // Validacija datuma
  const dateValidation = validateDateRange(filters.startDate, filters.endDate)

  // Izračunavanje brojeva po kategoriji - samo za filtrirane kategorije
  const accidentsByCategory = (() => {
    if (!accidents?.data || !filterOptions?.categories || !filters.categories || filters.categories.length === 0) {
      return { counts: {}, categoriesToShow: [] }
    }
    
    const counts: Record<string, number> = {}
    
    // Prikaži samo filtrirane kategorije
    const categoriesToShow = filterOptions.categories.filter(cat => filters.categories?.includes(cat.value))
    
    // Napravi mapiranje label -> value (backend vraća label, ne value)
    const labelToValueMap: Record<string, string> = {}
    categoriesToShow.forEach(category => {
      labelToValueMap[category.label] = category.value
      counts[category.value] = 0
    })
    
    // Prebroj nesreće - backend vraća label, ne value
    accidents.data.forEach(accident => {
      const value = labelToValueMap[accident.category]
      if (value !== undefined) {
        counts[value]++
      }
    })
    
    return { counts, categoriesToShow }
  })()

  // Izračunavanje brojeva po tipu - samo za filtrirani tip
  const accidentsByType = (() => {
    if (!accidents?.data || !filterOptions?.accidentTypes || !filters.accidentType) {
      return { counts: {}, typesToShow: [] }
    }
    
    const counts: Record<string, number> = {}
    
    // Prikaži samo filtrirani tip
    const typesToShow = filterOptions.accidentTypes.filter(type => type.value === filters.accidentType)
    
    // Napravi mapiranje label -> value (backend vraća label, ne value)
    const labelToValueMap: Record<string, string> = {}
    typesToShow.forEach(type => {
      labelToValueMap[type.label] = type.value
      counts[type.value] = 0
    })
    
    // Prebroj nesreće - backend vraća label, ne value
    accidents.data.forEach(accident => {
      const value = labelToValueMap[accident.accidentType]
      if (value !== undefined) {
        counts[value]++
      }
    })
    
    return { counts, typesToShow }
  })()

  // Proveri da li postoje filteri za period
  const hasDateFilters = Boolean(filters.startDate || filters.endDate)

  // Ako ima datume ali validacija ne prođe, ne prikazuj InfoPanel
  if (hasDateFilters && !dateValidation.isValid) {
    return null
  }

  if (isLoadingAccidents || isLoadingFilters) {
    return <Loading className="size-4" />
  }

  return (
    <div className="text-[13px]">
      <div className="grid grid-cols-1 gap-4">
        {/* Period - samo ako ima filter za datume */}
        {hasDateFilters && (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span>Od:</span>
                <p className="text-muted-foreground">{formatDate(accidents?.startDate)}</p>
              </div>
              <div>
                <span>Do:</span>
                <p className="text-muted-foreground">{formatDate(accidents?.endDate)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Broj nesreća po tipu - samo ako ima filter */}
        {filters.accidentType && accidentsByType.typesToShow.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium mb-1">Broj nesreća po tipu</h3>
            <div className="space-y-1">
              {accidentsByType.typesToShow.map((type) => (
                <div key={type.value} className="flex justify-between">
                  <span className="text-muted-foreground">{type.label}:</span>
                  <span className="font-medium">{accidentsByType.counts[type.value] || 0}</span>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Broj nesreća po kategoriji - samo ako ima filter */}
        {filters.categories && filters.categories.length > 0 && accidentsByCategory.categoriesToShow.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium mb-1">Broj nesreća po kategoriji</h3>
            <div className="space-y-1">
              {accidentsByCategory.categoriesToShow.map((category) => (
                <div key={category.value} className="flex justify-between">
                  <span className="text-muted-foreground">{category.label}:</span>
                  <span className="font-medium">{accidentsByCategory.counts[category.value] || 0}</span>
                </div>
              ))}
            </div>
          </div>
        )}



        {/* Ukupan broj nesreća */}
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