
const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Registro Seguro',
      description: 'Crea una cuenta y verifica tu identidad con datos biométricos para garantizar la seguridad de todos los usuarios.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rentify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Busca lo que Necesitas',
      description: 'Explora diversos rubros y artículos con fotos, descripciones, estado actual, precio y ubicación.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rentify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Reserva y Paga',
      description: 'Selecciona el periodo de alquiler y realiza el pago de forma segura. Contacta al propietario si necesitas aclarar detalles.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rentify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Recibe y Disfruta',
      description: 'Recibe el artículo, confirma su estado y disfrútalo durante el periodo acordado.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rentify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Devuelve el Artículo',
      description: 'Al finalizar el periodo de alquiler, devuelve el artículo en las mismas condiciones en que lo recibiste.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rentify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
        </svg>
      )
    },
    {
      number: '06',
      title: 'Deja tu Opinión',
      description: 'Comparte tu experiencia y califica al propietario para ayudar a construir una comunidad confiable.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rentify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-rentify-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Cómo <span className="text-rentify-green">Funciona</span></h2>
          <div className="w-20 h-1 bg-rentify-green mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto font-sans">
            Rentify hace que el proceso de alquiler sea fácil, seguro y conveniente tanto para propietarios como para usuarios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {steps.map((step, index) => (
            <div key={index} className={`bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group`}>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-rentify-green/10 rounded-lg">{step.icon}</div>
                <span className="text-4xl font-bold text-white/20 group-hover:text-rentify-green/30 transition-colors font-heading">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-rentify-green transition-colors font-heading">{step.title}</h3>
              <p className="text-white/70 font-sans">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rentify-green/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
