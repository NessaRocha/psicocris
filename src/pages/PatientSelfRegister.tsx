import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from '../hooks/useSnackbar';

const PatientSelfRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
  });
  const [loading, setLoading] = useState(false);
  const { showMessage } = useSnackbar();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  const validatePhone = (phone: string) => {
    // Aceita apenas números, DDD+9 dígitos
    return /^\d{11}$/.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Só permite números no telefone
    if (name === 'phone') {
      const onlyNumbers = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: onlyNumbers }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      showMessage('Telefone deve conter DDD + 9 dígitos (apenas números)', 'error');
      return;
    }
    setLoading(true);
    try {
      await axios.post('http://localhost:3001/api/public/patient-register', {
        ...formData,
        token,
      });
      showMessage('Cadastro realizado com sucesso!', 'success');
      setTimeout(() => navigate('/'), 2000);
    } catch (err: any) {
      showMessage(err.response?.data?.error || 'Erro ao cadastrar paciente', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Paciente</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="phone">Telefone (DDD+9 dígitos)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
              maxLength={11}
              pattern="\d{11}"
              inputMode="numeric"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="birthDate">Data de Nascimento</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientSelfRegister; 