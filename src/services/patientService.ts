import axios from 'axios';
import { Patient } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/patients';

export const patientService = {
  list: async (): Promise<Patient[]> => {
    const res = await axios.get(API_URL);
    return res.data;
  },
  create: async (patient: Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>): Promise<Patient> => {
    const res = await axios.post(API_URL, patient);
    return res.data;
  },
  update: async (id: string, patient: Partial<Patient>): Promise<Patient> => {
    const res = await axios.put(`${API_URL}/${id}`, patient);
    return res.data;
  },
  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
}; 