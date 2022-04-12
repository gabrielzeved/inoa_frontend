import { useEffect, useState } from "react";
import InoaService from "../services/InoaService";
import { StockSearchElement } from "../typings/stock";
interface UseSearchProps {
  term: string;
}

const useSearch = ({ term }: UseSearchProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<StockSearchElement[]>([]);
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
