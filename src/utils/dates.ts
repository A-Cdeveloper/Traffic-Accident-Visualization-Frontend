export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return '-'
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('sr-RS', { day: '2-digit', month: '2-digit', year: 'numeric' })
  } catch {
    return '-'
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

  const start = new Date(startDate)
  const end = new Date(endDate)
  const minDate = new Date('2020-01-01')
  const maxDate = new Date()
  maxDate.setHours(23, 59, 59, 999) // Kraj dana

  // Proveri da li je startDate pre endDate
  if (start > end) {
    return { isValid: false, errorMessage: 'Datum "od" mora biti pre datuma "do"' }
  }

  // Proveri da li su datumi u validnom opsegu
  if (start < minDate || start > maxDate || end < minDate || end > maxDate) {
    return { isValid: false, errorMessage: 'Datumi moraju biti između 01.01.2020 i danas' }
  }

  return { isValid: true }
}
