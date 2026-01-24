import { format, isValid, parseISO, isBefore, isAfter, endOfDay } from 'date-fns'
import { sr } from 'date-fns/locale'

export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return '-'
  try {
    const date = parseISO(dateString)
    if (!isValid(date)) return '-'
    return format(date, 'dd. MM. yyyy', { locale: sr })
  } catch {
    return '-'
  }
}

export const formatDateTime = (dateString: string): string => {
  try {
    const date = parseISO(dateString)
    if (!isValid(date)) return dateString
    return format(date, 'dd.MM.yyyy. HH:mm', { locale: sr }) + 'h'
  } catch {
    return dateString
  }
}

export type DateValidationResult = {
  isValid: boolean
  errorMessage?: string
}

export const validateDateRange = (
  startDate: string | null | undefined,
  endDate: string | null | undefined
): DateValidationResult => {
  // Both dates are always required
  if (!startDate || !endDate) {
    return { isValid: false, errorMessage: 'Oba datuma su obavezna' }
  }

  try {
    const start = parseISO(startDate)
    const end = parseISO(endDate)
    const minDate = parseISO('2020-01-01')
    const maxDate = endOfDay(new Date())

    // Check if dates are valid
    if (!isValid(start) || !isValid(end)) {
      return { isValid: false, errorMessage: 'Nevažeći format datuma' }
    }

    // Check if startDate is before endDate
    if (isAfter(start, end)) {
      return { isValid: false, errorMessage: 'Datum početka mora biti pre datuma završetka intervala' }
    }

    // Check if dates are within valid range
    if (isBefore(start, minDate) || isAfter(start, maxDate) || isBefore(end, minDate) || isAfter(end, maxDate)) {
      return { isValid: false, errorMessage: 'Datumi moraju biti između 01.01.2020 i danas' }
    }

    return { isValid: true }
  } catch {
    return { isValid: false, errorMessage: 'Greška pri validaciji datuma' }
  }
}
