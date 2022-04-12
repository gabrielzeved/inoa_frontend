export interface StockCandle {
  open: number[];
  close: number[];
  maximum: number[];
  minimum: number[];
  volume: number[];
  timestamp: number[];
}

export interface StockSearch {
  elements: StockSearchElement[];
}

export interface StockSearchElement {
  symbol: string;
  name: string;
}
