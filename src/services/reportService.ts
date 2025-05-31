import axios from 'axios';
import { Report } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/reports';

export const reportService = {
  list: async (patientId: string): Promise<Report[]> => {
    const res = await axios.get(`${API_URL}?patientId=${patientId}`);
    return res.data;
  },
  create: async (data: { patientId: string; content: string; createdAt: string }): Promise<Report> => {
    const res = await axios.post(API_URL, data);
    return res.data;
  },
  update: async (id: string, data: Partial<Report>): Promise<Report> => {
    const res = await axios.put(`${API_URL}/${id}`, data);
    return res.data;
  },
  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
}; 