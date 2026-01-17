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

const FilterForm = () => {
  const [filters, setFilters] = useQueryStates({
    startDate: parseAsString,
    endDate: parseAsString,
    accidentType: parseAsString,
    categories: parseAsArrayOf(parseAsString),
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const startDate = formData.get('startDate') as string
    const endDate = formData.get('endDate') as string
    const accidentType = formData.get('accidentType') as string
    const categories: string[] = []
    
    if (formData.get('type1') === 'on') categories.push('type1')
    if (formData.get('type2') === 'on') categories.push('type2')
    if (formData.get('type3') === 'on') categories.push('type3')

    setFilters({
      startDate: startDate || null,
      endDate: endDate || null,
      accidentType: accidentType && accidentType !== 'all' ? accidentType : null,
      categories: categories.length > 0 ? categories : null,
    })
  }

  const handleReset = () => {
    setFilters({
      startDate: null,
      endDate: null,
      accidentType: null,
      categories: null,
    })
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
            defaultValue={filters.startDate || ''}
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
            defaultValue={filters.endDate || ''}
            className="w-full text-[13px] mt-1 pr-1 pl-1"
          />
        </div>
      </div>

      {/* Kategorija */}
      <div className="space-y-2">
        <Select
          name="accidentType"
          value={filters.accidentType || 'all'}
          onValueChange={(value) => 
            setFilters({ accidentType: value === 'all' ? null : value })
          }
        >
          <SelectTrigger id="category" className="w-full text-[13px]">
            <SelectValue placeholder="Izaberi kategoriju" />
          </SelectTrigger>
          <SelectContent className="text-[13px]">
            <SelectItem value="all">Sve kategorije</SelectItem>
            <SelectItem value="category1">Kategorija 1</SelectItem>
            <SelectItem value="category2">Kategorija 2</SelectItem>
            <SelectItem value="category3">Kategorija 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tip - tri checkboxa */}
      <fieldset className="space-y-2">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="type1" 
              name="type1"
              checked={filters.categories?.includes('type1') || false}
              onCheckedChange={(checked) => {
                const currentCategories = filters.categories || []
                const newCategories = checked
                  ? [...currentCategories, 'type1']
                  : currentCategories.filter(cat => cat !== 'type1')
                setFilters({ categories: newCategories.length > 0 ? newCategories : null })
              }}
            />
            <label
              htmlFor="type1"
              className="text-[13px] font-normal cursor-pointer"
            >
              Tip 1
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="type2" 
              name="type2"
              checked={filters.categories?.includes('type2') || false}
              onCheckedChange={(checked) => {
                const currentCategories = filters.categories || []
                const newCategories = checked
                  ? [...currentCategories, 'type2']
                  : currentCategories.filter(cat => cat !== 'type2')
                setFilters({ categories: newCategories.length > 0 ? newCategories : null })
              }}
            />
            <label
              htmlFor="type2"
              className="text-[13px] font-normal cursor-pointer"
            >
              Tip 2
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="type3" 
              name="type3"
              checked={filters.categories?.includes('type3') || false}
              onCheckedChange={(checked) => {
                const currentCategories = filters.categories || []
                const newCategories = checked
                  ? [...currentCategories, 'type3']
                  : currentCategories.filter(cat => cat !== 'type3')
                setFilters({ categories: newCategories.length > 0 ? newCategories : null })
              }}
            />
            <label
              htmlFor="type3"
              className="text-[13px] font-normal cursor-pointer"
            >
              Tip 3
            </label>
          </div>
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