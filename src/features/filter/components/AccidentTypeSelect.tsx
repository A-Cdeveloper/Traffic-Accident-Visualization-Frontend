import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { FilterOption } from '@/types/accedents'

type AccidentTypeSelectProps = {
  value: string
  onValueChange: (value: string) => void
  options: FilterOption[] | undefined
  disabled?: boolean
}

/**
 * AccidentTypeSelect component - Select dropdown for accident types.
 */
const AccidentTypeSelect = ({ value, onValueChange, options, disabled }: AccidentTypeSelectProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor="accidentType" className="text-[13px] font-medium">
        Tip nesreće
      </label>
      <Select
        name="accidentType"
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <SelectTrigger id="accidentType" className="w-full text-[13px]">
          <SelectValue placeholder="Izaberi tip nesreće" />
        </SelectTrigger>
        <SelectContent className="text-[13px]">
          <SelectItem value="all">Svi tipovi</SelectItem>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default AccidentTypeSelect
