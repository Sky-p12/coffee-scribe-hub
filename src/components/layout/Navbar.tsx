
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Coffee, 
  Settings, 
  User, 
  Menu, 
  X, 
  LogOut, 
  Home,
  History,
  FileText,
  PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const { t } = useLanguage();
  
  // Update navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when navigating to new page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const navLinks = isAuthenticated ? [
    { name: t("dashboard"), path: "/dashboard", icon: <Home className="w-4 h-4 mr-2" /> },
    { name: t("machines"), path: "/machines", icon: <Coffee className="w-4 h-4 mr-2" /> },
    { name: t("maintenance"), path: "/maintenance", icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: t("history"), path: "/history", icon: <History className="w-4 h-4 mr-2" /> },
  ] : [];
  
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-blur shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary transition-transform hover:scale-[1.02]"
        >
          <Coffee className="h-6 w-6" />
          <span className="font-semibold text-lg tracking-tight">CoffeeSAV</span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-1">
            {isAuthenticated ? (
              <>
                {navLinks.map(link => (
                  <Button
                    key={link.path}
                    variant={location.pathname === link.path ? "secondary" : "ghost"}
                    size="sm"
                    asChild
                  >
                    <Link to={link.path} className="flex items-center">
                      {link.icon}
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </>
            ) : null}
          </nav>
        )}
        
        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {isAuthenticated ? (
            <>
              {!isMobile && (
                <Button variant="outline" size="icon" className="mr-2" asChild>
                  <Link to="/settings">
                    <Settings className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link to="/profile">
                  <User className="h-4 w-4" />
                </Link>
              </Button>
              
              {/* Mobile menu toggle */}
              {isMobile && (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              )}
            </>
          ) : (
            <>
              <Button size="sm" variant="ghost" asChild>
                <Link to="/login">{t("login")}</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/register">{t("register")}</Link>
              </Button>
            </>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-blur border-b border-border backdrop-blur-lg shadow-lg animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map(link => (
              <Button
                key={link.path}
                variant={location.pathname === link.path ? "secondary" : "ghost"}
                size="sm"
                className="justify-start"
                asChild
              >
                <Link to={link.path} className="flex items-center">
                  {link.icon}
                  {link.name}
                </Link>
              </Button>
            ))}
            <Button variant="ghost" size="sm" className="justify-start" asChild>
              <Link to="/settings" className="flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                {t("settings")}
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="justify-start" asChild>
              <Link to="/profile" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {t("profile")}
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="justify-start text-destructive"
              onClick={logout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              {t("logout")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
