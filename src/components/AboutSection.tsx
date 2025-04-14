
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rentify-dark">¿Qué es <span className="text-gradient">Rentify</span>?</h2>
          <div className="w-20 h-1 bg-rentify-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un portal digital de alquiler que conecta empresas y personas, transformando la forma en que alquilamos bienes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative overflow-hidden group rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rentify-dark to-rentify-green opacity-90 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Rentify para empresas" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-20 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 font-heading">Para Empresas</h3>
              <ul className="space-y-4">
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rentify-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-sans">Publica tus bienes y productos para alquilar</p>
                </li>
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rentify-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-sans">Digitaliza todo tu proceso de alquiler</p>
                </li>
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rentify-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-sans">Gestiona reservas y pagos de forma segura</p>
                </li>
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rentify-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-sans">Construye tu reputación digital como arrendador</p>
                </li>
              </ul>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full"></div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative overflow-hidden group rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rentify-green to-rentify-lightGreen opacity-90 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Rentify para personas" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-20 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 font-heading">Para Personas</h3>
              <ul className="space-y-4">
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rentify-dark" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-sans">Encuentra productos para alquilar sin salir de casa</p>
                </li>
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rentify-dark" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-sans">Accede a bienes que no necesitas comprar para uso puntual</p>
                </li>
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rentify-dark" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-sans">Realiza tus alquileres de forma rápida y segura</p>
                </li>
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rentify-dark" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-sans">Ahorra dinero eligiendo alquilar en vez de comprar</p>
                </li>
              </ul>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
