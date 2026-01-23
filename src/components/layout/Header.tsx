import { Link } from "react-router";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header data-testid="header" className="w-full h-16 border-b border-border bg-card flex items-center justify-between px-4 shrink-0">
      <div className="flex flex-col items-center justify-center gap-0 w-full mb-0">
      <h1 className="font-semibold mx-auto" style={{ fontSize: 'clamp(0.875rem, 2vw + 0.5rem, 1.25rem)' }}>
        <Link to="/">Saobraćajne nesreće Vlasotince</Link>
      </h1>
        <span className="d-block text-[12px] text-muted-foreground">Poslednji update: 23.01.2026.</span>
      </div>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
