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
            Descubre cómo Rentify transformó la celebración de Pedro
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
                    <h3 className="text-2xl font-bold text-rentify-dark">Pedro, 28 años</h3>
                    <p className="text-rentify-gray">Rosario, Argentina</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    <strong>El problema:</strong> Pedro estaba organizando su fiesta de cumpleaños y quería que fuera especial. Tenía todo planeado, pero le faltaba lo más importante: un buen equipo de música para que sus amigos pudieran bailar toda la noche.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    <strong>La solución:</strong> Descubrió Rentify y en minutos encontró el equipo perfecto: amplificadores profesionales, micrófono y sistema de sonido completo, todo a un precio que se ajustaba a su presupuesto.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    <strong>El resultado:</strong> Su fiesta fue un éxito total. Sus amigos no pararon de bailar, la música sonaba increíble y Pedro pudo disfrutar sin preocupaciones.
                  </p>
                </div>

                <div className="flex items-center mt-6 p-4 bg-rentify-yellow/20 rounded-lg">
                  <Heart className="h-6 w-6 text-rentify-green mr-3" />
                  <p className="text-rentify-dark font-medium italic">
                    "Rentify me salvó la fiesta. Fue súper fácil alquilar todo lo que necesitaba. ¡Definitivamente lo voy a usar de nuevo!"
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
                src="/lovable-uploads/0f896a06-08db-4700-a5a1-baf4b8132f51.png"
                alt="Pedro feliz en su fiesta con amigos bailando y equipo de música visible"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <Music className="h-8 w-8 text-rentify-green" />
                    <div>
                      <p className="font-bold text-rentify-dark">Equipo de Sonido Profesional</p>
                      <p className="text-sm text-rentify-gray">Alquilado por 1 noche</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-lg font-bold text-rentify-green">$50,000</p>
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
