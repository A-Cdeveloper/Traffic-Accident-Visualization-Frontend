import { formatDate } from '@/utils/dates'

type DateRangeSectionProps = {
  startDate: string | null | undefined
  endDate: string | null | undefined
}

/**
 * DateRangeSection component - Displays the date range filter period.
 */
const DateRangeSection = ({ startDate, endDate }: DateRangeSectionProps) => {
  if (!startDate && !endDate) return null

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <span>Od:</span>
          <p className="text-muted-foreground">{formatDate(startDate)}</p>
        </div>
        <div>
          <span>Do:</span>
          <p className="text-muted-foreground">{formatDate(endDate)}</p>
        </div>
      </div>
    </div>
  )
}

export default DateRangeSection
