import { Link } from "react-router";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="w-full h-16 border-b border-border bg-card flex items-center justify-between px-4 shrink-0">
      <h1 className="text-xl font-semibold mx-auto">
        <Link to="/">Saobraćajne nesreće Vlasotince (2020-2025)</Link>
      </h1>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
