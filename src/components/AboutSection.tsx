
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-rentify-dark p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Para Empresas</h3>
              <p className="text-white/80">Optimiza y expande tu negocio de alquiler</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <BenefitItem>
                  Gestión integral de inventario y reservas en tiempo real
                </BenefitItem>
                <BenefitItem>
                  Expansión de alcance de mercado y visibilidad online
                </BenefitItem>
                <BenefitItem>
                  Sistema automatizado de pagos y facturación
                </BenefitItem>
                <BenefitItem>
                  Análisis detallado de rendimiento y métricas
                </BenefitItem>
                <BenefitItem>
                  Atención al cliente y soporte técnico 24/7
                </BenefitItem>
                <BenefitItem>
                  Herramientas de marketing y promoción integradas
                </BenefitItem>
              </ul>
            </div>
          </div>

          {/* Para Personas */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-rentify-green p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Para Personas</h3>
              <p className="text-white/80">Alquila de forma fácil y segura</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <BenefitItem>
                  Amplio catálogo de productos disponibles para alquiler
                </BenefitItem>
                <BenefitItem>
                  Proceso de reserva simple y rápido
                </BenefitItem>
                <BenefitItem>
                  Pagos seguros y transparentes
                </BenefitItem>
                <BenefitItem>
                  Ahorro significativo frente a la compra
                </BenefitItem>
                <BenefitItem>
                  Garantía en todos los alquileres
                </BenefitItem>
                <BenefitItem>
                  Soporte personalizado durante todo el proceso
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
    <span className="text-gray-600">{children}</span>
  </li>
);

export default AboutSection;

