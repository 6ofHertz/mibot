
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">
            Afya<span className="text-accent">Mkononi</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/doctors" className="text-sm font-medium hover:text-primary transition-colors">
            Doctors
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ButtonLink to="/login" variant="ghost">
            Login
          </ButtonLink>
          <ButtonLink to="/register" variant="default">
            Register
          </ButtonLink>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="px-2 py-1 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="px-2 py-1 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/doctors"
              className="px-2 py-1 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Doctors
            </Link>
            <Link
              to="/about"
              className="px-2 py-1 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-2 py-1 text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <ButtonLink to="/login" variant="ghost" className="justify-center w-full">
                Login
              </ButtonLink>
              <ButtonLink to="/register" variant="default" className="justify-center w-full">
                Register
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
