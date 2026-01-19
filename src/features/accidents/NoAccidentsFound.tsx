import { AlertCircle } from 'lucide-react'

const NoAccidentsFound = () => {
  return (
    <div data-testid="no-accidents-found" className="flex items-center justify-center h-full p-4">
      <div className="text-center" role="status">
        <AlertCircle className="w-16 h-16 mx-auto mb-4 text-muted-foreground" aria-hidden="true" />
        <h2 className="text-xl font-semibold mb-2">Nema pronađenih rezultata</h2>
        <p className="text-sm text-muted-foreground">
          Pokušajte da promenite filtere kako biste pronašli rezultate.
        </p>
      </div>
    </div>
  )
}

export default NoAccidentsFound