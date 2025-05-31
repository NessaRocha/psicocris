export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface Report {
  id: string;
  patientId: string;
  content: string;
  encryptedContent: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'user';
} 