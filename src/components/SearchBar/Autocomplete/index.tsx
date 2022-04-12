import { useSearchContext } from "../../../contexts/SearchContext";
import useAutocomplete from "../../../hooks/useAutocomplete";
import { StockSearchElement } from "../../../typings/stock";
import Spinner from "../../Spinner";

interface AutocompleteProps {
  term: string,
  open: boolean,
  inputRef: React.RefObject<HTMLInputElement>
}

const Autocomplete = ({
  term,
  open,
  inputRef
} : AutocompleteProps) => {

  const {loading, results} = useAutocomplete({term});
  const {setTerm} = useSearchContext();

  const onSelect = (el : StockSearchElement) => {
    if(inputRef.current){
      inputRef.current.value = el.symbol
      setTerm(el.symbol);
    }
  }

  if(loading){
    return (
      <div className={`autocomplete-wrapper ${open ? 'autocomplete-wrapper--open' : ''}`}>
        <div className='autocomplete-container'>
          <Spinner />
        </div>
      </div>
    )
  }

  return (
    <div className={`autocomplete-wrapper ${open ? 'autocomplete-wrapper--open' : ''}`}>
      <div className='autocomplete-container'>
        <ul className='autocomplete-list'>
          
          {results && results.slice(0, 10).map((item) => {
            return (
              <li onClick={() => {onSelect(item)} }className='autocomplete-element'>
                <span className='autocomplete-symbol'>{item.symbol}</span>
                <span className='autocomplete-name'>{item.name}</span>
              </li>
            )
          })}

          {(!results || results.length <= 0) && 
            <span className='autocomplete-empty'>Não há resultados para sua pesquisa</span>
          }

        </ul>
      </div>  
    </div>
  )
}

export default Autocomplete;
