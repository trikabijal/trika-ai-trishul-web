
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openCalendly = () => {
    window.open("https://calendly.com/bijal-trika/30-minute-ai-and-automation-conversation-clone", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/3403717f-88e4-4c64-8bd4-cb96d69e826e.png" alt="Trika logo" className="w-8 h-8 mr-2" />
            <span className="font-bold text-2xl text-gradient tracking-tight">
              trika<span className="text-trika-purple">.</span>ai
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <HashLink
            to="/#services"
            className="text-trika-dark hover:text-trika-primary transition-colors"
          >
            Services
          </HashLink>
          <HashLink
            to="/#verticals"
            className="text-trika-dark hover:text-trika-primary transition-colors"
          >
            Verticals
          </HashLink>
          <HashLink
            to="/#about"
            className="text-trika-dark hover:text-trika-primary transition-colors"
          >
            About
          </HashLink>
          <Link
            to="/case-studies"
            className="text-trika-dark hover:text-trika-primary transition-colors"
          >
            Case Studies
          </Link>
          <Button 
            className="trika-gradient hover:opacity-90 text-white"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
            }}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-trika-dark p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <div className="container mx-auto py-4 space-y-4">
            <HashLink
              to="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-trika-dark hover:text-trika-primary transition-colors"
            >
              Services
            </HashLink>
            <HashLink
              to="/#verticals"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-trika-dark hover:text-trika-primary transition-colors"
            >
              Verticals
            </HashLink>
            <HashLink
              to="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-trika-dark hover:text-trika-primary transition-colors"
            >
              About
            </HashLink>
            <Link
              to="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-trika-dark hover:text-trika-primary transition-colors"
            >
              Case Studies
            </Link>
            <Button
              className="w-full trika-gradient hover:opacity-90 text-white"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
