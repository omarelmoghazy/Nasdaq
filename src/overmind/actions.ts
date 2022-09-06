import { Context } from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EXTRA_STOCKS = 20;

interface LoadTickersQueryParams {
  searchValue: string;
  isCaching: boolean;
  newSearch?: boolean;
}

export const loadTickers = async (
  { effects, state }: Context,
  { searchValue, isCaching, newSearch }: LoadTickersQueryParams
) => {
  try {
    if (isCaching) {
      const cachedTickersJson = await AsyncStorage.getItem('tickers');
      if (cachedTickersJson !== null) {
        const cachedTickers = JSON.parse(cachedTickersJson);
        state.tickers = cachedTickers;
        return 'CACHED';
      }
    }
    const response = await effects.api.fetchTickers(
      newSearch ? EXTRA_STOCKS : state.tickers.length + EXTRA_STOCKS,
      searchValue
    );
    if (response) {
      state.tickers = response;
      if (searchValue === '') {
        await AsyncStorage.setItem('tickers', JSON.stringify(response));
      }
    }
    return response;
  } catch (error) {}
};

export const loadStockStatistics = async ({ effects, state }: Context, ticker: string) => {
  try {
    const response = await effects.api.fetchStockStatistics(ticker);
    if (response.results) {
      state.chosenStockStatistics = response.results[0];
    } else {
      state.chosenStockStatistics = null;
    }
    return response;
  } catch (error) {}
};

export const loadStockDetails = async ({ effects, state }: Context, ticker: string) => {
  try {
    const response = await effects.api.fetchStockDetails(ticker);
    if (response) {
      state.chosenStockDetails = response;
    }
    return response;
  } catch (error) {}
};

export const loadStockLogo = async ({ effects, state }: Context) => {
  try {
    if (state.chosenStockDetails?.branding && state.chosenStockDetails?.branding.icon_url) {
      const response = await effects.api.fetchStockLogo(
        state.chosenStockDetails?.branding.icon_url
      );
      if (response) {
        const data = await response.blob();
        state.chosenStockLogo = URL.createObjectURL(data);
      }
      return response;
    } else {
      state.chosenStockLogo = null;
      return 'NO LOGO';
    }
  } catch (error) {}
};
