import useTheme from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitch = () => {
    const [theme, setTheme] = useTheme();
  return (
    <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="p-2 hover:bg-muted rounded-md transition-colors"
    aria-label="Toggle theme"
  >
    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
  )
};

export default ThemeSwitch