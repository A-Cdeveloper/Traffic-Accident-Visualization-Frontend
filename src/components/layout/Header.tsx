import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  return (
    <header className="w-full h-16 border-b border-border bg-card flex items-center justify-between px-4 shrink-0">
      <h1 className="text-xl font-semibold">Traffic Accident Vlasotince</h1>
      <button
        onClick={toggleTheme}
        className="p-2 hover:bg-muted rounded-md transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  );
};

export default Header;
