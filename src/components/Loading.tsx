import { Spinner } from "./ui/spinner"
import { cn } from "@/lib/utils"


const Loading = ({className}: {className?: string}) => {
  return (
    <div className="flex items-center justify-center h-full gap-2">
        <Spinner className={cn("size-6 animate-spin", className)} />
        <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  )
}

export default Loading