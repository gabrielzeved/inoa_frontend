import { createContext, FC, useContext, useState } from "react";
import InoaService from "../services/InoaService";
import { StockCandle } from "../typings/stock";
import { useStockContext } from "./StockContext";

interface StockGraph{
  name: string,
  data?: StockCandle,
  loading: boolean
}

interface GraphState{
  graphs: StockGraph[],
  addGraph: (term: string) => void,
  removeGraph: (term: string) => void,
}

const GraphContext = createContext<GraphState>({} as GraphState);

export const GraphContextProvider : FC = ({children}) => {
  
  const [graphs, setGraphs] = useState<StockGraph[]>([])
  const {state: {date}} = useStockContext();

  const addGraph = async (term: string) => {

    if(graphs.some((item) => item.name === term)) return;

    setGraphs([...graphs, {
      data: {} as StockCandle,
      name: term,
      loading: true
    }])
   
    const data = await InoaService.stockCandle(term, date.from, date.to);
    setGraphs((prev: StockGraph[]) => {
      return [...prev.map((item) => {
        if(item.name === term){
          return {
            ...item,
            loading: false,
            data: data
          }
        }
        return item
      })]
    })
  }

  const removeGraph = (term: string) => {
    setGraphs(graphs.filter((item) => item.name !== term))
  }

  return (
    <GraphContext.Provider value={{
      graphs,
      addGraph,
      removeGraph
    }}>
      {children}
    </GraphContext.Provider>
  )
}

export const useGraphContext = () => {
  const context = useContext(GraphContext)
  if (!context) {
    throw new Error(
        "useGraphContext must be used within a GraphContextProvider"
    );
  }
  return context;
}
