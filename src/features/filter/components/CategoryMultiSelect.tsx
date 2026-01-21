import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronDownIcon } from 'lucide-react'
import type { FilterOption } from '@/types/accedents'
import { cn } from '@/lib/utils'

type CategoryMultiSelectProps = {
  options: FilterOption[] | undefined
  value: string[]
  onValueChange: (value: string[]) => void
  disabled?: boolean
}

/**
 * CategoryMultiSelect component - Multi-select dropdown for accident categories.
 * Uses Popover with checkboxes for category selection.
 */
const CategoryMultiSelect = ({ options, value, onValueChange, disabled }: CategoryMultiSelectProps) => {
  const [open, setOpen] = useState(false)

  const handleToggle = (categoryValue: string, checked: boolean) => {
    if (checked) {
      onValueChange([...value, categoryValue])
    } else {
      onValueChange(value.filter(cat => cat !== categoryValue))
    }
  }

  const selectedCount = value.length
  const displayText = selectedCount === 0 
    ? 'Izaberi kategorije' 
    : selectedCount === 1 
    ? '1 kategorija' 
    : `${selectedCount} kategorije`

  return (
    <div className="space-y-2">
      <label htmlFor="categories" className="text-[13px] font-medium">
        Kategorije nesreća
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            data-testid="category-multiselect"
            id="categories"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              "w-full justify-between text-[13px] font-normal",
              !selectedCount && "text-muted-foreground"
            )}
          >
            {displayText}
            <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-3 z-[100000000]" align="start">
          <div className="space-y-3 max-h-[300px] overflow-y-auto">
            {options?.map((category) => {
              const checked = value.includes(category.value)
              return (
                <div key={category.value} className="flex items-center space-x-2">
                  <Checkbox
                    data-testid={`category-checkbox-${category.value}`}
                    id={`multiselect-${category.value}`}
                    checked={checked}
                    onCheckedChange={(checked) => handleToggle(category.value, checked === true)}
                    disabled={disabled}
                  />
                  <label
                    htmlFor={`multiselect-${category.value}`}
                    className="text-[13px] font-normal cursor-pointer leading-normal flex-1"
                  >
                    {category.label}
                  </label>
                </div>
              )
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CategoryMultiSelect
