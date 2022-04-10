interface AutocompleteProps {
  term: string,
  open: boolean
}

const Autocomplete = ({
  term,
  open
} : AutocompleteProps) => {

  return (
    <div className={`autocomplete-wrapper ${open ? 'autocomplete-wrapper--open' : ''}`}>
      <div className='autocomplete-container'>
        <ul className='autocomplete-list'>
          <li className='autocomplete-element'> <b>Tes</b>te </li>
          <li className='autocomplete-element'> <b>Tes</b>te 2</li>
          <li className='autocomplete-element'> <b>Tes</b>te 3</li>
          <li className='autocomplete-element'> <b>Tes</b>te 4</li>
          <li className='autocomplete-element'> <b>Tes</b>te 5</li>
          <li className='autocomplete-element'> <b>Tes</b>te 6</li>
        </ul>
      </div>  
    </div>
  )

}

export default Autocomplete;