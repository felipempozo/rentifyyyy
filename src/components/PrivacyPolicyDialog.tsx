
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PrivacyPolicyDialogProps {
  children: React.ReactNode;
}

const PrivacyPolicyDialog = ({ children }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Política de Privacidad de Rentify</DialogTitle>
          <DialogDescription className="text-sm text-gray-800 space-y-4">
            <p>
              En Rentify, valoramos y respetamos tu privacidad. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas a través de nuestra landing page.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Responsable de los Datos:</h3>
            <p>
              Rentify (en adelante, "nosotros" o "Rentify") es el responsable del tratamiento de los datos personales que nos facilites a través de esta landing page. Dado que actualmente no estamos constituidos como sociedad, la responsabilidad recae en el equipo promotor de Rentify.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Finalidad de la Recopilación de Datos:</h3>
            <p>
              La información personal que nos proporcionas será utilizada con las siguientes finalidades:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Contactarte: Para enviarte información sobre Rentify, sus novedades, y futuras actualizaciones.</li>
              <li>Mantenerte informado: Para comunicarnos contigo en relación a tu interés en nuestra plataforma.</li>
              <li>Fines de marketing: Para enviarte comunicaciones promocionales o informativas sobre Rentify.</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-4">Consentimiento:</h3>
            <p>
              Al proporcionarnos tu dirección de correo electrónico y/o número de teléfono a través de esta landing page, estás otorgando tu consentimiento para que recopilemos y utilicemos tus datos personales para las finalidades descritas en esta política.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Tus Derechos:</h3>
            <p>
              Tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos personales. Si deseas ejercer alguno de estos derechos, puedes comunicarte con nosotros a través de la dirección de correo electrónico rentifyarg@gmail.com.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Seguridad de tus Datos:</h3>
            <p>
              Implementaremos medidas de seguridad razonables para proteger tu información personal contra accesos no autorizados, alteraciones, divulgaciones o destrucciones. Sin embargo, debes tener en cuenta que ninguna transmisión de datos por internet es completamente segura y no podemos garantizar la seguridad absoluta de tu información.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Compartir tu Información:</h3>
            <p>
              En principio, la información personal que nos proporciones a través de esta landing page no será compartida con terceros, salvo que sea necesario para cumplir con una obligación legal o con tu consentimiento explícito.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Cambios en esta Política de Privacidad:</h3>
            <p>
              Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta landing page. Te recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos tu información.
            </p>
            
            <p className="text-sm text-gray-500 italic mt-4">
              Fecha de última actualización: 9/5/2025
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
