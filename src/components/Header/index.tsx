import { SearchContextProvider } from "../../contexts/SearchContext";
import SearchBar from "../SearchBar"

const Header = () => {
  return (
    <header className='main-header'>
      <SearchContextProvider>
        <SearchBar />
      </SearchContextProvider>
    </header>
  )
}

export default Header;