import { useEffect, useState } from "react";

const UseFetch = (url, dataKey, options = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url, {
          method: options.method || 'GET', // Default method is GET
          headers: {
            'Content-Type': 'application/json',
            ...options.headers,
          },
          body: JSON.stringify(options.body) || null,
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        setData(result[dataKey] || []);
      } catch (error) {
        setError("Không thể lấy dữ liệu từ máy chủ");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url, dataKey, options]);

  return { data, error, isLoading };
};

export default UseFetch;
