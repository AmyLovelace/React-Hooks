import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [fact, setFact] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  const getFetch = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const fact = await response.json();

      setFact(fact);
      setIsLoading(false);
      setHasError(null);
      console.log(fact);
    } catch (error) {
      setIsLoading(false);
      setHasError(error.message);
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    fact,
    isLoading,
    hasError,
  };
};
