import { authApi } from './api';

export const login = async (email, password) => {
  try {
    const response = await authApi.login({ email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const register = async (userData) => {
  try {
    const response = await authApi.register(userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};