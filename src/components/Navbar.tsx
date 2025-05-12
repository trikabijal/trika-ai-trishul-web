
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <a href="/" className="flex items-center">
            <span className="font-bold text-2xl text-gradient tracking-tight">
              trika<span className="text-trika-purple">.</span>ai
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-trika-dark hover:text-trika-purple transition-colors"
          >
            Services
          </a>
          <a
            href="#verticals"
            className="text-trika-dark hover:text-trika-purple transition-colors"
          >
            Verticals
          </a>
          <a
            href="#about"
            className="text-trika-dark hover:text-trika-purple transition-colors"
          >
            About
          </a>
          <Button className="trika-gradient hover:opacity-90 text-white">
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
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-trika-dark hover:text-trika-purple transition-colors"
            >
              Services
            </a>
            <a
              href="#verticals"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-trika-dark hover:text-trika-purple transition-colors"
            >
              Verticals
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-trika-dark hover:text-trika-purple transition-colors"
            >
              About
            </a>
            <Button
              className="w-full trika-gradient hover:opacity-90 text-white"
              onClick={() => setMobileMenuOpen(false)}
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
