import type { FilterOption } from '@/types/accedents'

type StatisticSectionProps = {
  title: string
  items: FilterOption[]
  counts: Record<string, number>
}

/**
 * StatisticSection component - Displays a list of statistics with counts.
 */
const StatisticSection = ({ title, items, counts }: StatisticSectionProps) => {
  if (items.length === 0) return null

  return (
    <div className="space-y-2">
      <h3 className="font-medium mb-1">{title}</h3>
      <div className="space-y-1">
        {items.map((item) => (
          <div key={item.value} className="flex justify-between">
            <span className="text-muted-foreground">{item.label}:</span>
            <span className="font-medium">{counts[item.value] || 0}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatisticSection
