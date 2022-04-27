import { createContext, FC, useContext, useEffect, useState } from "react";
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
  clearGraphs: () => void
}

const GraphContext = createContext<GraphState>({} as GraphState);

export const GraphContextProvider : FC = ({children}) => {
  
  const [graphs, setGraphs] = useState<StockGraph[]>([])
  const {state: {date, interval}} = useStockContext();

  const addGraph = async (term: string) => {
    if(graphs.some((item) => item.name === term)) return;

    setGraphs([...graphs, {
      data: {} as StockCandle,
      name: term,
      loading: true
    }])
   
    if(!date.from || !date.to)
      return;

    const data = await InoaService.stockCandle(term, date.from, date.to, interval);

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

  const reevaluateGraphs = async () => {
    let graphsCopy = [...graphs];
    graphsCopy = graphsCopy.map((item) => {
      return {
        ...item,
        loading: true
      }
    })

    setGraphs([...graphsCopy])

    graphsCopy = await Promise.all(graphsCopy.map(async (item) => {

      if(!date.from || !date.to)
        return item;

      const data = await InoaService.stockCandle(item.name, date.from, date.to, interval);
      return {
        ...item,
        loading: false,
        data: data
      } as StockGraph
    }))

    setGraphs([...graphsCopy]);
  }

  useEffect(() => {
    reevaluateGraphs();
  }, [date.from, date.to, interval])

  const removeGraph = (term: string) => {
    setGraphs(graphs.filter((item) => item.name !== term))
  }

  const clearGraphs = () => {
    setGraphs([]);
  }

  return (
    <GraphContext.Provider value={{
      graphs,
      addGraph,
      removeGraph,
      clearGraphs
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
