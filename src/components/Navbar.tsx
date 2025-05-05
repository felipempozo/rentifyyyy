
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
        scrolled ? "bg-rentify-dark/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/5082afac-a895-4ce0-a027-60123c48b8f8.png" 
            alt="Rentify Logo" 
            className="h-12 w-auto"
            style={{ filter: 'drop-shadow(0px 0px 2px rgba(0,0,0,0.3))' }}
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
              onSetActive={() => setActiveSection(link.to)}
              className={cn(
                "cursor-pointer font-medium transition-colors hover:text-rentify-green relative group font-sans",
                scrolled ? "text-white" : "text-white",
                activeSection === link.to ? "text-rentify-yellowDark hover:text-rentify-yellowDark/80" : ""
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 transition-all",
                activeSection === link.to 
                  ? "w-full bg-rentify-yellowDark" 
                  : "w-0 bg-rentify-green group-hover:w-full"
              )}></span>
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
          className="hidden md:flex bg-rentify-yellowDark hover:bg-rentify-yellowDark/90 text-rentify-dark rounded-full px-6 py-2 font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 font-sans"
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
            className="h-6 w-6 text-white"
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
          "absolute top-full left-0 w-full bg-rentify-dark/95 shadow-lg md:hidden transition-all duration-300 overflow-hidden",
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
              onSetActive={() => setActiveSection(link.to)}
              className={cn(
                "font-medium py-2 font-sans",
                activeSection === link.to ? "text-rentify-yellowDark hover:text-rentify-yellowDark/80" : "text-white hover:text-rentify-green"
              )}
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
            className="bg-rentify-yellowDark text-rentify-dark rounded-full px-6 py-2 font-medium text-center font-sans"
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
