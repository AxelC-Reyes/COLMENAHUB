import api from './axiosConfig';

export default {
  async searchProfessionals(query) {
    const response = await api.get(`/search?q=${encodeURIComponent(query)}`);
    return response.data;
  },

  async getProfessionalsByCategory(category) {
    const response = await api.get(`/professionals?category=${encodeURIComponent(category)}`);
    return response.data;
  },

  async searchProfessions(query) {
    const response = await api.get(`/search/professions?q=${encodeURIComponent(query)}`);
    return response.data;
  }
};
