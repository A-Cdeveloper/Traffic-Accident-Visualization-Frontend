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

const FilterForm = () => {
  return (
    <form className="space-y-5 text-[13px]">
      {/* Datum od */}
      <div className="space-y-2">
        <label htmlFor="date-from" className="text-[13px] font-medium">
          Datum od
        </label>
        <Input
          id="date-from"
          type="date"
          className="w-full text-[13px] mt-1"
        />
      </div>

      {/* Datum do */}
      <div className="space-y-2">
        <label htmlFor="date-to" className="text-[13px] font-medium">
          Datum do
        </label>
        <Input
          id="date-to"
          type="date"
          className="w-full text-[13px] mt-1"
        />
      </div>

      {/* Kategorija */}
      <div className="space-y-2">
        <Select>
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
            <Checkbox id="type1" />
            <label
              htmlFor="type1"
              className="text-[13px] font-normal cursor-pointer"
            >
              Tip 1
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type2" />
            <label
              htmlFor="type2"
              className="text-[13px] font-normal cursor-pointer"
            >
              Tip 2
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type3" />
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