import { Checkbox } from '@/components/ui/checkbox'
import { categoryColorMap } from '@/features/map/constants'
import type { FilterOption } from '@/types/accedents'

type CategoryCheckboxProps = {
  category: FilterOption
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  disabled?: boolean
}

/**
 * CategoryCheckbox component - Checkbox with color indicator for accident categories.
 */
const CategoryCheckbox = ({ category, checked, onCheckedChange, disabled }: CategoryCheckboxProps) => {
  const color = categoryColorMap[category.label] || '#6b7280'

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={category.value}
        name={category.value}
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked === true)}
        disabled={disabled}
      />
      <div
        className="w-3 h-3 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <label
        htmlFor={category.value}
        className="text-[13px] font-normal cursor-pointer leading-normal"
      >
        {category.label}
      </label>
    </div>
  )
}

export default CategoryCheckbox
