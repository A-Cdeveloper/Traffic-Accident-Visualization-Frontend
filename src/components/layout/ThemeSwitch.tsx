import useTheme from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';

const ThemeSwitch = () => {
    const [theme, setTheme] = useTheme();
  return (
    <Button
    variant="ghost"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="p-2 hover:bg-muted rounded-md transition-colors cursor-pointer"
    aria-label="Toggle theme"
  >
    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </Button>
  )
};

export default ThemeSwitch