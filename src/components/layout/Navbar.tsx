
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "../ThemeToggle";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ to, children, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive
          ? "bg-primary/10 text-primary font-medium"
          : "hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      {children}
    </NavLink>
  );
};

export const Navbar = () => {
  const { isAuthenticated, user } = useAuth();
  const { isMobile } = useMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = isAuthenticated
    ? [
        { path: "/dashboard", label: t("dashboard") },
        { path: "/machines", label: t("machines") },
        { path: "/maintenance", label: t("maintenance") },
        { path: "/history", label: t("history") },
      ]
    : [
        { path: "/", label: t("home") },
        { path: "/about", label: t("about") },
        { path: "/contact", label: t("contact") },
      ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-blur z-50 border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl mr-8">
            BrewMaster
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <NavItem key={item.path} to={item.path}>
                  {item.label}
                </NavItem>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageSwitcher />
          
          {isAuthenticated ? (
            <>
              {!isMobile && (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/profile">{t("profile")}</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/settings">{t("settings")}</Link>
                  </Button>
                </>
              )}
            </>
          ) : (
            <>
              {!isMobile && (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/login">{t("login")}</Link>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link to="/register">{t("register")}</Link>
                  </Button>
                </>
              )}
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-blur border-b border-border/40 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <NavItem key={item.path} to={item.path} onClick={closeMenu}>
                {item.label}
              </NavItem>
            ))}
            
            {isAuthenticated ? (
              <>
                <NavItem to="/profile" onClick={closeMenu}>
                  {t("profile")}
                </NavItem>
                <NavItem to="/settings" onClick={closeMenu}>
                  {t("settings")}
                </NavItem>
              </>
            ) : (
              <>
                <NavItem to="/login" onClick={closeMenu}>
                  {t("login")}
                </NavItem>
                <NavItem to="/register" onClick={closeMenu}>
                  {t("register")}
                </NavItem>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
