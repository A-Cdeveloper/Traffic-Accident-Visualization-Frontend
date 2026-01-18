import { format, isValid, parseISO, isBefore, isAfter, endOfDay } from 'date-fns'
import { sr } from 'date-fns/locale'

export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return '-'
  try {
    const date = parseISO(dateString)
    if (!isValid(date)) return '-'
    return format(date, 'dd.MM.yyyy', { locale: sr })
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
  endDate: string | null | undefined,
  requireBoth: boolean = false
): DateValidationResult => {
  // Ako nema oba datuma i nije obavezno, validacija je ok
  if (!requireBoth && (!startDate || !endDate)) {
    return { isValid: true }
  }

  // Ako je obavezno oba datuma, proveri
  if (requireBoth && (!startDate || !endDate)) {
    return { isValid: false, errorMessage: 'Oba datuma su obavezna' }
  }

  if (!startDate || !endDate) {
    return { isValid: true }
  }

  try {
    const start = parseISO(startDate)
    const end = parseISO(endDate)
    const minDate = parseISO('2020-01-01')
    const maxDate = endOfDay(new Date())

    // Proveri da li su datumi validni
    if (!isValid(start) || !isValid(end)) {
      return { isValid: false, errorMessage: 'Nevažeći format datuma' }
    }

    // Proveri da li je startDate pre endDate
    if (isAfter(start, end)) {
      return { isValid: false, errorMessage: 'Datum početka mora biti pre datuma završetka intervala' }
    }

    // Proveri da li su datumi u validnom opsegu
    if (isBefore(start, minDate) || isAfter(start, maxDate) || isBefore(end, minDate) || isAfter(end, maxDate)) {
      return { isValid: false, errorMessage: 'Datumi moraju biti između 01.01.2020 i danas' }
    }

    return { isValid: true }
  } catch {
    return { isValid: false, errorMessage: 'Greška pri validaciji datuma' }
  }
}
