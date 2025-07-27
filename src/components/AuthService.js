import api from './axiosConfig';

export default {
  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  async verifyToken() {
    const response = await api.get('/auth/verify');
    return response.data;
  },

  async getUserProfile() {
    const response = await api.get('/users/me');
    return response.data;
  }
};
