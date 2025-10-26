import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/allura-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          className={`${
            scrolled 
              ? "bg-black/60 backdrop-blur-2xl border-white/10" 
              : "bg-black/20 backdrop-blur-md border-white/5"
          } border rounded-full transition-all duration-500 shadow-2xl`}
        >
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img src={logo} alt="Allura Tech" className="h-8 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-white/60 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button variant="hero" size="sm" className="rounded-full">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-white/60 hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-white/10">
                  <Button variant="hero" size="sm" className="w-full rounded-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
