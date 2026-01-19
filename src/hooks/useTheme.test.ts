import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useTheme from './useTheme'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('useTheme hook', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Reset document classList
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('should initialize with "light" theme when localStorage is empty', () => {
    const { result } = renderHook(() => useTheme())

    expect(result.current[0]).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('should initialize with theme from localStorage', () => {
    localStorage.setItem('theme', 'dark')

    const { result } = renderHook(() => useTheme())

    expect(result.current[0]).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('should update theme and apply dark class when setTheme is called', () => {
    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current[1]('dark')
    })

    expect(result.current[0]).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('should remove dark class when theme is set to light', () => {
    localStorage.setItem('theme', 'dark')
    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current[1]('light')
    })

    expect(result.current[0]).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('should save theme to localStorage when changed', () => {
    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current[1]('dark')
    })

    expect(localStorage.getItem('theme')).toBe('dark')

    act(() => {
      result.current[1]('light')
    })

    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('should return a tuple with theme and setTheme function', () => {
    const { result } = renderHook(() => useTheme())

    expect(Array.isArray(result.current)).toBe(true)
    expect(result.current).toHaveLength(2)
    expect(typeof result.current[0]).toBe('string')
    expect(typeof result.current[1]).toBe('function')
  })
})
