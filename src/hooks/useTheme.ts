import { useEffect, useState } from 'react'

const THEME_KEY = 'theme:v1'

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || "dark";
    } catch {
      // localStorage unavailable (incognito, disabled, quota exceeded)
      return "dark";
    }
  });

  useEffect(() => {
    try {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // localStorage unavailable - silently fail
      // Theme will still work, just won't persist
    }
  }, [theme]);

  return [theme, setTheme] as const;
}

export default useTheme