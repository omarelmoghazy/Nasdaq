import { Ticker } from './state';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EXTRA_STOCKS = 20;

interface LoadTickersQueryParams {
  searchValue: string;
  isCaching: boolean;
  newSearch?: boolean;
}

export const loadTickers = async (
  { effects, state },
  { searchValue, isCaching, newSearch }: LoadTickersQueryParams
) => {
  try {
    if (isCaching) {
      const cachedTickers = JSON.parse(await AsyncStorage.getItem('tickers'));
      if (cachedTickers !== null) {
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
