import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Music, Users, Heart } from 'lucide-react';

const SuccessStorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rentify-yellow to-rentify-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rentify-dark mb-6">
            Historia de Éxito
          </h2>
          <p className="text-xl text-rentify-gray max-w-3xl mx-auto">
            Descubre cómo Rentify transformó el evento de Franco
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                 <div className="flex items-center mb-6">
                   <div className="w-16 h-16 bg-rentify-green rounded-full flex items-center justify-center mr-4">
                     <Users className="h-8 w-8 text-white" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-rentify-dark">Franco</h3>
                     <p className="text-rentify-gray">Dueño de local de ropa</p>
                   </div>
                 </div>
                 
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      <strong>El problema:</strong> Franco, propietario de California Garage, tenía planeado un evento especial para el sábado: una experiencia única combinando moda, música en vivo con DJ y una cafetería exclusiva dentro de su local. Con solo tres días de anticipación, se enfrentó a un problema crítico: no contaba con suficientes percheros para exhibir toda la colección que había preparado para la venta.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      <strong>La solución:</strong> Rentify se convirtió en su salvación. Sin necesidad de salir de casa, Franco utilizó nuestra app para encontrar y alquilar dos percheros profesionales por tan solo $14.000 pesos por día. Una inversión mínima considerando que la compra de percheros nuevos le habría costado más de $120.000 pesos, generando un ahorro superior al 88%.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      <strong>El resultado:</strong> California Garage vivió una noche inolvidable. El evento fue un rotundo éxito con una asistencia masiva, la ropa exhibida impecablemente y las ventas superaron todas las expectativas. Franco logró crear la experiencia perfecta que había imaginado.
                    </p>
                  </div>

                 <div className="flex items-center mt-6 p-4 bg-rentify-yellow/20 rounded-lg">
                   <Heart className="h-6 w-6 text-rentify-green mr-3" />
                   <p className="text-rentify-dark font-medium italic">
                     "Rentify me salvó el evento. En minutos conseguí los percheros que necesitaba y me ahorré una fortuna. ¡Increíble servicio!"
                   </p>
                 </div>

                <div className="flex items-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-rentify-yellowDark fill-current" />
                  ))}
                  <span className="ml-2 text-rentify-gray">5/5 estrellas</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <img
                src="/lovable-uploads/25f0175f-dc93-4c22-aa7a-cd12d479df0e.png"
                alt="Franco en su local de ropa con percheros llenos de ropa durante el evento"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-rentify-green" />
                    <div>
                      <p className="font-bold text-rentify-dark">2 Percheros de Ropa</p>
                      <p className="text-sm text-rentify-gray">Alquilado por 1 día</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-lg font-bold text-rentify-green">$14,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-rentify-green text-white rounded-full p-3 shadow-lg">
              <Heart className="h-6 w-6" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-rentify-yellowDark text-rentify-dark rounded-full p-3 shadow-lg">
              <Star className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-rentify-dark font-medium">
            ¿Lo necesitas? 
            <span className="text-rentify-green font-bold"> Lo alquilas por Rentify</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;
