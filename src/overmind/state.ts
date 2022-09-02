export type Ticker = {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  primary_exchange: string;
  type: string;
  active: boolean;
  currency_name: string;
  cik: string;
  composite_figi: string;
  share_class_figi: string;
  last_updated_utc: string;
};

// type StockDetails = {

// }

type State = {
  tickers: Ticker[];
  //   stock: StockDetails;
};

export const state: State = {
  tickers: [],
  //   stock: null,
};
