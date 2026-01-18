import type { AccidentsSuccessResponse, AccidentsErrorResponse } from "@/types/accedents"

type GetAccidentsParams = {
  startDate?: string | null
  endDate?: string | null
  accidentType?: string | null
  categories?: string[] | null
}

export const getAccidents = async (params: GetAccidentsParams): Promise<AccidentsSuccessResponse> => {
  const queryParams = new URLSearchParams({ pstation: 'VLASOTINCE' })
  
  if (params.startDate) queryParams.set('startDate', params.startDate)
  if (params.endDate) queryParams.set('endDate', params.endDate)
  if (params.accidentType) queryParams.set('accidentType', params.accidentType)
  if (params.categories && params.categories.length > 0) {
    queryParams.set('categories', params.categories.join(','))
  }
  
  const url = `${import.meta.env.VITE_API_URL}/api/accidents?${queryParams.toString()}`
  const response = await fetch(url)
  
  if (!response.ok) {
    const errorData = await response.json() as AccidentsErrorResponse
    const errorMessage = errorData.details?.[0]?.message || errorData.error || 'Failed to fetch accidents'
    throw new Error(errorMessage)
  }

  const data = await response.json() as AccidentsSuccessResponse
  
  return data
}