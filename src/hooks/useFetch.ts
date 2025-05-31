import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export function useFetch<T = any>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<T>(url, options);
      setData(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao buscar dados');
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
} 