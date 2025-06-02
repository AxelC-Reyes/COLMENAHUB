import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfessionalTypeScreen from './components/ProfessionalTypeScreen';
import ProfessionsList from './components/ProfessionsList';
import ProfileScreen from './components/ProfileScreen';
import PaymentScreen from './components/PaymentScreen';
import HRRegistration from './components/HRRegistration';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [userType, setUserType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const screens = {
    home: <HomeScreen setCurrentScreen={setCurrentScreen} setUserType={setUserType} />,
    register: <RegisterScreen setCurrentScreen={setCurrentScreen} userType={userType} />,
    professionalType: <ProfessionalTypeScreen setCurrentScreen={setCurrentScreen} />,
    professions: <ProfessionsList 
      setCurrentScreen={setCurrentScreen} 
      setSelectedProfessional={setSelectedProfessional}
      category={selectedCategory}
    />,
    profile: <ProfileScreen 
      professional={selectedProfessional} 
      setCurrentScreen={setCurrentScreen}
    />,
    payment: <PaymentScreen setCurrentScreen={setCurrentScreen} />,
    hrRegistration: <HRRegistration setCurrentScreen={setCurrentScreen} />
  };

  return (
    <div className="min-h-screen bg-offwhite">
      {screens[currentScreen]}
    </div>
  );
};

export default App;


// DONE