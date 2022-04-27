import styles from "./styles.module.scss"
import Header from '../Header'
import StockTabLayout from "../StockTabLayout";
import StockCard, { StockCardProps } from "../StockCard";
import Graph from "../Graph";
import { StockContextProvider } from "../../contexts/StockContext";
import SelectedStocks from "../SelectedStocks";
import { GraphContextProvider } from "../../contexts/GraphContext";
import { SearchContextProvider } from "../../contexts/SearchContext";

const Layout = () => {
  return (
    <StockContextProvider>
      <GraphContextProvider>
        <Header />
        <section className='layout-section'>
          <section className='layout-graph'>
              <SearchContextProvider>
                <SelectedStocks />
                <Graph />
              </SearchContextProvider>
          </section>
        </section>
      </GraphContextProvider>
    </StockContextProvider>
  )
}

export default Layout;