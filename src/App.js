import React, { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfessionalTypeScreen from './components/ProfessionalTypeScreen';
import ProfessionsList from './components/ProfessionsList';
import ProfileScreen from './components/ProfileScreen';
import PaymentScreen from './components/PaymentScreen';
import HRRegistration from './components/HRRegistration';
import LoginForm from './components/LoginForm';
import AuthService from './services/AuthService';
import SearchService from './services/SearchService';
import UserService from './services/UserService';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [userType, setUserType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Verificar sesión al cargar
  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const user = await AuthService.verifyToken(token);
          setIsLoggedIn(true);
          setUserData(user);
        }
      } catch (error) {
        console.error('Error verifying session:', error);
        localStorage.removeItem('token');
      }
    };
    checkSession();
  }, []);

  const abrirLogin = () => setShowLogin(true);
  const cerrarLogin = () => setShowLogin(false);

  const handleLoginSuccess = async (token) => {
    localStorage.setItem('token', token);
    const user = await AuthService.getUserProfile(token);
    setUserData(user);
    setIsLoggedIn(true);
    setShowLogin(false);
    setCurrentScreen(user.isProfessional ? 'professionalType' : 'home');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserData(null);
    setCurrentScreen('home');
  };

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      const results = await SearchService.searchProfessionals(query);
      setSearchResults(results);
      setCurrentScreen('professions');
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (userData) => {
    try {
      const newUser = await UserService.registerUser(userData);
      if (newUser.token) {
        handleLoginSuccess(newUser.token);
      }
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: error.message };
    }
  };

  const screens = {
    home: (
      <HomeScreen
        setCurrentScreen={setCurrentScreen}
        setUserType={setUserType}
        abrirLogin={abrirLogin}
        isLoggedIn={isLoggedIn}
        userData={userData}
        onLogout={handleLogout}
        onSearch={handleSearch}
        isLoading={isLoading}
      />
    ),
    register: (
      <RegisterScreen
        setCurrentScreen={setCurrentScreen}
        userType={userType}
        onRegister={handleRegister}
      />
    ),
    professionalType: (
      <ProfessionalTypeScreen 
        setCurrentScreen={setCurrentScreen}
        userData={userData}
      />
    ),
    professions: (
      <ProfessionsList
        setCurrentScreen={setCurrentScreen}
        setSelectedProfessional={setSelectedProfessional}
        category={selectedCategory}
        searchResults={searchResults}
      />
    ),
    profile: (
      <ProfileScreen
        professional={selectedProfessional}
        setCurrentScreen={setCurrentScreen}
        isLoggedIn={isLoggedIn}
        userData={userData}
      />
    ),
    payment: <PaymentScreen setCurrentScreen={setCurrentScreen} />,
    hrRegistration: (
      <HRRegistration 
        setCurrentScreen={setCurrentScreen}
        userData={userData}
      />
    ),
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
            <LoginForm 
              onSuccess={handleLoginSuccess} 
              onBack={cerrarLogin} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
