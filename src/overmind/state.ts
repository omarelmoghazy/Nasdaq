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

export type StockStatistics = null | {
  T: string;
  v: number;
  vw: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t: number;
  n: number;
};

type StockDetails = null | {
  sic_description: string;
  description: string;
  homepage_url: string;
  branding: { logo_url: string; icon_url: string };
};

type State = {
  tickers: Ticker[];
  chosenStockStatistics: StockStatistics;
  chosenStockDetails: StockDetails;
  chosenStockLogo: any;
};

export const state: State = {
  tickers: [],
  chosenStockStatistics: null,
  chosenStockDetails: null,
  chosenStockLogo: null,
};
