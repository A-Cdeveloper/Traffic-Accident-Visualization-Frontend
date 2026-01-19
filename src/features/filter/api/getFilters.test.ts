import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getFilters } from './getFilters'
import type { MetadataResponse } from '@/types/accedents'
import { mockCategories, mockAccidentTypes } from '@/test/test-utils'

describe('getFilters', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch filter metadata successfully', async () => {
    const mockResponse: MetadataResponse = {
      accidentTypes: mockAccidentTypes,
      categories: mockCategories,
    }

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    } as Response)

    const result = await getFilters()

    expect(result).toEqual(mockResponse)
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/accidents/metadata')
    )
  })

  it('should throw error when response is not ok', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    } as Response)

    await expect(getFilters()).rejects.toThrow('Failed to fetch filter options')
  })
})
