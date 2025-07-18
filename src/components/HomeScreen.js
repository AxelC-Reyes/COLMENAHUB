import React from 'react';
import HexagonButton from './HexagonButton';

const HomeScreen = ({ setCurrentScreen, setUserType, abrirLogin }) => {
  const handleOptionClick = (type) => {
    setUserType(type);
    abrirLogin(); // Forzar login antes de ir al registro
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-offwhite relative">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">COLMENA HUB</h1>
        <p className="text-lg text-gray-600">QUIERO</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
        <HexagonButton text="CONTRATAR" onClick={() => handleOptionClick('client')} />
        <HexagonButton text="SER CONTRATADO" onClick={() => handleOptionClick('professional')} />
      </div>

      <button
        onClick={abrirLogin}
        className="text-sm text-honey-7549 hover:underline mt-4"
      >
        Ya tengo una cuenta
      </button>

      <Footer />
    </div>
  );
};

const Footer = () => (
  <div className="w-full max-w-4xl p-6 mt-12 border-t border-gray-200 text-xs text-gray-600">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <h3 className="font-bold mb-2 text-gray-800">Políticas de privacidad</h3>
        <p>Protegemos tus datos personales y garantizamos tu privacidad.</p>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-gray-800">Misión</h3>
        <p>Conectar talento con oportunidades de manera simple y segura.</p>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-gray-800">Visión</h3>
        <p>Ser la plataforma líder en contratación profesional en Latinoamérica.</p>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-gray-800">Conócenos</h3>
        <p>Somos un equipo comprometido con el desarrollo profesional.</p>
      </div>
    </div>
    <div className="mt-4 text-center text-xs text-gray-500">
      © 2023 Colmenahub - Todos los derechos reservados
    </div>
  </div>
);

export default HomeScreen;
