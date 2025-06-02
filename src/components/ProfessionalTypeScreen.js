import React from 'react';
import HexagonButton from './HexagonButton';
import SearchBar from './SearchBar';

const ProfessionalTypeScreen = ({ setCurrentScreen }) => {
  const handleOptionClick = (type) => {
    setCurrentScreen('professions');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-12 text-gray-800">¿Qué tipo de profesional necesitas?</h1>
      
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        <HexagonButton 
          text="Profesionistas" 
          onClick={() => handleOptionClick('professionals')} 
        />
        <HexagonButton 
          text="Contratistas" 
          onClick={() => handleOptionClick('contractors')} 
        />
      </div>

      <div className="w-full max-w-md">
        <SearchBar placeholder="Buscar profesionales..." />
      </div>
    </div>
  );
};

export default ProfessionalTypeScreen;