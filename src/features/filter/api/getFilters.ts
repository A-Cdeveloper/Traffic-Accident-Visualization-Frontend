import type { MetadataResponse } from "@/types/accedents"

export const getFilters = async (): Promise<MetadataResponse> => {
  const url = `${import.meta.env.VITE_API_URL}/api/accidents/metadata`
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error('Failed to fetch filter options')
  }
  
  const data = await response.json() as MetadataResponse
  
  return data
}
