import React, { useState } from 'react';
import SearchBar from './SearchBar';

const RegisterScreen = ({ setCurrentScreen, userType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === 'client') {
      setCurrentScreen('professionalType');
    } else {
      setCurrentScreen('hrRegistration');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Registro</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-7549 focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-7549 focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-7549 focus:border-transparent"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-honey-7549 text-white py-3 rounded-lg hover:bg-honey-600 transition-colors"
        >
          Continuar
        </button>
      </form>
      
      {userType === 'client' && (
        <div className="w-full max-w-md mt-8">
          <SearchBar placeholder="Buscar profesionales..." />
        </div>
      )}
    </div>
  );
};

export default RegisterScreen;