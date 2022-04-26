import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import { useSearchContext } from "../../contexts/SearchContext";
import DatePicker from "../DatePicker";
import Autocomplete from "./Autocomplete";
import Button from "./Button";

interface SearchBarProps {
  onSelect: () => void,
  datePicker?: boolean,
  icon: IconDefinition
}

const SearchBar = ({
  onSelect,
  datePicker,
  icon
} : SearchBarProps) => {

  const {term, setTerm} = useSearchContext();
  const [focused, setFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    setTerm((e.target as HTMLInputElement).value || "")
  }

  const handleInputFocus = () => setFocused(true)

  const handleInputBlur = () => setFocused(false)

  const isOpen = focused;

  return (
      <div className='searchbar-wrapper'>
        <input ref={inputRef} onFocus={handleInputFocus} onBlur={handleInputBlur} onChange={changeHandle} type="text" className='searchbar-input' />
        {datePicker && <DatePicker />}
        <Button icon={icon} onSelect={onSelect} />
        <Autocomplete inputRef={inputRef} term={term} open={isOpen} />
      </div>
  )
}

export default SearchBar;