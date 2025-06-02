import React from 'react';

const ProfileScreen = ({ professional, setCurrentScreen }) => {
  const handleHireClick = () => {
    setCurrentScreen('payment');
  };

  return (
    <div className="min-h-screen p-6 bg-offwhite">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="h-48 w-full md:h-full md:w-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Foto del profesional</span>
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-honey-7549 font-semibold">Perfil profesional</div>
            <h1 className="block mt-1 text-2xl font-medium text-gray-900">{professional.name}</h1>
            <p className="mt-2 text-gray-500">
              Descripción detallada del profesional y sus servicios. Aquí iría información sobre experiencia, 
              especialidades, calificaciones y reseñas de clientes anteriores.
            </p>
            <div className="mt-6">
              <button
                onClick={handleHireClick}
                className="px-6 py-3 bg-honey-7549 text-white font-medium rounded-lg hover:bg-honey-600 transition-colors"
              >
                Contratar este profesional
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;