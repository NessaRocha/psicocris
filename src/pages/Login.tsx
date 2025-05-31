import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await authService.login(email, password);
      navigate('/admin');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao fazer login');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Área do Psicólogo</h2>
        <p className="text-center text-gray-600 mb-6">Faça login para acessar sua área administrativa</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="login-password">Senha</label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="current-password"
            />
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#566542] text-white py-2 rounded hover:bg-[#4a5737]"
          >
            Entrar
          </button>
        </form>
        <div className="mt-6 text-center space-y-4">
          <div>
            <button
              className="text-[#566542] hover:underline font-medium"
              onClick={() => navigate('/register')}
            >
              Primeiro acesso? Clique aqui para cadastrar
            </button>
          </div>
          <div>
            <button
              className="text-[#566542] hover:underline"
              onClick={() => navigate('/forgot-password')}
            >
              Esqueci minha senha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 