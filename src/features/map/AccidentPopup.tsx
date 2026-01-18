import { Separator } from '@/components/ui/separator'
import type { Accident } from '@/types/accedents'
import { formatDateTime } from '@/utils/dates'

type AccidentPopupProps = {
  accident: Accident
}

type InfoRowProps = {
  label: string
  value: string | number
}

/**
 * InfoRow component - Displays a label-value pair in a consistent format.
 */
const InfoRow = ({ label, value }: InfoRowProps) => (
  <div className="flex flex-col justify-start">
    <span className="text-[11px] text-muted-foreground">{label}:</span>
    <p className="font-medium m-0! my-0.5! not-odd: text-foreground">{value}</p>
  </div>
)

/**
 * AccidentPopup component - Detailed popup displaying accident information.
 * Shows accident type, ID, police department, time, station, participants, and description.
 * Background color matches the accident category color.
 */
const AccidentPopup = ({ accident }: AccidentPopupProps) => {
  return (
    <div 
      className="max-w-[100vw]"
    >
      <div className="py-4 px-6">
        {/* Header with title */}
        <h3 className="text-md font-bold text-foreground uppercase tracking-wider">
          {accident.accidentType}
        </h3>
        <Separator className="my-4 bg-foreground/20" />

        {/* Two columns with information */}
        <div className="grid grid-cols-2 gap-4 mb-1 text-[12px]">
          {/* Left column */}
          <div className="space-y-4">
            <InfoRow label="ID" value={`#${accident.accidentId}`} />
            <InfoRow label="Policijska uprava" value={accident.pdepartment} />
            <InfoRow label="Vreme" value={formatDateTime(accident.dateTime)} />
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <InfoRow label="MUP" value={`#${accident.id}`} />
            <InfoRow label="Stanica" value={accident.pstation} />
            <InfoRow label="Učesnici" value={accident.category} />
          </div>
        </div>

        {/* Horizontal separator */}
        <Separator className="my-4 bg-foreground/20" />

        {/* Official description */}
        {accident.description && (
          <div>
            <h4 className="text-xs text-foreground mb-3">Službeni opis</h4>
            <div className="bg-muted p-2 rounded-md">
              <p className="italic text-muted-foreground leading-normal m-0!">
                {accident.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AccidentPopup
