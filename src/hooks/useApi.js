import { useCallback, useState } from "react";

//
function useApi(baseUrl) {
  //
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //
  const get = useCallback(
    async (endpoint) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/${endpoint}`);
        if (!response.ok) {
          throw new Error(`данные не получены! статус: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [baseUrl]
  );

  const post = useCallback(
    async (endpoint, body) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error(`данные не добавлены! статус: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [baseUrl]
  );

  const put = useCallback(
    async (endpoint, body) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error(`данные не добавлены! статус: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [baseUrl]
  );

  const remove = useCallback(
    async (endpoint) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`данные не удалены! статус: ${response.status}`);
        }
        // const result = await response.json();
        // setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [baseUrl]
  );

  //
  return { data, isLoading, error, get, post, put, remove };
}

//
export default useApi;
