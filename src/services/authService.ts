import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/auth';

const authService = {
  login: async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  },
  register: async (name: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data;
  },
  forgotPassword: async (email: string) => {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  },
  resetPassword: async (email: string, token: string, password: string) => {
    const response = await axios.post(`${API_URL}/reset-password`, { email, token, password });
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  getToken: () => {
    return localStorage.getItem('token');
  },
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};

export default authService; 