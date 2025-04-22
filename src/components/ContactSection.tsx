
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    userType: 'individual' // 'individual' or 'business'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (type: 'individual' | 'business') => {
    setFormData(prev => ({ ...prev, userType: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Gracias por tu interés!",
        description: "Hemos recibido tu información y te contactaremos pronto.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        userType: 'individual'
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rentify-dark">Únete a <span className="text-gradient">Rentify</span></h2>
          <div className="w-20 h-1 bg-rentify-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sé parte de la revolución del alquiler. Déjanos tus datos y te contactaremos cuando lancemos la plataforma.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-rentify-dark p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contacto</h3>
                <p className="mb-10 text-white/80">
                  Si estás interesado en formar parte de Rentify, ya sea como usuario o empresa, completa el formulario y nos pondremos en contacto contigo.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rentify-green mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <p>rentifyarg@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rentify-green mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-white/60">Ubicación</p>
                      <p>Rosario, Argentina</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <img 
                  src="/lovable-uploads/9f92b1cc-ebc3-4bcd-8da8-3207e8f9b306.png" 
                  alt="Rentify Logo" 
                  className="h-16 mb-6"
                />
                <p className="text-sm text-white/60">
                  © {new Date().getFullYear()} Rentify. Todos los derechos reservados.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              <div className="mb-8">
                <div className="flex space-x-3 mb-6">
                  <button
                    type="button"
                    onClick={() => handleUserTypeChange('individual')}
                    className={`flex-1 py-3 rounded-lg text-center transition-all ${
                      formData.userType === 'individual'
                        ? 'bg-rentify-green text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Persona
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUserTypeChange('business')}
                    className={`flex-1 py-3 rounded-lg text-center transition-all ${
                      formData.userType === 'business'
                        ? 'bg-rentify-green text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Empresa
                  </button>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre {formData.userType === 'business' ? 'de contacto' : 'completo'} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  
                  {formData.userType === 'business' && (
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre de la empresa *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        required={formData.userType === 'business'}
                      />
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje (opcional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px]"
                    placeholder="Cuéntanos más sobre tu interés en Rentify..."
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-rentify-green hover:bg-rentify-lightGreen text-white py-3 rounded-lg transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar información'}
                  </Button>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Al enviar, aceptas recibir información sobre el lanzamiento de Rentify.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
