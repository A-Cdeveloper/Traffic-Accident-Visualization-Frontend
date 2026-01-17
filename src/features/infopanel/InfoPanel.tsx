const InfoPanel = () => {
  return (
    <div className="text-[13px]">
      <div className="grid grid-cols-1 gap-4">
        {/* Period */}
        <div className="space-y-2">

          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-muted-foreground">Od:</span>
              <p>01.01.2024</p>
            </div>
            <div>
              <span className="text-muted-foreground">Do:</span>
              <p>31.12.2024</p>
            </div>
          </div>
        </div>

        {/* Broj nesreća po kategoriji */}
        <div className="space-y-2">
          <h3 className="font-medium text-muted-foreground">Broj nesreća po kategoriji</h3>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Kategorija 1:</span>
              <span className="font-medium">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Kategorija 2:</span>
              <span className="font-medium">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Kategorija 3:</span>
              <span className="font-medium">0</span>
            </div>
          </div>
        </div>

        {/* Broj nesreća po tipu */}
        <div className="space-y-2">
          <h3 className="font-medium text-muted-foreground">Broj nesreća po tipu</h3>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tip 1:</span>
              <span className="font-medium">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tip 2:</span>
              <span className="font-medium">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tip 3:</span>
              <span className="font-medium">0</span>
            </div>
          </div>
        </div>

        {/* Ukupan broj nesreća */}
        <div className="space-y-2 pt-2 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Ukupan broj nesreća:</span>
            <span className="font-bold text-md">0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel