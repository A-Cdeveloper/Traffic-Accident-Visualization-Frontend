import { Checkbox } from '@/components/ui/checkbox'
import type { FilterOption } from '@/types/accedents'

type CategoryCheckboxProps = {
  category: FilterOption
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  disabled?: boolean
}

/**
 * CategoryCheckbox component - Checkbox for accident categories.
 */
const CategoryCheckbox = ({ category, checked, onCheckedChange, disabled }: CategoryCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        data-testid={`category-checkbox-${category.value}`}
        id={category.value}
        name={category.value}
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked === true)}
        disabled={disabled}
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
