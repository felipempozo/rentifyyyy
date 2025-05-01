
import { AlertTriangle, CheckCircle } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-rentify-dark/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rentify-dark">
            El <span className="text-rentify-green">Problema</span> y Nuestra <span className="text-rentify-green">Solución</span>
          </h2>
          <div className="w-20 h-1 bg-rentify-yellowDark mx-auto mb-6"></div>
          <p className="text-lg text-rentify-dark/80 max-w-3xl mx-auto">
            Alquilar debería ser simple y confiable. En Rentify, eliminamos los obstáculos tradicionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="h-full">
            <h3 className="text-2xl font-bold mb-4 text-rentify-dark">El Problema</h3>
            <div
              className="relative p-6 rounded-xl shadow-lg mb-8 border-l-4 border-rentify-green bg-white flex items-start gap-4 animate-fade-in h-full"
            >
              <div className="flex-shrink-0 mt-1">
                <AlertTriangle className="w-8 h-8 text-rentify-green" />
              </div>
              <div>
                <p className="text-rentify-dark/90 text-lg font-semibold mb-2">
                  Los altos costos de transacción, falta de confianza, seguridad, y herramientas adecuadas hacen que muchas transacciones no se concreten.
                </p>
                <p className="text-rentify-dark/80">
                  Esto resulta en compras innecesarias y acumulación de objetos sin uso, cuando podrían ser compartidos a través del alquiler.
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-full">
            <h3 className="text-2xl font-bold mb-4 text-rentify-dark">Nuestra Solución</h3>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-rentify-green h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-8 h-8 text-rentify-green" />
                </div>
                <div>
                  <p className="text-rentify-dark/90 mb-4 text-lg font-semibold">
                    Rentify facilita el alquiler de artículos de forma segura y sencilla, eliminando barreras como la desconfianza y la falta de herramientas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rentify-green mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-rentify-dark/90">Sistemas de verificación de identidad</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rentify-green mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-rentify-dark/90">Seguros y garantías de protección</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rentify-green mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-rentify-dark/90">Triangulación para transacciones seguras</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rentify-green mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-rentify-dark/90">Sistemas de reputación transparentes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
