import React, { useState } from 'react';
import HexagonButton from './HexagonButton';
import LoginForm from './LoginForm';

const HomeScreen = ({ setCurrentScreen, setUserType }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleOptionClick = (type) => {
    setUserType(type);
    setCurrentScreen('register');
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    // Lógica extra si necesitas
  };

  const handleLoginBack = () => {
    setShowLogin(false);
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
        onClick={() => setShowLogin(true)}
        className="text-sm text-honey-7549 hover:underline mt-4"
      >
        Ya tengo una cuenta
      </button>

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <button
              onClick={handleLoginBack}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <LoginForm onSuccess={handleLoginSuccess} onBack={handleLoginBack} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const Footer = () => (
  <div className="w-full max-w-4xl p-6 mt-12 border-t border-gray-200">
    {/* ...igual que antes */}
  </div>
);

export default HomeScreen;
