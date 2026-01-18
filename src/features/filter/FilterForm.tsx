import { useState } from 'react'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useQueryStates, parseAsString, parseAsArrayOf } from 'nuqs'
import { useFilters } from './hooks/useFilters'
import { validateDateRange } from '@/utils/dates'

const FilterForm = () => {
  const [filters, setFilters] = useQueryStates({
    startDate: parseAsString,
    endDate: parseAsString,
    accidentType: parseAsString,
    categories: parseAsArrayOf(parseAsString),
  })

  const { data: filterOptions, isLoading: isLoadingOptions } = useFilters()

  // Ograničenja za datume
  const minDate = '2020-01-01'
  const maxDate = new Date().toISOString().split('T')[0] // Danas u formatu YYYY-MM-DD

  // Lokalno stanje forme - menja se samo u formi, ne primenjuje se dok se ne klikne "Primeni"
  const [localFilters, setLocalFilters] = useState({
    startDate: filters.startDate || '',
    endDate: filters.endDate || '',
    accidentType: filters.accidentType || 'all',
    categories: filters.categories || [] as string[],
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validacija datuma
    const dateValidation = validateDateRange(localFilters.startDate, localFilters.endDate, true)
    if (!dateValidation.isValid) {
      toast.error(dateValidation.errorMessage)
      return
    }
    
    // Primenjujemo filtere tek na submit
    setFilters({
      startDate: localFilters.startDate || null,
      endDate: localFilters.endDate || null,
      accidentType: localFilters.accidentType && localFilters.accidentType !== 'all' ? localFilters.accidentType : null,
      categories: localFilters.categories.length > 0 ? localFilters.categories : null,
    })
  }

  const handleReset = () => {
    // Resetujemo lokalno stanje
    setLocalFilters({
      startDate: '',
      endDate: '',
      accidentType: 'all',
      categories: [],
    })
    
    // Resetujemo i URL filtere
    setFilters({
      startDate: null,
      endDate: null,
      accidentType: null,
      categories: null,
    })
  }

  const handleCategoryToggle = (categoryValue: string, checked: boolean) => {
    setLocalFilters(prev => ({
      ...prev,
      categories: checked
        ? [...prev.categories, categoryValue]
        : prev.categories.filter(cat => cat !== categoryValue)
    }))
  }

  return (
    <form 
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="space-y-5 text-[13px] bg-muted p-4 rounded-md"
    >
      {/* Datum od i do */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <label htmlFor="date-from" className="text-[13px] font-medium">
            Datum od
          </label>
          <Input
            id="date-from"
            name="startDate"
            type="date"
            value={localFilters.startDate}
            onChange={(e) => setLocalFilters(prev => ({ ...prev, startDate: e.target.value }))}
            min={minDate}
            max={maxDate}
            className="w-full text-[13px] mt-1 pr-0 pl-1"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="date-to" className="text-[13px] font-medium">
            Datum do
          </label>
          <Input
            id="date-to"
            name="endDate"
            type="date"
            value={localFilters.endDate}
            onChange={(e) => setLocalFilters(prev => ({ ...prev, endDate: e.target.value }))}
            min={minDate}
            max={maxDate}
            className="w-full text-[13px] mt-1 pr-1 pl-1"
          />
        </div>
      </div>

      {/* Tip nesreće */}
      <div className="space-y-2">
        <Select
          name="accidentType"
          value={localFilters.accidentType}
          onValueChange={(value) => setLocalFilters(prev => ({ ...prev, accidentType: value }))}
          disabled={isLoadingOptions}
        >
          <SelectTrigger id="accidentType" className="w-full text-[13px]">
            <SelectValue placeholder="Izaberi tip nesreće" />
          </SelectTrigger>
          <SelectContent className="text-[13px]">
            <SelectItem value="all">Svi tipovi</SelectItem>
            {filterOptions?.accidentTypes.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Kategorije */}
      <fieldset className="space-y-2">
        <div className="space-y-3">
          {filterOptions?.categories.map((category) => (
            <div key={category.value} className="flex items-center space-x-2">
              <Checkbox 
                id={category.value}
                name={category.value}
                checked={localFilters.categories.includes(category.value)}
                onCheckedChange={(checked) => handleCategoryToggle(category.value, checked === true)}
                disabled={isLoadingOptions}
              />
              <label
                htmlFor={category.value}
                className="text-[13px] font-normal cursor-pointer"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Dugmad */}
      <div className="flex gap-3 pt-2">
        <Button type="submit" className="flex-1 text-[13px]">
          Primeni
        </Button>
        <Button type="reset" variant="outline" className="flex-1 text-[13px]">
          Reset
        </Button>
      </div>
    </form>
  )
}

export default FilterForm