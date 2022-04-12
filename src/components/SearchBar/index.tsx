import { faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Ref, useRef, useState } from "react";
import DatePicker from "../DatePicker";
import Autocomplete from "./Autocomplete";

const SearchBar = () => {

  const [term, setTerm] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    setTerm((e.target as HTMLInputElement).value)
  }

  const handleInputFocus = () => setFocused(true)

  const handleInputBlur = () => setFocused(false)

  const isOpen = focused;

  return (
    <>
      <div className='searchbar-wrapper'>
        <input ref={inputRef} onFocus={handleInputFocus} onBlur={handleInputBlur} onChange={changeHandle} type="text" className='searchbar-input' />
        <DatePicker />
      </div>
      <Autocomplete inputRef={inputRef} term={term} open={isOpen} />
    </>
  )
}

export default SearchBar;