import { Context } from './index';
import { Ticker } from './state';
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
