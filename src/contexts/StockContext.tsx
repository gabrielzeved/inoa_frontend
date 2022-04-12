import { createContext, Dispatch, useContext, useReducer, useState } from "react";
import InoaService from "../services/InoaService";
import { StockCandle } from "../typings/stock";

interface StockContextState{
  loading: boolean,
  stockInfo ?: {
    candle: StockCandle
  }
}

type StockContextAction = {
  type: "SET_LOADING",
  value: boolean
} | {
  type: "SET_STOCK_CANDLE",
  value: StockCandle
}

interface StockContextValues {
  state: StockContextState,
  dispatch: Dispatch<StockContextAction>
  LoadStock: (symbol: string, from: Date, to: Date) => void
}

const initialValues : StockContextState = {
  loading: false,
  stockInfo: undefined
}

const StockContext = createContext<StockContextValues>({} as StockContextValues);

const stockContextReducer = (state : StockContextState, action: StockContextAction) : StockContextState => {
  const {type, value} = action;
  
  switch(type){
    case "SET_STOCK_CANDLE":
      return {
        ...state,
        stockInfo:{
          candle: action.value
        }
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: action.value
      }
    default:
      return {
        ...state
      }
  }

}

export const StockContextProvider : React.FC = ({
  children
}) => {

  const [state, dispatch] = useReducer(stockContextReducer, initialValues);

  const LoadStock = async (symbol: string, from: Date, to: Date) => {
    dispatch({type: "SET_LOADING", value: true})
    const data = await InoaService.stockCandle(symbol, from, to) as StockCandle;
    dispatch({type: "SET_STOCK_CANDLE", value: data})
    dispatch({type: "SET_LOADING", value: false})
  }

  const stockContextValues : StockContextValues = {
    state,
    dispatch,
    LoadStock
  }
  
  return (
    <StockContext.Provider value={stockContextValues}>
      {children}
    </StockContext.Provider>
  )
}

export const useStockContext = () => {
  const context = useContext(StockContext)
  if (!context) {
    throw new Error(
        "useStock must be used within a StockContextProvider"
    );
  }
  return context;
}