import React, { useState } from 'react';
import SearchBar from './SearchBar';

const HRRegistration = ({ setCurrentScreen }) => {
  const [formData, setFormData] = useState({
    profession: '',
    experience: '',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar a RRHH
    alert('Tu perfil ha sido enviado a Recursos Humanos');
    setCurrentScreen('home');
  };

  return (
    <div className="min-h-screen p-6 bg-offwhite">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Registro para profesionales</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Profesión/Oficio</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Años de experiencia</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Habilidades principales</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="3"
              required
            />
          </div>

          <div className="mb-4">
            <SearchBar placeholder="Buscar profesiones similares..." />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-honey-7549 text-white rounded-lg hover:bg-honey-600 transition-colors"
          >
            Enviar a Recursos Humanos
          </button>
        </form>
      </div>
    </div>
  );
};

export default HRRegistration;

// DONE