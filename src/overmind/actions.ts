import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTickers = async ({ effects, state }, limit: number, searchValue?: string) => {
  try {
    const cachedTickers = JSON.parse(await AsyncStorage.getItem('tickers'));
    if (state.tickers.length === 0 && cachedTickers && cachedTickers.length !== 0) {
      state.tickers = cachedTickers;
      return 'CACHED';
    } else {
      const response = await effects.api.fetchTickers(limit, searchValue);
      if (response) {
        state.tickers = response;

        await AsyncStorage.setItem('tickers', JSON.stringify(response));
      }
      return response;
    }
  } catch (error) {}
};
