import { Link } from "react-router";

/**
 * Navigation items configuration for the footer meta navigation.
 * Contains links to legal and contact pages.
 */
const naviItems = [
  {
    label: "Impressum",
    to: "/impressum",
  },
  {
    label: "Kontakt",
    to: "/kontakt",
  },
];

/**
 * MetaNavigation component renders footer navigation links.
 * Displays legal and contact page links with hover effects.
 */
const MetaNavigation = () => {
  return (
    <nav className="flex items-center gap-4 text-[12px] text-muted-foreground dark:text-muted-foreground/60">
      {naviItems.map((item) => (
        <Link
          to={item.to}
          className="hover:text-foreground dark:hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

/**
 * Footer component displays the application footer with copyright information
 * and meta navigation links.
 *
 * Features:
 * - Dynamic copyright year
 * - Link to E-SEO TEAM website
 * - Meta navigation (Impressum, Kontakt)
 * - Responsive design with dark mode support
 */
const Footer = () => {
  return (
    <footer className="w-full h-12 border-t border-border bg-card flex items-center justify-between shrink-0 gap-4 px-6">
      <p className="text-[12px] text-muted-foreground dark:text-muted-foreground/60">
        © {new Date().getFullYear()} Traffic Accident Vlasotince | All rights
        reserved |{" "}
        <Link to="https://e-seo.info" target="_blank">
          E-SEO TEAM
        </Link>
      </p>
      <MetaNavigation />
    </footer>
  );
};

export default Footer;
