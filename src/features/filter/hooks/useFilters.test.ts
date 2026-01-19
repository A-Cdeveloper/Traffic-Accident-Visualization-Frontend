import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { useFilters } from './useFilters'
import { getFilters } from '../api/getFilters'
import type { MetadataResponse } from '@/types/accedents'
import { mockCategories, mockAccidentTypes } from '@/test/test-utils'

// Mock the API function
vi.mock('../api/getFilters')

describe('useFilters hook', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
    vi.clearAllMocks()
  })

  const wrapper = ({ children }: { children: React.ReactNode }) =>
    React.createElement(QueryClientProvider, { client: queryClient }, children)

  it('should fetch filters successfully', async () => {
    const mockResponse: MetadataResponse = {
      accidentTypes: mockAccidentTypes,
      categories: mockCategories,
    }

    vi.mocked(getFilters).mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useFilters(), { wrapper })

    // Initially loading
    expect(result.current.isLoading).toBe(true)

    // Wait for data
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data).toEqual(mockResponse)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe(null)
  })

  it('should handle error when fetch fails', async () => {
    const mockError = new Error('Failed to fetch filter options')
    vi.mocked(getFilters).mockRejectedValue(mockError)

    const { result } = renderHook(() => useFilters(), { wrapper })

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    expect(result.current.error).toEqual(mockError)
    expect(result.current.data).toBeUndefined()
    expect(result.current.isLoading).toBe(false)
  })

  it('should call getFilters API function', async () => {
    const mockResponse: MetadataResponse = {
      accidentTypes: mockAccidentTypes,
      categories: mockCategories,
    }

    vi.mocked(getFilters).mockResolvedValue(mockResponse)

    renderHook(() => useFilters(), { wrapper })

    await waitFor(() => {
      expect(getFilters).toHaveBeenCalledTimes(1)
    })
  })

  it('should have correct queryKey', async () => {
    const mockResponse: MetadataResponse = {
      accidentTypes: mockAccidentTypes,
      categories: mockCategories,
    }

    vi.mocked(getFilters).mockResolvedValue(mockResponse)

    renderHook(() => useFilters(), { wrapper })

    // Wait for query to be created
    await waitFor(() => {
      expect(queryClient.getQueryCache().find({ queryKey: ['filters'] })).toBeDefined()
    })
  })
})
