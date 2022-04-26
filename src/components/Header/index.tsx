import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchContextProvider, useSearchContext } from "../../contexts/SearchContext";
import { useStockContext } from "../../contexts/StockContext";
import SearchBar from "../SearchBar"

const SearchBarWrapper = () => {
  const {term, selectedRange} = useSearchContext();
  const {LoadStock, dispatch} = useStockContext();

  const handleClick = () => {
    if(term && selectedRange.from && selectedRange.to){
      const from = new Date(selectedRange.from.year, selectedRange.from.month - 1, selectedRange.from.day, 23, 59, 59, 0);
      const to = new Date(selectedRange.to.year, selectedRange.to.month - 1, selectedRange.to.day, 23,59,59, 0);
      LoadStock(term, from, to);
      dispatch({
        type: "SET_DATE",
        value: {
          from,
          to
        }
      })
    }
  }
  return <SearchBar icon={faMagnifyingGlass} datePicker onSelect={handleClick} />
}

const Header = () => {
   return (
    <header className='main-header'>
      <SearchContextProvider>
        <SearchBarWrapper />
      </SearchContextProvider>
    </header>
  )
}

export default Header;