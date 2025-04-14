
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-rentify-dark z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-rentify-dark/90 to-rentify-dark/70 z-10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/46443fcd-c075-4c51-abac-6c9a76880215.png')] bg-cover bg-center opacity-40 z-0"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 pt-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              El futuro del <span className="text-gradient">alquiler</span> está aquí
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Rentify conecta a propietarios y personas que buscan alquilar. Rápido, seguro y sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="bg-rentify-green hover:bg-rentify-lightGreen text-white rounded-full px-8 py-3 font-medium text-lg text-center transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Únete Ahora
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full px-8 py-3 font-medium text-lg text-center backdrop-blur-sm transition-all"
              >
                Conoce Más
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block animate-fade-in">
            <img 
              src="/lovable-uploads/4f266250-ec68-426c-908b-638b04eab302.png" 
              alt="Rentify App" 
              className="max-w-full rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-white/70"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
