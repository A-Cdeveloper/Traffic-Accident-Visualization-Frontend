import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { getFilters } from '../api/getFilters'
import type { MetadataResponse } from '@/types/accedents'

export const useFilters = (): UseQueryResult<MetadataResponse, Error> => {
  return useQuery<MetadataResponse, Error>({
    queryKey: ['filters'],
    queryFn: getFilters,
    staleTime: 1000 * 60 * 60, // 1 hour - opcije se retko menjaju
  })
}
