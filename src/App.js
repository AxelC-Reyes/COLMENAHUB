import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfessionalTypeScreen from './components/ProfessionalTypeScreen';
import ProfessionsList from './components/ProfessionsList';
import ProfileScreen from './components/ProfileScreen';
import PaymentScreen from './components/PaymentScreen';
import HRRegistration from './components/HRRegistration';
import LoginForm from './components/LoginForm';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [userType, setUserType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [showLogin, setShowLogin] = useState(false); // NUEVO

  const abrirLogin = () => setShowLogin(true);
  const cerrarLogin = () => setShowLogin(false);

  const handleLoginSuccess = () => {
    setShowLogin(false);
    // Agrega lógica extra si quieres redirigir o guardar usuario
  };

  const screens = {
    home: (
      <HomeScreen
        setCurrentScreen={setCurrentScreen}
        setUserType={setUserType}
        abrirLogin={abrirLogin} // Pasamos función
      />
    ),
    register: (
      <RegisterScreen
        setCurrentScreen={setCurrentScreen}
        userType={userType}
      />
    ),
    professionalType: (
      <ProfessionalTypeScreen setCurrentScreen={setCurrentScreen} />
    ),
    professions: (
      <ProfessionsList
        setCurrentScreen={setCurrentScreen}
        setSelectedProfessional={setSelectedProfessional}
        category={selectedCategory}
      />
    ),
    profile: (
      <ProfileScreen
        professional={selectedProfessional}
        setCurrentScreen={setCurrentScreen}
      />
    ),
    payment: <PaymentScreen setCurrentScreen={setCurrentScreen} />,
    hrRegistration: <HRRegistration setCurrentScreen={setCurrentScreen} />,
  };

  return (
    <div className="min-h-screen bg-offwhite relative">
      {screens[currentScreen]}

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <button
              onClick={cerrarLogin}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <LoginForm onSuccess={handleLoginSuccess} onBack={cerrarLogin} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
