import { createContext, Dispatch, useContext, useReducer, useState } from "react";

interface StockContextState{
  stock ?: {
    id: string
  }
}

interface StockContextAction{
  type: "SET_STOCK",
  payload: any
}

interface StockContextValues {
  stockContextState: StockContextState,
  stockContextDispatch: Dispatch<StockContextAction>
}

const initialValues : StockContextState = {
}

const StockContext = createContext<StockContextValues>({} as StockContextValues);

const stockContextReducer = (state : StockContextState, action: StockContextAction) => {
  const {type, payload} = action;
  
  switch(type){
    case "SET_STOCK":
      return {
        ...state
      }
  }

}

export const StockContextProvider : React.FC = ({
  children
}) => {

  const [stockContextState, stockContextDispatch] = useReducer(stockContextReducer, initialValues);

  const stockContextValues : StockContextValues = {
    stockContextState,
    stockContextDispatch
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