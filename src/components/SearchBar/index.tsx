import { faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Autocomplete from "./Autocomplete";

const SearchBar = () => {

  const [term, setTerm] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  const changeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    setTerm((e.target as HTMLInputElement).value)
  }

  const handleInputFocus = () => setFocused(true)

  const handleInputBlur = () => setFocused(false)

  const isOpen = focused;

  return (
    <>
      <div className='searchbar-wrapper'>
        <input onFocus={handleInputFocus} onBlur={handleInputBlur} onChange={changeHandle} type="text" className='searchbar-input' />
        <FontAwesomeIcon className='searchbar-icon' icon={faMagnifyingGlass} />
      </div>
      <Autocomplete term={term} open={isOpen} />
    </>
  )
}

export default SearchBar;