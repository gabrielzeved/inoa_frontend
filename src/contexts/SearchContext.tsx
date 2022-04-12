import { createContext, useContext, useState } from "react"

interface SearchState{
  term: string,
  selectedRange:DateRange,
  setTerm : React.Dispatch<React.SetStateAction<string>>,
  setSelectedRange : React.Dispatch<React.SetStateAction<DateRange>>
}

interface DateRange{
  from?: {
    day: number,
    month: number,
    year: number
  },
  to?: {
    day: number,
    month: number,
    year: number
  }
}

const SearchContext = createContext<SearchState>({} as SearchState);

export const SearchContextProvider : React.FC = ({
  children
}) => {

  const [term, setTerm] = useState<string>("");
  const [selectedRange, setSelectedRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });

  return (
    <SearchContext.Provider value={{
      term,
      selectedRange,
      setTerm,
      setSelectedRange
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error(
        "useStock must be used within a SearchContextProvider"
    );
  }
  return context;
}