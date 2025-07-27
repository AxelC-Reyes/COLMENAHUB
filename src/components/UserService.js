import api from './axiosConfig';

const API_URL = process.env.REACT_APP_API_URL;

export default {
  async registerUser(userData) {
    const endpoint = userData.userType === 'professional' 
      ? '/professionals/register' 
      : '/companies/register';

    const response = await api.post(endpoint, userData);
    return response.data;
  },

  async updateUserProfile(userId, data) {
    const response = await api.put(`/users/${userId}`, data);
    return response.data;
  },

  async registerHRProfile(profileData, token) {
    const response = await api.post('/hr/professionals', profileData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
};
