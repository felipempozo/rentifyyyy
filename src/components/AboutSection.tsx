
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rentify-dark">¿Qué es <span className="text-rentify-green">Rentify</span>?</h2>
          <div className="w-20 h-1 bg-rentify-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La plataforma digital que revoluciona el alquiler conectando empresas y personas de manera eficiente y segura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Para Empresas */}
          <div 
            className="bg-gradient-to-br from-[#9b87f5] to-[#6E59A5] rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 relative"
          >
            <div className="bg-gradient-to-r from-rentify-dark/90 to-rentify-dark/70 p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Para Empresas</h3>
              <p className="text-white/90">Rentify facilita la gestión y expansión de tu negocio</p>
            </div>
            <div className="p-8 bg-white/40 backdrop-blur-sm">
              <ul className="space-y-4">
                <BenefitItem>
                  Sistema de gestión integral para tu negocio de alquiler
                </BenefitItem>
                <BenefitItem>
                  Mayor visibilidad y alcance para tus productos
                </BenefitItem>
                <BenefitItem>
                  Procesos automatizados y eficientes
                </BenefitItem>
                <BenefitItem>
                  Análisis y métricas de rendimiento
                </BenefitItem>
              </ul>
            </div>
          </div>

          {/* Para Personas */}
          <div 
            className="bg-gradient-to-br from-[#F97316] to-[#FEC6A1] rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 relative"
          >
            <div className="bg-gradient-to-r from-rentify-green/90 to-rentify-green/70 p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Para Personas</h3>
              <p className="text-white/90">Encuentra todo lo que necesitas en un solo lugar</p>
            </div>
            <div className="p-8 bg-white/40 backdrop-blur-sm">
              <ul className="space-y-4">
                <BenefitItem>
                  Accede a una amplia variedad de productos
                </BenefitItem>
                <BenefitItem>
                  Ahorra dinero alquilando en lugar de comprar
                </BenefitItem>
                <BenefitItem>
                  Proceso simple y seguro
                </BenefitItem>
                <BenefitItem>
                  Soporte y atención personalizada
                </BenefitItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0 w-5 h-5 mt-1">
      <Check className="w-5 h-5 text-rentify-green" />
    </div>
    <span className="text-gray-700 font-medium">{children}</span>
  </li>
);

export default AboutSection;
