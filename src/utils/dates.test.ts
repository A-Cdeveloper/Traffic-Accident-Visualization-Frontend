import { describe, it, expect } from 'vitest'
import { formatDate, formatDateTime, validateDateRange } from './dates'
/* test formatDate */
describe('formatDate', () => {
  it('formats date correctly', () => {
    expect(formatDate('2025-01-15')).toBe('15. 01. 2025')
  })

  it('returns "-" for null date', () => {
    expect(formatDate(null)).toBe('-')
  })
  it('returns "-" for undefined date', () => {
    expect(formatDate(undefined)).toBe('-')
  })
  
  it('returns "-" for empty string', () => {
    expect(formatDate('')).toBe('-')
  })
  
  it('returns "-" for invalid date string', () => {
    expect(formatDate('invalid-date')).toBe('-')
  })
})

/* test formatDateTime */
describe('formatDateTime', () => {
  it('formats date time correctly', () => {
    expect(formatDateTime('2025-01-15T10:00:00')).toBe('15.01.2025. 10:00h')
  })

  it('returns date string for invalid date', () => {
    expect(formatDateTime('invalid-date')).toBe('invalid-date')
  })
  it('returns date string for empty string', () => {
    expect(formatDateTime('')).toBe('')
  })
  
  it('formats date time with different time formats', () => {
    expect(formatDateTime('2025-01-15T23:59:59')).toBe('15.01.2025. 23:59h')
  })
})

/* test validateDateRange */
describe('validateDateRange', () => {
  describe('required dates validation', () => {
    it('returns invalid when dates are missing (null or undefined)', () => {
      expect(validateDateRange(null, null).isValid).toBe(false)
      expect(validateDateRange(undefined, undefined).isValid).toBe(false)
      expect(validateDateRange(null, '2025-01-15').isValid).toBe(false)
      expect(validateDateRange('2025-01-15', null).isValid).toBe(false)
      expect(validateDateRange(undefined, '2025-01-15').isValid).toBe(false)
      expect(validateDateRange('2025-01-15', undefined).isValid).toBe(false)
      
      // All should have the same error message
      expect(validateDateRange(null, null).errorMessage).toBe('Oba datuma su obavezna')
    })
  })

  describe('valid date ranges', () => {
    it('returns valid when both dates are valid and startDate is before endDate', () => {
      const result = validateDateRange('2025-01-15', '2025-01-16')
      expect(result.isValid).toBe(true)
    })

    it('returns valid when startDate equals endDate', () => {
      const result = validateDateRange('2025-01-15', '2025-01-15')
      expect(result.isValid).toBe(true)
    })

    it('returns valid when dates are within valid range (2020-01-01 to today)', () => {
      const result = validateDateRange('2020-01-01', new Date().toISOString().split('T')[0])
      expect(result.isValid).toBe(true)
    })
  })

  describe('invalid date ranges', () => {
    it('returns invalid when startDate is after endDate', () => {
      const result = validateDateRange('2025-01-16', '2025-01-15')
      expect(result.isValid).toBe(false)
      expect(result.errorMessage).toBe('Datum početka mora biti pre datuma završetka intervala')
    })

    it('returns invalid when dates are outside valid range (before 2020-01-01 or after today)', () => {
      // Before min date
      expect(validateDateRange('2019-12-31', '2020-01-01').isValid).toBe(false)
      expect(validateDateRange('2020-01-01', '2019-12-31').isValid).toBe(false)
      
      // After today
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      const tomorrowStr = tomorrow.toISOString().split('T')[0]
      expect(validateDateRange(tomorrowStr, tomorrowStr).isValid).toBe(false)
      expect(validateDateRange('2025-01-15', tomorrowStr).isValid).toBe(false)
      
      // All should have the same error message
      expect(validateDateRange('2019-12-31', '2020-01-01').errorMessage).toBe('Datumi moraju biti između 01.01.2020 i danas')
    })

    it('returns invalid when date format is invalid', () => {
      expect(validateDateRange('invalid-date', '2025-01-15').isValid).toBe(false)
      expect(validateDateRange('invalid-1', 'invalid-2').isValid).toBe(false)
      expect(validateDateRange('invalid-date', '2025-01-15').errorMessage).toBe('Nevažeći format datuma')
    })
  })
})
