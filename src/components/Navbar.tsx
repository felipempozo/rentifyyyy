
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Qué es', to: 'about' },
    { name: 'Solución', to: 'solution' },
    { name: 'Cómo funciona', to: 'how-it-works' },
    { name: 'Contacto', to: 'contact' }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/fc150ca5-e24c-448a-bade-11031578b1ca.png" 
            alt="Rentify Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={cn(
                "cursor-pointer font-medium transition-colors hover:text-rentify-green relative group font-sans",
                scrolled ? "text-rentify-dark" : "text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rentify-green transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hidden md:flex bg-rentify-green hover:bg-rentify-lightGreen text-white rounded-full px-6 py-2 font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 font-sans"
        >
          Únete
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-6 w-6 transition-colors", 
              scrolled ? "text-rentify-dark" : "text-white"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-rentify-dark hover:text-rentify-green font-medium py-2 font-sans"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="bg-rentify-green text-white rounded-full px-6 py-2 font-medium text-center font-sans"
            onClick={() => setMobileMenuOpen(false)}
          >
            Únete
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
