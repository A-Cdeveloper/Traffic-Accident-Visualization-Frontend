import { keepPreviousData, useQuery, type UseQueryResult } from '@tanstack/react-query'
import { useQueryStates, parseAsString, parseAsArrayOf } from 'nuqs'
import { getAccidents } from '../api/getAccidents'
import type { AccidentsSuccessResponse } from '@/types/accedents'

const useAccidents = (): UseQueryResult<AccidentsSuccessResponse, Error> => {
  const [filters] = useQueryStates({
    startDate: parseAsString,
    endDate: parseAsString,
    accidentType: parseAsString,
    categories: parseAsArrayOf(parseAsString),
  })

  return useQuery<AccidentsSuccessResponse, Error>({
    queryKey: ['accidents', filters.startDate, filters.endDate, filters.accidentType, filters.categories],
    queryFn: () => getAccidents(filters),
    placeholderData: keepPreviousData,

  })
}

export default useAccidents