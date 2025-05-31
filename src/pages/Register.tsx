import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    try {
      await authService.register(name, email, password);
      setSuccess('Cadastro realizado com sucesso! Faça login.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao cadastrar');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro - Área do Psicólogo</h2>
        <p className="text-center text-gray-600 mb-6">Crie sua conta para acessar a área administrativa</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="register-name">Nome Completo</label>
            <input
              type="text"
              id="register-name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="register-email">Email</label>
            <input
              type="email"
              id="register-email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="register-password">Senha</label>
            <input
              type="password"
              id="register-password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="new-password"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="register-confirm-password">Confirmar Senha</label>
            <input
              type="password"
              id="register-confirm-password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="new-password"
            />
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success && <div className="mb-4 text-green-600">{success}</div>}
          <button
            type="submit"
            className="w-full bg-[#566542] text-white py-2 rounded hover:bg-[#4a5737]"
          >
            Cadastrar
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            className="text-[#566542] hover:underline"
            onClick={() => navigate('/login')}
          >
            Já tem conta? Faça login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register; 