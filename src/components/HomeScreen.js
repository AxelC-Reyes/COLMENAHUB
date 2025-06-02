import React from 'react';
import HexagonButton from './HexagonButton';

const HomeScreen = ({ setCurrentScreen, setUserType }) => {
  const handleOptionClick = (type) => {
    setUserType(type);
    setCurrentScreen('register');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-offwhite">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a ContratApp</h1>
        <p className="text-lg text-gray-600">¿Qué deseas hacer hoy?</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
        <div className="text-center">
          <HexagonButton 
            text="Contratar" 
            onClick={() => handleOptionClick('client')} 
          />
          <p className="mt-4 text-gray-600">Encuentra al profesional perfecto para tus necesidades</p>
        </div>
        
        <div className="text-center">
          <HexagonButton 
            text="Ser contratado" 
            onClick={() => handleOptionClick('professional')} 
          />
          <p className="mt-4 text-gray-600">Ofrece tus servicios y encuentra nuevos clientes</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Footer = () => (
  <div className="w-full max-w-4xl p-6 mt-12 border-t border-gray-200">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-600">
      <div>
        <h3 className="font-bold mb-2 text-gray-800">Políticas de privacidad</h3>
        <p className="text-xs">Protegemos tus datos personales y garantizamos tu privacidad.</p>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-gray-800">Misión</h3>
        <p className="text-xs">Conectar talento con oportunidades de manera simple y segura.</p>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-gray-800">Visión</h3>
        <p className="text-xs">Ser la plataforma líder en contratación profesional en Latinoamérica.</p>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-gray-800">Conócenos</h3>
        <p className="text-xs">Somos un equipo comprometido con el desarrollo profesional.</p>
      </div>
    </div>
    <div className="mt-4 text-center text-xs text-gray-500">
      © 2023 ContratApp - Todos los derechos reservados
    </div>
  </div>
);

export default HomeScreen;