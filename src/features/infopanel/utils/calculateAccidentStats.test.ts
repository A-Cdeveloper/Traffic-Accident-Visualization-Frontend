import { describe, it, expect } from 'vitest'
import { calculateAccidentStats } from './calculateAccidentStats'
import { mockAccidents, mockCategories, mockAccidentTypes, createMockAccident } from '@/test/test-utils'

describe('calculateAccidentStats', () => {
  describe('category counting', () => {
    it('counts accidents by category and maps backend labels to frontend values', () => {
      // Multiple categories
      const result1 = calculateAccidentStats(
        mockAccidents,
        mockCategories,
        ['jedno-vozilo', 'pesaci'],
        'category'
      )
      expect(result1.counts['jedno-vozilo']).toBe(2)
      expect(result1.counts['pesaci']).toBe(1)
      expect(result1.itemsToShow).toHaveLength(2)

      // Single category
      const result2 = calculateAccidentStats(
        mockAccidents,
        mockCategories,
        ['jedno-vozilo'],
        'category'
      )
      expect(result2.counts['jedno-vozilo']).toBe(2)
      expect(result2.counts['pesaci']).toBeUndefined()
      expect(result2.itemsToShow).toHaveLength(1)
    })
  })

  describe('accidentType counting', () => {
    it('counts accidents by type correctly', () => {
      expect(calculateAccidentStats(mockAccidents, mockAccidentTypes, 'materijalna', 'accidentType').counts['materijalna']).toBe(2)
      expect(calculateAccidentStats(mockAccidents, mockAccidentTypes, 'povredjeni', 'accidentType').counts['povredjeni']).toBe(1)
      expect(calculateAccidentStats(mockAccidents, mockAccidentTypes, 'materijalna', 'accidentType').itemsToShow).toHaveLength(1)
    })
  })

  describe('edge cases', () => {
    it('returns empty result when input data is missing', () => {
      expect(calculateAccidentStats(undefined, mockCategories, ['jedno-vozilo'], 'category')).toEqual({ counts: {}, itemsToShow: [] })
      expect(calculateAccidentStats(mockAccidents, undefined, ['jedno-vozilo'], 'category')).toEqual({ counts: {}, itemsToShow: [] })
      expect(calculateAccidentStats(mockAccidents, mockCategories, null, 'category')).toEqual({ counts: {}, itemsToShow: [] })
      expect(calculateAccidentStats(mockAccidents, mockCategories, [], 'category')).toEqual({ counts: {}, itemsToShow: [] })
      expect(calculateAccidentStats(mockAccidents, mockCategories, ['non-existent-category'], 'category')).toEqual({ counts: {}, itemsToShow: [] })
    })

    it('handles empty accidents array correctly', () => {
      const result = calculateAccidentStats([], mockCategories, ['jedno-vozilo'], 'category')
      expect(result.counts['jedno-vozilo']).toBe(0)
      expect(result.itemsToShow).toHaveLength(1)
    })

    it('ignores accidents with categories not in filterOptions', () => {
      const accidentsWithUnknownCategory = [
        ...mockAccidents,
        createMockAccident({
          id: 4,
          accidentId: 104,
          category: 'Unknown Category',
        }),
      ]

      const result = calculateAccidentStats(
        accidentsWithUnknownCategory,
        mockCategories,
        ['jedno-vozilo', 'pesaci'],
        'category'
      )

      expect(result.counts['jedno-vozilo']).toBe(2)
      expect(result.counts['pesaci']).toBe(1)
      expect(result.counts['unknown-category']).toBeUndefined()
    })
  })
})
