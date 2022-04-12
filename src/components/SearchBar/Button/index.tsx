import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSearchContext } from "../../../contexts/SearchContext"
import { useStockContext } from "../../../contexts/StockContext";

const Button = () => {

  const {term, selectedRange} = useSearchContext();
  const {LoadStock} = useStockContext();

  const handleClick = () => {
    if(term && selectedRange.from && selectedRange.to){
      const from = new Date(selectedRange.from.year, selectedRange.from.month - 1, selectedRange.from.day, 0, 0, 0, 0);
      const to = new Date(selectedRange.from.year, selectedRange.from.month - 1, selectedRange.from.day, 23,59,59, 0);
      LoadStock(term, from, to);
    }
  }

  return (
    <div onClick={handleClick} className="searchbar-button">
      <FontAwesomeIcon className='searchbar-icon' icon={faMagnifyingGlass} />
    </div>
  )

}

export default Button