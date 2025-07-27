import React, { createContext, useState, useEffect, useContext } from 'react';
import AuthService from '../services/AuthService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userData = await AuthService.verifyToken();
          setUser(userData);
        } catch (error) {
          console.error('Session verification failed:', error);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    verifySession();
  }, []);

  const login = async (email, password) => {
    try {
      const { token } = await AuthService.login(email, password);
      localStorage.setItem('token', token);
      const userData = await AuthService.getUserProfile();
      setUser(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    loading,
    token: localStorage.getItem('token'),
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
