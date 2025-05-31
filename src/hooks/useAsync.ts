import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export function useAsync<T = any>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async (config: AxiosRequestConfig, successMsg?: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response: AxiosResponse<T> = await axios(config);
      setData(response.data);
      if (successMsg) setSuccess(successMsg);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro na operação');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { execute, loading, error, success, data };
} 