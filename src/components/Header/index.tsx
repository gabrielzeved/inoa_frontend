import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useGraphContext } from "../../contexts/GraphContext";
import { SearchContextProvider, useSearchContext } from "../../contexts/SearchContext";
import { useStockContext } from "../../contexts/StockContext";
import { useToastContext } from "../../contexts/ToastContext";
import SearchBar from "../SearchBar"

const SearchBarWrapper = () => {
  const {term, selectedRange} = useSearchContext();
  const {dispatch, state: {date}} = useStockContext();
  const {addGraph} = useGraphContext();
  const {showToast} = useToastContext();

  const handleClick = () => {
    if(term && selectedRange.from && selectedRange.to){
      const from = new Date(selectedRange.from.year, selectedRange.from.month - 1, selectedRange.from.day, 0, 0, 0, 0);
      const to = new Date(selectedRange.to.year, selectedRange.to.month - 1, selectedRange.to.day, 0,0,0, 0);
      
      if(date.from !== from || date.to !== to){
        dispatch({
          type: "SET_DATE",
          value: {
            from,
            to
          }
        })
      }

      addGraph(term);
    }else{
      showToast('Por favor, preencha todos os campos', 'danger', 4000);
    }
  }
  return <SearchBar icon={faPlus} datePicker onSelect={handleClick} />
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