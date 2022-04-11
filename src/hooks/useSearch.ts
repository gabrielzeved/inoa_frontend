import { useEffect, useState } from "react";
import InoaService from "../services/InoaService";

export interface SearchElement {
  symbol: string;
  name: string;
}

interface UseSearchProps {
  term: string;
}

const useSearch = ({ term }: UseSearchProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchElement[]>([]);
  const [timeout, setTimeout] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    window.clearTimeout(timeout);

    setTimeout(
      window.setTimeout(() => {
        InoaService.search(term)
          .then((data) => {
            setResults(data.elements);
          })
          .finally(() => setLoading(false));
      }, 500)
    );
  }, [term]);

  return { loading, results };
};

export default useSearch;
