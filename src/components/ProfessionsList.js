import React, { useState } from 'react';
import SearchBar from './SearchBar';

const ProfessionsList = ({ setCurrentScreen, setSelectedProfessional, category }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Datos de ejemplo organizados por categoría
  const professionsData = {
    professionals: [
      "Abogado", "Arquitecto", "Contador", "Dentista", 
      "Diseñador", "Ingeniero", "Médico", "Psicólogo"
    ],
    contractors: [
      "Electricista", "Plomero", "Carpintero", "Albañil",
      "Pintor", "Jardinero", "Técnico", "Instalador"
    ]
  };

  const professions = category === 'professionals' 
    ? professionsData.professionals 
    : professionsData.contractors;

  const filteredProfessions = professions.filter(profession =>
    profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProfession = (profession) => {
    setSelectedProfessional({ 
      name: profession,
      category: category
    });
    setCurrentScreen('profile');
  };

  return (
    <div className="min-h-screen p-6 bg-offwhite">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {category === 'professionals' ? 'Profesionistas' : 'Contratistas'} disponibles
        </h1>
        
        <div className="mb-8">
          <SearchBar 
            placeholder={`Buscar ${category === 'professionals' ? 'profesionistas' : 'contratistas'}...`} 
            onSearch={setSearchTerm}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProfessions.map((profession, index) => (
            <div 
              key={index}
              onClick={() => handleSelectProfession(profession)}
              className="p-4 border border-gray-200 rounded-lg hover:bg-honey-7549 hover:text-white cursor-pointer transition-colors shadow-sm"
            >
              <div className="font-medium">{profession}</div>
              <div className="text-sm text-gray-500 hover:text-white">
                {category === 'professionals' ? 'Profesional certificado' : 'Servicio especializado'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionsList;

// DONE