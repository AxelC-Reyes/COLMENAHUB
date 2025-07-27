import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import UserService from '../services/UserService';
import SearchService from '../services/SearchService';

const HRRegistration = ({ setCurrentScreen }) => {
  const { user, token } = useAuth();
  const [formData, setFormData] = useState({
    profession: '',
    experience: '',
    skills: '',
    userId: user?._id || ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [similarProfessions, setSimilarProfessions] = useState([]);

  useEffect(() => {
    if (user?._id) {
      setFormData(prev => ({ ...prev, userId: user._id }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'profession' && value.length > 2) {
      searchSimilarProfessions(value);
    } else if (name === 'profession' && value.length <= 2) {
      setSimilarProfessions([]);
    }
  };

  const searchSimilarProfessions = async (query) => {
    try {
      const results = await SearchService.searchProfessions(query);
      setSimilarProfessions(results);
    } catch (err) {
      console.error('Error searching professions:', err);
    }
  };

  const handleSelectProfession = (profession) => {
    setFormData(prev => ({ ...prev, profession }));
    setSimilarProfessions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user || !token) {
      setError('Debes iniciar sesión para completar este registro');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      await UserService.registerHRProfile(formData, token);
      setSuccess(true);
      
      setTimeout(() => {
        setCurrentScreen('home');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Error al enviar el perfil');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen p-6 bg-offwhite flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Registro Exitoso!</h2>
          <p className="text-gray-600 mb-6">Tu perfil ha sido enviado a Recursos Humanos para revisión.</p>
          <p className="text-gray-500 text-sm">Serás redirigido a la página principal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-offwhite">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Registro para profesionales</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
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
            
            {similarProfessions.length > 0 && (
              <div className="mt-2 border border-gray-200 rounded-lg max-h-40 overflow-y-auto">
                {similarProfessions.map((prof, index) => (
                  <div 
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectProfession(prof)}
                  >
                    {prof}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Años de experiencia</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              min="0"
              max="50"
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
              placeholder="Ej: Carpintería, soldadura, diseño CAD..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-white rounded-lg transition-colors ${
              isLoading ? 'bg-gray-400' : 'bg-honey-7549 hover:bg-honey-600'
            }`}
          >
            {isLoading ? 'Enviando...' : 'Enviar a Recursos Humanos'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HRRegistration;
