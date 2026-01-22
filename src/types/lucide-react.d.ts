// Type declarations for direct lucide-react icon imports
// This allows importing icons directly from dist/esm/icons/*.js
// to avoid barrel file imports (200-800ms import cost)

declare module 'lucide-react/dist/esm/icons/*.js' {
  import { type LucideIcon } from 'lucide-react'
  const Icon: LucideIcon
  export default Icon
}
