import React, { useState, useEffect } from "react";
import api from "../services/api";

const useDataApi = (initialURL, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialURL);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await api.get(url);

        setData(result.data);
      } catch {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};
