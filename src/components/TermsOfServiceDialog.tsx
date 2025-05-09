
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TermsOfServiceDialogProps {
  children: React.ReactNode;
}

const TermsOfServiceDialog = ({ children }: TermsOfServiceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Términos de servicio</DialogTitle>
          <DialogDescription className="text-sm text-gray-800 space-y-4">
            <p>
              El uso de Rentify implica la aceptación de las siguientes condiciones:
            </p>
            
            <div className="my-4 space-y-4">
              <p>
                Rentify actúa como intermediario entre personas y empresas que ofrecen artículos en alquiler.
              </p>

              <p>
                Los usuarios deben utilizar la plataforma de forma legal, respetuosa y sin alterar la experiencia de otros.
              </p>

              <p>
                Rentify no se hace responsable por inconvenientes externos al funcionamiento de la plataforma, como el estado de los artículos, la disponibilidad o el cumplimiento del acuerdo entre partes.
              </p>

              <p>
                Las empresas son responsables por la veracidad de sus publicaciones y por resolver cualquier inconveniente con los usuarios.
              </p>

              <p>
                Rentify puede suspender o eliminar cuentas que infrinjan estas condiciones.
              </p>

              <p>
                Rentify puede actualizar estos términos sin previo aviso. El uso continuado implica aceptación de los cambios.
              </p>
            </div>
            
            <p className="text-sm text-gray-500 italic mt-4">
              Fecha de última actualización: {new Date().toLocaleDateString()}
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceDialog;
