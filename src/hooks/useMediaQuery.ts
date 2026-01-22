import { useState, useEffect } from 'react'

/**
 * Hook that subscribes to a media query and returns a boolean.
 * Only re-renders when the boolean value changes (crossing the breakpoint),
 * not on every pixel change.
 * 
 * @param query - CSS media query string (e.g., '(max-width: 767px)')
 * @returns boolean indicating if the media query matches
 * 
 * @example
 * const isMobile = useMediaQuery('(max-width: 767px)')
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)
    
    // Update state when query matches (only in callback, not synchronously)
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } 
    // Fallback for older browsers
    else {
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [query])

  return matches
}
