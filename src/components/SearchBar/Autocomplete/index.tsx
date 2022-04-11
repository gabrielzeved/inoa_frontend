import useSearch, { SearchElement } from "../../../hooks/useSearch";
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

  const {loading, results} = useSearch({term});

  const onSelect = (el : SearchElement) => {
    if(inputRef.current){
      inputRef.current.value = el.name
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
              <li onClick={() => {onSelect(item)} }className='autocomplete-element'>{item.name}</li>
            )
          })}
        </ul>
      </div>  
    </div>
  )
}

export default Autocomplete;
