import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
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
      await authService.resetPassword(email, token, password);
      setSuccess('Senha redefinida com sucesso! Faça login.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao redefinir senha');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Redefinir Senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="reset-email">Email</label>
            <input
              type="email"
              id="reset-email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="reset-token">Token</label>
            <input
              type="text"
              id="reset-token"
              name="token"
              value={token}
              onChange={e => setToken(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="one-time-code"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="reset-password">Nova Senha</label>
            <input
              type="password"
              id="reset-password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="new-password"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="reset-confirm-password">Confirmar Nova Senha</label>
            <input
              type="password"
              id="reset-confirm-password"
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
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Redefinir Senha
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            className="text-blue-600 hover:underline"
            onClick={() => navigate('/login')}
          >
            Voltar para o login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword; 