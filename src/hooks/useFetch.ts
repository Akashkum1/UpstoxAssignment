import {useCallback, useEffect, useState} from 'react';

export interface UseFetchResponse<T> {
  responseData: T | null;
  loading: boolean;
  error: string | null;
  reFetch: () => void;
}

export const useFetch = <T>(
  url: string,
  intitialLoadingState: boolean = false,
): UseFetchResponse<T> => {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(intitialLoadingState);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setResponseData(responseJson);
    } catch (err) {
      console.log(err);
      setError('Something went wrong!!!');
    } finally {
      setLoading(false);
    }
  }, [url]);

  const reFetch = useCallback(() => {
    setError(null);
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {responseData, loading, error, reFetch};
};
