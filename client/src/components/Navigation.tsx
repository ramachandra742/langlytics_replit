import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
const langlyticsLogo = "/lovable-uploads/00d70786-eb41-45d6-b4ec-bc40525e4f48.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/' + href);
      }
    }
  };

  const navItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Blogs", href: "/blog", isRoute: true }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex items-center cursor-pointer transform hover:scale-105 transition-all duration-300" onClick={handleLogoClick}>
            <img 
              src={langlyticsLogo} 
              alt="Langlytics" 
              className="h-24 w-auto object-contain brightness-110 contrast-110"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              )
            ))}
            
            <Link to="/contact">
              <Button className="glow-primary">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border border-border rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item.href);
                      setIsOpen(false);
                    }}
                    className="text-foreground hover:text-primary transition-colors py-2 text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <Link to="/contact">
                <Button className="glow-primary w-full" onClick={() => setIsOpen(false)}>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};