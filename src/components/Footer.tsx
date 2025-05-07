
import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rentify-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/a466e920-365c-4dd3-80a4-90c62ba46f12.png" 
              alt="Rentify Logo" 
              className="h-12 mb-5"
            />
            <p className="text-gray-400 mb-6">
              Revolucionando el alquiler con tecnología, seguridad y confianza.
            </p>
            
        <div className="flex space-x-4">
          <a 
            href="https://www.instagram.com/rentifyarg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-rentify-green transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="https://www.twitter.com/rentifyarg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-rentify-green transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/company/rentifyarg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-rentify-green transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rentify</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-rentify-green transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-rentify-green transition-colors">Cómo funciona</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-rentify-green transition-colors">Políticas de privacidad</a></li>
              <li><a href="#" className="hover:text-rentify-green transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="hover:text-rentify-green transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Suscríbete</h3>
            <p className="text-gray-400 mb-4">Recibe actualizaciones sobre nuestro lanzamiento y novedades.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="px-4 py-2 rounded-l-lg bg-white/10 text-white border-0 focus:outline-none focus:ring-2 focus:ring-rentify-green"
              />
              <button 
                type="submit" 
                className="bg-rentify-green hover:bg-rentify-lightGreen text-white rounded-r-lg px-4 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Rentify. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
