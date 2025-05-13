import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const weightApi = {
  getWeights: () => api.get('/weight'),
  addWeight: (data) => api.post('/weight', data),
};

export const shipmentApi = {
  getShipments: () => api.get('/shipments'),
  createShipment: (data) => api.post('/shipments', data),
};

export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
};

export default api;