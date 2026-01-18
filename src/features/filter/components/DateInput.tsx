import { Input } from '@/components/ui/input'

type DateInputProps = {
  id: string
  name: string
  label: string
  value: string
  onChange: (value: string) => void
  min: string
  max: string
  className?: string
}

/**
 * DateInput component - Reusable date input field with label.
 */
const DateInput = ({ id, name, label, value, onChange, min, max, className }: DateInputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-[13px] font-medium">
        {label}
      </label>
      <Input
        id={id}
        name={name}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        className={`w-full text-[13px] mt-1 ${className || ''}`}
      />
    </div>
  )
}

export default DateInput
